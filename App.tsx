
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Scissors, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  
  return null;
};

const Home: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <section id="about" className="py-24 px-6 bg-zinc-100 dark:bg-zinc-900 scroll-mt-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80" 
              alt="Example Shop Interior" 
              className="rounded-lg shadow-2xl dark:grayscale dark:hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -right-6 bg-indigo-900 dark:bg-amber-600 p-8 hidden md:block rounded-sm shadow-xl transition-colors duration-300">
              <p className="text-3xl font-serif font-bold text-white dark:text-zinc-950">Est. 2024</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900 dark:text-zinc-100 italic font-serif">
              An <span className="text-indigo-900 dark:text-amber-600 transition-colors duration-300">Example</span> of Modern Grooming Craft
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              This is a demonstration of what your barbershop website could look like. Example Barbershop combines modern design with classic service concepts. Use this space to describe your shop's history and unique philosophy.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              Every detail in this template is designed to provide clients with a smooth and professional browsing experience, from the service menu to the integrated booking form.
            </p>
            <div className="flex gap-4 pt-4">
              <Link 
                to="/book" 
                className="bg-indigo-900 dark:bg-amber-600 hover:bg-indigo-800 dark:hover:bg-amber-700 text-white dark:text-zinc-950 font-bold px-8 py-4 rounded-sm transition-all uppercase tracking-wider text-sm flex items-center gap-2 shadow-lg"
              >
                Sample Booking <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Team />
      <Gallery />
      <Testimonials />
    </div>
  );
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'light' | 'dark') || 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col transition-colors duration-300">
        <Navbar 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          theme={theme} 
          toggleTheme={toggleTheme} 
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookingForm />} />
          </Routes>
        </main>

        <Footer />

        <div className="fixed bottom-6 right-6 z-40 md:hidden">
          <Link 
            to="/book" 
            className="bg-indigo-900 dark:bg-amber-600 text-white dark:text-zinc-950 p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
          >
            <Scissors size={24} />
          </Link>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
