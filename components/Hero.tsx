
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Since the Hero is sticky, we want it to move at 70% of normal scroll speed.
  // Normal speed would be moving it up by 'scrollY' pixels relative to the document.
  // 70% speed (reduced by 30%) means translating the element up by 0.7 * scrollY pixels.
  // This ensures the next section (moving at 100% speed) overtakes and hides it.
  const y = useTransform(scrollY, [0, 1000], [0, -700]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <div className="relative h-full w-full bg-black transition-colors duration-500">
      <motion.div 
        style={{ y, opacity }}
        className="relative h-full w-full flex flex-col justify-center px-6 md:px-12"
      >
        {/* Background Cinematic Image */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=2000" 
            alt="Cinematic Portrait"
            className="w-full h-full object-cover object-center grayscale dark:grayscale-0"
          />
          {/* Adaptive Overlays */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-900/40 via-transparent to-blue-900/40 mix-blend-screen opacity-60 dark:opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
        </div>

        {/* Main Content Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col justify-end pb-24 space-y-20 md:space-y-32 text-white">
          
          <div className="space-y-12">
            {/* Headline Text */}
            <div className="max-w-2xl space-y-8">
              <h1 className="text-2xl md:text-3xl font-medium tracking-tight leading-snug">
                Pick a plan, submit a job request, <br />
                and your <span className="font-bold">イメージ</span> will kickoff <br />
                within 24 hours.
              </h1>
              
              {/* CTA */}
              <div className="relative group w-fit cursor-pointer">
                <button className="text-lg font-medium tracking-tight pr-4">Explore Now</button>
                <span className="absolute right-0 top-1.5">⌝</span>
                <div className="w-full h-[1px] bg-white mt-2"></div>
              </div>
            </div>

            {/* Side Info List */}
            <div className="space-y-1 text-sm font-medium tracking-wide">
              <p className="opacity-50">01/ Strategy</p>
              <p>Automation</p>
              <p>Deployment</p>
            </div>
          </div>

          {/* Huge Bottom Branding */}
          <div className="w-full flex justify-between items-end border-t border-white/10 pt-8 overflow-hidden">
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-huge font-black tracking-tighter uppercase whitespace-nowrap flex items-end gap-12"
            >
              <span className="text-white/20 dark:text-blue-200/50">X</span>
            </motion.div>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20 text-[10px] font-bold tracking-[0.5em] uppercase text-white">
          Scroll
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
