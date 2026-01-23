
'use client';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center relative">
      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/5 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
          </span>
          <span className="text-xs font-bold tracking-widest text-black dark:text-white uppercase">Official WhatsApp Business API</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter text-black dark:text-white leading-[0.9]">
          WhatsApp for Business.<br />
          <span className="text-[#25D366] drop-shadow-[0_0_30px_rgba(37,211,102,0.3)]">At Scale.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-black dark:text-white max-w-3xl mx-auto font-light leading-relaxed">
          Send campaigns, manage conversations, and automate customer engagement using the official WhatsApp Business API — all from one powerful dashboard.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <button className="group relative w-full sm:w-auto px-12 py-5 bg-[#25D366] text-white rounded-full font-bold text-xl shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-105 transition-all active:scale-95">
            Start Free Trial
          </button>
          <button className="w-full sm:w-auto px-12 py-5 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 backdrop-blur-xl text-black dark:text-white rounded-full font-bold text-xl hover:bg-black/10 dark:hover:bg-white/20 transition-all">
            Book a Demo
          </button>
        </div>

        <div className="pt-20 animate-bounce opacity-30">
          <svg className="w-6 h-6 mx-auto text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
