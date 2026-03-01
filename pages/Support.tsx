import React from 'react';
import { Link } from 'react-router-dom';
import {
  EnvelopeIcon,
  PaperAirplaneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

type FaqItem = {
  question: string;
  answer: string;
  category: 'Generale' | 'Account' | 'Aggiornamenti';
};

const supportEmail = 'rgzzn@hrz.me';

const faqItems: FaqItem[] = [
  {
    category: 'Generale',
    question: 'DashB è disponibile su App Store?',
    answer:
      'Sì. DashB è disponibile su App Store e puoi provare anche le build beta tramite TestFlight quando disponibili.'
  },
  {
    category: 'Account',
    question: 'Quali servizi posso collegare a DashB?',
    answer:
      'DashB integra servizi orientati alla produttività, come calendario, feed RSS e meteo, per creare una vista unica e immediata.'
  },
  {
    category: 'Generale',
    question: 'Come posso segnalare bug o richiedere nuove funzionalità?',
    answer:
      'Puoi aprire una issue su GitHub oppure inviare direttamente una mail dal pulsante presente sotto ogni domanda di questa pagina.'
  },
  {
    category: 'Account',
    question: 'I miei dati vengono condivisi per pubblicità o profilazione?',
    answer:
      'No. DashB adotta un approccio privacy-first: i dati vengono utilizzati solo per abilitare le funzionalità richieste dall’utente.'
  },
  {
    category: 'Aggiornamenti',
    question: 'Dove posso seguire aggiornamenti e changelog?',
    answer:
      'Le novità vengono pubblicate nelle Releases del repository ufficiale di DashB su GitHub.'
  }
];

const buildMailtoLink = (question: string) => {
  const subject = encodeURIComponent(`[Supporto DashB] ${question}`);
  const body = encodeURIComponent(
    `Ciao team DashB,\n\nho una domanda relativa a:\n${question}\n\nDettagli aggiuntivi:\n`
  );

  return `mailto:${supportEmail}?subject=${subject}&body=${body}`;
};

const Support: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background-dark text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20">
        <header className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <SparklesIcon className="size-4" />
            Supporto ufficiale DashB
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            FAQ e assistenza
            <span className="block bg-gradient-to-r from-primary via-cyan-300 to-cyan-100 bg-clip-text text-transparent">
              veloci e chiare
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Seleziona una domanda frequente e inviala via email in un click. Ogni pulsante prepara
            automaticamente un messaggio verso <span className="font-semibold text-primary">{supportEmail}</span>.
          </p>
        </header>

        <div className="grid items-start gap-6 lg:grid-cols-[1.3fr,0.7fr]">
          <section className="space-y-4">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-slate-900/80"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
                    {item.category}
                  </span>
                  <QuestionMarkCircleIcon className="size-5 text-primary/80" />
                </div>

                <h2 className="text-xl font-bold text-white">{item.question}</h2>
                <p className="mt-3 leading-relaxed text-slate-300">{item.answer}</p>

                <a
                  href={buildMailtoLink(item.question)}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(39,194,255,0.35)]"
                >
                  <EnvelopeIcon className="size-5" />
                  Invia domanda via email
                </a>
              </article>
            ))}
          </section>

          <aside className="sticky top-24 space-y-4">
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-6">
              <h3 className="text-lg font-bold">Contatto diretto</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Per richieste non presenti nelle FAQ, puoi scriverci direttamente. Ti consigliamo di
                includere versione app, dispositivo e contesto del problema.
              </p>
              <a
                href="mailto:rgzzn@hrz.me?subject=Supporto%20DashB"
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/20 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/30"
              >
                <PaperAirplaneIcon className="size-4" />
                Scrivi a {supportEmail}
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
              Preferisci GitHub? Vai al{' '}
              <a
                href="https://github.com/rgzzn/DashB"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                repository ufficiale
              </a>
              . Oppure torna alla{' '}
              <Link to="/" className="font-semibold text-primary hover:underline">
                home
              </Link>
              .
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Support;
