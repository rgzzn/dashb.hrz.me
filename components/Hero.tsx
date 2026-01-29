import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 text-center hero-gradient">
      {/* Badge */}
      <a
        href="https://github.com/rgzzn/DashB/releases"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20 hover:bg-primary/20 transition-colors"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        v1.0 Beta per tvOS è disponibile su TestFlight
      </a>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 max-w-4xl mx-auto text-slate-900 dark:text-secondary animate-fade-in-up">
        La tua Dashboard per Apple TV,{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
          Reimmaginata.
        </span>
      </h1>

      {/* Subhead */}
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        DashB è la dashboard personale open-source progettata per velocità, privacy e massima personalizzazione sul grande schermo. Organizza la tua vita digitale in un unico posto.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <a
          href="https://github.com/rgzzn/DashB/issues/new?title=Richiesta%20accesso%20Beta"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl text-lg font-bold hover:shadow-lg hover:shadow-primary/30 hover:bg-accent-purple transition-all border border-primary/20 active:scale-95"
        >
          Diventa un tester!
        </a>
        <a 
          href="https://github.com/rgzzn/DashB"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-4 bg-slate-200 dark:bg-indigo-950/40 text-slate-900 dark:text-secondary rounded-xl text-lg font-bold flex items-center justify-center gap-2 border border-white/5 hover:bg-slate-300 dark:hover:bg-indigo-900/60 transition-colors active:scale-95"
        >
          <CodeBracketIcon className="size-6" />
          Vedi su GitHub
        </a>
      </div>

      {/* Dashboard Preview Image */}
      <div className="relative max-w-5xl mx-auto mt-10 p-2 bg-slate-300/20 dark:bg-indigo-500/5 rounded-2xl border border-slate-300 dark:border-white/10 shadow-2xl backdrop-blur-sm group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        <div className="rounded-xl overflow-hidden shadow-inner bg-slate-900 aspect-video relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-indigo-500/10 z-10 pointer-events-none"></div>
          <img
            className="w-full h-full object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
            alt="Dashboard interface preview"
            src="/assets/screenshot-1.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
