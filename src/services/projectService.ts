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
    name: "PackMate – AI-Powered Travel Assistant",
    category: { id: "mern-genai", name: "MERN + GenAI" },
    shortDescription: "Built a MERN travel assistant providing AI-powered packing recommendations based on trip details and real-time weather using Groq (Llama 3).",
    longDescription: `<h3>PackMate – AI-Powered Travel Assistant</h3>
<p>PackMate is a full-stack MERN travel platform designed to help travelers effortlessly plan trips, manage itineraries, and automatically generate highly optimized packing recommendations using Generative AI.</p>
<br/>
<h3>Key Highlights & Features</h3>
<ul>
  <li><strong>AI-Powered Packing Recommendations:</strong> Built a MERN travel assistant providing intelligent packing suggestions based on destination details and real-time weather conditions.</li>
  <li><strong>Groq (Llama 3) Integration:</strong> Integrated Groq LLM API to generate personalized, context-aware smart packing lists tailored for travelers.</li>
  <li><strong>Comprehensive Security & Management:</strong> Implemented secure JWT authentication, trip itinerary management, budget tracking, and persistent user sessions.</li>
</ul>
<br/>
<h3>Tech Stack</h3>
<ul>
  <li><strong>Frontend:</strong> React.js, Responsive UI/UX</li>
  <li><strong>Backend:</strong> Node.js, Express.js</li>
  <li><strong>Database:</strong> MongoDB</li>
  <li><strong>AI & LLM:</strong> Groq API (Llama 3), GenAI</li>
  <li><strong>Security:</strong> JWT Authentication</li>
</ul>`,
    projectImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "GenAI", "Groq LLM", "JWT"],
    members: [],
    liveLink: "https://packmatefrontend.vercel.app",
    githubLink: "https://github.com/Onkar-Satale/Packmate_genai_mern-project",
    featured: true,
    startDate: "2025-08-01",
    endDate: "2026-01-01"
  },
  {
    id: "swiftapi",
    name: "Swift API – Smart API Testing Tool",
    category: { id: "mern-genai", name: "MERN + GenAI" },
    shortDescription: "Built a MERN API testing platform featuring request execution, collections, history, and an AI assistant (FastAPI + Groq LLM) for automated error diagnosis.",
    longDescription: `<h3>Swift API – Smart API Testing Tool</h3>
<p>Swift API is a modern MERN API testing platform featuring request execution, collection organization, history management, and workspace tools, enhanced with an AI debugging assistant.</p>
<br/>
<h3>Key Highlights & Features</h3>
<ul>
  <li><strong>Full-Stack API Testing Platform:</strong> Built a comprehensive MERN API testing platform featuring request execution (GET, POST, PUT, DELETE), collections, history tracking, and workspace management.</li>
  <li><strong>AI Debugging Assistant:</strong> Integrated an AI assistant using Python FastAPI and Groq LLM for automated API error diagnosis and instant fix suggestions.</li>
  <li><strong>Secure & Structured:</strong> Implemented JWT authentication, secure REST APIs, and structured JSON response parsing for developer testing.</li>
</ul>
<br/>
<h3>Tech Stack</h3>
<ul>
  <li><strong>Frontend:</strong> React.js</li>
  <li><strong>Backend:</strong> Node.js, Express.js, FastAPI (Python)</li>
  <li><strong>Database:</strong> MongoDB</li>
  <li><strong>AI Integration:</strong> Groq LLM API</li>
  <li><strong>Security & Utils:</strong> JWT Authentication, JSON Response Parsing</li>
</ul>`,
    projectImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "GenAI", "FastAPI", "Groq LLM", "REST APIs"],
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
    category: { id: "all", name: "MERN App" },
    shortDescription: "Built a full-stack academic portal for efficient course administration, user roles, educational resources, and relational SQL database operations.",
    longDescription: `<h3>Academic Engagement Portal</h3>
<p>A full-stack web application designed to centralize academic management, course administration, user roles, and educational resource sharing.</p>
<br/>
<h3>Key Highlights & Features</h3>
<ul>
  <li><strong>Academic Administration:</strong> Built a full-stack academic portal for efficient course administration, user role management, and educational resource distribution.</li>
  <li><strong>Relational SQL Architecture:</strong> Designed a structured SQL database schema for managing users, roles, courses, and academic records efficiently.</li>
  <li><strong>Scalable Backend Services:</strong> Developed secure backend microservices using Node.js, Express.js, and scalable REST APIs for academic operations.</li>
</ul>
<br/>
<h3>Tech Stack</h3>
<ul>
  <li><strong>Frontend:</strong> React.js</li>
  <li><strong>Backend:</strong> Node.js, Express.js</li>
  <li><strong>Database:</strong> SQL (Relational Schema)</li>
  <li><strong>APIs:</strong> Scalable REST APIs</li>
</ul>`,
    projectImage: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&q=80",
    tags: ["React", "Node.js", "Express.js", "SQL", "REST APIs"],
    members: [],
    liveLink: "https://academic-engagement-portal-kappa.vercel.app/",
    githubLink: "https://github.com/Onkar-Satale/Academic_Engagement_Portal",
    featured: true,
    startDate: "2026-01-01",
    endDate: "2026-02-10"
  },
  {
    id: "shivmala-foundation",
    name: "Shivmala Foundation Platform",
    category: { id: "webapp", name: "Web App" },
    shortDescription: "A platform for Shivmala Foundation featuring a dynamic campaign showcase, automated media gallerie and videos.",
longDescription: `
<h3>About the Project</h3>
<p>
The Shivmala Foundation website serves as the central digital platform for the NGO, designed to showcase social initiatives, campaigns, and community impact. The application focuses on delivering a visually engaging and user-friendly experience, allowing visitors to explore projects, view media content, and understand the foundation’s mission. Built using modern frontend technologies, the project emphasizes responsiveness, smooth interactions, and clean UI/UX design.
</p>

<br/>

<h3>Key Features</h3>
<ul>
<li><strong>Dynamic Hero Section & Carousel:</strong> Visually engaging landing section with smooth animations and transitions to capture user attention.</li>
<li><strong>Campaign & Causes Showcase:</strong> Interactive and modern card-based layout to highlight active and past social initiatives with clear presentation.</li>
<li><strong>Categorized Media Gallery:</strong> Structured gallery with images and videos, featuring a full-screen lightbox for an immersive viewing experience.</li>
<li><strong>Nested Projects Navigation:</strong> Multi-level dropdowns and accordion components for organized and intuitive browsing of initiatives.</li>
<li><strong>Fully Responsive Design:</strong> Optimized for seamless performance across desktops, tablets, and mobile devices.</li>
<li><strong>Modern UI/UX Design:</strong> Implementation of glassmorphism, smooth hover effects, and clean typography for a premium user experience.</li>
<li><strong>Reusable Component Architecture:</strong> Modular React component structure ensuring scalability and maintainability.</li>
</ul>

<br/>

<h3>Project Highlights</h3>
<ul>
<li>Clean and structured frontend architecture</li>
<li>Strong focus on UI/UX and visual storytelling</li>
<li>Real-world NGO use case demonstrating practical application</li>
<li>Optimized performance with smooth transitions and responsive layouts</li>
</ul>
`  ,  projectImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    tags: ["React", "CSS","Web3Forms API" ],
    members: [],
    liveLink: "https://shivmalafoundation.vercel.app/",
    githubLink: "https://github.com/Onkar-Satale/Shivmala_Foundation",
    featured: false,
    startDate: "2026-03-01",
    endDate: "2026-05-31"
  },
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    category: { id: "webapp", name: "Web App" },
    shortDescription: "A modern, portfolio web application built using React, Tailwind CSS, Typescript, Web3forms API.",
    longDescription: `
<h3>About the Project</h3>
<p>
A modern and fully responsive personal portfolio web application built using React, TypeScript, Vite, and Tailwind CSS. The application is designed to showcase my technical skills, projects, and experience through a clean, interactive, and user-friendly interface. It emphasizes performance, scalability, and smooth user experience while maintaining a professional and visually appealing design.
</p>

<br/>

<h3>Key Features</h3>
<ul>
<li><strong>Responsive Modern UI:</strong> Fully responsive layout optimized for desktop, tablet, and mobile devices with a clean and structured design system.</li>
<li><strong>Light/Dark Mode Toggle:</strong> Seamless theme switching with persistent state for improved user experience.</li>
<li><strong>Dynamic Project Showcase:</strong> Structured project section displaying detailed information, technologies used, and live/demo links.</li>
<li><strong>Contact Form Integration:</strong> Functional contact form integrated with Web3Forms API for real-time message handling without a custom backend.</li>
<li><strong>Skills & Timeline Section:</strong> Dedicated sections to highlight technical skills, tools, and academic/professional journey in a clear visual format.</li>
<li><strong>Reusable Component Architecture:</strong> Modular and scalable component-based structure for maintainability and code reusability.</li>
<li><strong>Toast Notification System:</strong> User feedback system for actions such as form submission and interactions.</li>
<li><strong>Optimized Performance:</strong> Fast loading and smooth transitions powered by Vite build tooling.</li>
</ul>

<br/>

<h3>Tech Stack</h3>
<ul>
<li><strong>Frontend:</strong> React.js (with TypeScript)</li>
<li><strong>Build Tool:</strong> Vite</li>
<li><strong>Styling:</strong> Tailwind CSS</li>
<li><strong>API Integration:</strong> Web3Forms (Contact Form)</li>
</ul>

<br/>

<h3>Highlights</h3>
<ul>
<li>Clean and scalable frontend architecture</li>
<li>Strong focus on UI/UX and accessibility</li>
<li>Real-world portfolio use case for personal branding</li>
<li>No backend dependency – fully functional frontend integration</li>
</ul>
`,
    projectImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Web3forms API", "Web App"],
    members: [],
    liveLink: "https://portfolio-mu-one-n3zkisj3jp.vercel.app/",
    githubLink: "https://github.com/Onkar-Satale/Portfolio",
    featured: false,
    startDate: "2025-06-01",
    endDate: "2025-12-15"
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