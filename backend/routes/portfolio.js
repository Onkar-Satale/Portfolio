import express from 'express';
import { 
  About, Link, ProjectCategory, Project, SkillCategory, 
  Experience, Education, Term, Message 
} from '../models/Portfolio.js';

const router = express.Router();

// Get About
router.get('/about', async (req, res) => {
  try {
    // Return first document as there's only one about section
    const about = await About.findOne();
    res.json(about || {});
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get Links
router.get('/links', async (req, res) => {
  try {
    const links = await Link.find();
    res.json(links);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get Projects (with filters)
router.get('/projects', async (req, res) => {
  try {
    const { categoryId, name, page = 1, limit = 6 } = req.query;
    let query = {};
    
    if (categoryId && categoryId !== 'all') {
      // Find category by name if ID was passed as string (from UI map)
      // or directly use if it's Object ID. In previous setup, it filtered by frontend.
      // Usually categories are ID, but let's handle if it's name.
      const category = await ProjectCategory.findOne({ name: new RegExp(categoryId, 'i') });
      if (category) {
        query.categoryId = category._id;
      }
    }
    
    if (name) {
      query.title = { $regex: name, $options: 'i' };
    }

    const total = await Project.countDocuments(query);
    const projects = await Project.find(query)
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));
      
    res.json({
        data: projects,
        pagination: {
            total,
            page: Number(page),
            pages: Math.ceil(total / Number(limit))
        }
    });

  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get Recent Projects
router.get('/projects/recent', async (req, res) => {
  try {
    const limit = Math.min(parseInt(req.query.limit) || 3, 10);
    const projects = await Project.find().sort({ createdAt: -1 }).limit(limit);
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get Single Project
router.get('/projects/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if(!project) return res.status(404).json({error: "Project not found"});
        res.json(project);
    } catch(err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get Project Categories
router.get('/project-categories', async (req, res) => {
  try {
    const categories = await ProjectCategory.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get Skill Categories
router.get('/skill-categories', async (req, res) => {
  try {
    const categories = await SkillCategory.find().sort({ order: 1 });
    // Also include skills inside categories which is already done by schema.
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get Experiences
router.get('/experiences', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ order: 1, startDate: -1 });
    res.json({ message: "Fetched successfully", data: experiences });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get Education
router.get('/education', async (req, res) => {
  try {
    const education = await Education.find().sort({ order: 1, startDate: -1 });
    res.json({ message: "Fetched successfully", data: education });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get Terms
router.get('/terms', async (req, res) => {
  try {
    const terms = await Term.find().sort({ order: 1 });
    res.json({ message: "Terms loaded successfully", data: terms });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Post Message (from contact form to DB)
router.post('/messages', async (req, res) => {
  try {
    const { message, uid, email } = req.body;
    const newMessage = new Message({
      message, uid, email
    });
    await newMessage.save();
    res.json({ success: true, message: 'Message saved' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
