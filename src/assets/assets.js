import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaPython, FaObjectGroup, FaJava } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React','Angular']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js','Django']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: [ 'MySQL']
  },
  {
    title: 'OOPs',
    icon: FaJava,
    description: 'OOPs is a programming approach based on objects and classes that helps organize code efficiently using concepts like encapsulation, inheritance, polymorphism, and abstraction.',
    tags: ['Java','Python']
  },
  {
    title: 'AIML',
    icon: FaPython,
    description: 'AIML focus on building systems that can learn from data and make intelligent decisions without being explicitly programmed.',
    tags: ['ScikitLearn', 'TensorFlow', 'DeepLearning', 'LLMs']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub']
  }
];



export const projects = [
  {
    title: "Movie Genre Prediction",
    description: "I developed a Movie Genre Classification Model using LinearSVC with TF-IDF vectorization to predict a movie’s genre based on its plot or description.Dataset: IMDB Genre Classification Dataset (25+ genres, 10k+ entries)Accuracy: ~58.33% on the test dataset",
    image: projectImg1,
    tech: ["Python", "ScikitLearn", "Pandas", "Tkinter"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Customer Churn Prediction Model",
    description: "Built a machine learning model that predicts whether a bank customer is likely to churn based on demographic and account-related features. Implemented end-to-end workflows including data preprocessing, model training, evaluation, and deployment. Also developed a simple Tkinter GUI to make real-time churn predictions user-friendly and interactive.",
    image: projectImg2,
    tech: ["ScikitLearn", "Python", "Tkinter", "Pandas"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Spam SMS Detection Model",
    description: "Spam Detection Model that classifies messages as Spam or Ham with multiple algorithms, including Naive Bayes and Logistic Regression, and finalized Support Vector Classifier (SVC) ",
    image: projectImg3,
    tech: ["SVC", "NavieBayes", "Logistic Regression", "Tkinter"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Python Full Stack Developer Intern",
    company: "EduSkills",
    duration: "2024(Oct-Dec)",
    description:
      "Worked with Python, frontend technologies, and databases to develop scalable and responsive full-stack solutions.",
    color: "purple"
  },
  {
    role: "Machine Learning Intern",
    company: "CodSoft",
    duration: "2025(December)",
    description:
      "Implemented and evaluated ML models to extract insights, improve prediction accuracy, and solve real-world classification problems.",
    color: "pink"
  },
  {
    role: "Full Stack Developer Intern",
    company: "Future Interns",
    duration: "2026(March)",
    description:
      "Developed three full-stack web applications including a Personal Portfolio, a Live Local Business Website, and a Mini CRM system.",
    color: "blue"
  }
];
