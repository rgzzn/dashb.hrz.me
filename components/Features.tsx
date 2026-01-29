import React from 'react';
import { 
  CloudIcon, 
  CalendarDaysIcon, 
  NewspaperIcon, 
  QrCodeIcon, 
  ShieldCheckIcon, 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  AdjustmentsHorizontalIcon,
  MoonIcon,
  Cog6ToothIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/solid';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-transparent to-slate-50 dark:to-indigo-950/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <h2 className="text-base text-primary font-bold tracking-wide uppercase mb-3">Caratteristiche</h2>
          <p className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-secondary mb-6">
            Dashboard nativa per la tua Apple TV.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Sviluppata interamente in SwiftUI per garantire prestazioni massime e un'integrazione perfetta nel tuo salotto.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          
          {/* Feature Block 1: Smart Info (Weather & Calendar) */}
          <div className="flex flex-col md:flex-row items-center gap-12 group">
            <div className="flex-1 order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 aspect-video bg-slate-900">
                <div className="absolute inset-2 md:inset-4 grid grid-cols-12 grid-rows-6 gap-2 md:gap-3 p-3 md:p-4 bg-[#0B0C15] rounded-xl font-sans text-white overflow-hidden shadow-inner border border-white/5">
                  
                  {/* Top Bar: Greeting & Clock */}
                  <div className="col-span-12 row-span-1 flex justify-between items-start px-1">
                    <div>
                      <h4 className="text-lg md:text-xl font-medium text-white/90">Buona sera, Luca</h4>
                      <p className="text-xs md:text-sm text-white/60">Una bella giornata! Goditi il sole.</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-light tracking-wider">23:57</div>
                      <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-widest">Lunedì 26 Gennaio</div>
                    </div>
                  </div>

                  {/* Widget 1: Weather (Left) */}
                  <div className="col-span-4 row-span-5 bg-[#141522] rounded-xl p-3 flex flex-col justify-between border border-white/5">
                     <div className="flex justify-between items-start">
                        <MoonIcon className="size-8 text-white" />
                        <div className="text-right">
                           <div className="text-2xl font-light">3°</div>
                           <div className="text-[10px] text-white/60">Ciel Sereno</div>
                        </div>
                     </div>
                     
                     <div className="space-y-2">
                        <div className="text-[10px] text-white/40 uppercase">Prossime ore</div>
                        <div className="flex justify-between text-center">
                           {[1, 2, 3].map((i) => (
                             <div key={i} className="flex flex-col items-center gap-1">
                               <CloudIcon className="size-4 text-white/80" />
                               <span className="text-[10px]">{2+i}°</span>
                             </div>
                           ))}
                        </div>
                     </div>

                     <div className="space-y-1">
                        <div className="text-[10px] text-white/40 uppercase mb-1">Giorni</div>
                        <div className="flex justify-between text-[10px] items-center border-b border-white/5 pb-1">
                           <span className="text-white/80">mar</span>
                           <CloudIcon className="size-3 text-blue-400" />
                           <span className="opacity-60">8° 1°</span>
                        </div>
                        <div className="flex justify-between text-[10px] items-center">
                           <span className="text-white/80">mer</span>
                           <CloudIcon className="size-3 text-blue-400" />
                           <span className="opacity-60">6° 5°</span>
                        </div>
                     </div>
                  </div>

                  {/* Widget 2: Agenda (Middle) */}
                  <div className="col-span-4 row-span-3 flex flex-col gap-2">
                     <div className="flex items-center gap-2 text-red-400 mb-1">
                        <CalendarDaysIcon className="size-4" />
                        <span className="text-sm font-medium text-white">Agenda</span>
                     </div>
                     <div className="bg-[#2C201A] border-l-2 border-orange-500 rounded-lg p-2">
                        <div className="text-[10px] font-bold text-orange-200">Preparare il render 3D</div>
                        <div className="text-[9px] text-white/40 mt-1">08:00 - 09:00</div>
                     </div>
                     <div className="bg-[#2C201A] border-l-2 border-orange-500 rounded-lg p-2">
                        <div className="text-[10px] font-bold text-orange-200">Meeting Team</div>
                        <div className="text-[9px] text-white/40 mt-1">09:00 - 10:00</div>
                     </div>
                  </div>

                  {/* Widget 3: News (Right - Span 2 rows) */}
                  <div className="col-span-4 row-span-5 bg-gradient-to-b from-[#1E1B2E] to-[#14121F] rounded-xl p-3 relative flex flex-col justify-end border border-white/5">
                     <div className="absolute top-3 left-3 bg-blue-500 text-[8px] font-bold px-1.5 py-0.5 rounded text-white">FORLÌTODAY</div>
                     <h5 className="text-sm font-bold leading-tight mb-2">Enzo Pellegrini e l'inno alla bellezza...</h5>
                     <p className="text-[9px] text-white/50 line-clamp-3 mb-2">Mercoledì 28 gennaio, alle ore 20.30, nel salone Aurora...</p>
                     <div className="flex justify-between items-end">
                        <span className="text-[8px] text-white/30">Lunedì 26, 12:50</span>
                        <div className="bg-white p-0.5 rounded">
                           <QrCodeIcon className="size-6 text-black" />
                        </div>
                     </div>
                  </div>

                  {/* Settings Float */}
                  <div className="absolute bottom-4 right-4 col-span-12 flex justify-end">
                      <div className="size-8 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/10 shadow-lg">
                        <Cog6ToothIcon className="size-5 text-white/80" />
                      </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <div className="p-2 inline-block rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 mb-6">
                <CalendarDaysIcon className="size-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-secondary mb-4">
                La tua giornata, a colpo d'occhio
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
                Unisci i tuoi impegni e le previsioni meteo in un'unica vista elegante. DashB si aggiorna automaticamente per tenerti sempre informato.
              </p>
              <ul className="space-y-3">
                {[
                  'Meteo powered by  WeatherKit',
                  'Google Calendar & Outlook',
                  'Previsioni a 5 giorni',
                  'Supporto eventi All-day'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="size-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature Block 2: News & QR Code */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="p-2 inline-block rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 mb-6">
                <NewspaperIcon className="size-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-secondary mb-4">
                Notizie in tempo reale
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
                Resta aggiornato con un ticker di notizie RSS personalizzabile. 
                Vedi qualcosa che ti interessa? Scansiona il QR code e leggi l'articolo completo sul tuo telefono.
              </p>
               <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
                  <QrCodeIcon className="size-8 text-primary" />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Scan & Read</div>
                    <div className="text-xs text-slate-500">Passa alla lettura mobile</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 aspect-video bg-slate-900 flex items-center justify-center">
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                {/* News Ticker Mockup */}
                <div className="w-full px-8 absolute bottom-8 z-20 flex items-center justify-between">
                   <div className="flex flex-col gap-1 w-2/3">
                      <div className="h-2 w-20 bg-red-500/80 rounded full mb-1"></div>
                      <div className="h-4 w-full bg-white/90 rounded"></div>
                      <div className="h-3 w-5/6 bg-white/50 rounded"></div>
                   </div>
                   <div className="size-16 bg-white p-1 rounded-lg">
                      <div className="w-full h-full bg-slate-900 rounded-sm grid place-items-center">
                         <QrCodeIcon className="size-10 text-white" />
                      </div>
                   </div>
                </div>
                <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="News background"/>
              </div>
            </div>
          </div>

          {/* Feature Block 3: Tech & Security */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/30 via-transparent to-purple-600/30"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <ShieldCheckIcon className="size-16 mx-auto mb-6 text-indigo-400" />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Sicuro. Open Source. Swift.</h3>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Costruito con tecnologie native Apple per la massima affidabilità. 
                I tuoi token di accesso sono protetti nel Keychain e il codice è accessibile a tutti.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 text-left">
                {[
                  { title: 'SwiftUI', desc: 'Interfaccia nativa', icon: DevicePhoneMobileIcon },
                  { title: 'Keychain', desc: 'Dati criptati', icon: LockClosedIcon },
                  { title: 'OAuth', desc: 'Login sicuro', icon: ShieldCheckIcon },
                  { title: 'Open Source', desc: 'MIT License', icon: CodeBracketIcon },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <item.icon className="size-6 text-indigo-400 mb-2" />
                    <div className="font-bold text-sm">{item.title}</div>
                    <div className="text-xs text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                 <a href="https://github.com/rgzzn/DashB" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-lg hover:shadow-indigo-500/20">
                  <CodeBracketIcon className="size-5" />
                  Esplora su GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;