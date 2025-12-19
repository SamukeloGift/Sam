import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, Loader2, XCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formDataObj = new FormData(e.target);
    
    formDataObj.append("access_key", "dc18380b-f2c5-45a7-ae3e-cdbe99572049");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear inputs
        
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        console.error("Web3Forms Error:", data);
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 3000);
      }
    } catch (error) {
      console.error("Network Error:", error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
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
               {/* Hidden input to prevent captcha spam (optional but recommended by Web3Forms) */}
               <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                   <input 
                      type="text" 
                      id="name"
                      name="name" 
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
                      name="email" 
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
                    name="message" 
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
                      : formStatus === 'error'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                      : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg shadow-violet-500/25'
                  }`}
               >
                  {formStatus === 'submitting' ? (
                    <>Sending <Loader2 className="animate-spin" size={20} /></>
                  ) : formStatus === 'success' ? (
                    <>Message Sent <CheckCircle size={20} /></>
                  ) : formStatus === 'error' ? (
                    <>Error Sending <XCircle size={20} /></>
                  ) : (
                    <>Send Message <Send size={20} /></>
                  )}
               </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
