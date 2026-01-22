
import React from 'react';

const Analytics: React.FC = () => {
  return (
    <section id="analytics" className="py-32 px-6 bg-slate-100/20 dark:bg-black/30 transition-colors duration-500">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="inline-block px-4 py-1.5 bg-[#25D366]/10 border border-[#25D366]/20 rounded-full mb-8">
          <span className="text-xs font-bold tracking-widest text-[#25D366] uppercase">Deep Insights</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black dark:text-white">Measure What Matters</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-10 rounded-3xl bg-white/60 dark:bg-white/10 border-black/5 dark:border-white/10 shadow-sm backdrop-blur-md">
            <h4 className="text-gray-600 dark:text-white text-sm font-bold uppercase tracking-wider mb-4">Delivery Rate</h4>
            <div className="text-5xl font-bold text-black dark:text-white mb-2">99.8%</div>
            <p className="text-[#25D366] text-sm">↑ 2.4% from last month</p>
          </div>
          <div className="glass-card p-10 rounded-3xl bg-white/60 dark:bg-white/10 border-black/5 dark:border-white/10 shadow-sm backdrop-blur-md">
            <h4 className="text-gray-600 dark:text-white text-sm font-bold uppercase tracking-wider mb-4">Response Time</h4>
            <div className="text-5xl font-bold text-black dark:text-white mb-2">1.2m</div>
            <p className="text-[#25D366] text-sm">↓ 15s faster than average</p>
          </div>
          <div className="glass-card p-10 rounded-3xl bg-white/60 dark:bg-white/10 border-black/5 dark:border-white/10 shadow-sm backdrop-blur-md">
            <h4 className="text-gray-600 dark:text-white text-sm font-bold uppercase tracking-wider mb-4">CSAT Score</h4>
            <div className="text-5xl font-bold text-black dark:text-white mb-2">4.9/5</div>
            <p className="text-[#25D366] text-sm">Based on 12k+ reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
