import React from 'react';
import Navbar from './components/Navbar';
import BackgroundCanvas from './components/BackgroundCanvas';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950 text-white relative overflow-hidden">
      
      {/* Background Animation */}
      <BackgroundCanvas />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 sm:py-8 px-4 sm:px-6 border-t border-violet-500/20 bg-black/40">
        <div className="container mx-auto text-center text-gray-400 text-sm sm:text-base">
          <p>© 2025 Samukelo Msimanga</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
