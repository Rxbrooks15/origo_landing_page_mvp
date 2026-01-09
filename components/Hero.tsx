
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Dynamic Light Beam from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[400px] bg-gradient-to-b from-white via-white/20 to-transparent z-10 opacity-30 blur-[1px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[500px] bg-[conic-gradient(from_180deg_at_50%_0%,rgba(255,255,255,0.15)_0deg,transparent_20deg,transparent_340deg,rgba(255,255,255,0.15)_360deg)] blur-3xl z-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-semibold mb-10 tracking-wider uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Origo 2.0: The Quest Begins
        </div>

        {/* Illuminated Headline - Slightly smaller font size */}
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-8 leading-[1.1] max-w-4xl mx-auto relative">
          <span 
            className="block text-white drop-shadow-[0_-2px_15px_rgba(255,255,255,0.4)]"
            style={{ textShadow: '0 -2px 10px rgba(255,255,255,0.3)' }}
          >
            Staying inside is
          </span>
          <span className="block text-red-500 mb-2 drop-shadow-[0_-1px_10px_rgba(239,68,68,0.2)]">draining your energy.</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-fuchsia-400 block pb-2 drop-shadow-[0_-1px_8px_rgba(255,255,255,0.2)]">
            Step outside - earn digital assets.
          </span>
          
          {/* Subtle light hit overlay for the text top */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-white/10 blur-3xl rounded-full pointer-events-none" />
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Explore the outdoors, get sunlight, and develop your digital origami assets (DOAs)
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://apps.apple.com/us/iphone/today" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:scale-105 transition-transform active:scale-95"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
              className="h-14"
            />
          </a>
          <a 
            href="https://play.google.com/store/games?hl=en_US" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:scale-105 transition-transform active:scale-95"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-14"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
