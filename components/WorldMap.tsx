
import React, { useEffect, useState } from 'react';

const WorldMap: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Parallax factor: move 10% of scroll speed
      setOffset(window.scrollY * 0.1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden opacity-10"
      style={{ 
        transform: `translateY(${-offset}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full object-cover scale-150 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Simplified World Map Path */}
        <path d="M150,150 L160,140 L180,145 L200,130 L220,135 L240,120 L260,125 L280,110 L300,115 L320,100 L340,105 L360,90 L380,95 L400,80 L420,85 L440,70 L460,75 L480,60 L500,65 L520,50 L540,55 L560,40 L580,45 L600,30 L620,35 L640,20 L660,25 L680,10 L700,15 L720,0 M100,200 Q150,180 200,200 T300,220 Q350,240 400,220 T500,200 Q550,180 600,200 T700,220 Q750,240 800,220 T900,200 M50,300 C100,250 200,350 300,300 S500,250 600,300 S800,350 900,300 M200,100 Q250,50 300,100 T400,150 Q450,200 500,150 T600,100 M700,400 Q750,350 800,400 T900,450 Q950,500 1000,450 M100,400 Q150,350 200,400 T300,450 Q350,500 400,450" />
        {/* Adding more organic feeling continent-like shapes */}
        <path d="M220,180 Q240,160 260,180 T300,200 Q320,220 340,200 T380,180 Q400,160 420,180 T460,200" />
        <path d="M600,250 Q620,230 640,250 T680,270 Q700,290 720,270 T760,250" />
        <path d="M400,350 Q420,330 440,350 T480,370 Q500,390 520,370 T560,350" />
        
        {/* Australia-ish */}
        <path d="M750,350 Q780,330 810,350 T870,370 Q900,390 870,410 T810,390 Z" />
        
        {/* Americas-ish */}
        <path d="M120,100 Q140,80 160,100 T200,150 Q220,200 200,250 T160,300 Q140,350 120,300 T80,250 Q60,200 80,150 Z" />
        <path d="M150,310 Q170,330 190,360 T210,410 Q220,440 190,460 T140,430 Q110,400 130,350 Z" />
        
        {/* Eurasia/Africa-ish */}
        <path d="M400,80 Q450,60 550,70 T650,90 Q750,110 800,150 T820,220 Q830,300 750,320 T650,280 Q550,240 450,260 T350,220 Q300,180 350,130 Z" />
        <path d="M420,270 Q450,250 480,270 T520,320 Q540,370 510,420 T440,440 Q380,420 390,360 T420,270 Z" />
      </svg>
    </div>
  );
};

export default WorldMap;
