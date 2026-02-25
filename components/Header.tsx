import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer group">
          <img src="/assets/logo.svg" alt="DashB Logo" className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-secondary group-hover:text-primary transition-colors">
            DashB
          </h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: 'Funzionalità', href: '#features' },
            { name: 'GitHub', href: 'https://github.com/rgzzn/DashB' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.name === 'GitHub' ? '_blank' : undefined}
              rel={item.name === 'GitHub' ? 'noopener noreferrer' : undefined}
              className="text-sm font-medium hover:text-primary transition-colors text-slate-600 dark:text-slate-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://apps.apple.com/us/app/dashb/id6759085627"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex px-4 py-2 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-md active:scale-95"
          >
            App Store
          </a>
          <a
            href="https://testflight.apple.com/join/hBXZH1qd"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-accent-cyan transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95"
          >
            TestFlight
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
