
import React from 'react';

const cases = [
  {
    role: "Marketing Teams",
    title: "Campaigns that convert",
    points: ["Run promo offers", "Bulk notifications", "Custom templates"]
  },
  {
    role: "Support Teams",
    title: "Resolved in seconds",
    points: ["Multi-agent login", "Auto-responders", "Quick replies"]
  },
  {
    role: "Sales Teams",
    title: "Lead nurturing",
    points: ["Lead qualification", "Meeting booking", "CRM integration"]
  },
  {
    role: "Enterprises",
    title: "Global Scalability",
    points: ["Secure API access", "Multi-region setup", "Custom workflows"]
  }
];

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
              Empowering Every Team in Your Organization
            </h2>
            <p className="text-gray-800 dark:text-white text-lg leading-relaxed max-w-lg">
              Synque's WABA platform is built to handle the unique needs of every department, from high-speed marketing bursts to sensitive multi-team enterprise conversations.
            </p>
            <button className="px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:shadow-2xl hover:shadow-green-500/40 transition-all active:scale-95">
              Explore All Use Cases
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cases.map((item, idx) => (
              <div key={idx} className="glass-card p-6 rounded-3xl border border-black/5 dark:border-white/20 bg-white/80 dark:bg-white/10 backdrop-blur-md hover:bg-white/90 dark:hover:bg-white/20 transition-all hover:-translate-y-1 shadow-md hover:shadow-xl">
                <span className="text-[10px] font-black tracking-[0.2em] text-[#25D366] uppercase mb-2 block">{item.role}</span>
                <h4 className="font-bold text-xl text-black dark:text-white mb-4">{item.title}</h4>
                <ul className="space-y-3">
                  {item.points.map((p, i) => (
                    <li key={i} className="text-sm text-black dark:text-white font-medium flex items-center">
                      <span className="w-2 h-2 bg-[#25D366] rounded-full mr-3 shadow-[0_0_8px_#25D366]"></span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
