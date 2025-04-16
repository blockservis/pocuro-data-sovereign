
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Lock, Settings, UserPlus } from 'lucide-react';

interface TabContentProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ icon, title, children }) => (
  <div className="max-w-3xl mx-auto">
    <div className="flex items-center mb-6">
      {icon}
      <h3 className="text-2xl font-bold text-pocuro-charcoal dark:text-white ml-3">{title}</h3>
    </div>
    <div className="prose dark:prose-invert prose-blue max-w-none">
      {children}
    </div>
  </div>
);

const PrivacyTabsSection: React.FC = () => {
  return (
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
            <TabContent icon={<Shield className="h-6 w-6 text-pocuro-blue mr-3" />} title="Your Data">
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
            </TabContent>
          </TabsContent>
          
          <TabsContent value="security" className="p-6 bg-white dark:bg-pocuro-dark-slate rounded-lg shadow border border-pocuro-light-gray dark:border-pocuro-dark-slate">
            <TabContent icon={<Lock className="h-6 w-6 text-pocuro-blue mr-3" />} title="Security">
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
            </TabContent>
          </TabsContent>
          
          <TabsContent value="ai" className="p-6 bg-white dark:bg-pocuro-dark-slate rounded-lg shadow border border-pocuro-light-gray dark:border-pocuro-dark-slate">
            <TabContent icon={<Settings className="h-6 w-6 text-pocuro-blue mr-3" />} title="AI & Privacy">
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
            </TabContent>
          </TabsContent>
          
          <TabsContent value="choices" className="p-6 bg-white dark:bg-pocuro-dark-slate rounded-lg shadow border border-pocuro-light-gray dark:border-pocuro-dark-slate">
            <TabContent icon={<UserPlus className="h-6 w-6 text-pocuro-blue mr-3" />} title="Your Choices">
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
                You decide how long we retain your data:
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
            </TabContent>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PrivacyTabsSection;
