
import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Music } from 'lucide-react';

interface FooterProps {
  onNavClick: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="mt-20 px-4 md:px-6 pb-6">
      <div className="bg-black text-white rounded-[40px] md:rounded-[80px] p-8 md:p-24 space-y-20">
        {/* Top Section: CTA */}
        <div className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-7xl font-medium tracking-tight leading-[1.1]">
              Ready to work with a<br />
              <span className="text-gray-500">professional creative?</span>
            </h2>
          </div>

          <div className="space-y-6">
            <a 
              href="mailto:kaushik@example.com"
              className="group flex items-center space-x-2 text-xl md:text-2xl font-medium hover:opacity-70 transition-opacity"
            >
              <span>Get in touch</span>
              <span className="inline-block transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
            
            <p className="text-gray-400 font-medium text-lg italic">
              // New York EDT (UDT-4)
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          {[
            { Icon: Twitter, label: 'X' },
            { Icon: Instagram, label: 'Instagram' },
            { Icon: Music, label: 'TikTok' }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href="#"
              whileHover={{ scale: 1.1, backgroundColor: '#333' }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white transition-colors border border-white/5"
            >
              <social.Icon size={20} strokeWidth={1.5} />
            </motion.a>
          ))}
        </div>

        {/* Bottom Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-white/10">
          <div className="space-y-8">
            <h4 className="text-gray-500 font-medium uppercase tracking-widest text-xs">Menu</h4>
            <nav className="flex flex-col space-y-4">
              {['Home', 'Work', 'About', 'Services', 'Contact', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => onNavClick(item.toLowerCase())}
                  className="text-left text-lg font-medium text-white hover:text-gray-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-8">
            <h4 className="text-gray-500 font-medium uppercase tracking-widest text-xs">Legal</h4>
            <nav className="flex flex-col space-y-4">
              {['404 Page', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-lg font-medium text-white hover:text-gray-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Branding/Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 pt-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
          <div className="space-y-2">
            <p>Kaushik Mohanty</p>
            <p>AI Website Automation Pipeline</p>
          </div>
          <p>© 2026 Kaushik Mohanty</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
