
import React from 'react';
import { Book, Rocket, Shield, TrendingUp, Users } from 'lucide-react';

const roadmapItems = [
  {
    id: 1,
    title: "AI Literacy Community Formation",
    description: "Establishment of a grassroots education hub to share ideas, spark collaboration, and grow a values-driven AI community grounded in care, privacy, and purposeful automation.",
    quarter: "Q2 2025",
    status: "planned",
    icon: Book,
  },
  {
    id: 2,
    title: "ERP Pilot Program",
    description: "Invitation-only onboarding for early businesses ahead of our enterprise launch.",
    quarter: "Q2 2025",
    status: "planned",
    icon: Users,
  },
  {
    id: 3,
    title: "PocuroMe (PRP) MVP Launch",
    description: "Introducing our privacy-first personal planner with foundational modules and local-first AI.",
    quarter: "End of Q2 2025",
    status: "planned",
    icon: Rocket,
  },
  {
    id: 4,
    title: "PocuroBiz (ERP) MVP Launch",
    description: "Launching the ERP platform for small businesses with core modules and AI-powered automation.",
    quarter: "End of Q3 2025",
    status: "planned",
    icon: TrendingUp,
  },
  {
    id: 5,
    title: "Mobile & Desktop App",
    description: "Progressive Web App first. Full desktop privacy suite comes with our secure Tauri build.",
    quarter: "Post-MVP",
    status: "planned",
    icon: Shield,
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
