import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhoneMockup from './components/PhoneMockup';
import Footer from './components/Footer';
import { Zap, TrendingUp, Store } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#0f0a1e]">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="animate-in fade-in duration-700">
          <Hero />
          
          {/* Phone Mockup Section */}
          <section className="relative py-20 flex justify-center items-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />
            <PhoneMockup />
          </section>

          {/* Features Grid Section */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    < Zap className="text-blue-400 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Solar Charging</h3>
                  <p className="text-gray-400">Exposure to real sunlight fuels your digital origami. Origo uses smart sensors to track light intensity and quality.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="text-fuchsia-400 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Value Appreciation</h3>
                  <p className="text-gray-400">The rarer the crane and the more solar energy it absorbs, the higher its value in the Origo ecosystem.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Store className="text-slate-400 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Crumble & Trade</h3>
                  <p className="text-gray-400">Crumble your cranes for premium assets or trade them in our secure decentralized gallery with other seekers.</p>
                </div>
              </div>
            </div>
          </section>

          {/* New CTA Section */}
          <section className="py-24 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[300px] bg-fuchsia-600/5 blur-[100px] rounded-full -z-10" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Ready to level up?</h2>
              <p className="text-xl text-gray-400 mb-12 font-light">Join thousands exploring the outdoors</p>
              
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

          {/* Bottom spacing */}
          <div className="pb-16" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;