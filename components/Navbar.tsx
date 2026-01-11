
import React from 'react';
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
        navigate(to);
      }
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-indigo-900 dark:bg-amber-600 rounded-lg group-hover:rotate-12 transition-all shadow-md">
            <Scissors className="text-white dark:text-zinc-950" size={24} />
          </div>
          <span className="text-xl md:text-2xl font-serif font-black tracking-tighter uppercase italic text-zinc-900 dark:text-zinc-100 transition-colors">
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
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="text-zinc-900 dark:text-zinc-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 bg-white dark:bg-zinc-950 z-40 md:hidden flex flex-col p-8 gap-8 border-t border-zinc-200 dark:border-zinc-900 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              className="text-3xl font-serif font-bold text-left text-zinc-900 dark:text-zinc-100 hover:text-indigo-900 dark:hover:text-amber-600 transition-colors"
              onClick={() => handleLinkClick(link.to)}
            >
              {link.name}
            </button>
          ))}
          <Link 
            to="/book" 
            className="bg-indigo-900 dark:bg-amber-600 text-white dark:text-zinc-950 font-bold p-4 text-center rounded-sm text-xl uppercase tracking-widest mt-auto shadow-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
