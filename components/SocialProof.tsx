
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section id="social-proof" className="py-24 border-y border-black/5 dark:border-white/10 bg-slate-100/10 dark:bg-black/20 backdrop-blur-sm transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-around gap-12 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-4xl font-bold text-black dark:text-white">500+</h3>
            <p className="text-gray-700 dark:text-gray-100 text-sm uppercase tracking-widest">Trusted Businesses</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-4xl font-bold text-black dark:text-white">50M+</h3>
            <p className="text-gray-700 dark:text-gray-100 text-sm uppercase tracking-widest">Messages Delivered</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-4xl font-bold text-[#25D366]">99.9%</h3>
            <p className="text-gray-700 dark:text-gray-100 text-sm uppercase tracking-widest">API Uptime</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-4xl font-bold text-black dark:text-white">24/7</h3>
            <p className="text-gray-700 dark:text-gray-100 text-sm uppercase tracking-widest">Global Support</p>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale hover:grayscale-0 transition-all">
          <div className="text-xl font-bold text-black dark:text-white italic opacity-60 hover:opacity-100 transition-opacity">TECHCORP</div>
          <div className="text-xl font-bold text-black dark:text-white italic opacity-60 hover:opacity-100 transition-opacity">ZEPHYR</div>
          <div className="text-xl font-bold text-black dark:text-white italic opacity-60 hover:opacity-100 transition-opacity">NEXUS</div>
          <div className="text-xl font-bold text-black dark:text-white italic opacity-60 hover:opacity-100 transition-opacity">QUANTUM</div>
          <div className="text-xl font-bold text-black dark:text-white italic opacity-60 hover:opacity-100 transition-opacity">AURORA</div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
