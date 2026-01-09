
import React from 'react';
import { Sun, Store, Bird, Trophy, Clock, TrendingUp, Sparkles, Moon } from 'lucide-react';

const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[3rem] h-[640px] w-[320px] shadow-2xl overflow-visible">
      {/* Physical Phone Buttons */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

      {/* Screen Container */}
      <div className="rounded-[2.2rem] overflow-hidden w-full h-full bg-gradient-to-b from-[#2D1B4E] via-[#4A2452] to-[#8B3D48] text-white flex flex-col font-sans relative">
        
        {/* iOS Top Bar Simulation */}
        <div className="px-6 pt-4 flex justify-between items-center text-[10px] font-bold z-20">
          <div className="flex items-center gap-1">
            <span>12:22</span>
            <Moon size={10} fill="currentColor" />
          </div>
          <div className="flex items-center gap-1.5">
             <div className="flex gap-0.5 items-end h-2">
                <div className="w-0.5 h-1 bg-white/40" />
                <div className="w-0.5 h-1.5 bg-white/40" />
                <div className="w-0.5 h-2 bg-white" />
                <div className="w-0.5 h-2 bg-white" />
             </div>
             <span className="text-[9px]">5G</span>
             <div className="w-5 h-2.5 border border-white/40 rounded-[2px] relative p-[1px]">
               <div className="h-full bg-white w-[63%]" />
             </div>
             <span className="text-[9px]">63</span>
          </div>
        </div>

        {/* Sunlight Crane Header */}
        <div className="mt-4 text-center z-20">
          <h1 className="text-[11px] font-medium text-white/60 tracking-wide">Sunlight Crane</h1>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow flex flex-col items-center px-4 pt-8">
          
          {/* Circular Progress Area */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Background Arc */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="110"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
                className="text-white/5"
              />
              {/* Foreground Arc */}
              <circle
                cx="128"
                cy="128"
                r="110"
                stroke="url(#gradient)"
                strokeWidth="4"
                strokeDasharray="691"
                strokeDashoffset={691 * (1 - 0.35)}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Dot on Progress */}
            <div 
              className="absolute w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_8px_#FBBF24]"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(36deg) translateY(-110px)'
              }}
            />

            {/* Origami Crane Visual */}
            <div className="z-10 bg-white/5 backdrop-blur-md rounded-full p-10 border border-white/10">
              <Bird size={80} className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
            </div>
          </div>

          {/* Large Percentage */}
          <div className="mt-8 text-center">
            <div className="text-6xl font-black text-[#FBBF24] tracking-tighter">35%</div>
            <div className="text-sm text-white/70 mt-2 font-medium">Ready to charge</div>
          </div>

          {/* Stat Cards Grid */}
          <div className="w-full grid grid-cols-3 gap-3 mt-12">
            <StatBox icon={<Sparkles size={16} className="text-yellow-400" />} value="35%" label="Charge" active />
            <StatBox icon={<Clock size={16} className="text-yellow-400" />} value="142m" label="Sun Time" />
            <StatBox icon={<TrendingUp size={16} className="text-yellow-400" />} value="2,450" label="Value" />
          </div>
        </div>

        {/* Tab Bar Navigation */}
        <div className="h-20 bg-black/30 backdrop-blur-xl flex items-center justify-between px-6 pb-2 border-t border-white/5">
           <TabItem icon={<Sun size={20} />} label="Charge" active />
           <TabItem icon={<Store size={20} />} label="Crumble" />
           <TabItem icon={<Bird size={20} />} label="Cranes" />
           <TabItem icon={<Trophy size={20} />} label="Rewards" />
        </div>

        {/* iOS Home Indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full" />

      </div>
    </div>
  );
};

const StatBox: React.FC<{ icon: React.ReactNode; value: string; label: string; active?: boolean }> = ({ icon, value, label, active }) => (
  <div className={`p-3 rounded-2xl flex flex-col items-center gap-1 border transition-all ${active ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/5'}`}>
    <div className="mb-1 opacity-80">{icon}</div>
    <div className="text-sm font-bold tracking-tight">{value}</div>
    <div className="text-[9px] uppercase tracking-wider text-white/40 font-bold">{label}</div>
  </div>
);

const TabItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <div className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-[#FBBF24]' : 'text-white/40 hover:text-white/60'}`}>
    {active && <div className="absolute top-0 w-8 h-1 bg-[#FBBF24] rounded-full" />}
    <div className="mt-1">{icon}</div>
    <span className="text-[9px] font-bold uppercase tracking-tighter">{label}</span>
  </div>
);

export default PhoneMockup;
