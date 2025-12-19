export const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "D3.js"],
  "Backend": ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  "DevOps & Tools": ["Docker", "Git", "Linux", "CI/CD"]
};

export const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - 2024",
    description: "Leading a team of 5 developers in building scalable microservices. Reduced server costs by 30% through optimization."
  },
  {
    role: "Web Developer",
    company: "Creative Agency",
    period: "2021 - 2023",
    description: "Developed award-winning marketing websites and e-commerce platforms using React and Shopify."
  },
  {
    role: "Junior Software Engineer",
    company: "StartUp Hub",
    period: "2020 - 2021",
    description: "Collaborated on the frontend of a high-traffic SaaS product. Implemented responsive designs and unit tests."
  }
];

export const education = [
  {
    degree: "BEngTech in Computer Engineering",
    school: "Cape Peninsula University of Tech",
    year: "2023 - 2025",
    description: "Focused on Electronics, Electrical Systems and Software Design Principles."
  },
  {
    degree: "National Senior Certificate",
    school: "Khanya Lesedi Sports School Of Specialisation",
    year: "2018 - 2021",
    description: "Graduated at High School"
  }
];

export const certificates = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "#"
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google",
    date: "2023",
    link: "https://www.coursera.org/account/accomplishments/verify/UXHRJ454KLWM"
  },
  {
    name: "Meta Front-End Developer",
    issuer: "Meta",
    date: "2022",
    link: "#"
  },
  {
    name: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "2022",
    link: "#"
  }
];



export const projects = [
  {
    title: "Network Control and Integration (NCI) using SDN",
    description: "A software-defined networking project focused on integrating the OpenDaylight (ODL) controller with VyOS routers using the BGP protocol. The project was implemented in GNS3 and examined how SDN controllers manage routing decisions, network scalability, and dynamic topology changes.",
    tech: ["OpenDaylight", "VyOS", "BGP", "GNS3"],
    link: "#",
    github: "https://github.com/Ivyson/Network-Labs/tree/main/Graduate%20Attribute%20Practical/Graduate%20Attribute%201"
  },
  {
    title: "Retrieval-Augmented Generation (RAG) System with Cloud Integration",
    description: "A locally updating retrieval-augmented generation system designed to synchronise documents from cloud storage and generate context-aware responses. The system tracks document changes, generates embeddings using online APIs, and manages both local and cloud-based vector databases for efficient information retrieval.",
    tech: ["Python", "RAG Architecture", "Vector Databases", "Microsoft Graph API"],
    link: "#",
    github: "https://github.com/SamukeloGift/Gemini-Agent"
  },
  {
    title: "Brain–Computer Interface (BCI) Signal Processing Prototype",
    description: "A prototype system for processing and visualising EEG signals captured from a consumer-grade EEG headset. The project focused on signal preprocessing, filtering, and real-time visualisation to establish a foundation for future machine learning-based brain–computer interface applications.",
    tech: ["Python", "EEG Signal Processing", "NumPy", "PyQt6"],
    link: "#",
    github: "https://github.com/Ivyson/Neural-Network-XOR"
  }
];
export const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: AI Integration",
    excerpt: "Exploring how artificial intelligence is reshaping the way we build and interact with web applications...",
    date: "Dec 1, 2025",
    readTime: "5 min read",
    category: "AI & Development",
    content: `<h2>Introduction</h2><p>This is a dummy placeholder...</p>` 
  },
  {
    id: 2,
    title: "Convolutional Neural Networks Explained",
    excerpt: "Deep Learning has revolutionised image processing. In this article, I break down CNNs...",
    date: "Nov 15, 2025",
    readTime: "8 min read",
    category: "Architecture",
    content: `<h2>The Journey</h2><p>Images consist of pixels...</p>`
  },
  {
    id: 3,
    title: "The Art of Code Review",
    excerpt: "How to conduct meaningful code reviews that improve code quality and foster team collaboration...",
    date: "Nov 1, 2025",
    readTime: "6 min read",
    category: "Best Practices",
    content: `<h2>Why Review?</h2><p>Code review is one of the most valuable practices...</p>`
  }
];
