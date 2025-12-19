import React from 'react';
import { Code, Rocket, Pencil } from 'lucide-react';

const About = () => {
  return (
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
  );
};

export default About;
