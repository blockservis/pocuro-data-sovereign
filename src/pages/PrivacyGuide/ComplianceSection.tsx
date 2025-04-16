
import React from 'react';
import { FileText } from 'lucide-react';

const ComplianceSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-pocuro-dark-navy">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <FileText className="h-10 w-10 text-pocuro-blue" />
        </div>
        
        <h2 className="text-3xl font-bold mb-6 text-pocuro-charcoal dark:text-white">
          Compliance & Certifications
        </h2>
        
        <p className="text-lg text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-10 max-w-3xl mx-auto">
          Pocuro is designed to meet or exceed industry privacy standards and regulatory requirements:
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 border border-pocuro-light-gray dark:border-pocuro-dark-slate rounded-lg">
            <div className="font-bold text-pocuro-charcoal dark:text-white mb-1">GDPR</div>
            <div className="text-sm text-pocuro-slate-gray dark:text-pocuro-cool-gray">European Union</div>
          </div>
          
          <div className="p-4 border border-pocuro-light-gray dark:border-pocuro-dark-slate rounded-lg">
            <div className="font-bold text-pocuro-charcoal dark:text-white mb-1">CCPA/CPRA</div>
            <div className="text-sm text-pocuro-slate-gray dark:text-pocuro-cool-gray">California</div>
          </div>
          
          <div className="p-4 border border-pocuro-light-gray dark:border-pocuro-dark-slate rounded-lg">
            <div className="font-bold text-pocuro-charcoal dark:text-white mb-1">HIPAA</div>
            <div className="text-sm text-pocuro-slate-gray dark:text-pocuro-cool-gray">Healthcare Ready</div>
          </div>
          
          <div className="p-4 border border-pocuro-light-gray dark:border-pocuro-dark-slate rounded-lg">
            <div className="font-bold text-pocuro-charcoal dark:text-white mb-1">ISO 27001</div>
            <div className="text-sm text-pocuro-slate-gray dark:text-pocuro-cool-gray">In Progress</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
