// Local Type Definition for a single education entry
interface Education {
  id: string;
  courseName: string;
  description: string;
  startDate: string;
  endDate?: string | null;
  institutionName: string;
  institutionLink?: string | null;
  location?: string;
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
    "location": "Pune, Maharashtra",
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
    "institutionName": "MBBS Junior College",
    "location": "Ahilyanagar, Maharashtra",
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
    "location": "Ahilyanagar, Maharashtra",
    "logo": "https://schools.org.in/assets/images/favicon.png",
    "order": 3,
    "startDate": "2020-06-01",
    "type": "education"
  }
];

export const getEducationHistory = async (): Promise<any[]> => {
  return Promise.resolve(STATIC_EDUCATION);
};
