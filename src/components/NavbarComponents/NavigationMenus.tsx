import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Info, Map, HelpCircle, Book, Shield, FileText, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useLanguage } from '../LanguageProvider';

interface NavigationMenusProps {
  scrollToSection: (sectionId: string) => void;
  setMobileMenuOpen?: (isOpen: boolean) => void;
}

export const DesktopNavigationMenus: React.FC<{ scrollToSection: (sectionId: string) => void }> = ({ 
  scrollToSection 
}) => {
  const location = useLocation();
  const { t } = useLanguage();
  
  const isHome = location.pathname === '/';
  
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle()}>
            {t('nav.home')}
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t('nav.product')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-pocuro-blue/20 to-pocuro-light-blue/20 dark:from-pocuro-blue/20 dark:to-pocuro-navy p-6 no-underline outline-none focus:shadow-md"
                    href="#"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-pocuro-charcoal dark:text-white">
                      Pocuro
                    </div>
                    <p className="text-sm leading-tight text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                      Your privacy-first personal resource planner with AI-powered insights and encrypted data storage.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem 
                title="Features" 
                href={isHome ? "#features" : "/#features"} 
                onClick={() => isHome && scrollToSection('features')}
              >
                Discover our core privacy-first features
              </ListItem>
              <ListItem 
                title="How It Works" 
                href={isHome ? "#how-it-works" : "/#how-it-works"} 
                onClick={() => isHome && scrollToSection('how-it-works')}
              >
                See how Pocuro revolutionizes productivity
              </ListItem>
              <ListItem 
                title="Security" 
                href={isHome ? "#security" : "/#security"} 
                onClick={() => isHome && scrollToSection('security')}
              >
                Learn about our zero-knowledge encryption
              </ListItem>
              <ListItem 
                title="Pricing" 
                href={isHome ? "#pricing" : "/#pricing"} 
                onClick={() => isHome && scrollToSection('pricing')}
              >
                Flexible plans for individuals and teams
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t('nav.resources')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <ListItemIcon title="Blog" href="/blog" icon={<Book className="h-5 w-5" />}>
                Latest articles, tutorials, and updates
              </ListItemIcon>
              <ListItemIcon title="Help Center" href="/help-center" icon={<HelpCircle className="h-5 w-5" />}>
                Guides and support resources
              </ListItemIcon>
              <ListItemIcon title="FAQ" href="/faq" icon={<Info className="h-5 w-5" />}>
                Frequently asked questions
              </ListItemIcon>
              <ListItemIcon title="Privacy Guide" href="/privacy-guide" icon={<Shield className="h-5 w-5" />}>
                Best practices for data privacy
              </ListItemIcon>
              <ListItemIcon title="Roadmap" href={isHome ? "#roadmap" : "/#roadmap"} icon={<Map className="h-5 w-5" />} onClick={() => isHome && scrollToSection('roadmap')}>
                Our product development timeline
              </ListItemIcon>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t('nav.company')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <ListItemIcon title="About Us" href="/about-us" icon={<Info className="h-5 w-5" />}>
                Our mission and vision
              </ListItemIcon>
              <ListItemIcon title="Careers" href="/careers" icon={<Briefcase className="h-5 w-5" />}>
                Join our growing team
              </ListItemIcon>
              <ListItemIcon title="Privacy Policy" href="/privacy-policy" icon={<Shield className="h-5 w-5" />}>
                How we protect your data
              </ListItemIcon>
              <ListItemIcon title="Terms of Service" href="/terms-of-service" icon={<FileText className="h-5 w-5" />}>
                Legal agreements and terms
              </ListItemIcon>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export const MobileNavigationMenu: React.FC<{
  scrollToSection: (sectionId: string) => void;
  setMobileMenuOpen: (isOpen: boolean) => void;
}> = ({ scrollToSection, setMobileMenuOpen }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  return (
    <ul className="space-y-4">
      <li>
        <Link 
          to="/" 
          className="block py-2 text-pocuro-charcoal dark:text-white hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </Link>
      </li>
      
      <MobileSubmenu title="Product">
        <li>
          <a 
            href={isHome ? "#features" : "/#features"} 
            className="block py-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
            onClick={() => {
              if (isHome) scrollToSection('features');
              setMobileMenuOpen(false);
            }}
          >
            Features
          </a>
        </li>
        <li>
          <a 
            href={isHome ? "#how-it-works" : "/#how-it-works"} 
            className="block py-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
            onClick={() => {
              if (isHome) scrollToSection('how-it-works');
              setMobileMenuOpen(false);
            }}
          >
            How It Works
          </a>
        </li>
        <li>
          <a 
            href={isHome ? "#security" : "/#security"} 
            className="block py-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
            onClick={() => {
              if (isHome) scrollToSection('security');
              setMobileMenuOpen(false);
            }}
          >
            Security
          </a>
        </li>
        <li>
          <a 
            href={isHome ? "#pricing" : "/#pricing"} 
            className="block py-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
            onClick={() => {
              if (isHome) scrollToSection('pricing');
              setMobileMenuOpen(false);
            }}
          >
            Pricing
          </a>
        </li>
      </MobileSubmenu>
      
      <MobileSubmenu title="Resources">
        <li>
          <Link 
            to="/blog" 
            className="block py-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link 
            to="/help-center" 
            className="block py-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            Help Center
          </Link>
        </li>
        <li>
          <Link 
            to="/faq" 
            className="block py-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link 
            to="/privacy-guide" 
            className="block py-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            Privacy Guide
          </Link>
        </li>
        <li>
          <a 
            href={isHome ? "#roadmap" : "/#roadmap"} 
            className="block py-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
            onClick={() => {
              if (isHome) scrollToSection('roadmap');
              setMobileMenuOpen(false);
            }}
          >
            Roadmap
          </a>
        </li>
      </MobileSubmenu>
      
      <MobileSubmenu title="Company">
        <li>
          <Link 
            to="/about-us" 
            className="block py-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link 
            to="/careers" 
            className="block py-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            Careers
          </Link>
        </li>
        <li>
          <Link 
            to="/privacy-policy" 
            className="block py-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link 
            to="/terms-of-service" 
            className="block py-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            Terms of Service
          </Link>
        </li>
      </MobileSubmenu>
    </ul>
  );
};

