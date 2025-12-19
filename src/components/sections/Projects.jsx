import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/portfolioData';

const Projects = () => {
  return (
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
  );
};

export default Projects;
