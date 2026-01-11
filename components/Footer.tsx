
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Scissors } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 pt-24 pb-12 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 bg-indigo-900 dark:bg-amber-600 rounded-lg shadow-md transition-colors duration-300">
                <Scissors className="text-white dark:text-zinc-950" size={24} />
              </div>
              <span className="text-2xl font-serif font-black tracking-tighter uppercase italic text-zinc-900 dark:text-zinc-100">
                Example Barbershop
              </span>
            </Link>
            <p className="text-zinc-600 dark:text-zinc-500 text-lg leading-relaxed max-w-md">
              This is a placeholder description for your barbershop business. Use this area to explain your unique value proposition to your potential clients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-indigo-900 dark:hover:bg-amber-600 hover:text-white dark:hover:text-zinc-950 transition-all shadow-sm"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-indigo-900 dark:hover:bg-amber-600 hover:text-white dark:hover:text-zinc-950 transition-all shadow-sm"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-indigo-900 dark:hover:bg-amber-600 hover:text-white dark:hover:text-zinc-950 transition-all shadow-sm"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-zinc-900 dark:text-zinc-100 font-bold uppercase tracking-widest text-sm mb-6">Example Contact</h4>
            <ul className="space-y-4 text-zinc-600 dark:text-zinc-500">
              <li className="flex items-start gap-3">
                <MapPin className="text-indigo-900 dark:text-amber-600 shrink-0 transition-colors" size={18} />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-indigo-900 dark:text-amber-600 shrink-0 transition-colors" size={18} />
                <span>{BUSINESS_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-indigo-900 dark:text-amber-600 shrink-0 transition-colors" size={18} />
                <span>{BUSINESS_INFO.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-900 dark:text-zinc-100 font-bold uppercase tracking-widest text-sm mb-6">Sample Hours</h4>
            <ul className="space-y-4 text-zinc-600 dark:text-zinc-500">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-zinc-900 dark:text-zinc-300 font-medium">{BUSINESS_INFO.hours.mon_fri}</span>
              </li>
              <li className="flex justify-between">
                <span>Sat:</span>
                <span className="text-zinc-900 dark:text-zinc-300 font-medium">{BUSINESS_INFO.hours.sat}</span>
              </li>
              <li className="flex justify-between">
                <span>Sun:</span>
                <span className="text-zinc-900 dark:text-zinc-300 font-medium">{BUSINESS_INFO.hours.sun}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-xs font-bold uppercase tracking-widest">
          <p>© 2024 Example Barbershop Template. For demonstration purposes only.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-indigo-900 dark:hover:text-amber-600 transition-colors">Sample Privacy</a>
            <a href="#" className="hover:text-indigo-900 dark:hover:text-amber-600 transition-colors">Sample Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
