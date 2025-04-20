export interface Skill {
  name: string;
  proficiency: number;
  icon: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  codeLink: string;
  image: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description: string;
  gpa: string;
}