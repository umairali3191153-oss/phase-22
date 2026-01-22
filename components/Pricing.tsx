
import React from 'react';

const Pricing: React.FC = () => {
  const tiers = [
    { name: "Starter", price: "$99", desc: "For small teams starting their journey.", featured: false },
    { name: "Growth", price: "$299", desc: "For growing businesses scaling volume.", featured: true },
    { name: "Enterprise", price: "Custom", desc: "For large organizations with complex needs.", featured: false }
  ];

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">Transparent Pricing</h2>
          <p className="text-black dark:text-white opacity-80">Scale your communication as your business grows.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`glass-card p-10 rounded-[40px] border transition-all hover:scale-105 duration-300 ${
              tier.featured 
                ? 'border-[#25D366] bg-white/90 dark:bg-white/10 shadow-xl shadow-green-500/10' 
                : 'border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${tier.featured ? 'text-[#25D366]' : 'text-black dark:text-white'}`}>{tier.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-black dark:text-white">{tier.price}</span>
                {tier.price !== "Custom" && <span className="text-black dark:text-white opacity-60 ml-2">/mo</span>}
              </div>
              <p className="text-black dark:text-white opacity-80 mb-8 leading-relaxed">{tier.desc}</p>
              <button className={`w-full py-4 rounded-full font-bold transition-all ${
                tier.featured 
                  ? 'bg-[#25D366] text-white shadow-xl shadow-green-500/20 hover:bg-[#20bd5b]' 
                  : 'bg-black dark:bg-white/10 text-white hover:bg-slate-800 dark:hover:bg-white/20'
              }`}>
                {tier.price === "Custom" ? "Contact Sales" : "Start Trial"}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-black dark:text-white opacity-60 text-sm">
            All plans include Meta API fees at cost. 
            <a href="#" className="text-[#25D366] font-bold underline ml-1 hover:text-[#20bd5b]">View full pricing details</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
