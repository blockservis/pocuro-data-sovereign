
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from '@/components/ui/navigation-menu';
import { useLanguage } from '../LanguageProvider';

interface NavigationMenusProps {
  scrollToSection: (sectionId: string) => void;
  setMobileMenuOpen?: (isOpen: boolean) => void;
}

export const DesktopNavigationMenus: React.FC<NavigationMenusProps> = ({ scrollToSection }) => {
  const { t } = useLanguage();
  
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link 
            to="/"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue transition-colors px-4 py-2"
          >
            {t('common.home')}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">{t('navbar.product')}</NavigationMenuTrigger>
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
                  <div className="text-sm font-medium leading-none">{t('common.features')}</div>
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
                  <div className="text-sm font-medium leading-none">{t('navbar.howItWorks')}</div>
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
                  <div className="text-sm font-medium leading-none">{t('common.pricing')}</div>
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
                  <div className="text-sm font-medium leading-none">{t('navbar.testimonials')}</div>
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
                  <div className="text-sm font-medium leading-none">{t('navbar.roadmap')}</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    See what's coming next for Pocuro
                  </p>
                </a>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">{t('navbar.resources')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              <li>
                <Link 
                  to="/blog"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">{t('common.blog')}</div>
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
                  <div className="text-sm font-medium leading-none">{t('navbar.faq')}</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Answers to frequently asked questions
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-guide"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">{t('navbar.privacyGuide')}</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Learn about our privacy-first approach
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/help-center"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">{t('common.helpCenter')}</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Get help with your Pocuro account
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue">{t('navbar.company')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              <li>
                <Link
                  to="/about-us"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">{t('common.aboutUs')}</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Learn about our mission and team
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">{t('common.careers')}</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Join our team of privacy advocates
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">{t('common.privacyPolicy')}</div>
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
                  <div className="text-sm font-medium leading-none">{t('common.termsOfService')}</div>
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
  );
};

export const MobileNavigationMenu: React.FC<NavigationMenusProps> = ({ scrollToSection, setMobileMenuOpen }) => {
  return (
    <nav>
      <ul className="space-y-4">
        <li>
          <Link 
            to="/" 
            className="text-pocuro-slate-gray dark:text-pocuro-cool-gray block mb-2"
            onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
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
                onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link 
                to="/privacy-guide" 
                className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
              >
                Privacy Guide
              </Link>
            </li>
            <li>
              <Link
                to="/help-center"
                className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
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
                onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-of-service"
                className="text-pocuro-slate-gray dark:text-pocuro-cool-gray"
                onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
