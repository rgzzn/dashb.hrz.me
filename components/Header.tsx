import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Area */}
      {/* Logo Area */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <img src="/assets/logo.png" alt="DashB Logo" className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-secondary group-hover:text-primary transition-colors">
            DashB
          </h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Funzionalità', 'GitHub', 'Documentazione', 'Apple TV'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors text-slate-600 dark:text-slate-400"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-accent-purple transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95">
            Entra nella Beta
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;