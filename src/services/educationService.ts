// Local Type Definition for a single education entry
interface Education {
  id: string;
  courseName: string;
  description: string;
  startDate: string;
  endDate?: string | null;
  institutionName: string;
  institutionLink?: string | null;
  logo?: string | null;
  type: 'education';
  order?: number; // optional, used for sorting
}

const STATIC_EDUCATION: Education[] = [
  {
    "id": "1",
    "courseName": "B.E in Electronics & Telecommunication",
    "description": "Currently pursuing B.E with a focus on software development and full-stack web technologies. Gained hands-on experience in MERN stack (MongoDB, Express, React, Node.js) by building personal and academic projects. Deeply engaged in Agentic & Generative AI, building intelligent web apps using Large Language Models (LLMs), OpenAI API, LangChain, Python, and Groq API. Active participant in tech workshops and coding challenges.",
    "endDate": "2027-05-31",
    "institutionLink": "https://pict.edu/",
    "institutionName": "Pune Institute of Computer Technology",
    "logo": "https://img.collegepravesh.com/2017/02/PICT-Logo.jpg",
    "order": 1,
    "startDate": "2023-09-01",
    "type": "education"
  },
  {
    "id": "2",
    "courseName": "HSC(XII)",
    "description": "I completed my class 12 high school education at MBBS Junior College.",
    "endDate": "2023-05-31",
    "institutionLink": "https://mbbsjc.com/",
    "institutionName": "MBBS Junior College",
    "logo": "https://mbbsjc.com/wp-content/uploads/2025/05/cropped-WhatsApp-Image-2025-05-18-at-3.28.46-PM-300x232.jpeg",
    "order": 2,
    "startDate": "2022-06-01",
    "type": "education"
  },
  {
    "id": "3",
    "courseName": "SSC(X)",
    "description": "I completed my class 10 education at SBVNG School.",
    "endDate": "2021-05-31",
    "institutionLink": "https://schools.org.in/ahmadnagar/27260412001/bhairavnath-vidyalaya-nimgoan-gangarda.html",
    "institutionName": "SBVNG School",
    "logo": "https://schools.org.in/assets/images/favicon.png",
    "order": 3,
    "startDate": "2020-06-01",
    "type": "education"
  }
];

export const getEducationHistory = async (): Promise<any[]> => {
  return Promise.resolve(STATIC_EDUCATION);
};
