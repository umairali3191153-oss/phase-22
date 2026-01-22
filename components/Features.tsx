
import React from 'react';

const featureList = [
  {
    title: "Bulk Messaging & Campaigns",
    description: "Send personalized messages to 10,000+ contacts in minutes with advanced segmentation.",
    icon: "🚀"
  },
  {
    title: "Unified Team Inbox",
    description: "Collaborative dashboard where your entire team can manage incoming WhatsApp chats.",
    icon: "📥"
  },
  {
    title: "Campaign Automation",
    description: "Schedule and automate message delivery based on triggers or specific dates.",
    icon: "⚙️"
  },
  {
    title: "AI Chatbots",
    description: "Deploy Dialogflow-powered bots for 24/7 automated customer support.",
    icon: "🤖"
  },
  {
    title: "Analytics & Insights",
    description: "Comprehensive reporting on delivery, response times, and campaign engagement.",
    icon: "📊"
  },
  {
    title: "Enterprise Security",
    description: "Role-based access controls, detailed audit logs, and fully GDPR-ready compliance.",
    icon: "🛡️"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">Enterprise Capabilities</h2>
          <p className="text-gray-700 dark:text-white max-w-xl mx-auto opacity-90">Everything you need to scale your customer communications effectively on the world's most popular messaging app.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, idx) => (
            <div 
              key={idx} 
              className="glass-card p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md hover:border-[#25D366]/40 transition-all group shadow-sm hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-[#25D366]/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white group-hover:text-[#25D366] transition-colors">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-100 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
