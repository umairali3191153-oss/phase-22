
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 px-6 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="text-5xl mb-12 opacity-50 text-[#25D366]">"</div>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12 italic text-black dark:text-white">
          “We scaled to 50,000+ WhatsApp conversations per month without adding a single staff member. Synque's automation is our secret weapon.”
        </h2>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-slate-300 dark:bg-gray-600 rounded-full mb-4 overflow-hidden grayscale border-2 border-[#25D366]/20">
            <img src="https://picsum.photos/100/100" alt="Customer" className="w-full h-full object-cover" />
          </div>
          <h4 className="font-bold text-xl text-black dark:text-white">Marcus Chen</h4>
          <p className="text-black dark:text-white text-sm opacity-70">Head of Customer Operations, Zephyr Logistics</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
