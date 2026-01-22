
import React from 'react';

const FeaturesDetailedPage: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="container mx-auto max-w-6xl text-center mb-24">
        <h1 className="text-6xl md:text-7xl font-extrabold text-black dark:text-white mb-8 tracking-tighter">
          Platform <span className="text-[#25D366]">Architecture</span>
        </h1>
        <p className="text-xl text-black dark:text-white max-w-3xl mx-auto font-light leading-relaxed opacity-90">
          Experience the most reliable infrastructure for the WhatsApp Business API. Built for high-volume, enterprise-grade stability.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="glass-card p-12 rounded-[40px] space-y-6 bg-white/70 dark:bg-white/5 border-black/5 dark:border-white/10 shadow-lg">
          <div className="text-4xl">⚡</div>
          <h2 className="text-3xl font-bold text-black dark:text-white">Ultra-Low Latency Messaging</h2>
          <p className="text-black dark:text-white opacity-80 leading-relaxed">
            Our direct connections to Meta’s global servers ensure that your messages are delivered in sub-second timeframes, regardless of volume.
          </p>
          <ul className="space-y-3">
            {['Sub-200ms API Response', 'Multi-Region Data Centers', 'Message Deduplication'].map(i => (
              <li key={i} className="flex items-center text-sm text-black dark:text-white font-medium">
                <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full mr-3"></span>
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card p-12 rounded-[40px] space-y-6 bg-white/70 dark:bg-white/5 border-black/5 dark:border-white/10 shadow-lg">
          <div className="text-4xl">🔒</div>
          <h2 className="text-3xl font-bold text-black dark:text-white">Military-Grade Security</h2>
          <p className="text-black dark:text-white opacity-80 leading-relaxed">
            Your data is encrypted in transit and at rest. We provide full audit trails and role-based access for your entire organization.
          </p>
          <ul className="space-y-3">
            {['SOC2 Type II Compliant', 'End-to-End Encryption', 'ISO 27001 Certified'].map(i => (
              <li key={i} className="flex items-center text-sm text-black dark:text-white font-medium">
                <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full mr-3"></span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 glass-card p-16 rounded-[60px] text-center space-y-12 bg-white/80 dark:bg-white/5 border-black/5 dark:border-white/10 shadow-xl">
        <h2 className="text-4xl font-bold text-black dark:text-white">Ready to integrate?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="px-8 py-4 bg-slate-100 dark:bg-white/10 rounded-2xl border border-black/5 dark:border-white/20 font-mono text-[#25D366] font-bold">
            POST /v1/messages
          </div>
          <div className="px-8 py-4 bg-slate-100 dark:bg-white/10 rounded-2xl border border-black/5 dark:border-white/20 font-mono text-[#25D366] font-bold">
            GET /v1/analytics
          </div>
          <div className="px-8 py-4 bg-slate-100 dark:bg-white/10 rounded-2xl border border-black/5 dark:border-white/20 font-mono text-[#25D366] font-bold">
            POST /v1/templates
          </div>
        </div>
        <button className="px-12 py-5 bg-[#25D366] text-white rounded-full font-bold text-xl shadow-lg shadow-green-500/20 hover:scale-105 transition-all">
          Get API Keys
        </button>
      </div>
    </div>
  );
};

export default FeaturesDetailedPage;
