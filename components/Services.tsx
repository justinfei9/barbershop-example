
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Clock } from 'lucide-react';

const Services: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Hair' | 'Beard' | 'Luxury' | 'Combo'>('All');

  const filteredServices = filter === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === filter);

  const categories: ('All' | 'Hair' | 'Beard' | 'Luxury' | 'Combo')[] = ['All', 'Hair', 'Beard', 'Luxury', 'Combo'];

  return (
    <section id="services" className="py-24 px-6 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 font-serif">
              Our <span className="text-indigo-900 dark:text-amber-600 transition-colors duration-300">Services</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-500 max-w-xl">From classic cuts to modern styles, our barbers are skilled in all aspects of male grooming.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-indigo-900 dark:bg-amber-600 text-white dark:text-zinc-950 shadow-md' 
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-indigo-900 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm hover:border-indigo-900 dark:hover:border-amber-600/50 transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 dark:opacity-10 dark:group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-serif font-black text-zinc-900 dark:text-zinc-100">{service.id.replace('s', '')}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-900 dark:group-hover:text-amber-600 transition-colors">{service.name}</h3>
              <p className="text-zinc-600 dark:text-zinc-500 mb-6 line-clamp-2">{service.description}</p>
              <div className="flex items-center justify-between pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="flex items-center text-zinc-500 dark:text-zinc-400 text-sm gap-1">
                    <Clock size={16} className="text-indigo-900 dark:text-amber-600 transition-colors" />
                    {service.duration}m
                  </div>
                </div>
                <div className="text-2xl font-serif font-black text-indigo-900 dark:text-amber-600 transition-colors">
                  ${service.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
