import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="rounded-[2.5rem] bg-gradient-to-br from-deep-indigo via-indigo-900 to-primary p-12 md:p-20 text-center text-white relative overflow-hidden shadow-3xl">
        {/* Background blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-purple rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <h2 className="text-4xl md:text-6xl font-black mb-6 relative z-10 text-secondary">
          Ready to take control?
        </h2>
        <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto relative z-10">
          Join 10,000+ users who have simplified their digital workflow with DashB for Apple TV.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button className="px-10 py-5 bg-white text-indigo-950 rounded-2xl text-lg font-bold hover:scale-105 hover:shadow-xl transition-all active:scale-95">
            Get Started for Free
          </button>
          <button className="px-10 py-5 bg-white/10 border border-white/20 text-white rounded-2xl text-lg font-bold hover:bg-white/20 backdrop-blur-md transition-colors active:scale-95">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;