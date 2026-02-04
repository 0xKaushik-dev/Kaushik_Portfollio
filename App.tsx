
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pipeline from './components/Pipeline';
import TechStack from './components/TechStack';
import Work from './components/Work';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Testimonial } from './components/ui/design-testimonial';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      document.body.style.backgroundColor = '#000';
    } else {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#f8f8f8';
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Enhanced "appear" variants for a more premium look
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      scale: 0.98,
      filter: 'blur(8px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className={`relative min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black overflow-x-hidden ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground dark:bg-black dark:text-white transition-colors duration-500">
        
        {/* Custom Cursor */}
        <div 
          className="custom-cursor hidden md:block z-[9999] opacity-50 dark:opacity-100"
          style={{ transform: `translate(${mousePos.x - 10}px, ${mousePos.y - 10}px)` }}
        />

        <Header 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          onNavClick={scrollTo} 
        />
        
        <main className="relative">
          {/* Hero Section - Sticky to allow content to slide over it */}
          <section id="home" className="sticky top-0 z-0 h-screen w-full overflow-hidden">
            <Hero />
          </section>

          {/* Wrapper for the rest of the content with rounded top edge */}
          <div className="relative z-10 bg-background dark:bg-black rounded-t-[40px] md:rounded-t-[100px] transition-all duration-500 shadow-[0_-50px_100px_rgba(0,0,0,0.1)] dark:shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
            <div className="max-w-4xl mx-auto px-6 space-y-32 py-32">
              
              <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
                <About />
              </motion.section>

              <motion.section id="pipeline" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
                <Pipeline />
              </motion.section>

              <motion.section id="tech" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
                <TechStack />
              </motion.section>

              <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
                <Work />
              </motion.section>

              {/* EXCLUDED Testimonials Section - Static container, internal animations only */}
              <section id="testimonials" className="space-y-12">
                <div className="flex items-center space-x-4">
                  <h2 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] transition-colors">(03 / Recognition)</h2>
                  <div className="h-[1px] flex-grow bg-black/5 dark:bg-white/10 transition-colors"></div>
                </div>
                <Testimonial />
              </section>

              <motion.section id="services" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
                <Services />
              </motion.section>

              <motion.section id="faq" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
                <FAQ />
              </motion.section>
            </div>
          </div>
        </main>

        <Footer onNavClick={scrollTo} />

        {/* Mobile Fullscreen Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[120] bg-black text-white flex flex-col items-center justify-center space-y-8"
            >
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-8 p-2 text-white/50 hover:text-white transition-colors"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              {['Home', 'About', 'Pipeline', 'Projects', 'Services', 'Contact'].map((item, idx) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-5xl font-extrabold tracking-tighter hover:text-gray-400 transition-all"
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
