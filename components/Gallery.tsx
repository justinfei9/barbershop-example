import React from 'react';

const Gallery: React.FC = () => {
const images = [
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800', // Portfolio 1
    'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800', // Portfolio 2
    'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=800', // Portfolio 3
    'https://images.unsplash.com/photo-1593702288056-7927b442d0fa?auto=format&fit=crop&q=80&w=800', // Portfolio 4
    'https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=800', // Portfolio 5 
    'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&q=80&w=800', // Portfolio 6
  ];

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-zinc-950 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4 uppercase italic tracking-tighter text-zinc-900 dark:text-zinc-100">The Portfolio</h2>
          <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Sharper than your average shop</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-sm cursor-crosshair shadow-md">
              <img 
                src={src} 
                alt={`Portfolio ${i + 1}`} 
                className="w-full h-full object-cover dark:grayscale transition-all duration-700 dark:group-hover:grayscale-0 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-indigo-900/10 dark:bg-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 