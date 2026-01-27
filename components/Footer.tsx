import React from 'react';
import { ShareIcon, EnvelopeIcon, HeartIcon } from '@heroicons/react/24/outline'; // HeartIcon is actually outline by default, for filled use appropriate import or className

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-white/5 py-16 bg-background-light dark:bg-background-dark/50 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <img src="/assets/logo.png" alt="DashB Logo" className="w-6 h-6" />
              <span className="font-bold text-xl text-slate-900 dark:text-secondary">DashB | BETA</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs text-center md:text-left">
              Lo spazio di lavoro moderno per gli ossessionati della produttività.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            {['Privacy Policy', 'Termini', 'Changelog', 'Supporto', 'Stato'].map((link) => (
              <a key={link} href="#" className="hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="size-10 flex items-center justify-center rounded-xl bg-slate-200 dark:bg-indigo-900/30 text-slate-600 dark:text-secondary hover:text-primary transition-all hover:scale-110 border border-transparent dark:hover:border-primary/20">
              <ShareIcon className="size-5" />
            </a>
            <a href="#" className="size-10 flex items-center justify-center rounded-xl bg-slate-200 dark:bg-indigo-900/30 text-slate-600 dark:text-secondary hover:text-primary transition-all hover:scale-110 border border-transparent dark:hover:border-primary/20">
              <EnvelopeIcon className="size-5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 dark:text-slate-600 text-xs">
            © 2026 HRZ. Open source sotto licenza MIT.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-600">
            <span>Costruito con</span>
            <HeartIcon className="size-3 text-red-400 animate-pulse fill-red-400" />
            <span>da Luca Ragazzini</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;