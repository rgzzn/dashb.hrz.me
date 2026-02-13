import React, { useEffect } from 'react';
import {
  ShieldCheckIcon,
  CircleStackIcon,
  LockClosedIcon,
  DocumentTextIcon,
  BellAlertIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

type Pillar = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type PolicyItem = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const pillars: Pillar[] = [
  {
    title: 'Minimizzazione dei dati',
    description: 'Raccogliamo solo i dati necessari per offrire le funzionalità che abiliti.',
    icon: CircleStackIcon,
  },
  {
    title: 'Sicurezza by design',
    description: 'Token e credenziali sono protetti nel Keychain Apple con approccio security-first.',
    icon: LockClosedIcon,
  },
  {
    title: 'Trasparenza continua',
    description: 'Aggiorniamo questa pagina quando cambiano integrazioni, processi o requisiti normativi.',
    icon: DocumentTextIcon,
  },
];

const policyItems: PolicyItem[] = [
  {
    title: '1. Dati raccolti',
    description:
      "DashB tratta esclusivamente dati funzionali all'esperienza richiesta dall'utente: feed RSS, informazioni calendario, meteo e preferenze di visualizzazione. Non effettuiamo profilazione pubblicitaria e non vendiamo dati a terzi.",
    icon: CircleStackIcon,
  },
  {
    title: '2. Conservazione e sicurezza',
    description:
      "Credenziali OAuth e token di accesso vengono custoditi in Apple Keychain. Le comunicazioni avvengono su canali cifrati HTTPS/TLS e applichiamo il principio del minimo privilegio per l'accesso ai dati.",
    icon: LockClosedIcon,
  },
  {
    title: '3. Servizi di terze parti',
    description:
      'Per alcune funzionalità DashB si integra con provider esterni (es. Google Calendar, Outlook, feed RSS). Ogni integrazione resta soggetta alle policy privacy del relativo fornitore.',
    icon: ShieldCheckIcon,
  },
  {
    title: '4. Aggiornamenti della policy',
    description:
      'Possiamo aggiornare questa informativa in caso di evoluzioni del prodotto o adeguamenti normativi. In caso di modifiche rilevanti, la pagina verrà aggiornata con data visibile di revisione.',
    icon: BellAlertIcon,
  },
];

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative isolate w-full flex-grow overflow-hidden bg-background-dark text-slate-100 pt-32 pb-24">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.32),_transparent_55%)] pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[420px] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.18),_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <header className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary-light text-sm font-semibold">
            <ShieldCheckIcon className="size-4" />
            Privacy Policy
          </div>
          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-secondary">
            Privacy chiara, design coerente,
            <span className="block bg-gradient-to-r from-primary-light to-accent-purple bg-clip-text text-transparent">
              controllo totale
            </span>
          </h1>
          <p className="mt-8 text-lg text-slate-300/90 leading-relaxed">
            In DashB consideriamo la protezione dei dati parte integrante dell&apos;esperienza prodotto. Qui trovi
            una panoramica leggibile, precisa e sempre aggiornata su come gestiamo i tuoi dati.
          </p>
        </header>

        <section className="mt-16 grid gap-5 md:grid-cols-3">
          {pillars.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_40px_-28px_rgba(79,70,229,0.8)]"
            >
              <div className="size-12 rounded-2xl border border-primary/40 bg-primary/10 flex items-center justify-center mb-5">
                <Icon className="size-5 text-primary-light" />
              </div>
              <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-300/80">{description}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-8 space-y-5">
          {policyItems.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="size-11 shrink-0 rounded-2xl border border-primary/35 bg-primary/10 flex items-center justify-center mt-0.5">
                  <Icon className="size-5 text-primary-light" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-100">{title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-slate-300/85">{description}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-base sm:text-lg text-slate-300/90">
            Per richieste sulla privacy o chiarimenti sul trattamento dati, puoi contattarci tramite il repository ufficiale su GitHub.
          </p>
          <a
            href="https://github.com/rgzzn/DashB/issues/new?title=Privacy%20Policy%20Request"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-accent-purple transition-colors"
          >
            Contatta il team
            <ArrowTopRightOnSquareIcon className="size-4" />
          </a>
        </section>

        <p className="mt-8 text-center text-sm text-slate-400">
          Ultimo aggiornamento: <span className="font-semibold text-slate-300">13 Febbraio 2026</span>
        </p>
      </div>
    </div>
  );
};

export default Privacy;
