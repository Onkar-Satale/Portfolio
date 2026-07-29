// Local Type Definition
interface Experience {
  id: string;
  logo: string | null;
  role: string;
  companyName: string;
  companyLink?: string | null;
  location?: string;
  startDate: string;
  endDate?: string | null;
  description: string;
  skills?: string[]; // optional
  type: 'experience';
  order?: number;    // optional, used for sorting
  certificateLink?: string;
}

const STATIC_EXPERIENCES: Experience[] = [
  {
     "id": "1",
     "companyLink": "https://www.linkedin.com/company/learncraft-engineering-and-consultant/",
     "companyName": "LearnCraft Engineering",
     "location": "Pune, India",
     "description": "• Developed a full-stack NGO platform using MERN stack to streamline volunteer management and operational workflows.\n• Implemented responsive frontend interfaces and integrated scalable REST APIs using React, Node.js, and Express.js.\n• Designed MongoDB database structures and implemented secure authentication with role-based access control.\n• Improved application performance through debugging, optimization, and maintaining clean Git version control practices.",
     "endDate": "2026-07-31",
     "logo": "/learncraft_logo.png",
     "order": 1,
     "role": "MERN Stack Developer Intern",
     "skills": ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"],
     "startDate": "2026-03-01",
     "type": "experience"
  },
  {
     "id": "2",
     "companyLink": "https://prodigyinfotech.dev/",
     "companyName": "Prodigy InfoTech",
     "location": "Pune, India",
     "description": "• Developed a Student Management System using MERN stack with secure JWT-based authentication and authorization.\n• Created responsive UI/UX components and enhanced frontend experience with optimized user interactions.\n• Managed MongoDB database operations and implemented efficient CRUD functionalities for application modules.\n• Improved code maintainability through debugging, testing, and collaborative GitHub development workflows.",
     "endDate": "2025-07-31",
     "logo": "https://prodigyinfotech.dev/assets/images/logo/logo.svg",
     "order": 2,
     "role": "Full Stack Developer Intern",
     "skills": ["MERN Stack", "React", "Node.js", "Express.js", "MongoDB", "JWT", "GitHub"],
     "startDate": "2025-06-01",
     "type": "experience",
     "certificateLink": "https://drive.google.com/file/d/1l7kxe03zp8dJTRU5uIp19q4s0jkyQTNH/view?usp=sharing"
  }
];

export const getExperiences = async (): Promise<any[]> => {
  return Promise.resolve(STATIC_EXPERIENCES);
};
