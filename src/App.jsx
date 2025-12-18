import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Code, Rocket, Pencil, Mail, Github, Linkedin, ExternalLink, 
  Calendar, ArrowRight, X, Clock, Menu, ChevronDown, 
  Briefcase, Cpu, Send, CheckCircle, Loader2,
  GraduationCap, Award 
} from 'lucide-react';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  
  const canvasRef = useRef(null);

  // --- DATA ---

  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "D3.js"],
    "Backend": ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    "DevOps & Tools": ["Docker", "Git", "Linux", "CI/CD"]
  };

  const experience = [
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

  const education = [
    {
      degree: "BEngTech in Computer Engineering",
      school: "Cape Peninsula University of Tech",
      year: "2023 - 2025",
      description: "Focused on Electronics, Electrical Systems and Software Design Principles."
    },
    {
      degree: "National Senior Certificate",
      school: "Khanya Lesedi Sports School Of Specialisation",
      year: "2017 - 2021",
      description: "Graduated In High School"
    }
  ];

  const certificates = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      link: "#"
    },
    {
      name: "Google Data Analytics Professional",
      issuer: "Google",
      date: "2023",
      link: "#"
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

  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "A smart task management system with natural language processing and automated prioritization.",
      tech: ["React", "Python", "TensorFlow", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      title: "Real-time Collaboration Tool",
      description: "WebRTC-based platform enabling seamless real-time collaboration with document editing and video chat.",
      tech: ["Node.js", "WebRTC", "Socket.io", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive analytics dashboard with custom visualizations and real-time data streaming.",
      tech: ["D3.js", "React", "Express", "Redis"],
      link: "#",
      github: "#"
    }
  ];

  const blogPosts = [
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

  // --- EFFECTS ---

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth >= 768) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: -(e.clientY / window.innerHeight) * 2 + 1
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const particleCount = window.innerWidth < 768 ? 30 : 50;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 92, 246, 0.5)';
        ctx.fill();

        particles.forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  // --- HANDLERS ---

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // NOTE: You need to register at emailjs.com to get these values
    // See the previous prompt instructions for setup
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Sam', 
    };

    // If you haven't set up EmailJS yet, this try/catch block will fail safely
    // For now, I've kept the timeout logic as a fallback if keys are missing
    if (serviceID === 'YOUR_SERVICE_ID') {
        setTimeout(() => {
            setFormStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
        return;
    }

    emailjs.send(serviceID, templateID, templateParams, { publicKey })
        .then((response) => {
            setFormStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setFormStatus('idle'), 3000);
        })
        .catch((err) => {
            console.error('FAILED...', err);
            setFormStatus('error'); 
            setTimeout(() => setFormStatus('idle'), 3000);
        });
  };

  const navItems = ['Home', 'About', 'Experience', 'Education', 'Projects', 'Blog', 'Contact'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950 text-white relative overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-60" />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-violet-500/10' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <a href="#home" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent hover:scale-105 transition-transform">
              Sam-Port
            </a>

            {/* Desktop menu */}
            <div className="hidden md:flex gap-8">
              {navItems.map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-violet-400 transition-colors font-medium relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-white hover:text-violet-400 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="py-4 space-y-1 border-t border-violet-500/20">
              {navItems.map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 px-4 text-gray-300 hover:text-violet-400 hover:bg-violet-500/10 rounded-lg transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-violet-500 via-fuchsia-500 to-violet-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-500 shadow-2xl shadow-violet-500/50 hover:shadow-fuchsia-500/50">
              <Code size={window.innerWidth < 640 ? 40 : 64} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent leading-tight animate-pulse">
            Hi, I'm Sam
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-violet-200 mb-4 sm:mb-6 font-light">
            Full-Stack Developer & Book Nerd
          </p>
          
          <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            I build web applications, CLI tools and a little bit of Machine Learning
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a 
              href="#projects" 
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-violet-500/50 hover:shadow-fuchsia-500/50"
            >
              View Projects <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="border-2 border-violet-400 hover:bg-violet-400/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all transform hover:scale-105 backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </div>
          
          <div className="mt-12 sm:mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-violet-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-violet-500/30 shadow-2xl shadow-violet-500/10">
            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
              I am a full stack dev, I enjoy creating solutions to problems, even if that may mean, those problems were originally created by me.
              I enjoy breaking concepts down into chunks of smaller, digestible pieces of inormation that can be easier to understand, not only for myself, but to also be able to translate my knowledge to others.
              My main goal is to better myself everyday, and to help others do the same, For we rise by lifting others.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Beyond coding, I read books, play a piano and a skilled runner. This will be updated as soon as i have the time to do so.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
              <div className="text-center p-6 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-2xl border border-violet-500/30 hover:border-violet-500/50 transition-all transform hover:scale-105">
                <Code size={40} className="mx-auto mb-3 text-violet-400" />
                <h3 className="font-semibold mb-2 text-lg">Development</h3>
                <p className="text-sm text-gray-400">Full-stack web applications</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 rounded-2xl border border-fuchsia-500/30 hover:border-fuchsia-500/50 transition-all transform hover:scale-105">
                <Rocket size={40} className="mx-auto mb-3 text-fuchsia-400" />
                <h3 className="font-semibold mb-2 text-lg">Innovation</h3>
                <p className="text-sm text-gray-400">AI & emerging tech</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-2xl border border-violet-500/30 hover:border-violet-500/50 transition-all transform hover:scale-105">
                <Pencil size={40} className="mx-auto mb-3 text-violet-400" />
                <h3 className="font-semibold mb-2 text-lg">Writing</h3>
                <p className="text-sm text-gray-400">Technical articles & blogs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-violet-500/30 hover:border-violet-500/60 transition-all transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-violet-500/20 rounded-lg">
                    <Cpu className="text-violet-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-violet-200">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="bg-slate-800/80 px-3 py-1.5 rounded-lg text-sm text-gray-300 border border-violet-500/20 hover:border-violet-500/50 hover:text-white transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 sm:left-1/2 h-full w-0.5 bg-gradient-to-b from-violet-500/0 via-violet-500/50 to-violet-500/0 transform -translate-x-1/2 sm:translate-x-0 ml-4 sm:ml-0"></div>
            
            <div className="space-y-12">
              {experience.map((job, index) => (
                <div key={index} className={`relative flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                  {/* Date Bubble (Mobile: Left, Desktop: Center) */}
                  <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 sm:translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 border-4 border-slate-900 z-10 ml-4 sm:ml-0 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                  
                  {/* Spacer for 50/50 split */}
                  <div className="hidden sm:block w-1/2"></div>
                  
                  {/* Content Card */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${index % 2 === 0 ? 'sm:pr-12 text-left sm:text-right' : 'sm:pl-12 text-left'}`}>
                    <div className="bg-slate-900/50 backdrop-blur-xl p-6 rounded-2xl border border-violet-500/30 hover:border-violet-500/60 transition-all hover:shadow-lg hover:shadow-violet-500/10 group">
                      <div className={`flex flex-col gap-1 mb-2 ${index % 2 === 0 ? 'sm:items-end' : 'sm:items-start'}`}>
                        <span className="text-fuchsia-400 font-mono text-sm font-semibold tracking-wide">{job.period}</span>
                        <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">{job.role}</h3>
                        <div className="flex items-center gap-2 text-violet-200">
                          <Briefcase size={16} />
                          <span>{job.company}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{job.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certificates Section */}
      <section id="education" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Education Column */}
            <div>
              <h2 className="flex items-center gap-3 text-3xl sm:text-4xl font-bold mb-8 text-violet-200">
                <GraduationCap className="text-fuchsia-400" size={36} />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="bg-slate-900/50 backdrop-blur-xl p-6 rounded-2xl border border-violet-500/30 hover:border-violet-500/60 transition-all hover:translate-x-2 group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                        {edu.degree}
                      </h3>
                      <span className="bg-violet-500/20 text-violet-300 text-xs px-3 py-1 rounded-full border border-violet-500/30">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-fuchsia-400 font-medium mb-2">{edu.school}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates Column */}
            <div>
              <h2 className="flex items-center gap-3 text-3xl sm:text-4xl font-bold mb-8 text-violet-200">
                <Award className="text-fuchsia-400" size={36} />
                Certificates
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificates.map((cert, index) => (
                  <a 
                    key={index}
                    href={cert.link}
                    className="bg-slate-900/50 backdrop-blur-xl p-5 rounded-xl border border-violet-500/30 hover:border-fuchsia-500/50 hover:bg-violet-900/10 transition-all transform hover:scale-105 group flex flex-col justify-between h-full"
                  >
                    <div>
                      <h3 className="font-bold text-white mb-1 group-hover:text-fuchsia-300 transition-colors line-clamp-2">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">{cert.issuer}</p>
                    </div>
                    <div className="flex justify-between items-center mt-auto pt-3 border-t border-violet-500/10">
                      <span className="text-xs text-violet-400 font-mono">{cert.date}</span>
                      <ExternalLink size={14} className="text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-violet-500/30 hover:border-violet-500/60 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 group"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-violet-300 group-hover:text-violet-400 transition-colors">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-violet-500/20 px-3 py-1 rounded-full text-xs sm:text-sm text-violet-300 border border-violet-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 border-t border-violet-500/20">
                  <a href={project.link} className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors text-sm sm:text-base">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 transition-colors text-sm sm:text-base">
                    <Github size={18} /> Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Latest Writing
          </h2>
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-violet-500/30 hover:border-violet-500/60 transition-all cursor-pointer group"
                onClick={() => setSelectedBlog(post)}
              >
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-400 mb-3">
                  <span className="bg-violet-500/20 px-3 py-1 rounded-full text-violet-300 border border-violet-500/30">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} /> {post.date}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-violet-300 group-hover:text-violet-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">{post.excerpt}</p>
                <div className="text-fuchsia-400 hover:text-fuchsia-300 flex items-center gap-2 font-semibold text-sm sm:text-base">
                  Read Full Article <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedBlog(null)}>
          <div className="bg-slate-900 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-violet-500/40 shadow-2xl shadow-violet-500/20" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-slate-950/98 backdrop-blur-xl border-b border-violet-500/30 p-4 sm:p-6 flex justify-between items-start gap-4">
              <div className="flex-1 pr-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                  <span className="bg-violet-500/20 px-3 py-1 rounded-full text-xs sm:text-sm text-violet-300 border border-violet-500/30">
                    {selectedBlog.category}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400 flex items-center gap-2">
                    <Calendar size={14} /> {selectedBlog.date}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400 flex items-center gap-2">
                    <Clock size={14} /> {selectedBlog.readTime}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-violet-300">{selectedBlog.title}</h2>
              </div>
              <button
                onClick={() => setSelectedBlog(null)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-violet-500/20 rounded-lg flex-shrink-0"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
            <div 
              className="p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-140px)] prose prose-invert prose-violet max-w-none prose-headings:text-violet-300 prose-a:text-fuchsia-400 prose-strong:text-violet-200"
              style={{
                fontSize: '0.95rem',
                lineHeight: '1.7'
              }}
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            />
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-base sm:text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto leading-relaxed">
             Ready to start a project? Fill out the form below or reach out directly via social platforms.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info Side */}
            <div className="space-y-6">
               <h3 className="text-2xl font-bold text-violet-200 mb-4">Contact Details</h3>
               <div className="grid gap-4">
                  <a href="mailto:samukelogift187@gmail.com" className="bg-slate-900/50 backdrop-blur-xl p-6 rounded-2xl border border-violet-500/30 hover:border-violet-500/60 transition-all hover:bg-violet-500/10 group flex items-center gap-4">
                    <div className="p-3 bg-violet-500/20 rounded-full group-hover:bg-violet-500/30 transition-colors">
                      <Mail size={24} className="text-violet-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-sm text-gray-400">samukelogift187@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://github.com/SamukeloGift" target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 backdrop-blur-xl p-6 rounded-2xl border border-violet-500/30 hover:border-violet-500/60 transition-all hover:bg-violet-500/10 group flex items-center gap-4">
                    <div className="p-3 bg-fuchsia-500/20 rounded-full group-hover:bg-fuchsia-500/30 transition-colors">
                      <Github size={24} className="text-fuchsia-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">GitHub</h3>
                      <p className="text-sm text-gray-400">Check out my repos</p>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/samukelo-gift-msimanga-672592284/" target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 backdrop-blur-xl p-6 rounded-2xl border border-violet-500/30 hover:border-violet-500/60 transition-all hover:bg-violet-500/10 group flex items-center gap-4">
                    <div className="p-3 bg-violet-500/20 rounded-full group-hover:bg-violet-500/30 transition-colors">
                      <Linkedin size={24} className="text-violet-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">LinkedIn</h3>
                      <p className="text-sm text-gray-400">Let's connect professionally</p>
                    </div>
                  </a>
               </div>
            </div>

            {/* Form Side */}
            <div className="bg-slate-900/50 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-violet-500/30">
               <h3 className="text-2xl font-bold text-violet-200 mb-6">Send a Message</h3>
               <form onSubmit={handleFormSubmit} className="space-y-4">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                     <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full bg-slate-950/50 border border-violet-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                     />
                   </div>
                   <div className="space-y-2">
                     <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                     <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full bg-slate-950/50 border border-violet-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                     />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                   <textarea 
                      id="message" 
                      required
                      rows="4"
                      className="w-full bg-slate-950/50 border border-violet-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all resize-none"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                   />
                 </div>
                 <button 
                    type="submit" 
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                      formStatus === 'success' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                        : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg shadow-violet-500/25'
                    }`}
                 >
                    {formStatus === 'submitting' ? (
                      <>Sending <Loader2 className="animate-spin" size={20} /></>
                    ) : formStatus === 'success' ? (
                      <>Message Sent <CheckCircle size={20} /></>
                    ) : (
                      <>Send Message <Send size={20} /></>
                    )}
                 </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-6 sm:py-8 px-4 sm:px-6 border-t border-violet-500/20 bg-black/40">
        <div className="container mx-auto text-center text-gray-400 text-sm sm:text-base">
          <p>© 2025 Samukelo Msimanga. Built with passion and code.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
