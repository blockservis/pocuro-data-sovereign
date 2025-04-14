
import React from 'react';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Lock, Database, Users, MessageSquare, Heart } from 'lucide-react';

const AboutUsContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Privacy advocate with 15+ years in security and user experience design.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Sophia Rodriguez",
      role: "CTO",
      bio: "AI ethics researcher and systems architect specializing in privacy-preserving technologies.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Marcus Williams",
      role: "Head of Product",
      bio: "Former fintech product leader, passionate about democratizing access to powerful tools.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Olivia Park",
      role: "Security Lead",
      bio: "Cryptography expert with a focus on zero-knowledge proofs and decentralized systems.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 text-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              We're building a world where personal data belongs to individuals, not corporations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/careers">Join Our Team</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/privacy-guide">Our Privacy Approach</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Story section */}
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
                  Pocuro began in 2023 when our founder, frustrated with the privacy compromises required by mainstream productivity tools, assembled a team of like-minded engineers, designers, and privacy advocates.
                </p>
                <p className="text-lg text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-6">
                  Our mission was clear: create powerful tools for personal organization that put users in complete control of their data, with privacy built into the core of every feature.
                </p>
                <p className="text-lg text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                  Today, we're building PocuroMe, a comprehensive personal resource planner that combines the best of AI-assisted productivity with uncompromising privacy protection.
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
                <div className="absolute -bottom-6 -right-6 bg-pocuro-blue rounded-lg p-4 shadow-lg hidden md:block">
                  <p className="text-white font-medium italic">
                    "Privacy isn't a feature, it's a fundamental right."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pocuro-charcoal dark:text-white">
                Our Values
              </h2>
              <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray max-w-3xl mx-auto">
                The principles that guide everything we build and do.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-pocuro-dark-slate rounded-xl p-6 shadow-md">
                <div className="bg-pocuro-blue/10 dark:bg-pocuro-blue/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-pocuro-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">Privacy by Design</h3>
                <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                  We build with privacy as the foundation, not an afterthought. Every feature starts with the question: "How can we make this private by default?"
                </p>
              </div>
              
              <div className="bg-white dark:bg-pocuro-dark-slate rounded-xl p-6 shadow-md">
                <div className="bg-pocuro-blue/10 dark:bg-pocuro-blue/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-pocuro-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">User Sovereignty</h3>
                <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                  We believe users should own and control their data. No exceptions, no compromises, no hidden agendas.
                </p>
              </div>
              
              <div className="bg-white dark:bg-pocuro-dark-slate rounded-xl p-6 shadow-md">
                <div className="bg-pocuro-blue/10 dark:bg-pocuro-blue/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-pocuro-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">Local-First Computing</h3>
                <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                  We prioritize local processing and storage over cloud-based solutions, giving users true ownership of their digital lives.
                </p>
              </div>
              
              <div className="bg-white dark:bg-pocuro-dark-slate rounded-xl p-6 shadow-md">
                <div className="bg-pocuro-blue/10 dark:bg-pocuro-blue/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-pocuro-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">Radical Transparency</h3>
                <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                  We believe in clear communication, open source when possible, and always being honest about how our technology works.
                </p>
              </div>
              
              <div className="bg-white dark:bg-pocuro-dark-slate rounded-xl p-6 shadow-md">
                <div className="bg-pocuro-blue/10 dark:bg-pocuro-blue/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-pocuro-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">Inclusive Design</h3>
                <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                  We create tools that work for everyone, regardless of technical expertise, ability, or background.
                </p>
              </div>
              
              <div className="bg-white dark:bg-pocuro-dark-slate rounded-xl p-6 shadow-md">
                <div className="bg-pocuro-blue/10 dark:bg-pocuro-blue/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-pocuro-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-pocuro-charcoal dark:text-white">Sustainable Growth</h3>
                <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                  We build for the long term, with sustainable business models that align our success with our users' best interests.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team section */}
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        
        {/* Contact section */}
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
                <p className="text-pocuro-blue dark:text-pocuro-aqua-blue font-medium">info@pocuro.com</p>
              </div>
              
              <div className="bg-white dark:bg-pocuro-dark-slate rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold mb-2 text-pocuro-charcoal dark:text-white">Media Inquiries</h3>
                <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-3">
                  Press and media requests
                </p>
                <p className="text-pocuro-blue dark:text-pocuro-aqua-blue font-medium">press@pocuro.com</p>
              </div>
              
              <div className="bg-white dark:bg-pocuro-dark-slate rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold mb-2 text-pocuro-charcoal dark:text-white">Support</h3>
                <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-3">
                  Technical support and help
                </p>
                <p className="text-pocuro-blue dark:text-pocuro-aqua-blue font-medium">support@pocuro.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const AboutUs: React.FC = () => {
  return (
    <ThemeProvider>
      <AboutUsContent />
    </ThemeProvider>
  );
};

export default AboutUs;