interface MobileSubmenuProps {
  title: string;
  children: React.ReactNode;
}

const MobileSubmenu: React.FC<MobileSubmenuProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <li>
      <Button 
        variant="ghost" 
        className="w-full justify-between py-2 text-pocuro-charcoal dark:text-white hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown 
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </Button>
      {isOpen && (
        <ul className="mt-2 ml-4 space-y-2">
          {children}
        </ul>
      )}
    </li>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { 
    title: string; 
    onClick?: () => void;
  }
>(({ className, title, children, onClick, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue focus:bg-slate-100 dark:focus:bg-slate-800 focus:text-pocuro-blue dark:focus:text-pocuro-aqua-blue",
            className
          )}
          onClick={onClick}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-pocuro-charcoal dark:text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-pocuro-slate-gray dark:text-pocuro-cool-gray">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const ListItemIcon = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { 
    title: string; 
    icon: React.ReactNode;
    onClick?: () => void;
  }
>(({ className, title, children, icon, onClick, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue focus:bg-slate-100 dark:focus:bg-slate-800 focus:text-pocuro-blue dark:focus:text-pocuro-aqua-blue",
            className
          )}
          onClick={onClick}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none text-pocuro-charcoal dark:text-white">{title}</div>
          </div>
          <p className="ml-7 line-clamp-2 text-sm leading-snug text-pocuro-slate-gray dark:text-pocuro-cool-gray">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItemIcon.displayName = "ListItemIcon";
