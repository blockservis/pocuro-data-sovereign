
import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-pocuro-dark-navy">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pocuro-charcoal dark:text-white">
            Our Story
          </h2>
          <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray max-w-3xl mx-auto">
            How a small team of privacy advocates set out to reimagine personal productivity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-6">
              Pocuro began in 2025, when our founders—deeply concerned by the growing wave of privacy erosion accelerated by AI advancements—came together with a team of engineers, designers, and advocates who shared the same unease.
            </p>
            <p className="text-lg text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-6">
              Mainstream tools were becoming more powerful, but also more invasive—treating user data as fuel for automation rather than something sacred.
            </p>
            <p className="text-lg text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-6">
              Together, we envisioned a different path: to build technology that empowers everyday users to embrace AI and automation—while still honoring their fundamental rights to privacy, autonomy, and digital security.
            </p>
            <p className="text-lg text-pocuro-slate-gray dark:text-pocuro-cool-gray">
              The name "Pocuro" is inspired by the Latin word curo—"I care" or "I manage." It reflects our mission of personal curation, careful control, and purposeful planning. It's also a nod to a pocket—small, secure, always within reach.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Pocuro team working" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-pocular-blue rounded-lg p-4 shadow-lg hidden md:block bg-pocuro-blue">
              <p className="text-white font-medium italic">
                "Privacy isn't a feature, it's a fundamental right."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
