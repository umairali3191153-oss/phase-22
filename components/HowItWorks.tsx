
import React from 'react';

const steps = [
  {
    n: "01",
    title: "Connect API",
    desc: "Get approved for the official WhatsApp Business API in minutes through our portal."
  },
  {
    n: "02",
    title: "Upload & Create",
    desc: "Import your customer contacts and design your message templates for approval."
  },
  {
    n: "03",
    title: "Launch & Manage",
    desc: "Send your first campaign and start managing conversations in the unified inbox."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 px-6 bg-slate-100/10 dark:bg-black/40 transition-colors duration-500">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-black dark:text-white">Get Started in 3 Steps</h2>
        
        <div className="grid md:grid-cols-3 gap-16 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 space-y-6">
              <div className="w-20 h-20 bg-slate-200 dark:bg-[#1e3a5f] border-2 border-white dark:border-white/20 rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-[#25D366] shadow-xl">
                {step.n}
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white">{step.title}</h3>
              <p className="text-gray-700 dark:text-white opacity-90 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
