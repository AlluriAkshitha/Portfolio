import { Skill, Project, Education } from "../types";

export const skills: Skill[] = [
  {
    name: "HTML",
    proficiency: 95,
    icon: "FileCode",
    description: "Build and structure web pages using tags for headings, paragraphs, links, and more. Powers the web's content layout."
  },
  {
    name: "CSS",
    proficiency: 95,
    icon: "Paintbrush",
    description: "Style and design beautiful websites with colors, layouts, animations, and responsiveness across devices."
  },
  {
    name: "JavaScript",
    proficiency: 90,
    icon: "Code",
    description: "Make websites interactive! Add dynamic features like forms, sliders, animations, and real-time updates."
  },
  {
    name: "Python",
    proficiency: 95,
    icon: "Braces",
    description: "Versatile, beginner-friendly language for web development, data analysis, automation, and AI projects."
  },
  {
    name: "Java",
    proficiency: 90,
    icon: "Coffee",
    description: "Object-oriented programming language used for building robust, scalable applications and enterprise solutions."
  },
  {
    name: "Flask",
    proficiency: 85,
    icon: "Flask",
    description: "Lightweight Python web framework for building fast and simple web applications and APIs."
  },
  {
    name: "Express.js",
    proficiency: 80,
    icon: "Server",
    description: "Web framework for Node.js that simplifies API creation and server-side logic."
  },
  {
    name: "React.js",
    proficiency: 80,
    icon: "Atom",
    description: "Build fast, reusable components for modern web applications. Powering seamless and dynamic user experiences."
  },
  {
    name: "Node.js",
    proficiency: 80,
    icon: "Binary",
    description: "JavaScript runtime for building fast, scalable network applications and APIs."
  },
  {
    name: "MySQL",
    proficiency: 95,
    icon: "Database",
    description: "Open-source relational database management system for structured data storage and retrieval."
  },
  {
    name: "MongoDB",
    proficiency: 90,
    icon: "Leaf",
    description: "NoSQL database for high-volume, unstructured data. Ideal for flexible and scalable applications."
  },
  {
    name: "GitHub",
    proficiency: 90,
    icon: "GitBranch",
    description: "Host, manage, and collaborate on code projects with version control and seamless teamwork."
  }
];

export const projects: Project[] = [
  {
    title: "SentiMatrix - Sentiment Analysis System",
    description: "AI-driven sentiment analysis tool to analyze customer feedback and social media data. Supports multi-class emotions like happiness, anger, and sadness with real-time insights.",
    technologies: ["Python", "Keras", "TensorFlow", "React.js"],
    codeLink: "https://github.com/AlluriAkshitha/SentiMatrix-Sentiment-Analysis",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "CodeHive",
    description: "CodeHive coding platform designed to make coding practice fun, interactive, and visually soothing for students and beginners.",
    technologies: ["React.js", "Node.js"],
    codeLink: "https://github.com/akshithaalluri",
    image: "https://images.pexels.com/photos/2857477/pexels-photo-2857477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Fake Bill Detection System",
    description: "A machine learning-powered system to detect counterfeit currency notes by analyzing physical features and patterns. Helps in minimizing fraudulent transactions with high accuracy.",
    technologies: ["Python", "Machine Learning Algorithms", "Render"],
    codeLink: "https://github.com/AlluriAkshitha/Fake.Bill.Detection",
    image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Askify - ChatBot",
    description: "Askify is a full-stack Q&A web application that uses React for the frontend and Express.js for the backend. Integrated with the OpenAI API, it allows users to ask questions and get real-time answers. The app features an intuitive interface with pages for asking questions and browsing answers.",
    technologies: ["React.js", "Tailwind CSS", "Express.js"],
    codeLink: "https://github.com/AlluriAkshitha/Askify-Chatbot",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const educations: Education[] = [
  {
    institution: "Malla Reddy University",
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    duration: "2023-2027",
    description: "Currently pursuing Bachelor's degree in Technology at Malla Reddy University. Specializing in Artificial Intelligence and Machine Learning",
    gpa: "9.2"
  },
  {
    institution: "Sri Chaitanya Jr College",
    degree: "Intermediate in MPC (Mathematics, Physics, and Chemistry)",
    duration: "2021-2023",
    description: "Studied at Sri Chaitanya Junior College, focusing on the MPC (Mathematics, Physics, and Chemistry)",
    gpa: "91%"
  },
  {
    institution: "Gowtham Model School",
    degree: "Secondary Education",
    duration: "2020-2021",
    description: "Completed secondary education",
    gpa: "10"
  }
];