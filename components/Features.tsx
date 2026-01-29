import React from 'react';
import { 
  Squares2X2Icon, 
  CommandLineIcon, 
  CodeBracketIcon, 
  BoltIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  DevicePhoneMobileIcon, 
  AdjustmentsHorizontalIcon 
} from '@heroicons/react/24/outline';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-transparent to-slate-50 dark:to-indigo-950/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <h2 className="text-base text-primary font-bold tracking-wide uppercase mb-3">Caratteristiche</h2>
          <p className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-secondary mb-6">
            Tutto ciò che ti serve, <br/> direttamente sul grande schermo.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            DashB trasforma la tua Apple TV in un hub informativo centrale. 
            Progettato meticolosamente per l'esperienza da salotto.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          
          {/* Feature Block 1: Widgets & Customization */}
          <div className="flex flex-col md:flex-row items-center gap-12 group">
            <div className="flex-1 order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 aspect-video bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 z-0"></div>
                 {/* Abstract UI Representation */}
                <div className="absolute inset-8 grid grid-cols-4 grid-rows-2 gap-4 opacity-80 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="col-span-2 row-span-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 animate-pulse-slow"></div>
                  <div className="col-span-1 bg-white/10 rounded-xl backdrop-blur-md border border-white/20"></div>
                  <div className="col-span-1 bg-primary/20 rounded-xl backdrop-blur-md border border-primary/30"></div>
                  <div className="col-span-2 bg-white/5 rounded-xl backdrop-blur-md border border-white/10"></div>
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <div className="p-2 inline-block rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 mb-6">
                <Squares2X2Icon className="size-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-secondary mb-4">
                Widget Modulari
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
                Costruisci la tua dashboard ideale con widget trascinabili. 
                Dai un'occhiata al meteo, controlla i tuoi investimenti o segui le ultime notizie, 
                tutto organizzato in una griglia bento elegante e reattiva.
              </p>
              <ul className="space-y-3">
                {[
                  'Drag & Drop intuitivo',
                  'Supporto per Meteo, Stocks, Crypto',
                  'Layout salvati autmaticamente',
                  'Design adattivo per ogni schermo'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="size-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature Block 2: Performance */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="p-2 inline-block rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 mb-6">
                <BoltIcon className="size-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-secondary mb-4">
                Prestazioni Native
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
                Niente web view lente o lag. DashB è ottimizzato per l'hardware di Apple TV, 
                garantendo animazioni fluide a 60fps e tempi di avvio istantanei.
              </p>
               <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
                  <div className="text-2xl font-black text-slate-900 dark:text-white mb-1">60fps</div>
                  <div className="text-sm text-slate-500">Fluidità UI</div>
                </div>
                <div className="p-4 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
                  <div className="text-2xl font-black text-slate-900 dark:text-white mb-1">&lt;1s</div>
                  <div className="text-sm text-slate-500">Avvio App</div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-2xl rounded-full opacity-50"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900 p-8 flex items-center justify-center aspect-square md:aspect-video">
                 <BoltIcon className="size-32 text-emerald-500 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Feature Block 3: Privacy & Open Source */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/30 via-transparent to-purple-600/30"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <ShieldCheckIcon className="size-16 mx-auto mb-6 text-indigo-400" />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Privacy al primo posto. Open Source per sempre.</h3>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                I tuoi dati rimangono sulla tua TV. Nessun tracciamento, nessuna pubblicità, nessun costo nascosto. 
                Il codice è completamente aperto e verificabile da chiunque su GitHub.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                 <a href="https://github.com/rgzzn/DashB" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-colors">
                  <CodeBracketIcon className="size-5" />
                  Controlla il Codice
                </a>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-bold border border-white/10 backdrop-blur-sm">
                  <CloudIcon className="size-5" />
                  Nessun Cloud Esterno
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Smaller Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
              {
                icon: AdjustmentsHorizontalIcon,
                title: 'Personalizzazione',
                desc: 'Cambia temi, colori e layout per adattarli al tuo stile.'
              },
              {
                icon: DevicePhoneMobileIcon,
                title: 'Responsive',
                desc: 'Funziona perfettamente su TV, ma si adatta anche schermi più piccoli.'
              },
              {
                icon: CommandLineIcon,
                title: 'Developer Friendly',
                desc: 'Costruisci i tuoi widget personalizzati usando semplici API.'
              }
             ].map((feature, idx) => (
               <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-colors group">
                 <feature.icon className="size-10 text-slate-400 group-hover:text-primary transition-colors mb-4" />
                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
                 <p className="text-slate-500 dark:text-slate-400">{feature.desc}</p>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;