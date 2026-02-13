import React, { useEffect } from 'react';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  DocumentTextIcon, 
  ServerStackIcon, 
  CloudIcon, 
  BellIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-grow pt-32 pb-20 bg-background-dark min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <header className="flex flex-col items-center text-center mb-24 relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wide uppercase mb-8 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
            <ShieldCheckIcon className="w-5 h-5 mr-2" />
            Privacy Policy
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
            Privacy chiara, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-purple-400">
              design coerente,
            </span> <br />
            controllo totale
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
            In DashB consideriamo la protezione dei dati parte integrante dell'esperienza prodotto. 
            Qui trovi una panoramica leggibile, precisa e sempre aggiornata su come gestiamo i tuoi dati.
          </p>
        </header>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <FeatureCard 
            icon={<Squares2X2Icon className="w-8 h-8 text-primary" />}
            title="Minimizzazione dei dati"
            description="Raccogliamo solo i dati necessari per offrire le funzionalità che abiliti."
          />
          <FeatureCard 
            icon={<LockClosedIcon className="w-8 h-8 text-primary" />}
            title="Sicurezza by design"
            description="Token e credenziali sono protetti nel Keychain Apple con approccio security-first."
          />
          <FeatureCard 
            icon={<DocumentTextIcon className="w-8 h-8 text-primary" />}
            title="Trasparenza continua"
            description="Aggiorniamo questa pagina quando cambiano integrazioni, processi o requisiti normativi."
          />
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6 max-w-5xl mx-auto">
          <SectionCard 
            number="1"
            icon={<ServerStackIcon className="w-6 h-6 text-indigo-400" />}
            title="Dati raccolti"
          >
            DashB tratta esclusivamente dati funzionali all'esperienza richiesta dall'utente: feed RSS, informazioni calendario, meteo e preferenze di visualizzazione. Non effettuiamo profilazione pubblicitaria e non vendiamo dati a terzi.
          </SectionCard>

          <SectionCard 
            number="2"
            icon={<LockClosedIcon className="w-6 h-6 text-indigo-400" />}
            title="Conservazione e sicurezza"
          >
            Credenziali OAuth e token di accesso vengono custoditi in Apple Keychain. Le comunicazioni avvengono su canali cifrati HTTPS/TLS e applichiamo il principio del minimo privilegio per l'accesso ai dati.
          </SectionCard>

          <SectionCard 
            number="3"
            icon={<CloudIcon className="w-6 h-6 text-indigo-400" />}
            title="Servizi di terze parti"
          >
            Per alcune funzionalità DashB si integra con provider esterni (es. Google Calendar, Outlook, feed RSS). Ogni integrazione resta soggetta alle policy privacy del relativo fornitore.
          </SectionCard>

          <SectionCard 
            number="4"
            icon={<BellIcon className="w-6 h-6 text-indigo-400" />}
            title="Aggiornamenti della policy"
          >
            Possiamo aggiornare questa informativa in caso di evoluzioni del prodotto o adeguamenti normativi. In caso di modifiche rilevanti, la pagina verrà aggiornata con data visibile di revisione.
          </SectionCard>
        </div>

        {/* Footer / Contact */}
        <div className="mt-24 text-center border-t border-white/5 pt-12">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <p className="text-slate-400 text-lg">
              Per richieste sulla privacy o chiarimenti sul trattamento dati, puoi contattarci tramite il repository ufficiale su GitHub.
            </p>
            <a 
              href="https://github.com/rgzzn/dashb.hrz.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-none px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            >
              Contatta il team
            </a>
          </div>
          <p className="mt-12 text-sm font-mono text-slate-500 uppercase tracking-widest">
            Ultimo aggiornamento: <span className="text-slate-300">13 Febbraio 2026</span>
          </p>
        </div>

      </div>
    </div>
  );
};

// Helper Components for Cleaner JSX
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group">
    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const SectionCard = ({ number, icon, title, children }: { number: string, icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col md:flex-row gap-8 items-start">
    <div className="flex-none">
       <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
         {icon}
       </div>
    </div>
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
        <span className="text-slate-500 text-lg font-mono">
          {number}.
        </span>
        {title}
      </h3>
      <p className="text-slate-400 text-lg leading-relaxed">
        {children}
      </p>
    </div>
  </div>
);

export default Privacy;
