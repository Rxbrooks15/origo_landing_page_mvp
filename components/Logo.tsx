import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div
      className={`${className} flex items-center justify-center rounded-[22%] bg-[#a3b1a2] border border-white/20 shadow-xl overflow-hidden`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full p-0">
        {/* Globe with subtle gradient and continents */}
        <defs>
          <radialGradient id="globeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </radialGradient>
        </defs>
        
        <circle cx="50" cy="50" r="38" fill="url(#globeGradient)" />
        
        {/* Abstract continents */}
        <path 
          d="M35 30 Q45 25 55 35 T70 30 Q75 45 60 55 T40 50 Z" 
          fill="#93c5fd" 
          opacity="0.6" 
        />
        <path 
          d="M30 65 Q40 60 50 70 T65 65 Q70 75 50 80 T25 70 Z" 
          fill="#93c5fd" 
          opacity="0.4" 
        />

        {/* Paper plane - Styled after the purple one in the image */}
        <g transform="translate(10, 0)">
          <path
            d="M35 55 L85 25 L65 75 L60 58 Z"
            fill="#d946ef"
            stroke="#1e293b"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Plane fold detail */}
          <path
            d="M60 58 L85 25"
            stroke="#ffffff"
            strokeWidth="0.5"
            opacity="0.5"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;