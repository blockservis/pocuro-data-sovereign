
import React from 'react';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Lock, Database, Server, Eye, UserPlus, Settings, FileText } from 'lucide-react';

const PrivacyGuideContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 text-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Guide</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Understanding how Pocuro protects your data and respects your privacy.
            </p>
          </div>
        </section>
        
        {/* Privacy principles section */}
        <section className="py-16 px-4 bg-white dark:bg-pocuro-dark-navy">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pocuro-charcoal dark:text-white">
                Our Privacy Principles
              </h2>
              <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray max-w-2xl mx-auto">
                At Pocuro, privacy isn't just a feature—it's our foundation. 
                Here's how we're different.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white dark:bg-pocuro-dark-slate border-pocuro-light-gray dark:border-pocuro-dark-slate hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="bg-pocuro-blue/10 dark:bg-pocuro-blue/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-pocuro-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">Zero-Knowledge</h3>
                  <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                    We can't read your data—even if we wanted to. Your information is encrypted before it ever reaches our servers.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-pocuro-dark-slate border-pocuro-light-gray dark:border-pocuro-dark-slate hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="bg-pocuro-blue/10 dark:bg-pocuro-blue/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-pocuro-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">Local-First</h3>
                  <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                    Your data stays on your device by default. We only sync what you explicitly choose to share, and only when you decide.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-pocuro-dark-slate border-pocuro-light-gray dark:border-pocuro-dark-slate hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="bg-pocuro-blue/10 dark:bg-pocuro-blue/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Server className="h-6 w-6 text-pocuro-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">On-Device AI</h3>
                  <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                    Sensitive AI operations run locally on your device, ensuring your personal queries never leave your control.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-pocuro-dark-slate border-pocuro-light-gray dark:border-pocuro-dark-slate hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="bg-pocuro-blue/10 dark:bg-pocuro-blue/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-pocuro-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">Full Transparency</h3>
                  <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                    Our code is open for inspection, and we clearly communicate what data is used, where, and why.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Privacy guide details */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="data" className="w-full">
              <div className="mb-8">
                <TabsList className="grid max-w-4xl mx-auto sm:grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="data">Your Data</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="ai">AI & Privacy</TabsTrigger>
                  <TabsTrigger value="choices">Your Choices</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="data" className="p-6 bg-white dark:bg-pocuro-dark-slate rounded-lg shadow border border-pocuro-light-gray dark:border-pocuro-dark-slate">
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center mb-6">
                    <Shield className="h-6 w-6 text-pocuro-blue mr-3" />
                    <h3 className="text-2xl font-bold text-pocuro-charcoal dark:text-white">Your Data</h3>
                  </div>
                  
                  <div className="prose dark:prose-invert prose-blue max-w-none">
                    <h4>Data Collection Principles</h4>
                    <p>
                      We collect the minimum amount of data necessary to provide our services. Most of your data never leaves your device unless you explicitly choose to sync it.
                    </p>
                    
                    <h4>What We Collect</h4>
                    <ul>
                      <li>
                        <strong>Account information</strong>: Email address and optional display name for authentication.
                      </li>
                      <li>
                        <strong>Usage analytics</strong>: Anonymous usage patterns to improve the product (opt-out available).
                      </li>
                      <li>
                        <strong>Crash reports</strong>: Technical information when errors occur to help us fix issues.
                      </li>
                    </ul>
                    
                    <h4>What We Don't Collect</h4>
                    <ul>
                      <li>The content of your documents, notes, or files</li>
                      <li>Your contacts' information</li>
                      <li>Your browsing history</li>
                      <li>Your location data</li>
                      <li>Your biometric data</li>
                    </ul>
                    
                    <h4>Data Ownership</h4>
                    <p>
                      You own your data, not us. You can export, delete, or transfer it at any time. If you delete your account, all your data is permanently removed from our systems.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="security" className="p-6 bg-white dark:bg-pocuro-dark-slate rounded-lg shadow border border-pocuro-light-gray dark:border-pocuro-dark-slate">
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center mb-6">
                    <Lock className="h-6 w-6 text-pocuro-blue mr-3" />
                    <h3 className="text-2xl font-bold text-pocuro-charcoal dark:text-white">Security</h3>
                  </div>
                  
                  <div className="prose dark:prose-invert prose-blue max-w-none">
                    <h4>Encryption</h4>
                    <p>
                      We use strong encryption to protect your data:
                    </p>
                    <ul>
                      <li>End-to-end encryption for all synced data</li>
                      <li>AES-256 for at-rest encryption</li>
                      <li>TLS 1.3 for all data in transit</li>
                      <li>Zero-knowledge encryption for sensitive vaults</li>
                    </ul>
                    
                    <h4>Authentication</h4>
                    <p>
                      We support secure authentication methods:
                    </p>
                    <ul>
                      <li>Email/password with PBKDF2 password hashing</li>
                      <li>Two-factor authentication</li>
                      <li>OAuth with major providers (Google, Apple)</li>
                      <li>Biometric authentication on supported devices</li>
                    </ul>
                    
                    <h4>Security Audits</h4>
                    <p>
                      Our system undergoes regular security audits by independent third parties. We promptly address any vulnerabilities identified in these audits.
                    </p>
                    
                    <h4>Breach Notification</h4>
                    <p>
                      In the unlikely event of a data breach, we will notify affected users promptly and provide clear guidance on next steps.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="ai" className="p-6 bg-white dark:bg-pocuro-dark-slate rounded-lg shadow border border-pocuro-light-gray dark:border-pocuro-dark-slate">
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center mb-6">
                    <Settings className="h-6 w-6 text-pocuro-blue mr-3" />
                    <h3 className="text-2xl font-bold text-pocuro-charcoal dark:text-white">AI & Privacy</h3>
                  </div>
                  
                  <div className="prose dark:prose-invert prose-blue max-w-none">
                    <h4>How We Use AI</h4>
                    <p>
                      Pocuro employs AI to enhance your productivity while maintaining strict privacy:
                    </p>
                    <ul>
                      <li>
                        <strong>Local AI models</strong>: Most AI operations run directly on your device, keeping sensitive data local.
                      </li>
                      <li>
                        <strong>Privacy-preserving processing</strong>: When cloud AI is needed, we use techniques like data anonymization and credential separation.
                      </li>
                      <li>
                        <strong>Transparency</strong>: We always indicate when AI is being used and what data it accesses.
                      </li>
                    </ul>
                    
                    <h4>AI Training</h4>
                    <p>
                      We never use your personal data to train our AI models. Our models are trained on properly licensed datasets or public domain information.
                    </p>
                    
                    <h4>AI Controls</h4>
                    <p>
                      You have complete control over AI features:
                    </p>
                    <ul>
                      <li>Toggle AI features on/off globally or per module</li>
                      <li>Choose between local-only or cloud AI processing</li>
                      <li>Adjust the level of AI suggestions and automation</li>
                      <li>Delete AI-generated content at any time</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="choices" className="p-6 bg-white dark:bg-pocuro-dark-slate rounded-lg shadow border border-pocuro-light-gray dark:border-pocuro-dark-slate">
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center mb-6">
                    <UserPlus className="h-6 w-6 text-pocuro-blue mr-3" />
                    <h3 className="text-2xl font-bold text-pocuro-charcoal dark:text-white">Your Choices</h3>
                  </div>
                  
                  <div className="prose dark:prose-invert prose-blue max-w-none">
                    <h4>Privacy Controls</h4>
                    <p>
                      Pocuro gives you granular control over your privacy:
                    </p>
                    <ul>
                      <li>Choose which modules sync and which stay local-only</li>
                      <li>Control sharing permissions for each document or item</li>
                      <li>Enable or disable usage analytics</li>
                      <li>Manage your cookie preferences</li>
                      <li>Export, download, or delete your data at any time</li>
                    </ul>
                    
                    <h4>Data Retention</h4>
                    <p>
                      You decide how long we retain your data. You can:
                    </p>
                    <ul>
                      <li>Set automatic deletion periods for sensitive information</li>
                      <li>Delete individual items immediately</li>
                      <li>Clear your entire account history</li>
                      <li>Delete your account and all associated data</li>
                    </ul>
                    
                    <h4>Privacy Preferences</h4>
                    <p>
                      We respect your communication preferences:
                    </p>
                    <ul>
                      <li>Opt out of marketing communications</li>
                      <li>Choose which service notifications you receive</li>
                      <li>Select your preferred communication channels</li>
                    </ul>
                    
                    <h4>Rights & Requests</h4>
                    <p>
                      You can exercise your privacy rights at any time by contacting our privacy team at privacy@pocuro.com to:
                    </p>
                    <ul>
                      <li>Access your personal data</li>
                      <li>Correct inaccurate information</li>
                      <li>Delete your data</li>
                      <li>Object to certain processing</li>
                      <li>Exercise your data portability rights</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Compliance section */}
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
      </main>
      
      <Footer />
    </div>
  );
};

const PrivacyGuide: React.FC = () => {
  return (
    <ThemeProvider>
      <PrivacyGuideContent />
    </ThemeProvider>
  );
};

export default PrivacyGuide;
