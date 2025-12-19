import React, { useState } from 'react';
import { Calendar, ArrowRight, X, Clock } from 'lucide-react';
import { blogPosts } from '../../data/portfolioData';

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <>
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
    </>
  );
};

export default Blog;
