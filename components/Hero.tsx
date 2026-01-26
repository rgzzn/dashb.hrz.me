import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 text-center hero-gradient">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        v2.0 Beta for tvOS is live
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 max-w-4xl mx-auto text-slate-900 dark:text-secondary">
        Your Apple TV Dashboard,{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
          Reimagined.
        </span>
      </h1>

      {/* Subhead */}
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        DashB is the open-source personal dashboard designed for speed, privacy, and ultimate customization on the big screen. Organize your digital life in one place.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl text-lg font-bold hover:shadow-lg hover:shadow-primary/30 hover:bg-accent-purple transition-all border border-primary/20 active:scale-95">
          Download for tvOS
        </button>
        <button className="w-full sm:w-auto px-8 py-4 bg-slate-200 dark:bg-indigo-950/40 text-slate-900 dark:text-secondary rounded-xl text-lg font-bold flex items-center justify-center gap-2 border border-white/5 hover:bg-slate-300 dark:hover:bg-indigo-900/60 transition-colors active:scale-95">
          <span className="material-symbols-outlined">code</span>
          View on GitHub
        </button>
      </div>

      {/* Dashboard Preview Image */}
      <div className="relative max-w-5xl mx-auto mt-10 p-2 bg-slate-300/20 dark:bg-indigo-500/5 rounded-2xl border border-slate-300 dark:border-white/10 shadow-2xl backdrop-blur-sm group">
        <div className="rounded-xl overflow-hidden shadow-inner bg-slate-900 aspect-video relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-indigo-500/10 z-10 pointer-events-none"></div>
          <img
            className="w-full h-full object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
            alt="Dashboard interface preview"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKAmvjt0TJuTIWXzSerTuuYulrrrB3QYYKn1DbniywcMG5mRYk-pBGWaBAvt5ZCQR8dtcfequa9FMix2DMZBo5sZSg3ZxGGcjIZgDP3l2yXV0SaY2KNmtah7zG2yNmuvER-g4vlnm5rf7xxRt0pcDnkn3SXbsrkEBKgcP3CmX9QvMXWktp09h-zpjFakuhZZjBJewGz1oDZcFCDcc07CsAU20igJvBUVX2rXWtRzRM31632D8MrJh-j-i8lgLATg7-tMZV6F1W1AU"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;