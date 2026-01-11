
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 font-serif">
            Client <span className="text-indigo-900 dark:text-amber-600 transition-colors duration-300">Stories</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-500">Don't just take our word for it. Hear from the gentlemen who trust us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-10 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-sm relative shadow-sm hover:shadow-md transition-shadow">
              <Quote className="text-indigo-900/10 dark:text-amber-600/20 absolute top-8 left-8 transition-colors" size={40} />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-indigo-900 dark:fill-amber-600 text-indigo-900 dark:text-amber-600 transition-colors" />
                ))}
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 italic mb-8 relative z-10">"{t.text}"</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-zinc-900 dark:text-zinc-100">{t.author}</span>
                <span className="text-zinc-500 dark:text-zinc-600 text-xs uppercase tracking-widest font-bold">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
