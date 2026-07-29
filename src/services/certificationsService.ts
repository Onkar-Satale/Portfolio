export interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  description: string;
  skillsLearned?: string[];
  certificateLink?: string;
  image?: string;
}

const STATIC_CERTIFICATIONS: Certification[] = [
  {
    id: "coursera-frontend",
    title: "Meta: Introduction to Front-End Development",
    issuer: "Meta",
    platform: "Coursera",
    description: "Built responsive and interactive web applications using HTML, CSS, JavaScript, Bootstrap, and React.",
    skillsLearned: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
    certificateLink: "https://www.coursera.org/account/accomplishments/verify/682G36GXPSO0?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    id: "udemy-genai",
    title: "Full Stack Generative and Agentic AI with Python",
    issuer: "Udemy",
    platform: "Udemy",
    description: "Learned LangChain, Prompt Engineering, RAG, AI Agents, and integrated OpenAI APIs into full-stack applications.",
    skillsLearned: ["LangChain", "Prompt Engineering", "RAG", "AI Agents", "OpenAI API", "Python"],
    certificateLink: "https://www.udemy.com/certificate/UC-e3180150-eadf-4638-abc1-480c7d7dbc21/"
  },
  {
    id: "scaler-sql",
    title: "SQL for Beginners: Learn SQL using MySQL and Database Design Course",
    issuer: "Scaler Topics",
    platform: "Scaler",
    description: "Certificate of Excellence awarded for completing 48 video tutorials, 5 modules, and 5 hands-on challenges covering SQL queries, MySQL database operations, and relational database design.",
    skillsLearned: ["SQL", "MySQL", "Database Design", "Relational Databases"],
    certificateLink: "/Scaler_SQL_Certificate.pdf"
  }
];

export const getCertifications = async (): Promise<Certification[]> => {
  return Promise.resolve(STATIC_CERTIFICATIONS);
};
