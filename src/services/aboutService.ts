export interface AboutData {
  name: string;
  roles: string[];
  description: string;
  image: string;
  cv: string;
}

const STATIC_ABOUT: AboutData = {
  "cv": "https://drive.google.com/file/d/1InpsO4j8zaC6o5ySkuUdhMM_xX4aeRDL/view?usp=sharing",
  "description": "I build robust and scalable web applications from front to back. As a Full-Stack Developer and React specialist, I create seamless user experiences and efficient backend systems. I am also deeply interested in Agentic and Generative AI, building intelligent applications powered by large language models. I enjoy solving complex problems, turning challenges into elegant solutions, and bringing ideas to life in the digital world.",
  "image": "",
  "name": "Satale Onkar K",
  "roles": [
    "Full-Stack Developer",
    "Problem Solver",
    "React Developer",
    "GenAI Enthusiast"
  ]
};

export const getAboutData = async (): Promise<AboutData> => {
  return Promise.resolve(STATIC_ABOUT);
};
