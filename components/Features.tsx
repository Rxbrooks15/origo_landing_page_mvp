
import React from 'react';
import { Camera, Shield, Trophy, Globe, Smartphone, Clock } from 'lucide-react';

const professionalFeatures = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Light Mapping",
    desc: "Track real-time light intensity using your device sensors to fuel your growth."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Quests",
    desc: "Join location-based events to discover rare origami patterns worldwide."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Vault",
    desc: "Your assets are protected by enterprise-grade encryption in your personal digital vault."
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Global Events",
    desc: "Compete in seasonal community challenges to earn exclusive limited-edition rewards."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-[#140e2b]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Master the Quest</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Origo blends physical activity with digital collection, rewarding every step of your journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {professionalFeatures.map((f, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 text-blue-400 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
