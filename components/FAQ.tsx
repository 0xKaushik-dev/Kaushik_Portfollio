
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-12 py-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] transition-colors">(FAQ)</h2>
        <div className="h-[1px] flex-grow bg-black/5 dark:bg-white/10 transition-colors"></div>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {FAQS.map((faq, idx) => (
          <div key={idx} className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-all">
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-8 py-8 flex items-center justify-between text-left group"
            >
              <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white transition-colors">{faq.question}</span>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === idx ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-gray-50 dark:bg-white/10 text-gray-400 dark:text-gray-500'}`}>
                {openIndex === idx ? (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                )}
              </div>
            </button>
            <div className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-64 pb-8' : 'max-h-0'}`}>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg font-medium transition-colors">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
