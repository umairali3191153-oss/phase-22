
import React from 'react';

const Automation: React.FC = () => {
  return (
    <section id="automation" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 overflow-hidden relative bg-white/60 dark:bg-white/5 border-black/5 dark:border-white/10">
          <div className="flex-1 space-y-8 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black dark:text-white">AI That Works <span className="text-[#25D366]">24/7.</span></h2>
            <p className="text-gray-800 dark:text-white text-lg font-light leading-relaxed">
              Don't let your customers wait. Our intelligent automation layer handles the routine while you focus on high-value interactions.
            </p>
            <ul className="space-y-4">
              {['Instant Auto-responses', 'NLP AI Chatbots', 'Workflow Automation', 'Smart Lead Routing'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-black dark:text-white">
                  <div className="bg-[#25D366] p-1 rounded-full">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold">{item}</span>
                </li>
              ))}
            </ul>
            <button className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:bg-[#25D366] hover:text-white transition-all">
              See AI in Action
            </button>
          </div>
          
          <div className="flex-1 relative">
            <div className="w-full aspect-square bg-[#25D366]/5 rounded-full flex items-center justify-center border border-[#25D366]/10 animate-pulse">
               <div className="w-3/4 aspect-square bg-[#25D366]/10 rounded-full flex items-center justify-center border border-[#25D366]/20">
                  <div className="text-8xl">🤖</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;
