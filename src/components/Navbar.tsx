import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link, useLocation } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleGetEarlyAccess = () => {
    scrollToSection('cta-section');
  };
  
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white dark:bg-pocuro-dark-navy border-b border-pocuro-light-gray dark:border-pocuro-dark-slate fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={isDarkMode ? "/lovable-uploads/b51bfe97-8e2b-4e28-96cd-b054392494f0.png" : "/lovable-uploads/37d086a4-c6cc-4a20-bbf6-f396cd5e9636.png"} 
            alt="Pocuro Logo" 
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-pocuro-charcoal dark:text-white">Pocuro</span>
        </Link>
        
        {!isMobile ? (
          <div className="flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link 
                    to="/"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue transition-colors px-4 py-2"
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">Product</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li className="col-span-1">
                        <a
                          href="/#features"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('features');
                          }}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Features</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Explore the powerful features of Pocuro
                          </p>
                        </a>
                      </li>
                      <li className="col-span-1">
                        <a
                          href="/#how-it-works"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('how-it-works');
                          }}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">How It Works</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn how Pocuro protects your data
                          </p>
                        </a>
                      </li>
                      <li className="col-span-1">
                        <a
                          href="/#pricing"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('pricing');
                          }}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Pricing</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            View our pricing plans and options
                          </p>
                        </a>
                      </li>
                      <li className="col-span-1">
                        <a
                          href="/#testimonials"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('testimonials');
                          }}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Testimonials</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            What our users say about Pocuro
                          </p>
                        </a>
                      </li>
                      <li className="col-span-1">
                        <a
                          href="/#roadmap"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('roadmap');
                          }}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Roadmap</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            See what's coming next for Pocuro
                          </p>
                        </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <Link 
                          to="/blog"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="text-sm font-medium leading-none">Blog</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Read our latest articles and updates
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">FAQ</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Answers to frequently asked questions
                          </p>
                        </Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Privacy Guide</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about our privacy-first approach
                          </p>
                        </a>
                      </li>
                      <li>
                        <Link
                          to="/help-center"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Help Center</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Get help with your Pocuro account
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <Link
                          to="/about-us"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">About Us</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about our mission and team
                          </p>
                        </Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Careers</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Join our team of privacy advocates
                          </p>
                        </a>
                      </li>
                      <li>
                        <Link
                          to="/privacy-policy"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Privacy Policy</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            How we protect your personal information
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/terms-of-service"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Terms of Service</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Legal terms for using our service
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button 
              className="bg-pocuro-blue hover:bg-opacity-90 text-white"
              onClick={handleGetEarlyAccess}
            >
              Get Early Access
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        )}
      </div>
      
      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-pocuro-dark-navy border-b border-pocuro-light-gray dark:border-pocuro-dark-slate p-4 shadow-lg">
          <nav>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="text-pocuro-slate-gray dark:text-pocuro-cool-gray block mb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="font-medium mb-2">Product</div>
                <ul className="pl-4 space-y-2">
                  <li>
                    <a 
                      href="/#features" 
                      className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('features');
                      }}
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/#how-it-works" 
                      className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('how-it-works');
                      }}
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/#pricing" 
                      className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('pricing');
                      }}
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/#testimonials" 
                      className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('testimonials');
                      }}
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/#roadmap" 
                      className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('roadmap');
                      }}
                    >
                      Roadmap
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="font-medium mb-2">Resources</div>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link 
                      to="/blog" 
                      className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">Privacy Guide</a>
                  </li>
                  <li>
                    <Link
                      to="/help-center"
                      className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                    >
                      Help Center
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="font-medium mb-2">Company</div>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link
                      to="/about-us"
                      className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-pocuro-slate-gray dark:text-pocuro-cool-gray">Careers</a>
                  </li>
                  <li>
                    <Link
                      to="/privacy-policy"
                      className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms-of-service"
                      className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li className="pt-4">
                <Button 
                  className="w-full bg-pocuro-blue hover:bg-opacity-90 text-white"
                  onClick={handleGetEarlyAccess}
                >
                  Get Early Access
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
