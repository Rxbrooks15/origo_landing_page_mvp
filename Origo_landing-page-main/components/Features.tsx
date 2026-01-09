
import React from 'react';
import { Camera, Map as MapIcon, Compass, Home, Zap, Globe, Smartphone, Clock } from 'lucide-react';

const professionalFeatures = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Photography",
    desc: "Plan the perfect shot with ideal lighting conditions and golden hour predictions."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Outdoor Adventures",
    desc: "Enjoy optimal sunlight at every stage of your hike or travel journey."
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Real Estate & Architecture",
    desc: "Visualize sunlight year-round for any location to ensure perfect room exposure."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Solar Industry",
    desc: "Estimate panel energy production for rooftops and analyze horizon obstructions."
  }
];

const technicalFeatures = [
  {
    title: "Live AR View",
    desc: "Real-time sun projections in augmented reality. Plan specific sky positions.",
    icon: <Smartphone />
  },
  {
    title: "Building Shadows",
    desc: "Track precise paths including building and terrain shadow casting.",
    icon: <MapIcon />
  },
  {
    title: "Precision Compass",
    desc: "Find the sun's exact bearing and altitude at any moment of the year.",
    icon: <Compass />
  },
  {
    title: "Solar Events",
    desc: "Instant access to Golden Hour, Blue Hour, Sunrise, and Sunset timings.",
    icon: <Clock />
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#140e2b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Professional Use Cases */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Best Sun Tracking App, Made for You</h2>
          <p className="text-gray-400">Professional precision meets beautiful, intuitive design.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {professionalFeatures.map((f, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Technical Features with Large Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-12">
             <h2 className="text-3xl md:text-5xl font-bold leading-tight">
               Powerful Features at Your Fingertips
             </h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {technicalFeatures.map((f, i) => (
                 <div key={i} className="space-y-3">
                   <div className="text-orange-400 mb-2">{f.icon}</div>
                   <h4 className="text-lg font-bold">{f.title}</h4>
                   <p className="text-sm text-gray-400">{f.desc}</p>
                 </div>
               ))}
             </div>
           </div>
           
           <div className="relative group">
              <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full group-hover:opacity-40 transition-opacity" />
              <img 
                src="https://picsum.photos/seed/interface/800/1000" 
                alt="App Interface" 
                className="relative rounded-[3rem] border border-white/10 shadow-2xl z-10"
              />
           </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
