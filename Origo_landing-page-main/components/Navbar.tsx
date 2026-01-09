
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0a1e]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <Logo className="w-12 h-12 transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/20" />
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Origo
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button className="bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:from-blue-500 hover:to-fuchsia-500 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20 text-sm">
                Download Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0a1e] border-b border-white/10 py-4 px-4 space-y-2">
          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold mt-4">
            Download App
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
