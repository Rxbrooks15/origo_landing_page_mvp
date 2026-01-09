
import React from 'react';
import { BookOpen, Sparkles, ScrollText, ChevronRight, Compass } from 'lucide-react';

const CreasedCosmos: React.FC = () => {
  return (
    <section id="cosmos" className="py-12 pb-32 relative bg-[#0f0a1e] overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Background elements - Nebula atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(217,70,239,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-fuchsia-400 text-[10px] font-black tracking-[0.4em] uppercase mb-8">
            The Eternal Archive
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight italic">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-fuchsia-500">CREASED</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Behold the definitive chronicle of the Origo multiverse. A single fold that spans across dimensions.
          </p>
        </div>

        {/* Featured Single Book - Styled after user image */}
        <div className="max-w-3xl mx-auto group perspective-1000">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/20 bg-[#1E293B]/40 transition-all duration-1000 group-hover:scale-[1.02] group-hover:border-blue-500/40 shadow-[0_0_100px_rgba(217,70,239,0.15)]">
            
            {/* Main Visual: Representation of the golden stairs to portal */}
            <div className="absolute inset-0 bg-[#0f0a1e]">
               {/* Surreal Portal Image Placeholder */}
               <img 
                 src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1200" 
                 alt="The Folded Path" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
               />
               
               {/* Decorative Gradient Overlays to match the user's pink/purple cloud vibe */}
               <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-900/40 via-transparent to-[#0f0a1e]" />
               <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0f0a1e] via-[#0f0a1e]/80 to-transparent" />
               
               {/* Floating Origami Visual Elements (Simulated) */}
               <div className="absolute top-1/4 left-1/4 w-12 h-12 text-blue-400 animate-bounce opacity-40 group-hover:opacity-100 transition-opacity">
                 <Bird size={48} className="rotate-12" />
               </div>
               <div className="absolute top-1/3 right-1/4 w-8 h-8 text-fuchsia-400 animate-pulse opacity-30 group-hover:opacity-100 delay-500">
                 <Bird size={32} className="-rotate-45" />
               </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <div className="mb-8 transform transition-all duration-700 group-hover:-translate-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-fuchsia-500/20 rounded-2xl border border-fuchsia-500/30 shadow-[0_0_20px_rgba(217,70,239,0.3)]">
                    <Sparkles className="w-6 h-6 text-fuchsia-400" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-400">Volume 01: The Eternal Path</span>
                </div>
                
                <h3 className="text-5xl font-black text-white mb-6 tracking-tighter leading-none">
                  THE FOLDED <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-400">ASCENSION</span>
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed font-light mb-8 max-w-lg">
                  Trace the golden steps through the purple mist. Every crease is a choice, every choice is a destination. Discover the path that leads beyond the physical realm.
                </p>

                <div className="flex flex-wrap gap-4">
                   <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                     Multiverse-Ready
                   </div>
                   <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                     Rare Script
                   </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <button className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] text-white hover:text-fuchsia-400 transition-all group/btn">
                  Open Chronicle <ChevronRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
                <div className="flex items-center gap-3">
                  <Compass size={24} className="text-white/20 group-hover:text-white transition-colors" />
                  <BookOpen size={24} className="text-white/20 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </div>
          
          {/* External Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-transparent to-fuchsia-500/20 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
        </div>

        {/* Footer info for the Cosmos page */}
        <div className="mt-24 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-[0.5em] font-bold mb-12">Entry Deciphered • 100% Complete</p>
          <div className="flex justify-center gap-12">
            <div className="flex flex-col items-center">
               <div className="h-12 w-px bg-gradient-to-b from-transparent via-fuchsia-500/50 to-transparent" />
               <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest mt-4">Origin Point</span>
            </div>
            <div className="flex flex-col items-center">
               <div className="h-12 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
               <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest mt-4">Sequence 01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Bird: React.FC<{ size: number; className?: string }> = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M10 50 L40 20 L90 10 L60 80 L50 60 Z" />
    <path d="M40 20 L50 60" />
    <path d="M10 50 L50 60" />
  </svg>
);

export default CreasedCosmos;
