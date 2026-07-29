// --- Type Definitions ---
export interface Skill {
  id: string;
  name: string;
  iconKey?: string;       // key to match frontend ICON_MAP
  image?: string | null;  // optional external image URL
}

export interface SkillCategory {
  id: string;             // Document ID
  name: string;
  order?: number;         // used for sorting categories
  skills: Skill[];
}

const STATIC_SKILLS: SkillCategory[] = [
  {
    "id": "programming",
    "name": "Programming Languages",
    "order": 1,
    "skills": [
      { "iconKey": "cpp", "id": "cpp", "image": "", "name": "C++" },
      { "iconKey": "c", "id": "c", "image": "", "name": "C" },
      { "iconKey": "python", "id": "python", "image": "https://cdn.iconscout.com/icon/free/png-256/free-python-3628999-3030224.png", "name": "Python" }
    ]
  },
  {
    "id": "webdev",
    "name": "Web Development",
    "order": 2,
    "skills": [
      { "iconKey": "html", "id": "html", "image": "", "name": "HTML" },
      { "iconKey": "css", "id": "css", "image": "", "name": "CSS" },
      { "iconKey": "js", "id": "js", "image": "", "name": "JavaScript" },
      { "iconKey": "react", "id": "react", "image": "", "name": "React.js" },
      { "iconKey": "node", "id": "node", "image": "", "name": "Node.js" },
      { "iconKey": "express", "id": "express", "image": "", "name": "Express.js" },
      { "iconKey": "tailwind", "id": "tailwind", "image": "", "name": "Tailwind CSS" },
      { "iconKey": "bootstrap", "id": "bootstrap", "image": "", "name": "Bootstrap" },
      { "iconKey": "rest", "id": "rest", "image": "", "name": "REST APIs" }
    ]
  },
  {
    "id": "genai",
    "name": "Generative AI",
    "order": 3,
    "skills": [
      { "iconKey": "llm", "id": "llm", "image": "", "name": "LLMs" },
      { "iconKey": "openai", "id": "openai", "image": "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", "name": "OpenAI API" },
      { "iconKey": "groq", "id": "groq", "image": "", "name": "Groq API" },
      { "iconKey": "langchain", "id": "langchain", "image": "", "name": "LangChain" },
      { "iconKey": "prompt", "id": "prompt", "image": "", "name": "Prompt Engineering" },
      { "iconKey": "rag", "id": "rag", "image": "", "name": "RAG" },
      { "iconKey": "agents", "id": "agents", "image": "", "name": "AI Agents" },
      { "iconKey": "chromadb", "id": "chromadb", "image": "", "name": "ChromaDB" }
    ]
  },
  {
    "id": "databases",
    "name": "Databases",
    "order": 4,
    "skills": [
      { "iconKey": "mongodb", "id": "mongodb", "image": "", "name": "MongoDB" },
      { "iconKey": "mysql", "id": "mysql", "image": "", "name": "MySQL" }
    ]
  },
  {
    "id": "corecs",
    "name": "Core CS Concepts",
    "order": 5,
    "skills": [
      { "iconKey": "dsa", "id": "dsa", "image": "", "name": "Data Structures & Algorithms (DSA)" },
      { "iconKey": "oop", "id": "oop", "image": "", "name": "Object-Oriented Programming (OOP)" },
      { "iconKey": "dbms", "id": "dbms", "image": "", "name": "Database Management Systems (DBMS)" },
      { "iconKey": "os", "id": "os", "image": "", "name": "Operating Systems (OS)" },
      { "iconKey": "cn", "id": "cn", "image": "", "name": "Computer Networks (CN)" },
      { "iconKey": "system-design", "id": "system-design", "image": "", "name": "System Design" }
    ]
  },
  {
    "id": "tools",
    "name": "Tools & Platforms",
    "order": 6,
    "skills": [
      { "iconKey": "git", "id": "git", "image": "", "name": "Git" },
      { "iconKey": "github", "id": "github", "image": "", "name": "GitHub" },
      { "iconKey": "vscode", "id": "vscode", "image": "", "name": "VS Code" },
      { "iconKey": "postman", "id": "postman", "image": "", "name": "Postman" },
      { "iconKey": "docker", "id": "docker", "image": "", "name": "Docker" },
      { "iconKey": "firebase", "id": "firebase", "image": "", "name": "Firebase" }
    ]
  }
];

// --- Fetch all skill categories from API ---
export const getSkillCategories = async (): Promise<SkillCategory[]> => {
  return Promise.resolve(STATIC_SKILLS);
};
