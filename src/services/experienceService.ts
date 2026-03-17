// Local Type Definition
interface Experience {
  id: string;
  logo: string | null;
  role: string;
  companyName: string;
  companyLink?: string | null;
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
     "companyLink": "https://prodigyinfotech.dev/",
     "companyName": "Prodigy InfoTech",
     "description": "Worked as a Full Stack Developer Intern (MERN stack). Built a comprehensive Student Management System featuring secure JWT authentication, role-based access control, and seamless database interactions. Contributed to both frontend UI development in React and backend REST API integrations using Node.js and Express.",
     "endDate": "2025-07-01",
     "logo": "https://prodigyinfotech.dev/assets/images/logo/logo.svg",
     "order": 1,
     "role": "Full Stack Developer Intern",
     "skills": ["MongoDB", "Express", "React", "Node.js", "Authentication"],
     "startDate": "2025-06-01",
     "type": "experience",
     "certificateLink": "https://drive.google.com/file/d/1l7kxe03zp8dJTRU5uIp19q4s0jkyQTNH/view?usp=sharing"
  },
  {
     "id": "2",
     "companyLink": null,
     "companyName": "Startup",
     "description": "Currently engaged as an ongoing MERN Stack Developer Intern. Architecting and developing a full-stack website platform for a Non-Governmental Organization (NGO). The platform focuses on streamlining community operations, managing volunteer resources, and showcasing organizational impact effectively.",
     "endDate": "2026-04-30",
     "logo": "https://ui-avatars.com/api/?name=G&background=E2E8F0&color=475569&rounded=true&bold=true",
     "order": 2,
     "role": "MERN Stack Developer Intern",
     "skills": ["MongoDB", "Express", "React", "Node.js"],
     "startDate": "2026-03-01",
     "type": "experience"
  }
];

export const getExperiences = async (): Promise<any[]> => {
  return Promise.resolve(STATIC_EXPERIENCES);
};
