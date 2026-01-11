
import React from 'react';
import { BARBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="barbers" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 uppercase tracking-tight text-zinc-900 dark:text-zinc-100 font-serif">
            Meet The <span className="text-indigo-900 dark:text-amber-600 italic transition-colors">Artists</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-500 max-w-2xl mx-auto">Our team of experienced barbers combines traditional techniques with contemporary styling.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {BARBERS.map((barber) => (
            <div key={barber.id} className="group relative overflow-hidden rounded-sm shadow-xl">
              <div className="aspect-[4/5] overflow-hidden dark:grayscale dark:group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105">
                <img src={barber.image} alt={barber.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 transition-opacity group-hover:opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-indigo-400 dark:text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-2 transition-colors">{barber.role}</p>
                <h3 className="text-3xl font-serif font-bold mb-1 text-white">{barber.name}</h3>
                <p className="text-zinc-300 text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  Specialist: {barber.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
