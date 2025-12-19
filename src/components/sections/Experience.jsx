import React from 'react';
import { Briefcase } from 'lucide-react';
import { experience } from '../../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="relative">
          <div className="absolute left-0 sm:left-1/2 h-full w-0.5 bg-gradient-to-b from-violet-500/0 via-violet-500/50 to-violet-500/0 transform -translate-x-1/2 sm:translate-x-0 ml-4 sm:ml-0"></div>
          
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className={`relative flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 sm:translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 border-4 border-slate-900 z-10 ml-4 sm:ml-0 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                
                <div className="hidden sm:block w-1/2"></div>
                
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
  );
};

export default Experience;
