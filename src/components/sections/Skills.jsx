import React from 'react';
import { Cpu } from 'lucide-react';
import { skills } from '../../data/portfolioData';

const Skills = () => {
  return (
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
  );
};

export default Skills;
