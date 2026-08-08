const STATIC_EXPERIENCES = [
  {
    "id": "1",
    "companyLink": "https://www.linkedin.com/company/learncraft-engineering-and-consultant/",
    "companyName": "LearnCraft Engineering (Pune, India)",
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
    "companyName": "Prodigy InfoTech (Pune, India)",
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

const STATIC_EDUCATION = [
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
    "courseName": "Higher Secondary Certificate (HSC)",
    "description": "Completed Class 12 Higher Secondary Certificate (HSC) in PCMB stream.",
    "endDate": "2023-05-31",
    "institutionLink": "https://schools.org.in/ahmadnagar/27260509004/matoshri-bhagubai-bambare-science-jr-college.html",
    "institutionName": "MBBS Junior College (Ahilyanagar, Maharashtra)",
    "logo": "/mbbsjc_logo.png",
    "order": 2,
    "startDate": "2022-06-01",
    "type": "education"
  },
  {
    "id": "3",
    "courseName": "Secondary School Certificate (SSC)",
    "description": "Completed Class 10 Secondary School Certificate (SSC) education at SBVNG School.",
    "endDate": "2021-05-31",
    "institutionLink": "https://schools.org.in/ahmadnagar/27260412001/bhairavnath-vidyalaya-nimgoan-gangarda.html",
    "institutionName": "SBVNG School",
    "logo": "https://schools.org.in/assets/images/favicon.png",
    "order": 3,
    "startDate": "2020-06-01",
    "type": "education"
  }
];

export const getExperiences = async () => {
  return Promise.resolve(STATIC_EXPERIENCES);
};

export const getEducationHistory = async () => {
  return Promise.resolve(STATIC_EDUCATION);
};
