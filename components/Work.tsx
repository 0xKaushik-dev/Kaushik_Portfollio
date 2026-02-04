
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex items-end justify-between border-b border-black/5 dark:border-white/10 pb-8 transition-colors">
        <div className="space-y-2">
          <h2 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">(02 / Prototypes)</h2>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300 transition-colors">AI-Generated Portfolio Showcase</p>
        </div>
      </div>

      <div className="space-y-24">
        {PROJECTS.map((project) => (
          <motion.div 
            key={project.id} 
            className="group cursor-pointer space-y-8"
            whileHover="hover"
          >
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block outline-none"
            >
              <div className="overflow-hidden rounded-[48px] bg-gray-100 dark:bg-gray-900 relative aspect-video shadow-2xl transition-colors">
                <motion.img 
                  variants={{
                    hover: { scale: 1.05 }
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute top-8 left-8">
                  <span className="bg-white/90 dark:bg-black/80 backdrop-blur-md px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm dark:text-white transition-colors">
                    {project.category}
                  </span>
                </div>
              </div>
            </a>
            
            <div className="grid md:grid-cols-2 gap-12 px-4">
              <div className="space-y-4">
                <h3 className="text-4xl font-black tracking-tighter uppercase text-black dark:text-white transition-colors">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xl font-medium leading-relaxed transition-colors">{project.description}</p>
              </div>
              <div className="flex flex-col justify-between items-end">
                <div className="flex flex-wrap gap-2 justify-end">
                  {project.highlights.map(h => (
                    <span key={h} className="bg-white dark:bg-white/5 px-4 py-2 rounded-2xl border border-black/5 dark:border-white/10 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 shadow-sm transition-all">
                      {h}
                    </span>
                  ))}
                </div>
                <motion.a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hover: { x: 10 }
                  }}
                  className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest pt-8 text-black dark:text-white transition-colors hover:opacity-70"
                >
                  <span>Launch Live</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
