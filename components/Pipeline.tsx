
import React from 'react';
import { motion } from 'framer-motion';
import { PIPELINE_STEPS } from '../constants';
import { MessageSquare, Cpu, Layers, Github, Zap, Globe } from 'lucide-react';

const IconMap: any = {
  MessageSquare, Cpu, Layers, Github, Zap, Globe
};

const Pipeline: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="flex items-end justify-between border-b border-black/5 dark:border-white/10 pb-8 transition-colors">
        <div className="space-y-2">
          <h2 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">(01 / AI Pipeline)</h2>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300 transition-colors">The Automation Workflow</p>
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">Step-by-step logic</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PIPELINE_STEPS.map((step, idx) => {
          const Icon = IconMap[step.icon];
          return (
            <motion.div 
              key={step.id}
              whileHover={{ y: -5 }}
              className="p-10 rounded-[40px] bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm dark:shadow-none space-y-8 group transition-all"
            >
              <div className="w-14 h-14 rounded-full border border-black/5 dark:border-white/10 flex items-center justify-center text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                <Icon size={24} strokeWidth={2} />
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-black text-gray-300 dark:text-gray-600 uppercase tracking-[0.2em]">Step 0{idx + 1}</span>
                <h4 className="text-xl font-black uppercase tracking-tighter text-black dark:text-white">{step.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium transition-colors">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Pipeline;
