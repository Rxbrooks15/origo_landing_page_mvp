
import React from 'react';
import { Bird, Zap, Clock, TrendingUp, Store, User, Sun, Sparkles } from 'lucide-react';

const OrigamiSection: React.FC = () => {
  return (
    <section id="cranes" className="py-32 relative bg-[#0f0a1e]">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Visual Synthesis</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Your origami cranes are living digital assets. Physical exploration increases their complexity, rarity, and market value.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-gradient-to-b from-[#1E293B] to-[#0f0a1e] rounded-[3.5rem] p-10 border border-white/10 shadow-2xl shadow-blue-500/10">
          <div className="relative flex flex-col items-center justify-center mb-12">
            <div className="w-64 h-64 rounded-full border-2 border-white/5 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-t-2 border-blue-400 border-l-2 border-l-fuchsia-500 animate-[spin_10s_linear_infinite] opacity-40" />
              <div className="relative z-10 p-12 bg-white/5 rounded-full backdrop-blur-xl border border-white/10 shadow-inner">
                <Bird size={80} className="text-white/90 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
              </div>
            </div>

            <div className="mt-10 text-center">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-500">82%</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mt-3 font-bold">Growth Sequence Active</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-10">
            <StatCard icon={<Zap size={18} />} value="82%" label="Progress" active />
            <StatCard icon={<Clock size={18} />} value="214m" label="Exploration" />
            <StatCard icon={<TrendingUp size={18} />} value="1.2k" label="Gems" />
          </div>

          <div className="flex justify-between items-center px-4 pt-6 border-t border-white/5">
            <NavItem icon={<Sun size={20} />} label="Quest" />
            <NavItem icon={<Store size={20} />} label="Market" />
            <NavItem icon={<Bird size={20} />} label="Cranes" active />
            <NavItem icon={<User size={20} />} label="Stats" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-blue-400 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Digital Evolution</h3>
            <p className="text-gray-400">Your cranes evolve as you reach new milestones. Each step outdoors adds complexity and unique visual traits to your assets.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-fuchsia-400 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Value Appreciation</h3>
            <p className="text-gray-400">The rarer the crane and the more energy it collects from your journeys, the higher its value in the Origo ecosystem.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Store className="text-slate-400 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Crumble & Trade</h3>
            <p className="text-gray-400">Crumble your cranes for premium assets or trade them in our secure decentralized gallery with other seekers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string; active?: boolean }> = ({ icon, value, label, active }) => (
  <div className={`p-4 rounded-3xl text-center border transition-all ${active ? 'bg-white/10 border-white/20' : 'bg-black/20 border-white/5'}`}>
    <div className={`flex justify-center mb-2 ${active ? 'text-blue-400' : 'text-gray-500'}`}>
      {icon}
    </div>
    <div className="text-lg font-bold text-white">{value}</div>
    <div className="text-[9px] uppercase tracking-widest text-gray-500 mt-1">{label}</div>
  </div>
);

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <div className={`flex flex-col items-center gap-1.5 cursor-pointer group`}>
    <div className={`${active ? 'text-blue-400' : 'text-gray-500 group-hover:text-white'} transition-colors`}>
      {icon}
    </div>
    <span className={`text-[9px] font-bold uppercase tracking-tighter ${active ? 'text-blue-400' : 'text-gray-500 group-hover:text-white'} transition-colors`}>
      {label}
    </span>
  </div>
);

export default OrigamiSection;
