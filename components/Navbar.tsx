import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Scissors, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, theme, toggleTheme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Services', to: '/#services' },
    { name: 'About', to: '/#about' },
    { name: 'Barbers', to: '/#barbers' },
    { name: 'Gallery', to: '/#gallery' },
  ];

  const handleLinkClick = (to: string) => {
    setIsMenuOpen(false);
    if (to.startsWith('/#')) {
      const id = to.split('#')[1];
      if (isHome) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to home then scroll
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group z-[110]" 
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="p-2 bg-indigo-900 dark:bg-amber-600 rounded-lg group-hover:rotate-12 transition-all shadow-md">
            <Scissors className="text-white dark:text-zinc-950" size={24} />
          </div>
          <span className="text-xl md:text-2xl font-serif font-black tracking-tighter uppercase italic text-zinc-900 dark:text-zinc-100">
            Example Barbershop
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleLinkClick(link.to)}
              className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-900 dark:hover:text-amber-500 font-bold transition-colors text-xs uppercase tracking-widest"
            >
              {link.name}
            </button>
          ))}
          
          <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 mx-2"></div>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-600 dark:text-zinc-400"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link 
            to="/book" 
            className="bg-indigo-900 dark:bg-amber-600 hover:bg-indigo-800 dark:hover:bg-amber-700 text-white dark:text-zinc-950 font-bold px-6 py-2.5 rounded-sm transition-all text-xs uppercase tracking-widest shadow-md"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden z-[110]">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="text-zinc-900 dark:text-zinc-100 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 bg-white dark:bg-zinc-950 z-[100] md:hidden flex flex-col p-8 transition-all animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-6 mt-4">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                className="text-4xl font-serif font-bold text-left text-zinc-900 dark:text-zinc-100 hover:text-indigo-900 dark:hover:text-amber-600 transition-colors border-b border-zinc-100 dark:border-zinc-900 pb-4"
                onClick={() => handleLinkClick(link.to)}
              >
                {link.name}
              </button>
            ))}
          </div>
          
          <div className="mt-auto mb-10">
            <Link 
              to="/book" 
              className="block w-full bg-indigo-900 dark:bg-amber-600 text-white dark:text-zinc-950 font-bold p-5 text-center rounded-sm text-xl uppercase tracking-widest shadow-2xl active:scale-[0.98] transition-transform"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;