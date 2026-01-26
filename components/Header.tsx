import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="size-8 bg-gradient-to-br from-primary to-indigo-700 rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-xl">auto_awesome</span>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-secondary group-hover:text-primary transition-colors">
            DashB
          </h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'GitHub', 'Docs', 'Apple TV'].map((item) => (
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
            Get Started
          </button>
          <div className="size-10 rounded-full bg-slate-200 dark:bg-indigo-900/50 overflow-hidden border border-slate-300 dark:border-white/10 hover:border-primary/50 transition-colors cursor-pointer">
            <img
              className="w-full h-full object-cover"
              alt="User avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4WH8FEaZCvMbauC10MeWNiUj3NvUVLoAjCNT-4OKG4cYRxhaJy2DgK16nFq_mAmpjKGB64HS7Ra4UnkPZLhdSJk4p2D7ZHnVz8Vp9FKj_6YUO6oXAaUMAOox2bf5rybmDhIA-WiBHIeBU81ax-7NXl3Y3SHJRUiUUydBuckZBTfBlAUjG5f67FtfAzdfLzSeZrVxLntUELlzY0sWMEdyJKPtw82AfTYswBrRG9JhYuNtkRpWez2ho6_BI5IC4OVPbMpwyKEenB1M"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;