import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div
      className={`${className} flex items-center justify-center rounded-[22%] bg-[#a3b1a2] border border-white/20 shadow-inner`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Globe */}
        <circle cx="50" cy="50" r="35" fill="#3b82f6" opacity="0.9" />

        {/* Paper plane */}
        <path
          d="M20 50 L80 20 L50 80 L45 55 Z"
          fill="#d946ef"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default Logo;
