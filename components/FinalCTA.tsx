
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="relative py-48 px-6 text-center overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-14 relative z-10">
        <div className="inline-block px-6 py-2 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-full backdrop-blur-xl mb-4">
          <span className="text-xs font-black text-[#25D366] tracking-[0.4em] uppercase">Ready to scale?</span>
        </div>

        <h2 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1] text-black dark:text-white">
          Start Your WhatsApp<br />
          <span className="text-[#25D366]">Growth Journey</span> Today
        </h2>

        <p className="text-xl md:text-2xl text-black dark:text-white font-light max-w-2xl mx-auto leading-relaxed">
          The future of enterprise communication is conversational. <br />
          Join 500+ global brands scaling on Synque.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <button className="w-full sm:w-auto px-16 py-6 bg-[#25D366] text-white rounded-full font-bold text-2xl shadow-2xl shadow-green-500/20 hover:scale-105 transition-all active:scale-95">
            Get Started for Free
          </button>
          
          <button className="w-full sm:w-auto px-16 py-6 border border-black/10 dark:border-white/20 backdrop-blur-md text-black dark:text-white rounded-full font-bold text-2xl hover:bg-black/5 dark:hover:bg-white/10 transition-all">
            Schedule a Demo
          </button>
        </div>

        <div className="pt-16 flex items-center justify-center space-x-12 opacity-80">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
            <span className="text-xs font-bold text-black dark:text-white uppercase tracking-widest">No Credit Card Required</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
            <span className="text-xs font-bold text-black dark:text-white uppercase tracking-widest">Official WABA Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
