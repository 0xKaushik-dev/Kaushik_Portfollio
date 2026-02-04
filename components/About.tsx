
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] transition-colors">(About Me)</h2>
        <div className="h-[1px] flex-grow bg-black/5 dark:bg-white/10 transition-colors"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start transition-colors">
        <div className="space-y-6">
          <p className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-tight text-black dark:text-white">
            I don’t just design websites — <span className="font-serif italic text-gray-400 dark:text-gray-500">I automate how they are built.</span>
          </p>
          <div className="flex space-x-4">
             <div className="px-6 py-4 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm transition-all">
                <span className="block text-3xl font-black text-black dark:text-white">2026</span>
                <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest">Pipeline Ready</span>
             </div>
             <div className="px-6 py-4 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm transition-all">
                <span className="block text-3xl font-black text-black dark:text-white">Vercel</span>
                <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest">Certified</span>
             </div>
          </div>
        </div>
        
        <div className="space-y-6 text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium transition-colors">
          <p>
            I’m Kaushik Mohanty, focused on building websites using AI-driven workflows. 
          </p>
          <p>
            My process reduces development time by automating structure, design, and deployment — while keeping the output clean, responsive, and production-ready.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
