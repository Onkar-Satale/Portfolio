const STATIC_EXPERIENCES = [
  {
     "id": "1",
     "companyLink": "https://example.com",
     "companyName": "My Company",
     "description": "Built amazing web apps using React and Tailwind.",
     "endDate": "2024-06-01",
     "logo": "",
     "order": 1,
     "role": "Frontend Developer",
     "skills": ["React", "Tailwind"],
     "startDate": "2023-01-01",
     "type": "experience"
  }
];

const STATIC_EDUCATION = [
  {
    "id": "1",
    "courseName": "B.E in Electronics & Telecommunication",
    "description": "Currently pursuing B.E with a focus on software development and full-stack web technologies. Gained hands-on experience in MERN stack (MongoDB, Express, React, Node.js) by building personal and academic projects. Engaged in tech workshops and coding challenges to strengthen practical software engineering skills.",
    "endDate": "2027-05-31",
    "institutionLink": "https://pict.edu/",
    "institutionName": "Pune Institute of Computer Technology",
    "logo": "",
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

export const getExperiences = async () => {
  return Promise.resolve(STATIC_EXPERIENCES);
};

export const getEducationHistory = async () => {
  return Promise.resolve(STATIC_EDUCATION);
};
