
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    stars: 5,
    title: "Spectacular",
    body: "It is spectacular. The best I’ve ever seen.",
    author: "App Store User"
  },
  {
    stars: 5,
    title: "Wonderful application!",
    body: "It’s an efficient app that’s easier to use than other applications. When searching for a home, I check exposure over the whole year.",
    author: "Real Estate Buyer"
  },
  {
    stars: 5,
    title: "Best for wildlife",
    body: "Very good app for planning the best place to photograph wild animals based on the position of the sun.",
    author: "Wildlife Photographer"
  },
  {
    stars: 5,
    title: "Top-notch!",
    body: "During a visit, it helped me realize that a nearby building was hiding the sun all afternoon in winter. I use it now for every visit!",
    author: "Home Seeker"
  },
  {
    stars: 5,
    title: "Highly Recommend",
    body: "I have been using SunQuest for one month to map sun position for maximum solar irradiance on my PV panels.",
    author: "Solar Energy Specialist"
  },
  {
    stars: 5,
    title: "Great app",
    body: "Incredibly accurate, very easy to use, I recommend it 100% and congratulations to the developers.",
    author: "Digital Artist"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0f0a1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Happy Users</h2>
            <p className="text-gray-400">Join 100,000+ professionals and sun seekers worldwide.</p>
          </div>
          <div className="flex items-center gap-8 bg-white/5 p-6 rounded-3xl border border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold">4.8</div>
              <div className="text-[10px] uppercase text-gray-500 tracking-widest">Rating</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="flex text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <div className="text-[10px] uppercase text-gray-500 tracking-widest">Apple Reviews</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(r.stars)].map((_, si) => <Star key={si} size={14} fill="currentColor" />)}
              </div>
              <h4 className="text-lg font-bold mb-3">"{r.title}"</h4>
              <p className="text-gray-400 text-sm italic mb-6 leading-relaxed">
                {r.body}
              </p>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{r.author}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-8 uppercase tracking-[0.3em] text-sm">Featured On</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
            <img src="https://picsum.photos/seed/press1/100/40" alt="Press Logo" />
            <img src="https://picsum.photos/seed/press2/100/40" alt="Press Logo" />
            <img src="https://picsum.photos/seed/press3/100/40" alt="Press Logo" />
            <img src="https://picsum.photos/seed/press4/100/40" alt="Press Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
