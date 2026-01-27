import React from 'react';
import { 
  SparklesIcon, 
  Squares2X2Icon, 
  SunIcon, 
  ArrowTrendingUpIcon, 
  CommandLineIcon, 
  CodeBracketIcon, 
  BoltIcon, 
  ViewColumnsIcon 
} from '@heroicons/react/24/outline';

const Features: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col gap-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-secondary">
          Costruito per la produttività moderna
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
          Sperimenta un layout in stile bento che organizza la tua vita digitale in widget belli e funzionali, ottimizzati per l'interazione TV.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        {/* Large Feature Card */}
        <div className="md:col-span-2 md:row-span-2 rounded-2xl p-8 bg-gradient-to-br from-primary via-accent-purple to-indigo-700 text-white flex flex-col justify-between overflow-hidden relative group shadow-2xl shadow-primary/20 transition-all hover:shadow-primary/40">
          <div className="absolute -right-12 -top-12 opacity-20 group-hover:scale-110 transition-transform duration-700">
            <SparklesIcon className="size-[240px]" />
          </div>
          
          <div className="z-10">
            <div className="size-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30">
              <Squares2X2Icon className="size-9 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Widget personalizzati</h3>
            <p className="text-secondary/80 text-lg opacity-90 max-w-xs">
              I tuoi dati, a modo tuo. Trascina, rilascia e configura dozzine di widget per meteo, azioni, criptovalute e altro direttamente sulla tua TV.
            </p>
          </div>

          <div className="relative mt-8 group-hover:translate-y-[-10px] transition-transform duration-500 z-10">
            <div className="bg-indigo-950/30 rounded-xl p-4 backdrop-blur-xl border border-white/20 shadow-2xl">
              <div className="grid grid-cols-2 gap-3">
                <div className="h-14 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <SunIcon className="size-6 text-white/60" />
                </div>
                <div className="h-14 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <ArrowTrendingUpIcon className="size-6 text-white/60" />
                </div>
                <div className="h-28 col-span-2 bg-white/10 rounded-lg flex flex-col p-4 gap-2 hover:bg-white/20 transition-colors">
                  <div className="h-2 w-2/3 bg-white/30 rounded"></div>
                  <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                  <div className="mt-auto flex justify-between">
                    <div className="h-4 w-4 bg-white/30 rounded-full"></div>
                    <div className="h-4 w-4 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Open Source */}
        <div className="md:col-span-2 rounded-2xl p-8 bg-white dark:bg-indigo-950/20 border border-slate-200 dark:border-white/5 flex items-center justify-between group backdrop-blur-sm hover:border-primary/30 transition-colors">
          <div>
            <CommandLineIcon className="size-9 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-secondary">Open Source</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Trasparente e guidato dalla community. Costruito per il web da sviluppatori.</p>
          </div>
          <div className="hidden sm:block text-slate-200 dark:text-indigo-900/50 group-hover:text-indigo-800/50 transition-colors">
            <CodeBracketIcon className="size-24" />
          </div>
        </div>

        {/* Feature 3: Performance */}
        <div className="md:col-span-1 rounded-2xl p-8 bg-white dark:bg-indigo-950/20 border border-slate-200 dark:border-white/5 flex flex-col justify-center text-center backdrop-blur-sm hover:border-primary/30 transition-colors group">
          <div className="flex justify-center">
            <BoltIcon className="size-10 text-primary mb-4 group-hover:animate-pulse" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-secondary">Prestazioni veloci</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Zero bloat. Tempi di caricamento istantanei su hardware datato.</p>
        </div>

        {/* Feature 4: Sidebar */}
        <div className="md:col-span-1 rounded-2xl p-8 bg-white dark:bg-indigo-950/20 border border-slate-200 dark:border-white/5 flex flex-col justify-center text-center backdrop-blur-sm hover:border-primary/30 transition-colors group">
          <div className="flex justify-center">
            <ViewColumnsIcon className="size-10 text-primary mb-4 group-hover:-translate-x-1 transition-transform" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-secondary">Controllo barra laterale</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Barra laterale pulita e minimalista per la concentrazione.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;