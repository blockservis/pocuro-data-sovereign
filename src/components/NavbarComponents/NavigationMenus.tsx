
import React from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageProvider';

interface NavigationMenusProps {
  scrollToSection: (sectionId: string) => void;
}

interface MobileNavigationMenuProps extends NavigationMenusProps {
  setMobileMenuOpen: (isOpen: boolean) => void;
}

export const DesktopNavigationMenus: React.FC<NavigationMenusProps> = ({ scrollToSection }) => {
  const location = useLocation();
  
  return (
    <nav className="hidden md:flex space-x-8">
      <NavItem href="/" label="Home" active={location.pathname === '/'} />
      
      <div className="relative group">
        <button className="flex items-center gap-1 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue transition-colors">
          <span>Product</span>
          <ChevronDown size={16} />
        </button>
        
        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-pocuro-dark-slate rounded-md shadow-lg border border-pocuro-light-gray dark:border-pocuro-dark-slate p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
          <NavDropdownItem 
            label="Features" 
            onClick={() => {
              if (location.pathname !== '/') {
                window.location.href = '/#features';
              } else {
                scrollToSection('features');
              }
            }} 
          />
          <NavDropdownItem 
            label="Security" 
            onClick={() => {
              if (location.pathname !== '/') {
                window.location.href = '/#security';
              } else {
                scrollToSection('security');
              }
            }} 
          />
          <NavDropdownItem 
            label="Pricing" 
            onClick={() => {
              if (location.pathname !== '/') {
                window.location.href = '/#pricing';
              } else {
                scrollToSection('pricing');
              }
            }} 
          />
          <NavDropdownItem 
            label="Roadmap" 
            onClick={() => {
              if (location.pathname !== '/') {
                window.location.href = '/#roadmap';
              } else {
                scrollToSection('roadmap');
              }
            }} 
          />
        </div>
      </div>
      
      <div className="relative group">
        <button className="flex items-center gap-1 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue transition-colors">
          <span>Resources</span>
          <ChevronDown size={16} />
        </button>
        
        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-pocuro-dark-slate rounded-md shadow-lg border border-pocuro-light-gray dark:border-pocuro-dark-slate p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
          <NavDropdownItem href="/help-center" label="Help Center" />
          <NavDropdownItem href="/blog" label="Blog" />
          <NavDropdownItem href="/privacy-guide" label="Privacy Guide" />
          <NavDropdownItem href="/faq" label="FAQ" />
        </div>
      </div>
      
      <div className="relative group">
        <button className="flex items-center gap-1 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue transition-colors">
          <span>Company</span>
          <ChevronDown size={16} />
        </button>
        
        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-pocuro-dark-slate rounded-md shadow-lg border border-pocuro-light-gray dark:border-pocuro-dark-slate p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
          <NavDropdownItem href="/about-us" label="About Us" />
          <NavDropdownItem href="/careers" label="Careers" />
          <NavDropdownItem href="/privacy-policy" label="Privacy Policy" />
          <NavDropdownItem href="/terms-of-service" label="Terms of Service" />
        </div>
      </div>
    </nav>
  );
};

export const MobileNavigationMenu: React.FC<MobileNavigationMenuProps> = ({ 
  scrollToSection, 
  setMobileMenuOpen 
}) => {
  return (
    <ul className="space-y-4 mb-4">
      <li>
        <Link 
          to="/" 
          className="block text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </Link>
      </li>
      
      <MobileNavSection title="Product">
        <MobileNavItem 
          label="Features" 
          onClick={() => {
            scrollToSection('features');
            setMobileMenuOpen(false);
          }} 
        />
        <MobileNavItem 
          label="Security" 
          onClick={() => {
            scrollToSection('security');
            setMobileMenuOpen(false);
          }} 
        />
        <MobileNavItem 
          label="Pricing" 
          onClick={() => {
            scrollToSection('pricing');
            setMobileMenuOpen(false);
          }} 
        />
        <MobileNavItem 
          label="Roadmap" 
          onClick={() => {
            scrollToSection('roadmap');
            setMobileMenuOpen(false);
          }} 
        />
      </MobileNavSection>
      
      <MobileNavSection title="Resources">
        <MobileNavItem 
          href="/help-center" 
          label="Help Center" 
          onClick={() => setMobileMenuOpen(false)} 
        />
        <MobileNavItem 
          href="/blog" 
          label="Blog" 
          onClick={() => setMobileMenuOpen(false)} 
        />
        <MobileNavItem 
          href="/privacy-guide" 
          label="Privacy Guide" 
          onClick={() => setMobileMenuOpen(false)} 
        />
        <MobileNavItem 
          href="/faq" 
          label="FAQ" 
          onClick={() => setMobileMenuOpen(false)} 
        />
      </MobileNavSection>
      
      <MobileNavSection title="Company">
        <MobileNavItem 
          href="/about-us" 
          label="About Us" 
          onClick={() => setMobileMenuOpen(false)} 
        />
        <MobileNavItem 
          href="/careers" 
          label="Careers" 
          onClick={() => setMobileMenuOpen(false)} 
        />
        <MobileNavItem 
          href="/privacy-policy" 
          label="Privacy Policy" 
          onClick={() => setMobileMenuOpen(false)} 
        />
        <MobileNavItem 
          href="/terms-of-service" 
          label="Terms of Service" 
          onClick={() => setMobileMenuOpen(false)} 
        />
      </MobileNavSection>
    </ul>
  );
};

// Helper Components
const NavItem: React.FC<{ href: string, label: string, active?: boolean }> = ({ 
  href, 
  label, 
  active = false 
}) => {
  return (
    <Link 
      to={href}
      className={`transition-colors ${active 
        ? 'text-pocuro-blue dark:text-pocuro-aqua-blue' 
        : 'text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue'
      }`}
    >
      {label}
    </Link>
  );
};

const NavDropdownItem: React.FC<{ 
  href?: string, 
  label: string, 
  onClick?: () => void 
}> = ({ href, label, onClick }) => {
  const content = (
    <div className="w-full px-3 py-2 text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:bg-gray-100 dark:hover:bg-pocuro-dark-navy hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue rounded transition-colors">
      {label}
    </div>
  );
  
  if (href) {
    return (
      <Link to={href} className="block" onClick={onClick}>
        {content}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className="w-full text-left">
      {content}
    </button>
  );
};

const MobileNavSection: React.FC<{ 
  title: string, 
  children: React.ReactNode 
}> = ({ title, children }) => {
  return (
    <li>
      <div className="font-medium text-pocuro-charcoal dark:text-white mb-2">{title}</div>
      <ul className="pl-4 space-y-2">
        {children}
      </ul>
    </li>
  );
};

const MobileNavItem: React.FC<{ 
  href?: string, 
  label: string, 
  onClick?: () => void 
}> = ({ href, label, onClick }) => {
  if (href) {
    return (
      <li>
        <Link 
          to={href} 
          className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue"
          onClick={onClick}
        >
          {label}
        </Link>
      </li>
    );
  }
  
  return (
    <li>
      <button 
        onClick={onClick}
        className="text-pocuro-slate-gray dark:text-pocuro-cool-gray hover:text-pocuro-blue dark:hover:text-pocuro-aqua-blue text-left"
      >
        {label}
      </button>
    </li>
  );
};
