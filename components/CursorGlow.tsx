
import React, { useEffect, useState } from 'react';

const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let timeoutId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setOpacity(0.4); // Brighten immediately on movement
      
      // Fully fade to 0 when movement stops for 0.5 seconds
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setOpacity(0);
      }, 500);
    };

    const handleMouseLeave = () => {
      clearTimeout(timeoutId);
      setOpacity(0);
    };
    
    const handleMouseEnter = () => {
      // Start hidden, wait for movement
      setOpacity(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-700 ease-out"
      style={{ opacity }}
    >
      {/* Outer glow aura */}
      <div
        className="absolute w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: position.x,
          top: position.y,
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(59,130,246,0.05) 40%, transparent 70%)',
          filter: 'blur(40px)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Small bright core "flash" */}
      <div
        className="absolute w-[60px] h-[60px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: position.x,
          top: position.y,
          background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 80%)',
          filter: 'blur(8px)',
          mixBlendMode: 'plus-lighter',
          transition: 'transform 0.1s ease-out',
        }}
      />
    </div>
  );
};

export default CursorGlow;
