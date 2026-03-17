export interface Project {
  id: string;
  name: string;
  category: { id: string; name: string };
  shortDescription: string;
  longDescription?: string;
  projectImage?: string; // Project image mapping vs image
  tags: string[];
  members: any[];
  liveLink?: string | null;
  githubLink?: string | null;
  featured?: boolean;
  startDate?: string;
  endDate?: string | null;
}

const STATIC_CATEGORIES = [
  { id: "all", name: "All" },
  { id: "mern-genai", name: "MERN + GenAI", _id: "mern-genai" },
  { id: "webapp", name: "Web App", _id: "webapp" }
] as any;

const STATIC_PROJECTS: Project[] = [
  {
    id: "packmate",
    name: "PackMate: AI-Powered Travel Assistant",
    category: { id: "mern-genai", name: "MERN + GenAI" },
    shortDescription: "AI-driven web application to plan trips and generate optimal packing lists using Llama 3.",
    longDescription: "<h3>What is it?</h3><p>PackMate is a comprehensive, AI-driven web application designed to help travelers effortlessly plan trips, manage itineraries, and automatically generate highly optimized packing lists using Generative AI. It analyzes live weather, trip duration, and planned activities to provide tailored recommendations.</p><br/><h3>Why did we build this?</h3><p>Planning a trip can often be overwhelming, especially when trying to pack appropriately for unpredictable weather or specialized activities. PackMate was built to eliminate the stress of manual packing lists by leveraging the intelligence of advanced Large Language Models, allowing users to focus entirely on enjoying their travel experience.</p><br/><h3>Tech Stack Used</h3><ul><li><strong>Frontend:</strong> React, Custom CSS</li><li><strong>Backend:</strong> Node.js, Express</li><li><strong>Database:</strong> MongoDB</li><li><strong>AI Integration:</strong> Groq API (Llama 3) for generative capabilities</li><li><strong>Authentication:</strong> JWT and bcrypt</li></ul><br/><h3>Key Features</h3><ul><li>Secure user signup and login using JWT.</li><li>Comprehensive trip management functionality including destination, dates, travel mode, and budget tracking.</li><li>GenAI Packing Assistant that analyzes trip parameters to generate categorized lists.</li><li>Export generated lists instantly to DOCX format for offline use.</li></ul>",
    projectImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    tags: ["React", "Node.js", "GenAI", "MongoDB", "Express", "Python", "FastAPI", "Groq API"],
    members: [],
    liveLink: "https://packmatefrontend.vercel.app",
    githubLink: "https://github.com/Onkar-Satale/Packmate_genai_mern-project", // Fallback generated
    featured: true,
    startDate: "2025-08-01",
    endDate: "2026-01-01"
  },
  {
    id: "swiftapi",
    name: "Swift API - Smart API Testing Tool",
    category: { id: "mern-genai", name: "MERN + GenAI" },
    shortDescription: "MERN stack tool offering simplified API testing capabilities similar to Postman, now with an AI Debugging Assistant.",
    longDescription: `<h3>Swift API – Smart API Testing and Development Tool</h3>
<p>Swift API is a full-stack web application designed to streamline API testing and development. It allows developers to send requests, view responses, manage API workflows, and now includes an AI-powered debugging assistant that helps identify and explain API errors.</p>
<p>The platform combines developer productivity tools with intelligent assistance, making API development faster and easier.</p>
<br/>
<h3>✨ Features</h3>
<ul>
<li><strong>📨 Send HTTP Requests:</strong> Send API requests using GET, POST, PUT, DELETE methods with custom headers and body.</li>
<li><strong>📚 Request History:</strong> Automatically saves previously sent requests so developers can reuse them quickly.</li>
<li><strong>🗂️ Collections Management:</strong> Organize APIs into collections to structure testing workflows.</li>
<li><strong>✨ JSON Syntax Highlighting:</strong> Pretty formatted JSON responses for easy debugging and readability.</li>
<li><strong>🔒 Authentication Support:</strong> Supports JWT tokens and Bearer authentication for secured API testing.</li>
<li><strong>🖥️ Modern Developer Interface:</strong> Clean and responsive frontend built with React for an intuitive experience.</li>
<li><strong>⚡ Fast Backend Architecture:</strong> Powered by Node.js and Express.js for efficient request processing.</li>
<li><strong>💾 Persistent Storage:</strong> Uses MongoDB to store request history, collections, and user data.</li>
<li><strong>👥 Multi-User Support:</strong> Developers can register and log in securely to manage their personal API workflows.</li>
<li><strong>🔧 Extendable Developer Tool:</strong> The architecture is designed so developers can easily add new API testing utilities.</li>
</ul>
<br/>
<h3>🤖 NEW: AI-Powered API Debugging Assistant</h3>
<p>Swift API now includes an AI debugging assistant powered by GenAI using the Groq API and Python FastAPI backend. This intelligent assistant helps developers quickly understand and fix API errors during testing.</p>
<h4>🧠 AI Assistant Capabilities</h4>
<ul>
<li><strong>🔍 Root Cause Analysis:</strong> Analyzes API errors and suggests the possible reason behind the failure.</li>
<li><strong>📖 Simple Error Explanation:</strong> Converts complex backend error messages into developer-friendly explanations.</li>
<li><strong>🛠️ Suggested Fixes:</strong> Provides guidance on how to resolve API issues.</li>
<li><strong>⚡ Faster Debugging Workflow:</strong> Reduces time spent searching documentation or StackOverflow.</li>
<li><strong>💬 Interactive AI Help Button:</strong> Developers can click the AI Help button when an error occurs and receive intelligent insights.</li>
</ul>
<br/>
<h4>AI Backend Architecture</h4>
<p>Frontend (React) ⬇ Node.js Express Backend ⬇ Python FastAPI AI Service ⬇ Groq LLM API</p>
<p>This architecture allows the system to analyze errors and generate smart responses using large language models.</p>
<br/>
<h3>🧠 Tech Stack</h3>
<ul>
<li><strong>Frontend:</strong> React, JavaScript, HTML, CSS, CSS Modules</li>
<li><strong>Backend:</strong> Node.js, Express.js</li>
<li><strong>AI Service:</strong> Python, FastAPI, Groq API (LLM Integration)</li>
<li><strong>Database:</strong> MongoDB</li>
<li><strong>Authentication:</strong> JWT (JSON Web Token)</li>
<li><strong>Development Tools:</strong> Node.js, npm, Postman, VS Code</li>
</ul>`,
    projectImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["React", "GenAI", "Node.js", "MongoDB", "CSS Modules", "Express", "Python", "FastAPI", "Groq API"],
    members: [],
    liveLink: "https://swift-api-iota.vercel.app/",
    githubLink: "https://github.com/Onkar-Satale/Swift_API_mern-",
    featured: true,
    startDate: "2025-12-01",
    endDate: "2026-01-01"
  }, {
    id: "academic-portal",
    name: "Academic Engagement Portal",
    category: { id: "all", name: "Web App" },
    shortDescription: "A full-stack, SQL-backed web portal for academic interactions.",
    longDescription: "<h3>What is it?</h3><p>The Academic Engagement Portal is a comprehensive web application designed to facilitate seamless interaction and engagement within an academic environment. It provides a structured platform for managing users, courses, and educational assets.</p><br/><h3>Why did we build this?</h3><p>Educational institutions often struggle with fragmented communication and resource systems. This portal was developed to centralize academic engagements, leveraging a robust relational database backend to ensure structural integrity across varied entities like users, roles, and subjects.</p><br/><h3>Tech Stack</h3><ul><li><strong>Frontend:</strong> React</li><li><strong>Backend:</strong> Node.js, Express.js</li><li><strong>Database:</strong> SQL (Relational)</li></ul><br/><h3>Key Features</h3><ul><li>Streamlined platform for academic interactions and announcements.</li><li>Robust relational database schema for managing complex user relationships and coursework.</li><li>Secure and scalable architecture built with Node.js and Express.</li></ul>",
    projectImage: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&q=80",
    tags: ["React", "Node.js", "Full Stack", "CSS Modules", "Express", "SQL"],
    members: [],
    liveLink: "https://academic-engagement-portal-q9rw.vercel.app/",
    githubLink: "https://github.com/Onkar-Satale/Academic-Engagement-Portal",
    featured: true,
    startDate: "2024-01-01",
    endDate: "2024-05-01"
  }
];

export const getProjectCategories = async () => {
  return Promise.resolve(STATIC_CATEGORIES);
};

export const getRecentProjects = async () => {
  return Promise.resolve(STATIC_PROJECTS.slice(0, 3));
};

export const getProjects = async ({ page = 1, limit = 6, categoryId, name }: {
  page: number;
  limit: number;
  categoryId?: string;
  name?: string;
}) => {
  let filtered = STATIC_PROJECTS;
  if (categoryId && categoryId !== "all") {
    filtered = filtered.filter(p => p.category.id === categoryId);
  }
  if (name) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  }

  // Fake pagination
  const startIndex = (page - 1) * limit;
  const paginated = filtered.slice(startIndex, startIndex + limit);

  return Promise.resolve({
    data: paginated,
    totalPages: Math.ceil(filtered.length / limit),
    currentPage: page,
    totalCount: filtered.length
  });
};

export const getProjectById = async (id: string) => {
  const project = STATIC_PROJECTS.find(p => p.id === id);
  if (!project) throw new Error("Project not found");
  return Promise.resolve(project);
};