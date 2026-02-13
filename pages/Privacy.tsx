import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-grow pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-slate-700 dark:text-slate-300">
        <header className="mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-secondary mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-secondary dark:via-slate-400 dark:to-secondary">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-medium">
            La tua privacy è fondamentale. Di seguito spieghiamo come DashB protegge i tuoi dati e rispetta le normative GDPR.
          </p>
        </header>
        
        <div className="space-y-20">
          <section className="scroll-mt-32" id="introduzione">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-none flex items-center justify-center w-10 h-10 rounded-2xl bg-primary/10 text-primary font-bold shadow-sm">1</span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Introduzione</h2>
            </div>
            <div className="pl-14">
              <p className="leading-loose text-lg">
                La presente Informativa sulla Privacy descrive come i dati personali vengono raccolti, utilizzati e protetti quando visiti il sito web <code className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2 py-0.5 rounded font-mono text-base">dashb.hrz.me</code> (il "Sito") e quando utilizzi l'applicazione DashB per Apple TV (l' "App").
              </p>
            </div>
          </section>

          <section className="scroll-mt-32" id="titolare">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-none flex items-center justify-center w-10 h-10 rounded-2xl bg-primary/10 text-primary font-bold shadow-sm">2</span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Titolare del Trattamento</h2>
            </div>
            <div className="pl-14">
              <p className="leading-loose text-lg">
                Il titolare del trattamento dei dati è <span className="font-bold text-slate-900 dark:text-secondary">Luca Ragazzini (HRZ)</span>. Per qualsiasi domanda o richiesta, puoi contattare lo sviluppatore tramite i canali ufficiali indicati nella pagina dell'App Store.
              </p>
            </div>
          </section>

          <section className="scroll-mt-32" id="sito">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-none flex items-center justify-center w-10 h-10 rounded-2xl bg-primary/10 text-primary font-bold shadow-sm">3</span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">DashB Website (Il Sito)</h2>
            </div>
            <div className="pl-14">
              <p className="leading-loose text-lg">
                Il Sito è una vetrina informativa progettata per essere "privacy-neutral". <span className="font-semibold text-slate-900 dark:text-secondary border-b-2 border-primary/20">Non raccogliamo dati personali identificativi (PII) durante la navigazione.</span> Non utilizziamo cookie di tracciamento o pixel di terze parti per finalità pubblicitarie.
              </p>
            </div>
          </section>

          <section className="relative group scroll-mt-32" id="app">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent-purple/20 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative p-8 md:p-12 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-10">
                <span className="flex-none flex items-center justify-center w-10 h-10 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/30">4</span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-secondary tracking-tight">DashB Apple TV App</h2>
              </div>
              
              <div className="space-y-12">
                <div className="p-5 bg-primary/5 border-l-4 border-primary rounded-r-2xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic">
                  Questa sezione si applica specificamente all'applicazione DashB per Apple TV.
                </div>
                
                <div className="grid gap-10">
                  <div className="space-y-3">
                    <h3 className="font-black text-xl text-slate-900 dark:text-secondary uppercase tracking-wider text-sm">
                      01. Vendita e Condivisione Dati
                    </h3>
                    <p className="leading-relaxed text-lg opacity-90">
                      DashB non vende, non condivide e non sfrutta i tuoi dati personali per finalità pubblicitarie. Seguiamo una filosofia radicale di protezione dei dati.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-black text-xl text-slate-900 dark:text-secondary uppercase tracking-wider text-sm">
                      02. Servizi di Calendario
                    </h3>
                    <p className="leading-relaxed text-lg opacity-90">
                      L'App permette di collegare Google Calendar o Outlook. Durante l'autenticazione, trattiamo l'indirizzo email e un ID univoco <span className="font-bold text-primary">esclusivamente</span> per far funzionare l'integrazione del calendario.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-black text-xl text-slate-900 dark:text-secondary uppercase tracking-wider text-sm">
                      03. Sicurezza (Apple Keychain)
                    </h3>
                    <p className="leading-relaxed text-lg opacity-90">
                      I token sono salvati nel <span className="font-black italic">Keychain</span> di Apple sul tuo dispositivo. DashB <span className="underline decoration-red-500 decoration-2 underline-offset-4">non gestisce server proprietari</span> e non trasmette dati a server esterni controllati da noi.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <h3 className="font-black text-xl text-slate-900 dark:text-secondary uppercase tracking-wider text-sm">
                      04. Integrazioni Terze Parti
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-6 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/30 transition-colors">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary block mb-2">Meteo</span>
                        <p className="text-base font-medium">Apple WeatherKit</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/30 transition-colors">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary block mb-2">Notizie</span>
                        <p className="text-base font-medium">Public RSS Feeds</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="scroll-mt-32" id="diritti">
            <div className="flex items-center gap-4 mb-8">
              <span className="flex-none flex items-center justify-center w-10 h-10 rounded-2xl bg-primary/10 text-primary font-bold shadow-sm">5</span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">I Tuoi Diritti (GDPR)</h2>
            </div>
            <div className="pl-14 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Accesso ai dati",
                  "Cancellazione",
                  "Portabilità",
                  "Rettifica",
                  "Limitazione",
                  "Opposizione"
                ].map((right, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                    <span className="font-semibold text-sm tracking-wide">{right}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-blue-50/50 dark:bg-primary/5 border border-blue-100 dark:border-primary/20 rounded-2xl">
                <p className="text-base leading-relaxed text-blue-900/80 dark:text-primary-light italic flex gap-4">
                  <span className="text-2xl not-italic">💡</span>
                  Poiché DashB non memorizza dati in cloud proprietari, puoi esercitare questi diritti cancellando i dati localmente nell'app o revocando i permessi Google/Microsoft.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-20 border-t border-slate-200 dark:border-white/10 opacity-60">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">Aggiornamenti</h2>
            <p className="text-sm max-w-xl leading-relaxed mb-10">
              Questa informativa viene aggiornata per riflettere l'evoluzione tecnologica dei servizi Apple e le normative vigenti.
            </p>
            <div className="flex flex-wrap gap-4 text-[10px] font-black tracking-[0.2em] uppercase">
              <span className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10">Version 1.2</span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10">GDPR Compliant</span>
              <span className="px-4 py-2 text-slate-400">Update: 12.02.26</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
