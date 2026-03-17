import mongoose from 'mongoose';

const AboutSchema = new mongoose.Schema({
  name: String,
  roles: [String],
  description: String,
  image: String,
  cv: String
});
export const About = mongoose.model('About', AboutSchema);

const LinkSchema = new mongoose.Schema({
  type: String,
  url: String
});
export const Link = mongoose.model('Link', LinkSchema);

const ProjectCategorySchema = new mongoose.Schema({
  name: String
});
export const ProjectCategory = mongoose.model('ProjectCategory', ProjectCategorySchema);

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  link: String,
  github: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProjectCategory' },
  technologies: [String],
  createdAt: { type: Date, default: Date.now }
});
export const Project = mongoose.model('Project', ProjectSchema);

const SkillSchema = new mongoose.Schema({
  name: String,
  iconKey: String,
  image: String,
});
export const Skill = mongoose.model('Skill', SkillSchema);

const SkillCategorySchema = new mongoose.Schema({
  name: String,
  order: Number,
  skills: [SkillSchema], // embedded array
});
export const SkillCategory = mongoose.model('SkillCategory', SkillCategorySchema);

const ExperienceSchema = new mongoose.Schema({
  logo: String,
  role: String,
  companyName: String,
  companyLink: String,
  startDate: String,
  endDate: String,
  description: String,
  skills: [String],
  type: { type: String, default: 'experience' },
  order: Number
});
export const Experience = mongoose.model('Experience', ExperienceSchema);

const EducationSchema = new mongoose.Schema({
  courseName: String,
  description: String,
  startDate: String,
  endDate: String,
  institutionName: String,
  institutionLink: String,
  logo: String,
  type: { type: String, default: 'education' },
  order: Number
});
export const Education = mongoose.model('Education', EducationSchema);

const TermSchema = new mongoose.Schema({
  title: String,
  content: String,
  imagePath: String,
  order: Number
});
export const Term = mongoose.model('Term', TermSchema);

const MessageSchema = new mongoose.Schema({
  uid: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
export const Message = mongoose.model('Message', MessageSchema);
