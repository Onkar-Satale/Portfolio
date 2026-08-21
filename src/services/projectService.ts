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
    name: "PackMate – AI-Powered Smart Travel & Packing Assistant",
    category: { id: "mern-genai", name: "MERN + GenAI" },
    shortDescription: "An enterprise-grade, full-stack AI travel management platform featuring weather-conscious packing list generation via Groq LLM, Vision AI suitcase scanning, RAG travel advisory chat with ChromaDB, trip journaling, and streaming .docx export.",
    longDescription: `<h3>About the Project</h3>
<p>
<strong>PackMate</strong> is an enterprise-grade, full-stack AI travel companion engineered using a decoupled microservices architecture. It provides intelligent, weather-conscious packing generation, Vision AI suitcase reconciliation, RAG-based travel advisory chat with ChromaDB vector search over airline PDF guides, trip journaling, photo storage via Cloudinary CDN, and streaming .docx exports.
</p>

<br/>

<h3>Key Features</h3>
<ul>
  <li><strong>Context-Aware AI Packing Assistant:</strong> Generates tailored, weather-aware packing lists based on destination, duration, activities, party size, and luggage limits using Groq LLM (Llama 3).</li>
  <li><strong>Vision AI Suitcase Scanner:</strong> One-click image analysis of packed or unpacked suitcases using Vision LLM to automatically reconcile items against packing checklists.</li>
  <li><strong>RAG Travel Advisor Chatbot:</strong> Knowledge-base retrieval engine powered by ChromaDB vector search and local travel guide PDFs, delivering precise, hallucination-free travel advice.</li>
  <li><strong>Live Weather Forecasting:</strong> Integrated OpenCage Geocoding API to dynamically adjust clothing and essential recommendations to real-time climate conditions.</li>
  <li><strong>Comprehensive Trip CRUD & Journaling:</strong> End-to-end trip itinerary management, custom packing checkboxes, traveler lists, and personal travel notes.</li>
  <li><strong>Cloud Photo Storage:</strong> Seamless trip photo upload and memory storage integrated with Cloudinary CDN.</li>
  <li><strong>Streaming DOCX Export:</strong> Instant packing list download formatted as interactive Microsoft Word (.docx) documents.</li>
  <li><strong>Enterprise Security:</strong> Stateless JWT authentication with access/refresh token rotation, bcrypt password hashing, and express-rate-limit protection.</li>
</ul>

<br/>

<h3>Tech Stack</h3>
<ul>
  <li><strong>Frontend:</strong> React 18, React Router v6, Axios, Custom CSS3</li>
  <li><strong>Primary Backend:</strong> Node.js (ESM), Express.js, Mongoose ODM, Winston</li>
  <li><strong>AI Microservice:</strong> Python 3.10+, FastAPI, Uvicorn, Groq SDK (Llama 3)</li>
  <li><strong>Vector Database:</strong> ChromaDB, HuggingFace Sentence Transformers (12 Travel Guide PDFs)</li>
  <li><strong>Database & Media:</strong> MongoDB Atlas, Cloudinary CDN</li>
  <li><strong>External APIs:</strong> OpenCage Geocoding API, Groq Cloud API</li>
  <li><strong>Deployment:</strong> Vercel (Frontend), Render (Backend & AI Microservice), Docker</li>
</ul>

<br/>

<h3>System Architecture</h3>
<ul>
  <li>Decoupled microservices architecture separating Express API Gateway from high-compute Python AI workloads</li>
  <li>Sub-second RAG retrieval pipeline querying embedded vector stores for verified airline rules</li>
  <li>Asynchronous Groq LLM inference pipeline with temperature-tuned generation prompts</li>
</ul>`,
    projectImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    tags: ["React 18", "Node.js", "Express.js", "FastAPI", "Python", "Groq LLM", "ChromaDB", "RAG", "Vision AI", "MongoDB", "GenAI", "JWT Auth", "Cloudinary"],
    members: [],
    liveLink: "https://packmatefrontend.vercel.app/",
    githubLink: "https://github.com/Onkar-Satale/Packmate",
    featured: true,
    startDate: "2025-08-01",
    endDate: "2026-01-01"
  },
  {
    id: "swiftapi",
    name: "Swift API – Smart API Testing & AI Debugging Platform",
    category: { id: "mern-genai", name: "MERN + GenAI" },
    shortDescription: "A modern, full-stack API client and developer productivity platform featuring multi-method HTTP testing, request collections, history persistence, and a Python FastAPI + Groq LLM assistant for automated error root-cause diagnosis.",
    longDescription: `<h3>About the Project</h3>
<p>
<strong>Swift API</strong> is a modern, lightweight, full-stack API client and developer productivity tool built as an intelligent alternative to Postman. Designed using a decoupled microservices architecture, Swift API delivers high-throughput HTTP testing, collection workflows, and an automated AI error debugging assistant driven by Groq LLM and Python FastAPI.
</p>

<br/>

<h3>Key Features</h3>
<ul>
  <li><strong>Multi-Method Request Engine:</strong> Execute GET, POST, PUT, DELETE, and PATCH requests with custom key-value headers, query parameters, and JSON/Form payload support.</li>
  <li><strong>AI-Powered Error Debugger:</strong> One-click intelligent root cause analysis on HTTP error responses (4xx, 5xx), generating actionable fix suggestions powered by Groq LLM (Llama 3) and a dedicated FastAPI microservice.</li>
  <li><strong>Persistent Request History:</strong> Automatically logs all executed API calls in MongoDB for instant recall, inspection, and re-testing.</li>
  <li><strong>Collections & Workflows:</strong> Group related endpoints into structured collections for organized testing and multi-step API workflows.</li>
  <li><strong>Secure JWT Authentication:</strong> Token-based authentication featuring access/refresh token rotation and secure HTTP-only cookies.</li>
  <li><strong>JSON Formatter & Code Editor:</strong> Formatted JSON response viewer with syntax highlighting and integrated Ace editor capabilities.</li>
  <li><strong>Security Hardening & Rate Limiting:</strong> Express rate limiting, Helmet security headers, CORS allowlisting, and secure inter-service API keys.</li>
</ul>

<br/>

<h3>Tech Stack</h3>
<ul>
  <li><strong>Frontend:</strong> React 18, React Router v7, Ace Editor, CSS Modules</li>
  <li><strong>Primary Backend:</strong> Node.js (ESM), Express.js, Mongoose, Winston</li>
  <li><strong>AI Microservice:</strong> Python 3.10+, FastAPI, Uvicorn, Groq SDK (Llama 3)</li>
  <li><strong>Database:</strong> MongoDB / MongoDB Atlas</li>
  <li><strong>Security & DevOps:</strong> JWT Auth, bcryptjs, Helmet, Express Rate Limit, Docker, Vercel, Render</li>
</ul>

<br/>

<h3>System Architecture</h3>
<ul>
  <li>Decoupled microservices architecture separating client requests from AI compute workloads</li>
  <li>High-throughput Express proxy gateway handling target API calls with error boundary capture</li>
  <li>Asynchronous Groq LLM inference pipeline delivering sub-second error explanations</li>
</ul>`,
    projectImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["React 18", "Node.js", "Express.js", "FastAPI", "Python", "Groq LLM", "MongoDB", "GenAI", "JWT Auth", "REST APIs"],
    members: [],
    liveLink: "https://swift-api-iota.vercel.app/",
    githubLink: "https://github.com/Onkar-Satale/Swift_API_mern-",
    featured: true,
    startDate: "2025-12-01",
    endDate: "2026-01-01"
  },
  {
    id: "academic-portal",
    name: "Academic Engagement Portal",
    category: { id: "webapp", name: "Web App" },
    shortDescription: "A full-stack campus engagement and institutional governance platform featuring a 3-tier sequential permission workflow, 7 RBAC roles, single-chair executive management, and real-time in-app notifications.",
    longDescription: `<h3>About the Project</h3>
<p>
<strong>Academic Engagement Portal</strong> is a production-ready, full-stack campus engagement and institutional governance platform engineered for colleges and universities. It digitizes club operations, event administration, and institutional permissions through a 3-tier sequential approval pipeline across campus leadership.
</p>

<br/>

<h3>Key Features</h3>
<ul>
  <li><strong>3-Tier Hierarchical Approval Pipeline:</strong> Sequential permission review through Club Mentor (Level 1), Estate Manager (Level 2), and Principal (Level 3) with audit remarks, rejection edit & resubmit, and automated public event publishing upon final sanction.</li>
  <li><strong>Role-Based Access Control (RBAC) & 7 Distinct Roles:</strong> Strict career-track boundary checks isolating the Student Track (Student, Club Head) and Faculty Track (Teacher, Mentor, Estate Manager, Principal, Admin) to prevent privilege escalation.</li>
  <li><strong>Single-Chair Executive Management:</strong> Dynamic seat reallocation for single-holder executive chairs (Principal, Estate Manager, Admin) with automatic role handoff and transition alerts.</li>
  <li><strong>Club Ecosystem & Membership Lifecycle:</strong> Categorized club directory with join applications, statement evaluations, and student enrollment dashboard.</li>
  <li><strong>Event Lifecycle & RSVP System:</strong> Centralized event catalog, one-click duplicate-free student RSVP registrations, and personalized event schedules.</li>
  <li><strong>Real-Time Notification Engine:</strong> Instant in-app notifications with read/unread tracking, counter badges, and deep-linking to review dashboards.</li>
  <li><strong>Enterprise-Grade Security:</strong> Stateless JWT authentication with access/refresh rotation, bcryptjs hashing, RFC email validation with typo detection, helmet, rate limiting, and parameterized SQL queries.</li>
</ul>

<br/>

<h3>Tech Stack</h3>
<ul>
  <li><strong>Frontend:</strong> React 19, React Router v7, Vite 6, Axios, React Toastify</li>
  <li><strong>Backend:</strong> Node.js (ESM), Express.js, Express Validator, Helmet</li>
  <li><strong>Database:</strong> MySQL Server 8.0+ (Relational Schema with Foreign Keys & Indexing)</li>
  <li><strong>Authentication:</strong> JWT Access/Refresh Token Rotation, bcryptjs</li>
  <li><strong>Deployment:</strong> Vercel (Frontend), Render (Backend)</li>
</ul>

<br/>

<h3>Project Highlights</h3>
<ul>
  <li>Complex institutional multi-tier sequential workflow with full audit logging</li>
  <li>Strict architectural separation preventing student/faculty privilege escalation</li>
  <li>Scalable relational database schema optimized with indexing and cascading constraints</li>
</ul>`,
    projectImage: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&q=80",
    tags: ["React 19", "Node.js", "Express.js", "MySQL", "JWT Auth", "RBAC", "Vite 6", "REST APIs", "Web App"],
    members: [],
    liveLink: "https://academic-engagement-portal-kappa.vercel.app/",
    githubLink: "https://github.com/Onkar-Satale/Academic_Engagement_Portal",
    featured: true,
    startDate: "2026-01-01",
    endDate: "2026-02-10"
  },
  {
    id: "shivmala-foundation",
    name: "Shivmala Foundation",
    category: { id: "webapp", name: "Web App" },
    shortDescription: "An official MERN platform for Shivmala Foundation featuring dynamic campaign showcases, an automated media gallery with lightbox, nested project navigation, and an integrated AI chatbot.",
    longDescription: `<h3>About the Project</h3>
<p>
The official digital platform for <strong>Shivmala Foundation</strong>, dedicated to driving positive community impact by showcasing social initiatives, active campaigns, categorized media, and seamless community engagement. The platform blends rich aesthetics, smooth zoom animations, glassmorphism, and an integrated AI assistant.
</p>

<br/>

<h3>Key Features</h3>
<ul>
  <li><strong>Dynamic Hero Section & Carousel:</strong> Visually engaging hero area with smooth zoom animations and transitions to captivate visitors.</li>
  <li><strong>Campaign & Causes Showcase:</strong> Rich details and modern animated cards highlighting active and past social initiatives.</li>
  <li><strong>Categorized Media Gallery:</strong> Automated, immersive media gallery featuring full-screen lightbox viewing for high-resolution photos and videos.</li>
  <li><strong>Nested Projects Navigation:</strong> Multi-level dropdowns and accordions for organized browsing of ongoing initiatives.</li>
  <li><strong>Integrated AI Chatbot:</strong> Interactive assistant with graceful session handling and state management for visitor inquiries.</li>
  <li><strong>Fully Responsive:</strong> Optimized for seamless performance across desktop, tablet, and mobile devices.</li>
</ul>

<br/>

<h3>Tech Stack</h3>
<ul>
  <li><strong>Frontend:</strong> React.js, Vanilla CSS Keyframes & Glassmorphism</li>
  <li><strong>Backend & Database:</strong> Node.js, Express.js, MongoDB (MERN Stack)</li>
  <li><strong>AI Integration:</strong> AI Chatbot with Session State Management</li>
  <li><strong>Deployment:</strong> Vercel (Frontend), Render (Backend)</li>
</ul>

<br/>

<h3>Project Highlights</h3>
<ul>
  <li>Clean, scalable full-stack MERN architecture with modular component structure</li>
  <li>Rich aesthetic design with custom color palettes and dynamic micro-animations</li>
  <li>Real-world NGO use case driving community outreach and transparent impact reporting</li>
</ul>`,
    projectImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "AI Chatbot", "MERN Stack", "Web3Forms API", "Web App"],
    members: [],
    liveLink: "https://shivmalafoundation.vercel.app/",
    githubLink: "https://github.com/Onkar-Satale/Shivmala_Foundation",
    featured: false,
    startDate: "2025-10-01",
    endDate: "2026-01-15"
  },
  {
    id: "portfolio-website",
    name: "Portfolio Website – Developer Showcase",
    category: { id: "webapp", name: "Web App" },
    shortDescription: "A modern, high-performance personal portfolio web application built using React, TypeScript, Tailwind CSS, and Web3Forms API to showcase full-stack projects and technical skills.",
    longDescription: `<h3>About the Project</h3>
<p>
A modern, fully responsive personal portfolio web application built using <strong>React, TypeScript, Vite, and Tailwind CSS</strong>. This project showcases my technical skills, software engineering projects, and academic/professional journey through a dynamic, interactive, and visually stunning user interface.
</p>

<br/>

<h3>Key Features</h3>
<ul>
  <li><strong>Fully Responsive Modern UI:</strong> Clean layout optimized for mobile, tablet, and desktop screens with seamless navigation.</li>
  <li><strong>Dark / Light Mode Support:</strong> Seamless theme switching with persistent user preference storage.</li>
  <li><strong>Dynamic Project Showcase:</strong> Detailed case study views with live demo links, source code repositories, and technology breakdowns.</li>
  <li><strong>Interactive Contact System:</strong> Integrated contact form powered by Web3Forms API with real-time submission feedback.</li>
  <li><strong>Skills & Journey Timeline:</strong> Categorized technology pills and an interactive dual-tab (Experience & Education) timeline with smooth hover switching.</li>
  <li><strong>Modern Typography & Micro-Animations:</strong> Space Grotesk headings, interactive cursor spotlight glow, and scroll progress tracking.</li>
  <li><strong>Toast Notifications:</strong> Theme-aware toast feedback for actions such as message submission.</li>
  <li><strong>Optimized Performance:</strong> Lightning-fast build tooling and page loads powered by Vite.</li>
</ul>

<br/>

<h3>Tech Stack</h3>
<ul>
  <li><strong>Frontend:</strong> React 19, TypeScript, Framer Motion</li>
  <li><strong>Styling:</strong> Tailwind CSS 4, Vanilla CSS Keyframes</li>
  <li><strong>Build Tool:</strong> Vite</li>
  <li><strong>API & Services:</strong> Web3Forms API, React Hot Toast, TanStack React Query</li>
</ul>

<br/>

<h3>Future Roadmap</h3>
<ul>
  <li>AI Chatbot Assistant integration for instant interactive inquiries</li>
  <li>Visitor analytics dashboard with interactive performance metrics</li>
  <li>Progressive Web App (PWA) offline support</li>
</ul>`,
    projectImage: "/social-preview.png",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Web3Forms API", "Web App"],
    members: [],
    liveLink: "https://portfolio-mu-one-n3zkisj3jp.vercel.app/",
    githubLink: "https://github.com/Onkar-Satale/Portfolio",
    featured: false,
    startDate: "2025-06-01",
    endDate: "2026-02-22"
  },
  {
    id: "mcu-doomsday-clock",
    name: "MCU Doomsday Clock",
    category: { id: "webapp", name: "Web App" },
    shortDescription: "An immersive, cinematic countdown experience for Avengers: Doomsday featuring dynamic parallax lighting, canvas particle simulation, ambient multi-track audio, and the iconic 'Will Return' sequence.",
    longDescription: `<h3>About the Project</h3>
<p>
An immersive, cinematic countdown web application built for <strong>Avengers: Doomsday</strong> (releasing on December 18, 2026). The project delivers a theatrical experience with interactive lighting, physics-based canvas particles, atmospheric god rays, multi-track ambient audio, and a customizable Marvel-style "Will Return" stinger sequence.
</p>

<br/>

<h3>Key Features</h3>
<ul>
  <li><strong>Cinematic Countdown:</strong> Animated flip and shuffle digits counting down in real-time to Marvel Phase 6's monumental release.</li>
  <li><strong>Dynamic Parallax Lighting:</strong> Mouse-reactive lighting with specular highlights, realistic depth shadows, and lens bloom effects.</li>
  <li><strong>Atmospheric Visual Effects:</strong> Rotating god rays, ambient volumetric glow, and layered drifting fog with CSS blend modes.</li>
  <li><strong>Interactive Particle Simulation:</strong> HTML5 canvas floating dust and ember particle system with customizable particle density for optimal performance.</li>
  <li><strong>Multi-Track Ambient Audio:</strong> Integrated Web Audio engine with multi-track switcher (Avengers Theme, Clock Ticking, and Mute mode).</li>
  <li><strong>"Will Return" Stinger Sequence:</strong> Authentic Marvel cinematic post-credits animation with custom name support via URL query parameters (e.g. <code>?name=Tony%20Stark</code>).</li>
  <li><strong>Floating Utility Bar:</strong> Quick-access control dock for audio controls, particle counts, and UI toggles.</li>
  <li><strong>Fully Responsive:</strong> Optimized for high-performance rendering across desktop, tablet, and mobile screens.</li>
</ul>

<br/>

<h3>Tech Stack</h3>
<ul>
  <li><strong>Framework:</strong> Next.js 16 (App Router & Turbopack)</li>
  <li><strong>UI Library:</strong> React 19</li>
  <li><strong>Language:</strong> TypeScript</li>
  <li><strong>Styling:</strong> Tailwind CSS 4 & Pure CSS Keyframes / Blend Modes</li>
  <li><strong>Graphics & Audio:</strong> HTML5 Canvas Particle Engine & Web Audio API</li>
</ul>

<br/>

<h3>Project Highlights</h3>
<ul>
  <li>Immersive cinematic UI/UX with smooth 60fps animations and GPU-accelerated effects</li>
  <li>Modular React architecture with isolated components for countdown, particles, and audio controls</li>
  <li>Dynamic URL query parameter handling for personalized stinger sequences</li>
  <li>Comprehensive SEO optimization with Next.js App Router metadata, robots.ts, and sitemap.ts</li>
</ul>`,
    projectImage: "/doomsday_clock.png",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "HTML5 Canvas", "Web Audio API", "Web App"],
    members: [],
    liveLink: "https://doomsday-dusky.vercel.app/",
    githubLink: "https://github.com/Onkar-Satale/doomsDAY",
    featured: false,
    startDate: "2026-02-01",
    endDate: "2026-02-21"
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