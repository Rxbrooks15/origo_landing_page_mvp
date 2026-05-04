
import React, { useState } from 'react';
import { ChevronLeft, Sparkles, BookOpen, Clock, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Story {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  image: string;
  color: string;
}

const stories: Story[] = [
  {
    id: 'collision',
    title: 'Collision of Catastrophe',
    excerpt: 'In the beginning, there only existed the Ether — a boundless celestial “soup” where no mass, no energy, and no time existed.',
    content: `In the beginning, there only existed the Ether — a boundless celestial “soup” where no mass, no energy, and no time existed. It was pure, infinite serendipity. It was not a place, an instance, or an echelon that could be comprehended: it was an idea of infinite possibilities.

From the Ether, two rudimentary particles emerged: the Mobion, a lively particle that yearned to bond and exhibited an external form of vigor, and the Singulon, a static particle of pure resistance that produced an attracting internal field. Their collision was inevitable — and cataclysmic.

This collision, known as the Collision of Catastrophe, birthed the first strands of existence. From the ruins of their clash, the Cosmic Roots emerged — a web intertwining the remnants of the Ether where high energy regions were converted into pockets of Cylite — a collection of photon energy particles with no mass.

The Cosmic Roots were not only the wellspring of life — they were the architects of existence itself. Their energy stretched across infinite worlds beyond the horizon and from their lattice, a flat universe emerged. It was a celestial plane unlike anything the Ether had ever known. From the Cosmic Roots, matter folded like sheets of paper into a strange new medium. This was no ordinary form of paper as it was imbued with memory, energy, and life that originated from trees of the past that came after the existence of the Cosmic Roots.

Long after the paper like universe expanded, unimaginable complexity began to emerge from other particles and forms of energy that gave life to creatures known as NoVas. These NoVas, after being created from one of 4 bases, contained cellulose and required Cylite to flourish. They were optimistic creatures, but as generations went on, the NoVas grew even more hopeful, influenced by their exposure to the Legend of The Abstract Realm.

At the same time, Orgs, an energy force known in the distant cosmos manifested within the the cosmic roots, creating unknown structures capable of channeling energy and shaping travel between worlds. These structures gave rise to the Nine Gates — “portals” that stood as the only passageway to the fabled Abstract Realm.

Yet not all was peace!
At the edges of these creations, darkness stirred. “Spirits” of crumpled paper known as ShiniGami lurked within the Shadow Realm, a place untouched by light. They were fueled by pessimism and preyed upon the Novas, in search of their cellulose. The rise of the ShiniGami marked the first true threat to the fledgling universe of the Creased Cosmos.`,
    date: 'Origins',
    image: '/collision_catastrophe.png',
    color: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    id: 'nine-gates',
    title: 'Journey to the Nine Gates',
    excerpt: 'Before paper, there were trees.',
    content: `Before the first fold, before the first crane lifted its wings against the darkness, there were forests rooted deep in the earth—silent witnesses to mankind’s hunger. Men cut them down for conquest, for expansion, for the building of empires that never learned how to bow. From those fallen trees came paper. From paper came creation. And from creation came the first breath of the Creased Cosmos.

Sado, known later as The Creator, did not know that her final act would open a universe.

She was dying.

Radiation had already begun its quiet destruction within her body, a curse born from the Hiroshima atomic bomb. Yet on a storm-torn night, while thunder split the sky and rain battered the windows like celestial drums, Sado folded her last series of cranes. Her hands trembled, but her spirit remained fierce. Each crease carried memory. Each wing carried longing. Each fold became a prayer.

Then, as her human life faded, her life force passed into the thousand paper cranes.

And the cranes awakened.

Among them rose the LockBinds: Vanguard #001, Zenox, Destiny, Lotus, and 007. They were protectors, oath-bearers, and guardians of Sado’s final wish. Against them stood the Manifolds, led by powerful beings such as Spectre and Terminal #1000—cranes of stranger design, deeper ambition, and unstable transformation.

For a time, both factions lived beneath a fragile Truce of Peace. Though divided by purpose, they shared one belief: Sado was still somewhere beyond them, waiting to be found.

But the prophecy of the Nine Gates changed everything.

It was Cubo de Rubik, keeper of impossible patterns, who foretold the existence of the Abstract Realm—a dimension beyond time, space, and ordinary form. To reach it, two of the mightiest cranes would have to journey through the Ether and pass beyond the known laws of creation.

Vanguard, the Stone Warrior, was chosen.

Spectre, the mystique crane of purple, followed.

But Terminal, strongest of the Manifolds, believed the journey should have belonged to him.

Terminal did not seek Sado out of love. He sought her because he believed the Creator’s truth would grant him dominion beyond the third dimension. Destiny, the Crane of Emerald, saw the corruption in him first. She named his hunger what it was: destruction disguised as vision.

Terminal’s obsession led him to cursed knowledge.

He learned that before paper, there had been trees. He learned that humanity had destroyed life to create tools, beauty, weapons, and wishes. In that revelation, Terminal found not sorrow—but justification. If humans could destroy to create, why could he not destroy to rule?

For this, he was banished to the land of the Shinigami.

But banishment did not break him.

It sharpened him.`,
    date: 'The Nine Gates',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800',
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 'return-terminal',
    title: 'The Return of Terminal',
    excerpt: 'A shadow stretched across the stone floor, thin and impossible',
    content: `Terminal escaped the gravitational sink.

For cycles beyond counting, the darkness of the Shinigami realm had pulled at his paper body, bending him toward collapse. Yet Terminal endured. In the void, he learned to conserve his shape. In isolation, he learned patience. In hatred, he discovered a new transformation.

He called it Shadow Step.

Unlike the other cranes, who relied on wings, flight paths, and visible motion, Terminal learned to flatten himself into a plane of darkness. He could hide within shadow, preserve his paper structure, and move as though distance itself had folded around him. To those watching, he appeared both far away and dangerously near—perched atop a palace one moment, standing directly above his own shadow the next.

When Terminal arrived at the Temple of the Nova Cranes, no one understood what they were seeing.

The air darkened.

The temple lanterns flickered.

Destiny felt him before she saw him.

A shadow stretched across the stone floor, thin and impossible. The Nova Cranes looked upward, searching the palace roof. But the shadow moved beneath them. Then behind them. Then above them.

That was the first Shadow Step.

Terminal had returned.

And he had not returned alone in spirit. He had returned with a doctrine.

“I pity you,” he declared to the Nova Cranes, his voice slicing through the temple like a blade dragged across glass. “Your loyalty to Vanguard has given you resolve, but resolve without truth is nothing. You believe you were created for a higher purpose. You believe a sacred voice calls you toward destiny.”

He opened his wings, and the shadows widened.

“You are mistaken.”

The temple fell silent.

“You were not created. You were used. Each of you was folded to fulfill another’s wish. You are not children of purpose—you are instruments of grief.”

His gaze shifted toward Destiny.

“You left me to die, and yet death only refined me. My resolve is greater than the will of a thousand paper cranes. I have walked the shadows. I have seen what your heroes refuse to see. Now I will recruit Multitude and Phaze, and together we will rebuild the Ether portal.”

The Nova Cranes trembled.

Because Terminal’s words were cruel.

But worse—

they were almost believable.`,
    date: 'The End',
    image: 'https://images.unsplash.com/photo-1533134486753-c833f074868f?auto=format&fit=crop&q=80&w=800',
    color: 'from-indigo-500/20 to-purple-900/20'
  },
  {
    id: 'spectres-fall',
    title: 'Spectre’s Fall',
    excerpt: 'As he descended into the abyss, he stretched his wings and tried to absorb the last faint ripples of cylite scattered through space-time...',
    content: `While Terminal returned to the temple, Spectre was falling.

He had entered the Ether beside Vanguard, determined to reach the First Gate and prove that he was more than the mockery whispered behind his wings. Among the Manifolds, Spectre had long been dismissed as incomplete. He did not possess enough gami to fully transform, and because of this, his peers called him Specter—a hollow version of what he was meant to be.

The name wounded him.

Spectre was not hollow.

He was unfinished.

There is a difference.

When the Ether portal opened, Spectre unleashed his helix flight path, a spiraling technique designed to break through unstable space. For one brilliant moment, he pierced the threshold. Cylite rippled around him in luminous waves. Space bent. Time thinned. The First Gate shimmered somewhere beyond reach.

But Spectre had miscalculated.

He did not have enough energy to complete the crossing.

His spiral collapsed.

The Ether swallowed him.

As he descended into the abyss, he stretched his wings and tried to absorb the last faint ripples of cylite scattered through space-time. The energy entered him in fragments—too little to save him, too much to let him die peacefully.

He shrank.

He burned.

He radiated power at a constant rate, becoming smaller and brighter, as if the universe itself were compressing him into a single point of memory.

In that darkness, Spectre remembered every insult.

He remembered the Nova Cranes laughing.

He remembered the Manifolds doubting him.

He remembered Phaze, his closest companion, watching him with pity.

And then he remembered his own name.

Not Specter.

Spectre.

With the last of his composure, he released his wings.

The helix returned—not as a path, but as a transformation. His body twisted through the abyss in a spiral of purple light. For the first time, Spectre partially transformed without Terminal, without Phaze, without Multitude, and without anyone to witness his becoming.

He did not fall.

He escaped.

Or so he thought.

When Spectre broke free of the abyss, he emerged into the present.

But the present was not where he had left it.

And the question remained:

Was he still Spectre?

Or had the abyss turned him into Specter after all?`,
    date: 'The Fallen Angel',
    image: 'https://images.unsplash.com/photo-1534796633326-5f15830eb7d5?auto=format&fit=crop&q=80&w=800',
    color: 'from-purple-500/20 to-fuchsia-900/20'
  },
  {
    id: 'first-redshift',
    title: 'The First Redshift',
    excerpt: 'Energy is never created, nor destroyed: only transferred...',
    content: `It is a truth older than stars themselves:

Energy is never created, nor destroyed—only transferred.

In the boundless expanse of the Creased Cosmos, this law was not merely observed… it was weaponized.

Vanguard and Spectre stood at the edge of the Ether, where reality thinned into abstraction and distance lost its meaning. Beyond it lay the Abstract Realm—a place whispered of in prophecy, where Sado, their Creator, might still exist beyond time, beyond form, beyond the final fold.

Driven by purpose and something far more dangerous—hope—Vanguard moved first.

He leapt.

With a force that shattered stillness, Vanguard broke through the portal barrier, igniting into motion with a technique known only among the strongest of the Nova Cranes:

Avant Guard.

He surged forward like a rocket escaping gravity, tearing through the Ether with such intensity that space itself struggled to define his motion. In that moment, Vanguard could not tell whether he was accelerating toward the path ahead… or whether the path itself was bending backward to meet him.

Velocity had lost meaning.

Direction had collapsed.

Only momentum remained.

Behind him, Spectre followed—but not with the same certainty.`,
    date: 'Shifted Energy',
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4b519?auto=format&fit=crop&q=80&w=800',
    color: 'from-orange-500/20 to-red-900/20'
  },
  {
    id: 'law-of-primes',
    title: 'The Law of Primes',
    excerpt: 'No Nova had ever become a Prime without being born into it.',
    content: `Among the one thousand Nova Cranes, there existed a truth both mathematical and sacred:

Not all numbers were equal.

Each crane was born into sequence—folded into existence with a number etched into its very structure. This number was not symbolic. It was not decorative.

It was destiny.

The LockBinds and the Manifolds warred over purpose, ideology, and control—but beneath their conflict lay a deeper division, one that neither side could alter, challenge, or transcend:

The Primes.

2,3,5,7, 11
These were not merely numbers.

They were chosen forms.

ANova Prime was born differently. Its folds carried a subtle instability—a tension like a blade held between dimensions, humming with restrained inevitability. Light did not simply reflect off them; it lingered, as though unsure whether to pass or remain.

No Nova had ever become Prime without being born into it.

No amount of training, will, or transformation could grant it.

Prime was not earned.

Prime was inherited.

And yet—

being born Prime was not enough.`,
    date: 'Primal State',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    color: 'from-amber-500/20 to-yellow-900/20'
  }
];


interface StoriesPageProps {
  onBack: () => void;
  initialStoryId?: string;
}

const StoriesPage: React.FC<StoriesPageProps> = ({ onBack, initialStoryId }) => {
  const [view, setView] = useState<'archive' | 'reading'>(initialStoryId ? 'reading' : 'archive');
  const [selectedStory, setSelectedStory] = useState<Story | null>(
    initialStoryId ? stories.find(s => s.id === initialStoryId) || null : null
  );

  // Sync state if initialStoryId changes
  React.useEffect(() => {
    if (initialStoryId) {
      const story = stories.find(s => s.id === initialStoryId);
      if (story) {
        setSelectedStory(story);
        setView('reading');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [initialStoryId]);

  const handleReadStory = (story: Story) => {
    if (story.content) {
      setSelectedStory(story);
      setView('reading');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToArchive = () => {
    setView('archive');
    setSelectedStory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (view === 'reading' && selectedStory) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-[#0f0a1e] relative overflow-hidden flex flex-col pt-32 pb-32"
      >
        {/* Immersive Background */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,70,239,0.05),transparent_70%)] pointer-events-none" />
        <div className="fixed top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
          {/* Top Nav */}
          <motion.button 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleBackToArchive}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 hover:text-white transition-all mb-20"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
            Return to Archive
          </motion.button>

          {/* Story Header */}
          <header className="mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 text-fuchsia-400 mb-8"
            >
              <Sparkles size={18} />
              <span className="text-xs font-black uppercase tracking-[0.5em]">{selectedStory.date}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tighter leading-[1.1]"
            >
              {selectedStory.title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="aspect-video rounded-[3rem] overflow-hidden border border-white/10 mb-20"
            >
              <img 
                src={selectedStory.image} 
                alt={selectedStory.title}
                className="w-full h-full object-cover opacity-60"
              />
            </motion.div>
          </header>

          {/* Story Content */}
          <article className="prose prose-invert max-w-none">
            <div className="space-y-12 text-gray-300 text-lg md:text-2xl font-light leading-relaxed tracking-wide">
              {selectedStory.content?.split('\n\n').map((para, i) => (
                <motion.p 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </article>

          {/* Footer Nav */}
          <div className="mt-32 pt-20 border-t border-white/5 flex flex-col items-center gap-12">
            <div className="w-px h-24 bg-gradient-to-b from-fuchsia-500 to-transparent" />
            <button 
              onClick={handleBackToArchive}
              className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 hover:text-white transition-colors"
            >
              Back to Stories List
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0a1e] relative overflow-hidden flex flex-col pt-32 pb-20">
      {/* Archive List View (Existing) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,70,239,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.4em] text-gray-400 hover:text-white transition-all mb-16"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
          Back to Reality
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-fuchsia-400 text-[10px] font-black tracking-[0.4em] uppercase mb-8">
            The Eternal Archive
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight italic">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-fuchsia-500">CREASED</span> <br /> COSMOS
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
            Every fold tells a story. Pockets of stories within the fabric of the creased cosmos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col">
                {/* Image Section */}
                <div className="relative h-2/3 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#0f0a1e] to-transparent bg-opacity-60`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-30 group-hover:opacity-50 transition-opacity`} />
                </div>

                {/* Content Section */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-fuchsia-400">
                        <Sparkles size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">{story.date}</span>
                      </div>
                      <Clock size={14} className="text-gray-600" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight leading-tight group-hover:text-fuchsia-400 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 line-clamp-3">
                      {story.excerpt}
                    </p>
                  </div>

                  <button 
                    onClick={() => handleReadStory(story)}
                    className={`flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] transition-all ${story.content ? 'text-white hover:text-blue-400 cursor-pointer' : 'text-gray-600 cursor-not-allowed'}`}
                  >
                    Read Chronicle {story.content && <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />}
                  </button>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-fuchsia-500/10 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-32 pt-20 border-t border-white/5 flex flex-col items-center">
           <div className="w-16 h-1 w-px bg-gradient-to-b from-fuchsia-500 to-transparent" />
           <span className="text-[10px] font-black text-gray-700 uppercase tracking-[0.6em] mt-8 italic">End of Current Archive</span>
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;
