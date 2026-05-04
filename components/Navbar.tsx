
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronRight, BookOpen, Bird } from 'lucide-react';
import Logo from './Logo';

type MenuState = 'cosmos' | null;

interface NavbarProps {
  onStoriesClick: () => void;
  onCollisionClick: () => void;
  onGlobeClick: () => void;
  isHome: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onStoriesClick, onCollisionClick, onGlobeClick, isHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuState>(null);

  const toggleMenu = (menu: MenuState) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
      setIsOpen(false);
    }
  };

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.reload(); // Simple way to reset state to home
    }
    setIsOpen(false);
    setActiveMenu(null);
  };

  // Close menus on scroll
  useEffect(() => {
    const handleScroll = () => {
      setActiveMenu(null);
      setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0f0a1e]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div 
              className="flex items-center gap-3 group cursor-pointer" 
              onClick={handleLogoClick}
            >
              <Logo className="w-10 h-10 transition-all duration-300 group-hover:scale-105" />
              <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                Origo
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center space-x-8">
                {/* 3D Globe View Link */}
                <button
                  onClick={onGlobeClick}
                  className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Sparkles size={14} className="text-blue-400" />
                  3D Globe View
                </button>

                {/* The Creased Cosmos Link */}
                <button
                  onClick={onStoriesClick}
                  className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <BookOpen size={14} className="text-fuchsia-400" />
                  The Creased Cosmos
                </button>

                {/* Discovery Trigger */}
                <button
                  onClick={() => toggleMenu('cosmos')}
                  className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all flex items-center gap-2 ${
                    activeMenu === 'cosmos' ? 'text-fuchsia-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                   Discovery {activeMenu === 'cosmos' ? <X size={12} /> : <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse" />}
                </button>
              </div>
              <a 
                href="https://apps.apple.com/us/iphone/today"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:from-blue-500 hover:to-fuchsia-500 text-white px-8 py-2.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/20 text-xs tracking-widest uppercase"
              >
                Join Now
              </a>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={onStoriesClick}
                className="p-2 text-fuchsia-400"
              >
                <BookOpen size={20} />
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Cosmos Discovery Mega Menu */}
        {activeMenu === 'cosmos' && (
          <div className="absolute top-20 left-0 right-0 bg-[#0f0a1e]/95 backdrop-blur-3xl border-b border-white/10 overflow-hidden animate-in slide-in-from-top-4 fade-in duration-500">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(217,70,239,0.1),transparent_50%)] pointer-events-none" />
             <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: Chronicle Visual */}
                <div className="relative flex justify-center lg:justify-start">
                   <div className="relative group w-full max-w-sm">
                      <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/20 to-fuchsia-500/20 rounded-[3.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                      <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/20 bg-[#1e293b]/40 shadow-2xl">
                         <img src="/collision_catastrophe.png" alt="Cosmos" className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110" />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1e] via-transparent to-fuchsia-500/10" />
                         <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 text-blue-400 animate-bounce">
                               <Bird size={64} className="drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
                            </div>
                         </div>
                         <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10">
                            <div className="flex items-center gap-4">
                               <div className="w-10 h-10 bg-fuchsia-500/20 rounded-xl flex items-center justify-center">
                                  <Sparkles className="text-fuchsia-400" size={20} />
                               </div>
                               <div>
                                  <div className="text-white text-sm font-bold">The Folded Path</div>
                                  <div className="text-[9px] text-gray-500 uppercase tracking-widest font-black">Sequence 01</div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Right: Eternal Archive Content */}
                <div className="space-y-8">
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">Featured Chronicles</span>
                    <div className="grid grid-cols-1 gap-4">
                      <button 
                        onClick={() => {
                          onStoriesClick();
                          setActiveMenu(null);
                        }}
                        className="group/item flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-left"
                      >
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-fuchsia-500/10 text-fuchsia-400">
                          <BookOpen size={24} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white group-hover/item:text-fuchsia-400 transition-colors">The Eternal Archive</div>
                          <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-[0.4em]">Browse All Stories</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                    <button 
                      onClick={() => {
                        onStoriesClick();
                        setActiveMenu(null);
                      }}
                      className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.4em] text-white hover:text-fuchsia-400 transition-all"
                    >
                      Enter Full Archive <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#0f0a1e] border-b border-white/10 py-8 px-6 space-y-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4">
              <button onClick={() => { onGlobeClick(); setIsOpen(false); }} className="text-[12px] font-black uppercase tracking-[0.4em] text-blue-400 flex items-center justify-between py-2 border-b border-white/5">
                3D Globe View <Sparkles size={16} />
              </button>
              <button onClick={() => { onStoriesClick(); setIsOpen(false); }} className="text-[12px] font-black uppercase tracking-[0.4em] text-fuchsia-400 flex items-center justify-between py-2 border-b border-white/5">
                The Creased Cosmos <BookOpen size={16} />
              </button>
              <button onClick={() => toggleMenu('cosmos')} className="text-[12px] font-black uppercase tracking-[0.4em] text-fuchsia-400 flex items-center justify-between py-2 border-b border-white/5">
                Discovery <BookOpen size={16} />
              </button>
            </div>
            <a href="https://apps.apple.com/us/iphone/today" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-center text-sm">
              Join Now
            </a>
          </div>
        )}
      </nav>

      {/* Backdrop for Mega Menus */}
      {activeMenu && (
        <div 
          className="fixed inset-0 bg-black/40 z-[90] animate-in fade-in duration-500"
          onClick={() => setActiveMenu(null)}
        />
      )}
    </>
  );
};

export default Navbar;
