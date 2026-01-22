
import React from 'react';

const faqItems = [
  { q: "Is this the official WhatsApp Business API?", a: "Yes, Synque is an official Meta Business Partner. You'll be using official, authorized channels." },
  { q: "Do I need technical skills to set it up?", a: "No. Our platform is built for business users. We handle the technical integration; you manage your business." },
  { q: "How long does approval take?", a: "Meta's approval process usually takes anywhere from 5 minutes to 24 hours." },
  { q: "Can I integrate with my existing CRM?", a: "Absolutely. We offer direct integrations with HubSpot, Salesforce, and a robust REST API for custom needs." }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-32 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">Common Questions</h2>
        <div className="space-y-6">
          {faqItems.map((item, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-white/60 dark:bg-white/5 backdrop-blur-md">
              <h4 className="text-lg font-bold mb-3 text-black dark:text-white">{item.q}</h4>
              <p className="text-black dark:text-white opacity-80 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
