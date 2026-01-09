
import React from 'react';
import { Sun, Store, Bird, Trophy, Clock, TrendingUp, Sparkles, Moon } from 'lucide-react';

const PhoneMockup: React.FC = () => {
  // 35% progress calculation
  const percentage = 0.35;
  const radius = 110;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percentage);
  
  // Dot rotation: 360 * 0.35 = 126 degrees clockwise from top (0)
  const dotRotation = percentage * 360;

  return (
    <div className="relative mx-auto h-[740px] w-[360px] group">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
      
      {/* Animated Wrapper for Floating Effect */}
      <div className="animate-float relative w-full h-full">
        {/* Outer Metallic Frame (Sierra Blue finish from reference) */}
        <div className="absolute inset-0 bg-[#2d3a4b] rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border-[1px] border-white/10 overflow-visible ring-1 ring-white/5">
          
          {/* Antenna Lines */}
          <div className="absolute top-16 -left-[1px] w-1 h-8 bg-black/20" />
          <div className="absolute bottom-16 -left-[1px] w-1 h-8 bg-black/20" />
          <div className="absolute top-16 -right-[1px] w-1 h-8 bg-black/20" />
          <div className="absolute bottom-16 -right-[1px] w-1 h-8 bg-black/20" />

          {/* iPhone Physical Buttons - Sierra Blue Style */}
          <div className="h-[28px] w-[3px] bg-[#4a5a6e] absolute -start-[3px] top-[110px] rounded-s-sm border-y border-white/10 shadow-sm transition-transform group-hover:scale-y-110"></div>
          <div className="h-[58px] w-[3px] bg-[#4a5a6e] absolute -start-[3px] top-[170px] rounded-s-sm border-y border-white/10 shadow-sm"></div>
          <div className="h-[58px] w-[3px] bg-[#4a5a6e] absolute -start-[3px] top-[240px] rounded-s-sm border-y border-white/10 shadow-sm"></div>
          <div className="h-[95px] w-[3px] bg-[#4a5a6e] absolute -end-[3px] top-[200px] rounded-e-sm border-y border-white/10 shadow-sm"></div>
        </div>

        {/* Screen Container with Bezels */}
        <div className="absolute inset-[8px] bg-black rounded-[2.9rem] p-[8px] overflow-hidden shadow-inner ring-1 ring-white/20">
          
          {/* The Display Content */}
          <div className="relative w-full h-full rounded-[2.4rem] overflow-hidden bg-gradient-to-b from-[#1a1625] via-[#3a1d47] to-[#d64d3b] text-white flex flex-col font-sans">
            
            {/* iPhone Notch (Reference style) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-[1.2rem] z-50 flex items-center justify-center gap-4 px-6">
               {/* Speaker Grille */}
               <div className="w-[45px] h-[3px] bg-[#1a1a1a] rounded-full border border-white/5" />
               {/* Front Camera Circle */}
               <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0c] border border-white/5 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-blue-500/20" />
               </div>
            </div>

            {/* iOS Status Bar - Adjusted for Notch */}
            <div className="px-8 pt-6 flex justify-between items-center text-[12px] font-bold z-40 relative">
              <div className="flex items-center gap-1.5 text-white">
                <span className="tracking-tight">12:22</span>
                <Moon size={11} fill="currentColor" className="ml-0.5" />
              </div>
              <div className="flex items-center gap-1.5 text-white">
                 <div className="flex gap-0.5 items-end h-2.5">
                    <div className="w-[1.8px] h-1.5 bg-white/40" />
                    <div className="w-[1.8px] h-2 bg-white/40" />
                    <div className="w-[1.8px] h-2.5 bg-white" />
                    <div className="w-[1.8px] h-3 bg-white" />
                 </div>
                 <span className="text-[10px] tracking-tighter">5G</span>
                 <div className="w-6 h-3.5 border border-white/40 rounded-[4px] relative p-[1.5px] ml-0.5 flex items-center">
                   <div className="h-full bg-white w-[63%] rounded-[1px]" />
                   <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1.5 bg-white/40 rounded-r-full" />
                 </div>
              </div>
            </div>

            {/* Sunlight Crane Header */}
            <div className="mt-10 text-center z-20">
              <h1 className="text-[12px] font-bold text-white/50 tracking-widest uppercase">Sunlight Crane</h1>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col items-center px-4 pt-10">
              
              {/* Circular Progress Area */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Background Base Ring */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 256 256">
                  <circle
                    cx="128"
                    cy="128"
                    r={radius}
                    stroke="white"
                    strokeOpacity="0.08"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                  />
                  
                  <circle
                    cx="128"
                    cy="128"
                    r={radius}
                    stroke="url(#progressGradient)"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-1000 ease-out"
                  />
                  
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f9a825" />
                      <stop offset="100%" stopColor="#ef6c00" />
                    </linearGradient>
                  </defs>

                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <circle
                      key={angle}
                      cx={128 + radius * Math.cos((angle * Math.PI) / 180)}
                      cy={128 + radius * Math.sin((angle * Math.PI) / 180)}
                      r="2"
                      fill="white"
                      fillOpacity="0.2"
                    />
                  ))}
                </svg>

                {/* Glowing Dot on Progress Tip */}
                <div 
                  className="absolute w-4 h-4 bg-[#f97316] rounded-full shadow-[0_0_20px_#f97316] z-30 transition-all duration-1000 ease-out border-2 border-white/20"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${dotRotation - 90}deg) translateX(${radius}px)`
                  }}
                />

                {/* Centered Bird Icon */}
                <div className="z-10 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-150" />
                  <div className="w-32 h-32 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center relative overflow-hidden shadow-inner">
                    <Bird size={64} className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]" />
                  </div>
                </div>
              </div>

              {/* Large Percentage Text */}
              <div className="mt-12 text-center">
                <div className="text-[78px] font-black text-[#f9a825] tracking-tighter leading-none drop-shadow-2xl">35%</div>
                <div className="text-[14px] text-white/60 mt-4 font-black uppercase tracking-[0.2em]">Ready to charge</div>
              </div>

              {/* Stat Cards Grid */}
              <div className="w-full grid grid-cols-3 gap-3 mt-14 px-2">
                <StatBox icon={<Sparkles size={18} className="text-[#f9a825]" />} value="35%" label="Charge" active />
                <StatBox icon={<Clock size={18} className="text-[#f9a825]" />} value="142m" label="Sun Time" />
                <StatBox icon={<TrendingUp size={18} className="text-[#f9a825]" />} value="2,450" label="Value" />
              </div>
            </div>

            {/* iPhone Tab Bar */}
            <div className="h-24 bg-black/40 backdrop-blur-3xl flex items-center justify-between px-6 pb-8 border-t border-white/5 relative">
               <TabItem icon={<Sun size={24} />} label="Charge" active />
               <TabItem icon={<Store size={24} />} label="Crumble" />
               <TabItem icon={<Bird size={24} />} label="Cranes" />
               <TabItem icon={<Trophy size={24} />} label="Rewards" />
            </div>

            {/* iOS Home Indicator */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full" />

          </div>
        </div>
      </div>
    </div>
  );
};

const StatBox: React.FC<{ icon: React.ReactNode; value: string; label: string; active?: boolean }> = ({ icon, value, label, active }) => (
  <div className={`py-4 px-2 rounded-[1.5rem] flex flex-col items-center gap-1.5 border transition-all duration-300 ${active ? 'bg-white/10 border-white/10 shadow-[0_12px_24px_-10px_rgba(0,0,0,0.5)] scale-105' : 'bg-black/30 border-white/5 opacity-80'}`}>
    <div className="mb-1">{icon}</div>
    <div className="text-[17px] font-bold tracking-tight text-white">{value}</div>
    <div className="text-[9px] uppercase tracking-widest text-white/30 font-black">{label}</div>
  </div>
);

const TabItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <div className={`flex flex-col items-center gap-1.5 transition-all relative ${active ? 'text-[#f9a825]' : 'text-white/30 hover:text-white/50'}`}>
    {active && (
      <div className="absolute -top-[23px] w-12 h-[3px] bg-[#f9a825] rounded-full shadow-[0_0_12px_#f9a825]" />
    )}
    <div className="mt-2">{icon}</div>
    <span className="text-[10px] font-bold tracking-tight">{label}</span>
  </div>
);

export default PhoneMockup;
