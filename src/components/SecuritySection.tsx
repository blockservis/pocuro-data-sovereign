
import React from 'react';
import { Shield, Key, Lock, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="py-20 px-4 md:px-8 bg-pocuro-soft-white dark:bg-pocuro-deep-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-pocuro-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pocuro-aqua-blue/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Your Data, Your Rules</h2>
          <p className="section-subtitle">
            Pocuro is built with a "privacy by design" approach, giving you complete control over your personal information.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="bg-white dark:bg-pocuro-dark-navy rounded-2xl shadow-lg p-8 border border-pocuro-light-gray dark:border-pocuro-dark-slate">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pocuro-blue/10 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-pocuro-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-pocuro-charcoal dark:text-white">Zero-Knowledge Encryption</h3>
                    <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                      Your data is encrypted on your device with keys only you possess, making it impossible for anyone else to access your information.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-pocuro-blue/10 p-3 rounded-lg">
                    <Lock className="h-6 w-6 text-pocuro-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-pocuro-charcoal dark:text-white">Offline AI Processing</h3>
                    <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                      All AI analysis happens locally on your device, ensuring your data never has to be uploaded to external servers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-pocuro-blue/10 p-3 rounded-lg">
                    <Key className="h-6 w-6 text-pocuro-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-pocuro-charcoal dark:text-white">User-Controlled Public Mode</h3>
                    <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                      Choose exactly what data can be shared or synced online, with granular permission settings.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-pocuro-blue/10 p-3 rounded-lg">
                    <EyeOff className="h-6 w-6 text-pocuro-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-pocuro-charcoal dark:text-white">Data Sovereignty</h3>
                    <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                      You own your data completely, with no third-party access unless explicitly granted by you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-pocuro-blue/10 dark:bg-pocuro-blue/5 rounded-2xl p-8 border border-pocuro-blue/20 dark:border-pocuro-blue/10">
              <h3 className="text-2xl font-bold mb-6 text-pocuro-charcoal dark:text-white">Our Privacy Guarantee</h3>
              <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-6">
                We believe privacy is a fundamental right. Pocuro is designed from the ground up to protect your personal data while giving you powerful organizational tools.
              </p>
              <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-8">
                Our business model relies on selling software, not data. We will never monetize your information or share it with third parties.
              </p>
              
              <Button className="btn-primary w-full">
                Read Our Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
