import React from 'react';
import { Code, ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
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
  );
};

export default Hero;
