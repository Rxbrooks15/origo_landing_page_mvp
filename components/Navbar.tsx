import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0a1e]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={scrollToTop}
          >
            <Logo className="w-10 h-10 transition-all duration-300 group-hover:scale-105" />
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Origo
            </span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center">
              <a 
                href="https://apps.apple.com/us/iphone/today"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:from-blue-500 hover:to-fuchsia-500 text-white px-8 py-2.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/20 text-xs tracking-widest uppercase"
              >
                Join Now
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0f0a1e] border-b border-white/10 py-8 px-6 space-y-6 animate-in slide-in-from-top duration-300">
          <a 
            href="https://apps.apple.com/us/iphone/today"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-center text-sm"
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;