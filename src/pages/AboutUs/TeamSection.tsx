
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Yazeed",
      role: "Co-Founder",
      bio: "Strategic operator with a background in pharmaceutical sciences and regulatory affairs. Leads business development with a privacy-first mission, drawing from years of corporate and consulting experience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Maariz",
      role: "Co-Founder",
      bio: "Engineer, blockchain and automation specialist with a foundation in Electrical and Biomedical Engineering. Designs Pocuro's AI infrastructure, focusing on secure, scalable software that protects user sovereignty.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-pocuro-dark-navy">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pocuro-charcoal dark:text-white">
            Meet Our Team
          </h2>
          <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray max-w-3xl mx-auto">
            The passionate people behind Pocuro.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white dark:bg-pocuro-dark-slate rounded-xl overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-pocuro-charcoal dark:text-white">{member.name}</h3>
                <p className="text-pocuro-blue dark:text-pocuro-aqua-blue font-medium mb-3">{member.role}</p>
                <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-6">
            Want to help us build the future of privacy-first productivity?
          </p>
          <Button asChild size="lg" className="bg-pocuro-blue hover:bg-opacity-90 text-white">
            <Link to="/careers">View Open Positions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
