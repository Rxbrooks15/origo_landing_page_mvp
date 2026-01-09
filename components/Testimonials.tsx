
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { stars: 5, title: "Life Changing", author: "Digital Collector", body: "Finally an app that rewards me for going outside. The origami designs are breathtaking." },
  { stars: 5, title: "Addictive Growth", author: "Outdoor Enthusiast", body: "Watching my cranes evolve during my morning hike is the highlight of my day." },
  { stars: 5, title: "Great Community", author: "Origo Pro", body: "Trading cranes in the decentralized gallery is smooth and exciting. Best NFT game out there." }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-[#0f0a1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Seekers</h2>
            <p className="text-gray-400 text-lg">Join 100,000+ players growing their assets in the wild.</p>
          </div>
          <div className="flex items-center gap-10 bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
            <div className="text-center">
              <div className="text-4xl font-black">4.9</div>
              <div className="text-[10px] uppercase text-gray-500 tracking-[0.3em] mt-1">Rating</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="flex text-yellow-500 gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <div className="text-[10px] uppercase text-gray-500 tracking-[0.3em]">App Store Reviews</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex text-yellow-500 mb-6 gap-0.5">
                {[...Array(r.stars)].map((_, si) => <Star key={si} size={16} fill="currentColor" />)}
              </div>
              <h4 className="text-xl font-bold mb-4">"{r.title}"</h4>
              <p className="text-gray-400 leading-relaxed italic mb-8">
                {r.body}
              </p>
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">{r.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
