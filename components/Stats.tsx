import React from 'react';

const StatsCard: React.FC<{ label: string; value: string; subtext: string; subtextColor: string }> = ({
  label,
  value,
  subtext,
  subtextColor
}) => (
  <div className="flex flex-col gap-2 rounded-xl p-8 border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-indigo-950/20 backdrop-blur-sm hover:border-primary/20 transition-colors">
    <p className="text-slate-500 dark:text-primary/70 text-sm font-bold uppercase tracking-widest">{label}</p>
    <div className="flex items-end gap-3">
      <p className="text-4xl font-black text-slate-900 dark:text-secondary">{value}</p>
      <p className={`text-sm font-bold pb-1 ${subtextColor}`}>{subtext}</p>
    </div>
  </div>
);

const Stats: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard 
          label="Active Users" 
          value="10k+" 
          subtext="+12% growth" 
          subtextColor="text-emerald-400" 
        />
        <StatsCard 
          label="GitHub Stars" 
          value="4.2k" 
          subtext="+5% growth" 
          subtextColor="text-emerald-400" 
        />
        <StatsCard 
          label="Load Time" 
          value="0.4s" 
          subtext="Industry Leading" 
          subtextColor="text-primary" 
        />
      </div>
    </section>
  );
};

export default Stats;