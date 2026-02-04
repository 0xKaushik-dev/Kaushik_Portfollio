
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="flex items-center space-x-4">
        <h2 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">(Our Services)</h2>
        <div className="h-[1px] flex-grow bg-black/5 dark:bg-white/10 transition-colors"></div>
      </div>

      <div className="grid gap-8">
        {SERVICES.map((s, idx) => (
          <div key={s.id} className={`p-12 rounded-[48px] border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm hover:shadow-xl dark:hover:bg-white/10 transition-all`}>
             <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="space-y-6">
                   <span className="text-[10px] font-black text-gray-300 dark:text-gray-600 uppercase tracking-[0.2em]">Solution 0{idx + 1}</span>
                  <h4 className="text-4xl font-black uppercase tracking-tighter text-black dark:text-white transition-colors">{s.title}</h4>
                  <p className="text-xl max-w-md text-gray-500 dark:text-gray-400 font-medium transition-colors">{s.description}</p>
                </div>
                <ul className="space-y-4 pt-4">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center space-x-3 text-xs font-black uppercase tracking-widest text-black dark:text-white transition-colors">
                      <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
