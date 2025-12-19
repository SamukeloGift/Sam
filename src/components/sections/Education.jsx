import React from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { education, certificates } from '../../data/portfolioData';

const Education = () => {
  return (
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
  );
};

export default Education;
