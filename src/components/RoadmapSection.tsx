
import React from 'react';
import { Calendar, Flag, Rocket, Check } from 'lucide-react';

const roadmapItems = [
  {
    id: 1,
    title: "Health Tracking Module",
    description: "Privacy-focused health data tracking with local AI insights.",
    quarter: "Q2 2025",
    status: "planned",
    icon: Calendar,
  },
  {
    id: 2,
    title: "Cross-Device Sync",
    description: "Optional device synchronization with end-to-end encryption.",
    quarter: "Q3 2025",
    status: "planned",
    icon: Rocket,
  },
  {
    id: 3,
    title: "Document Scanner Enhancement",
    description: "Advanced document scanning with OCR and AI categorization.",
    quarter: "Q4 2025",
    status: "planned",
    icon: Flag,
  },
  {
    id: 4,
    title: "Beta Launch",
    description: "Initial release with core privacy features and basic modules.",
    quarter: "Q1 2025",
    status: "completed",
    icon: Check,
  },
];

const RoadmapSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white dark:bg-pocuro-dark-navy" id="roadmap">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pocuro-charcoal dark:text-white">
            Product Roadmap
          </h2>
          <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray max-w-2xl mx-auto">
            See what's coming next as we build the future of privacy-first personal planning.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px bg-pocuro-light-gray dark:bg-pocuro-dark-slate -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={item.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 p-4">
                  <div className={`
                    p-6 rounded-xl shadow-sm border 
                    ${item.status === 'completed' 
                      ? 'border-pocuro-emerald dark:border-pocuro-dark-emerald bg-pocuro-emerald/5 dark:bg-pocuro-dark-emerald/5' 
                      : 'border-pocuro-light-gray dark:border-pocuro-dark-slate bg-white dark:bg-pocuro-dark-navy'}
                  `}>
                    <div className="flex items-center mb-4">
                      <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center mr-4
                        ${item.status === 'completed' 
                          ? 'bg-pocuro-emerald dark:bg-pocuro-dark-emerald text-white' 
                          : 'bg-pocuro-blue/10 dark:bg-pocuro-blue/20 text-pocuro-blue'}
                      `}>
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-pocuro-charcoal dark:text-white">{item.title}</h3>
                        <span className={`
                          text-sm px-2 py-0.5 rounded 
                          ${item.status === 'completed' 
                            ? 'bg-pocuro-emerald/20 dark:bg-pocuro-dark-emerald/20 text-pocuro-emerald dark:text-pocuro-dark-emerald' 
                            : 'bg-pocuro-blue/10 dark:bg-pocuro-blue/20 text-pocuro-blue'}
                        `}>
                          {item.quarter}
                        </span>
                      </div>
                    </div>
                    <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute top-10 left-4 md:left-1/2 w-4 h-4 rounded-full bg-pocuro-blue -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
