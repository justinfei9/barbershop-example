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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    };
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
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <>
      {/* Main Nav Bar */}
      <nav className="fixed top-0 left-0 w-full h-20 z-[1000] bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group z-[1002]" onClick={() => setIsMenuOpen(false)}>
            <div className="p-2 bg-indigo-900 dark:bg-amber-600 rounded-lg">
              <Scissors className="text-white dark:text-zinc-950" size={24} />
            </div>
            <span className="text-xl font-serif font-black uppercase italic text-zinc-900 dark:text-zinc-100">
              Example Barbershop
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleLinkClick(link.to)}
                className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-900 dark:hover:text-amber-500 font-bold text-xs uppercase tracking-widest"
              >
                {link.name}
              </button>
            ))}
            <button onClick={toggleTheme} className="p-2 text-zinc-600 dark:text-zinc-400">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/book" className="bg-indigo-900 dark:bg-amber-600 text-white dark:text-zinc-950 font-bold px-6 py-2 rounded-sm text-xs uppercase">
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle Button - Forced to highest Z-index */}
          <div className="flex items-center gap-4 md:hidden z-[1002]">
             <button onClick={toggleTheme} className="p-2 text-zinc-600 dark:text-zinc-400">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="text-zinc-900 dark:text-zinc-100 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-zinc-950 z-[1001] md:hidden flex flex-col pt-32 px-8 overflow-y-auto">
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                className="text-5xl font-serif font-bold text-left text-zinc-900 dark:text-zinc-100 border-b border-zinc-100 dark:border-zinc-800 pb-4"
                onClick={() => handleLinkClick(link.to)}
              >
                {link.name}
              </button>
            ))}
          </div>
          
          <div className="mt-12 mb-10">
            <Link 
              to="/book" 
              className="block w-full bg-indigo-900 dark:bg-amber-600 text-white dark:text-zinc-950 font-bold p-6 text-center rounded-sm text-2xl uppercase tracking-widest shadow-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;