import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0614] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-3">
            <div className="flex items-center gap-4 mb-8">
              <Logo className="w-12 h-12" />
              <span className="text-3xl font-black tracking-tighter">Origo</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-10 leading-relaxed text-lg">
              Get more sunlight to expand your fold.
            </p>
          </div>
          {/* Help section removed as requested */}
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-600">
          <p>© 2026 Origo Labs Inc. All rights reserved.</p>
          <div className="flex gap-6 opacity-40 hover:opacity-100 transition-opacity">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;