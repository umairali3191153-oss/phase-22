
import React, { useState } from 'react';

const PricingDetailedPage: React.FC = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="pt-40 pb-32 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl text-center mb-16">
        <h1 className="text-6xl font-extrabold text-black dark:text-white mb-6 tracking-tight">Simple, Scalable Pricing</h1>
        <p className="text-xl text-black dark:text-white opacity-80 mb-10 max-w-2xl mx-auto">Choose the plan that fits your current volume, and scale seamlessly as you grow.</p>
        
        <div className="inline-flex items-center p-1 bg-slate-200 dark:bg-white/10 rounded-full border border-black/5 dark:border-white/20">
          <button 
            onClick={() => setBilling('monthly')}
            className={`px-8 py-2 rounded-full font-bold text-sm transition-all ${billing === 'monthly' ? 'bg-[#25D366] text-white shadow-lg shadow-green-500/20' : 'text-black dark:text-white opacity-60'}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setBilling('yearly')}
            className={`px-8 py-2 rounded-full font-bold text-sm transition-all ${billing === 'yearly' ? 'bg-[#25D366] text-white shadow-lg shadow-green-500/20' : 'text-black dark:text-white opacity-60'}`}
          >
            Yearly <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full ml-1 font-black">SAVE 20%</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto glass-card rounded-3xl bg-white/90 dark:bg-white/5 border-black/5 dark:border-white/10 shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-black/5 dark:border-white/10">
              <th className="p-8 text-xl font-bold text-black dark:text-white">Features</th>
              <th className="p-8 text-xl font-bold text-black dark:text-white">Starter</th>
              <th className="p-8 text-xl font-bold text-[#25D366]">Growth</th>
              <th className="p-8 text-xl font-bold text-black dark:text-white">Enterprise</th>
            </tr>
          </thead>
          <tbody className="text-black dark:text-white font-medium">
            <tr className="border-b border-black/5 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              <td className="p-8">Monthly Conversations</td>
              <td className="p-8">Up to 1,000</td>
              <td className="p-8">Up to 10,000</td>
              <td className="p-8 font-bold">Unlimited</td>
            </tr>
            <tr className="border-b border-black/5 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              <td className="p-8">Team Members</td>
              <td className="p-8">3</td>
              <td className="p-8">15</td>
              <td className="p-8 font-bold">Unlimited</td>
            </tr>
            <tr className="border-b border-black/5 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              <td className="p-8">API Access</td>
              <td className="p-8">Standard</td>
              <td className="p-8">Priority</td>
              <td className="p-8 font-bold">Dedicated Node</td>
            </tr>
            <tr className="border-b border-black/5 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              <td className="p-8">AI Chatbot Integration</td>
              <td className="p-8">❌</td>
              <td className="p-8">✅</td>
              <td className="p-8 font-bold">Advanced NLP</td>
            </tr>
            <tr>
              <td className="p-8 font-bold">Base Price</td>
              <td className="p-8 text-2xl font-bold">
                ${billing === 'monthly' ? '99' : '79'}<span className="text-sm font-normal opacity-60">/mo</span>
              </td>
              <td className="p-8 text-2xl font-bold">
                ${billing === 'monthly' ? '299' : '239'}<span className="text-sm font-normal opacity-60">/mo</span>
              </td>
              <td className="p-8 text-2xl font-bold italic">Contact Sales</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-20 text-center max-w-3xl mx-auto space-y-6">
        <h3 className="text-2xl font-bold text-black dark:text-white">Meta-imposed conversation fees</h3>
        <p className="text-black dark:text-white opacity-80 leading-relaxed">
          In addition to our subscription, Meta charges per-conversation fees based on the category (Utility, Marketing, Authentication, or Service). We pass these through at cost with zero markup.
        </p>
        <button 
          onClick={() => window.location.hash = '#contact'} 
          className="inline-block text-[#25D366] font-bold underline cursor-pointer hover:text-[#20bd5b] transition-colors"
        >
          Talk to our billing specialists
        </button>
      </div>
    </div>
  );
};

export default PricingDetailedPage;
