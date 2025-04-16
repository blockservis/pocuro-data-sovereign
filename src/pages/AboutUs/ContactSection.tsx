
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pocuro-charcoal dark:text-white">
          Get in Touch
        </h2>
        <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray max-w-3xl mx-auto mb-8">
          Have questions or want to learn more about Pocuro?
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white dark:bg-pocuro-dark-slate rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold mb-2 text-pocuro-charcoal dark:text-white">General Inquiries</h3>
            <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-3">
              Questions about our products or services
            </p>
            <p className="text-pocuro-blue dark:text-pocuro-aqua-blue font-medium">info@pocuro.ai</p>
          </div>
          
          <div className="bg-white dark:bg-pocuro-dark-slate rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold mb-2 text-pocuro-charcoal dark:text-white">Media Inquiries</h3>
            <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-3">
              Press and media requests
            </p>
            <p className="text-pocuro-blue dark:text-pocuro-aqua-blue font-medium">press@pocuro.ai</p>
          </div>
          
          <div className="bg-white dark:bg-pocuro-dark-slate rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold mb-2 text-pocuro-charcoal dark:text-white">Support</h3>
            <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-3">
              Technical support and help
            </p>
            <p className="text-pocuro-blue dark:text-pocuro-aqua-blue font-medium">support@pocuro.ai</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
