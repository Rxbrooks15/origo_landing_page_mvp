
import React from 'react';
import { Bird, Zap, Clock, TrendingUp, Store, User, Sun } from 'lucide-react';

const OrigamiSection: React.FC = () => {
  return (
    <section id="cranes" className="py-24 relative bg-[#0f0a1e]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E293B]/50 via-[#0f0a1e] to-[#0f0a1e] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Sunlight into Digital Art</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Origo isn't just a tool; it's a quest. Collect digital origami cranes that grow in rarity and value the more you interact with the natural light.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-gradient-to-b from-[#1E293B] to-[#0f0a1e] rounded-[3rem] p-8 border border-white/10 shadow-2xl shadow-blue-900/40">
          
          <div className="relative flex flex-col items-center justify-center mb-12">
            <div className="w-64 h-64 rounded-full border-4 border-white/5 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-t-4 border-blue-400 border-l-4 border-l-fuchsia-500 animate-spin transition-all duration-1000 opacity-60" style={{ animationDuration: '8s' }} />
              
              <div className="relative z-10 p-12 bg-white/5 rounded-full backdrop-blur-sm">
                <Bird size={80} className="text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
              </div>

              <div className="absolute top-4 left-1/4 w-3 h-3 bg-blue-400 rounded-full blur-[2px] shadow-[0_0_8px_#3b82f6]" />
            </div>

            <div className="mt-8 text-center">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-fuchsia-400">35%</div>
              <div className="text-sm uppercase tracking-[0.2em] text-gray-400 mt-2">Ready to charge</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <StatCard icon={<Zap size={20} />} value="35%" label="Charge" active />
            <StatCard icon={<Clock size={20} />} value="142m" label="Sun Time" />
            <StatCard icon={<TrendingUp size={20} />} value="2,450" label="Value" />
          </div>

          <div className="flex justify-between items-center px-4 pt-4 border-t border-white/5 opacity-80">
            <NavItem icon={<Sun size={20} />} label="Charge" />
            <NavItem icon={<Store size={20} />} label="Crumble" />
            <NavItem icon={<Bird size={20} />} label="Cranes" />
            <NavItem icon={<User size={20} />} label="Profile" active />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="text-blue-400 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Solar Charging</h3>
            <p className="text-gray-400">Exposure to real sunlight fuels your digital origami. Origo uses smart sensors to track light intensity and quality.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-fuchsia-400 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Value Appreciation</h3>
            <p className="text-gray-400">The rarer the crane and the more solar energy it absorbs, the higher its value in the Origo ecosystem.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Store className="text-slate-400 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Crumble & Trade</h3>
            <p className="text-gray-400">Crumble your cranes for premium assets or trade them in our secure decentralized gallery.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string; active?: boolean }> = ({ icon, value, label, active }) => (
  <div className={`p-4 rounded-2xl text-center border transition-colors ${active ? 'bg-white/10 border-white/20' : 'bg-black/20 border-white/5'}`}>
    <div className={`flex justify-center mb-2 ${active ? 'text-blue-400' : 'text-gray-400'}`}>
      {icon}
    </div>
    <div className="text-lg font-bold">{value}</div>
    <div className="text-[10px] uppercase tracking-wider text-gray-500">{label}</div>
  </div>
);

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <div className={`flex flex-col items-center gap-1 cursor-pointer group`}>
    <div className={`${active ? 'text-blue-400' : 'text-gray-500 group-hover:text-white'} transition-colors`}>
      {icon}
    </div>
    <span className={`text-[10px] ${active ? 'text-blue-400 font-bold' : 'text-gray-500 group-hover:text-white'} transition-colors`}>
      {label}
    </span>
    {active && <div className="w-4 h-0.5 bg-blue-400 rounded-full mt-0.5" />}
  </div>
);

export default OrigamiSection;
