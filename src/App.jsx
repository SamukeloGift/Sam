import React, { useState, useEffect, useRef } from 'react';
import { Code, Rocket, Pencil, Mail, Github, Linkedin, ExternalLink, Calendar, ArrowRight, X, Clock } from 'lucide-react';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 50; i++) {
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
        ctx.fillStyle = 'rgba(99, 102, 241, 0.5)';
        ctx.fill();

        particles.forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      date: "Dec 1, 2024",
      readTime: "5 min read",
      category: "AI & Development",
      content: `
        <h2>Introduction</h2>
        <p>Artificial Intelligence is no longer just a buzzword in the tech industry—it's becoming an integral part of how we build and interact with web applications. From intelligent code completion to automated testing and personalized user experiences, AI is fundamentally changing the developer's toolkit.</p>

        <h2>The Current State of AI in Web Development</h2>
        <p>Today's developers have access to powerful AI tools that were unimaginable just a few years ago. GitHub Copilot suggests entire code blocks, ChatGPT helps debug complex issues, and AI-powered design tools can generate entire UI layouts from simple descriptions.</p>

        <p>But this is just the beginning. The real transformation is happening in how we architect applications to be AI-native from the ground up.</p>

        <h2>Key Areas of Impact</h2>
        <p><strong>1. Intelligent User Interfaces</strong><br/>
        Modern web applications are becoming more adaptive and personalized. AI enables interfaces that learn from user behavior, predict needs, and provide contextual assistance without explicit programming for every scenario.</p>

        <p><strong>2. Automated Code Generation</strong><br/>
        We're moving beyond simple autocomplete. AI can now generate complex components, write tests, and even refactor entire codebases while maintaining best practices and your project's coding style.</p>

        <p><strong>3. Enhanced Accessibility</strong><br/>
        AI-powered accessibility tools can automatically generate alt text for images, provide real-time captioning, and adapt interfaces for users with different needs—making the web more inclusive by default.</p>

        <h2>Practical Applications</h2>
        <p>Let's look at some concrete examples of how AI is being integrated into modern web applications:</p>

        <p><strong>Natural Language Interfaces:</strong> Instead of complex forms, users can describe what they want in plain language. The AI interprets the intent and executes the appropriate actions.</p>

        <p><strong>Smart Content Moderation:</strong> AI models can analyze user-generated content in real-time, identifying problematic material while understanding context and nuance.</p>

        <p><strong>Predictive Analytics:</strong> Applications can anticipate user needs, prefetch data, and optimize performance based on learned patterns.</p>

        <h2>Challenges and Considerations</h2>
        <p>While the potential is enormous, integrating AI into web applications comes with challenges. Privacy concerns, computational costs, and the need for explainable AI are all important considerations. Developers must balance the power of AI with responsible implementation.</p>

        <h2>Looking Ahead</h2>
        <p>The future of web development will likely involve even tighter integration between traditional development practices and AI capabilities. We'll see more hybrid approaches where developers and AI collaborate, each doing what they do best.</p>

        <p>The developers who thrive in this new landscape will be those who understand both the fundamentals of web development and how to effectively leverage AI tools. It's not about replacement—it's about augmentation and creating better experiences for users.</p>

        <h2>Conclusion</h2>
        <p>AI integration in web development is not a distant future—it's happening now. By embracing these tools thoughtfully and understanding their capabilities and limitations, we can build smarter, more efficient, and more user-friendly web applications than ever before.</p>
      `
    },
    {
      id: 2,
      title: "Building Scalable Microservices Architecture",
      excerpt: "Lessons learned from designing and deploying a distributed system that handles millions of requests...",
      date: "Nov 15, 2024",
      readTime: "8 min read",
      category: "Architecture",
      content: `
        <h2>The Journey to Microservices</h2>
        <p>When our monolithic application started showing signs of strain at scale, we knew it was time for a fundamental architectural shift. This is the story of how we transitioned to a microservices architecture that now handles millions of requests daily.</p>

        <h2>Why Microservices?</h2>
        <p>The decision to move to microservices wasn't taken lightly. Our monolith had served us well, but we were facing several critical challenges:</p>

        <p>• Deployment bottlenecks: Every small change required deploying the entire application<br/>
        • Scaling limitations: We couldn't scale individual components independently<br/>
        • Team coordination: Multiple teams working on the same codebase led to conflicts<br/>
        • Technology constraints: We were locked into a single tech stack</p>

        <h2>Design Principles</h2>
        <p><strong>1. Domain-Driven Design</strong><br/>
        We organized our services around business domains rather than technical layers. Each service owns its data and business logic, communicating with others through well-defined APIs.</p>

        <p><strong>2. API Gateway Pattern</strong><br/>
        Rather than having clients communicate directly with microservices, we implemented an API gateway that handles routing, authentication, rate limiting, and request aggregation.</p>

        <p><strong>3. Event-Driven Communication</strong><br/>
        For asynchronous operations, we adopted an event-driven architecture using message queues. This decoupled services and improved resilience.</p>

        <h2>Technology Stack</h2>
        <p>We chose technologies based on each service's specific needs:</p>

        <p>• <strong>Containerization:</strong> Docker for consistent environments<br/>
        • <strong>Orchestration:</strong> Kubernetes for automated deployment and scaling<br/>
        • <strong>Service Mesh:</strong> Istio for service-to-service communication<br/>
        • <strong>Message Queue:</strong> RabbitMQ for async messaging<br/>
        • <strong>Monitoring:</strong> Prometheus and Grafana for observability</p>

        <h2>Key Challenges and Solutions</h2>
        <p><strong>Data Consistency</strong><br/>
        With distributed data across services, maintaining consistency was crucial. We implemented the Saga pattern for distributed transactions and eventual consistency for non-critical operations.</p>

        <p><strong>Service Discovery</strong><br/>
        As services scaled and moved between hosts, we needed dynamic service discovery. Kubernetes' built-in DNS combined with service mesh capabilities solved this elegantly.</p>

        <p><strong>Monitoring and Debugging</strong><br/>
        Debugging distributed systems is notoriously difficult. We implemented distributed tracing with Jaeger, centralized logging with ELK stack, and comprehensive metrics collection.</p>

        <h2>Migration Strategy</h2>
        <p>We didn't migrate everything at once. Instead, we followed the strangler pattern:</p>

        <p>1. Identify bounded contexts in the monolith<br/>
        2. Extract one service at a time, starting with the least coupled<br/>
        3. Run both systems in parallel during migration<br/>
        4. Gradually route traffic to new services<br/>
        5. Retire old code once fully migrated</p>

        <h2>Lessons Learned</h2>
        <p><strong>Start with the Right Size</strong><br/>
        Our first services were too granular. We learned that microservices doesn't mean nano-services. Each service should have a clear business purpose.</p>

        <p><strong>Invest in DevOps Early</strong><br/>
        The operational complexity of microservices is real. Without proper CI/CD, monitoring, and deployment automation, managing dozens of services becomes unmanageable.</p>

        <p><strong>Documentation is Critical</strong><br/>
        With multiple services and teams, clear API documentation and service contracts are essential. We use OpenAPI specifications and maintain a service catalog.</p>

        <h2>Results</h2>
        <p>After a year of migration and refinement, we've seen significant improvements:</p>

        <p>• 99.9% uptime across all services<br/>
        • 50% reduction in deployment time<br/>
        • 3x improvement in peak load handling<br/>
        • Teams can deploy independently multiple times per day</p>

        <h2>Conclusion</h2>
        <p>Microservices architecture isn't a silver bullet, but for our scale and organizational structure, it was the right choice. The key is understanding your specific needs, investing in the right infrastructure, and being prepared for the increased operational complexity.</p>

        <p>If you're considering microservices, start small, learn from each step, and always keep your business goals in focus.</p>
      `
    },
    {
      id: 3,
      title: "The Art of Code Review: Best Practices",
      excerpt: "How to conduct meaningful code reviews that improve code quality and foster team collaboration...",
      date: "Nov 1, 2024",
      readTime: "6 min read",
      category: "Best Practices",
      content: `
        <h2>Why Code Reviews Matter</h2>
        <p>Code review is one of the most valuable practices in software development, yet it's often done poorly or skipped entirely. A good code review catches bugs, shares knowledge, maintains code quality, and builds team culture. Let's explore how to do it right.</p>

        <h2>The Mindset of a Great Reviewer</h2>
        <p><strong>Be Collaborative, Not Critical</strong><br/>
        Remember: you're reviewing code, not critiquing the person. The goal is to improve the codebase together. Approach reviews with curiosity and a learning mindset.</p>

        <p><strong>Ask Questions</strong><br/>
        Instead of "This is wrong," try "Can you help me understand why you chose this approach?" Questions promote discussion and often reveal considerations you hadn't thought of.</p>

        <h2>What to Look For</h2>
        <p><strong>1. Correctness</strong><br/>
        Does the code actually solve the problem? Are there edge cases that aren't handled? Will it work in production conditions?</p>

        <p><strong>2. Design and Architecture</strong><br/>
        Does the code fit well with the existing architecture? Is it following established patterns? Are abstractions at the right level?</p>

        <p><strong>3. Readability</strong><br/>
        Can you understand what the code does without extensive explanation? Are variable names clear? Is the logic easy to follow?</p>

        <p><strong>4. Tests</strong><br/>
        Are there appropriate tests? Do they cover edge cases? Are the tests themselves well-written and maintainable?</p>

        <p><strong>5. Performance</strong><br/>
        Are there obvious performance issues? Will this scale? Are there unnecessary database queries or API calls?</p>

        <h2>Effective Review Comments</h2>
        <p><strong>Be Specific</strong><br/>
        Bad: "This could be better"<br/>
        Good: "Consider using a Map here instead of an array for O(1) lookup time"</p>

        <p><strong>Explain the Why</strong><br/>
        Don't just point out issues—explain why they matter. This helps the author learn and makes your suggestions more persuasive.</p>

        <p><strong>Offer Solutions</strong><br/>
        When possible, suggest alternatives or provide code examples. This makes your feedback actionable and educational.</p>

        <p><strong>Use the Right Tone</strong><br/>
        Prefix suggestions with phrases like:<br/>
        • "Consider..."<br/>
        • "What do you think about..."<br/>
        • "I wonder if..."<br/>
        • "Nit:" (for minor, non-blocking suggestions)</p>

        <h2>Review Process Best Practices</h2>
        <p><strong>Review Promptly</strong><br/>
        Aim to review within 24 hours. Long delays disrupt the author's flow and signal that reviews aren't a priority.</p>

        <p><strong>Keep Pull Requests Small</strong><br/>
        Large PRs are harder to review thoroughly. Encourage breaking work into smaller, focused changes. A good rule of thumb: under 400 lines of code.</p>

        <p><strong>Use Checklists</strong><br/>
        Create a team checklist of common items to review. This ensures consistency and helps catch frequently missed issues.</p>

        <p><strong>Distinguish Must-Fix from Nice-to-Have</strong><br/>
        Use labels or prefixes to indicate severity:<br/>
        • "Blocking:" Must be fixed before merge<br/>
        • "Important:" Should be addressed<br/>
        • "Nit:" Nice to have but not critical</p>

        <h2>Handling Disagreements</h2>
        <p>Disagreements are natural and often lead to better solutions. When they arise:</p>

        <p>1. Assume good intent from both sides<br/>
        2. Focus on the code and its impact, not personal preferences<br/>
        3. Reference team guidelines or established patterns<br/>
        4. If stuck, involve a third party or take the discussion offline<br/>
        5. Document the decision for future reference</p>

        <h2>Receiving Reviews</h2>
        <p>Good code review is a two-way street. As an author:</p>

        <p>• Provide context in your PR description<br/>
        • Self-review before requesting review<br/>
        • Be open to feedback without taking it personally<br/>
        • Ask for clarification if you don't understand a comment<br/>
        • Thank reviewers for their time and insights</p>

        <h2>Automation is Your Friend</h2>
        <p>Use automated tools to catch mechanical issues so reviewers can focus on logic and design:</p>

        <p>• Linters for code style<br/>
        • Formatters for consistent formatting<br/>
        • Static analysis tools for common bugs<br/>
        • Automated tests for functionality<br/>
        • CI/CD to verify builds and tests pass</p>

        <h2>Cultural Impact</h2>
        <p>Code review is more than just quality control—it's a powerful tool for building team culture:</p>

        <p>• New team members learn the codebase and team standards<br/>
        • Knowledge spreads across the team<br/>
        • Best practices are reinforced<br/>
        • Team members feel ownership of the entire codebase<br/>
        • It creates opportunities for mentoring and learning</p>

        <h2>Conclusion</h2>
        <p>Effective code review is a skill that takes practice. Start by being kind, specific, and constructive. Focus on improvement rather than perfection. Remember that the goal isn't just better code—it's a better team.</p>

        <p>The best code reviews I've been part of feel like collaborative problem-solving sessions where everyone learns something. That's the standard we should all aim for.</p>
      `
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/50 backdrop-blur-lg border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Sam-Port
          </div>
          <div className="flex gap-6">
            {['Home', 'About', 'Projects', 'Blog', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition-colors"
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div 
          className="text-center transform transition-transform duration-300"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
          }}
        >
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <Code size={64} className="text-white" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Hi, I am Sam, 
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto">
            A Full-Stack Developer And A book nerd!
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            {/* I build innovative web applications and write about the future of technology*/}
            I build web applications, CLI tools and a little bit of Machine Learning
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              View Projects <ArrowRight size={20} />
            </a>
            <a href="#contact" className="border-2 border-purple-400 hover:bg-purple-400/20 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
              With expertise in modern web technologies and a deep interest in artificial intelligence, I build 
              applications that push the boundaries of what's possible on the web.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Beyond coding, I'm an avid technical writer who enjoys breaking down complex concepts and sharing 
              knowledge with the developer community. My articles focus on emerging technologies, best practices, 
              and the evolving landscape of software development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <Code size={40} className="mx-auto mb-3 text-purple-400" />
                <h3 className="font-semibold mb-2">Development</h3>
                <p className="text-sm text-gray-400">Full-stack web applications</p>
              </div>
              <div className="text-center p-6 bg-pink-500/10 rounded-xl border border-pink-500/20">
                <Rocket size={40} className="mx-auto mb-3 text-pink-400" />
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-gray-400">AI & emerging tech</p>
              </div>
              <div className="text-center p-6 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <Pencil size={40} className="mx-auto mb-3 text-purple-400" />
                <h3 className="font-semibold mb-2">Writing</h3>
                <p className="text-sm text-gray-400">Technical articles & blogs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <h3 className="text-2xl font-bold mb-3 text-purple-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-purple-500/20 px-3 py-1 rounded-full text-sm text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.link} className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">
                    <Github size={18} /> Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Latest Writing
          </h2>
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all cursor-pointer"
                onClick={() => setSelectedBlog(post)}
              >
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} /> {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-purple-300 hover:text-purple-400">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="text-pink-400 hover:text-pink-300 flex items-center gap-2 font-semibold">
                  Read Full Article <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-lg border-b border-purple-500/20 p-6 flex justify-between items-start">
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-purple-500/20 px-3 py-1 rounded-full text-sm text-purple-300">
                    {selectedBlog.category}
                  </span>
                  <span className="text-sm text-gray-400 flex items-center gap-2">
                    <Calendar size={16} /> {selectedBlog.date}
                  </span>
                  <span className="text-sm text-gray-400 flex items-center gap-2">
                    <Clock size={16} /> {selectedBlog.readTime}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-purple-300">{selectedBlog.title}</h2>
              </div>
              <button
                onClick={() => setSelectedBlog(null)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-purple-500/20 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>
            <div 
              className="p-8 overflow-y-auto max-h-[calc(90vh-140px)] prose prose-invert prose-purple max-w-none"
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8'
              }}
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            />
          </div>
        </div>
      )}


      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to explorin new opportunities and contributing to open-source projects. Reach put through one of my contacts below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:samukelogift@gmail.com" className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105">
              <Mail size={40} className="mx-auto mb-3 text-purple-400" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-400">samukelogift187@gmail.com</p>
            </a>
            <a href="https://github.com/SamukeloGift" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105">
              <Github size={40} className="mx-auto mb-3 text-pink-400" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-gray-400">@SamukeloGift</p>
            </a>
            <a href="https://www.linkedin.com/in/samukelo-gift-msimanga-672592284/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105">
              <Linkedin size={40} className="mx-auto mb-3 text-purple-400" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-400">/in/samukelo-gift-msimanga-672592284</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-purple-500/20 bg-black/40">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2025 Samukelo Msimanga</p>
        </div>
      </footer>
    </div>
    // </div>
  );
};

export default App;
