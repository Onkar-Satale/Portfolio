export interface AboutData {
  name: string;
  roles: string[];
  description: string;
  image: string;
  cv: string;
}

const STATIC_ABOUT: AboutData = {
  "cv": "/Onkar_Satale_Resume.pdf",
  "description": "I build robust, scalable web applications and AI-driven platforms. As a Full-Stack MERN Developer and Generative AI enthusiast, I specialize in building responsive frontend user interfaces, secure REST APIs, scalable database architectures, and intelligent LLM-powered applications. Passionate about solving complex software engineering challenges and maintaining clean code practices.",
  "image": "",
  "name": "Onkar Satale",
  "roles": [
    "MERN Stack Developer",
    "Full Stack Developer",
    "Generative AI Enthusiast",
    "Problem Solver"
  ]
};

export const getAboutData = async (): Promise<AboutData> => {
  return Promise.resolve(STATIC_ABOUT);
};
