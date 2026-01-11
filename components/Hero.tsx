
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 transition-opacity duration-700">
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80" 
          alt="Example Barbershop Hero" 
          className="w-full h-full object-cover dark:grayscale opacity-80 dark:opacity-40 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-white/30 dark:via-zinc-950/40 to-transparent transition-colors duration-300"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 bg-indigo-900/10 dark:bg-amber-600/10 border border-indigo-900/20 dark:border-amber-600/20 rounded-full transition-colors duration-300 backdrop-blur-sm">
          <span className="text-indigo-900 dark:text-amber-500 text-xs font-bold uppercase tracking-[0.3em]">Example Website Template</span>
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter uppercase text-zinc-900 dark:text-zinc-100 transition-colors drop-shadow-sm">
          EXAMPLE <br />
          <span className="text-indigo-900 dark:text-amber-600 italic transition-colors duration-300">BARBERSHOP.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-800 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-semibold transition-colors">
          This is an example subtitle showing how you can pitch your premium services. This template is fully customizable for your actual business needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/book" 
            className="w-full sm:w-auto bg-indigo-900 dark:bg-amber-600 hover:bg-indigo-800 dark:hover:bg-amber-700 text-white dark:text-zinc-950 font-black px-10 py-5 rounded-sm transition-all transform hover:-translate-y-1 uppercase tracking-widest flex items-center justify-center gap-2 group shadow-xl"
          >
            Sample Booking
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <a 
            href="#services" 
            className="w-full sm:w-auto border border-zinc-400 dark:border-zinc-700 hover:border-indigo-900 dark:hover:border-zinc-500 text-zinc-900 dark:text-zinc-100 font-bold px-10 py-5 rounded-sm transition-all uppercase tracking-widest backdrop-blur-sm"
          >
            Example Menu
          </a>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-px bg-gradient-to-t from-indigo-900 dark:from-amber-600 to-transparent transition-colors duration-300"></div>
    </section>
  );
};

export default Hero;
