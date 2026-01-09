import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-blue-600/10 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-semibold mb-10 tracking-wider uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Origo 2.0: The Quest Continues
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.05] max-w-5xl mx-auto">
          <span className="block text-white">Staying inside is</span>
          <span className="block text-red-500 mb-2">draining your energy.</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-fuchsia-400 block pb-2">
            Step outside. Earn digital assets.
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
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