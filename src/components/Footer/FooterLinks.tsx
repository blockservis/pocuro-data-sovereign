
import React from 'react';
import { Link } from 'react-router-dom';

interface LinkGroupProps {
  title: string;
  links: Array<{
    label: string;
    url: string;
    isSection?: boolean;
    sectionId?: string;
  }>;
  scrollToSection?: (sectionId: string) => void;
}

const LinkGroup: React.FC<LinkGroupProps> = ({ title, links, scrollToSection }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, isSection?: boolean, sectionId?: string) => {
    if (isSection && scrollToSection && sectionId) {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4 text-white">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.url} 
              onClick={(e) => handleClick(e, link.isSection, link.sectionId)}
              className="text-gray-300 hover:text-pocuro-aqua-blue"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface FooterLinksProps {
  scrollToSection: (sectionId: string) => void;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ scrollToSection }) => {
  const productLinks = [
    { label: "Features", url: "/#features", isSection: true, sectionId: "features" },
    { label: "How It Works", url: "/#how-it-works", isSection: true, sectionId: "how-it-works" },
    { label: "Pricing", url: "/#pricing", isSection: true, sectionId: "pricing" },
    { label: "Testimonials", url: "/#testimonials", isSection: true, sectionId: "testimonials" },
    { label: "Roadmap", url: "/#roadmap", isSection: true, sectionId: "roadmap" }
  ];

  const resourceLinks = [
    { label: "Blog", url: "/blog" },
    { label: "FAQ", url: "/faq" },
    { label: "Privacy Guide", url: "/privacy-guide" }
  ];

  const companyLinks = [
    { label: "About Us", url: "/about-us" },
    { label: "Careers", url: "/careers" },
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Terms of Service", url: "/terms-of-service" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <LinkGroup title="Product" links={productLinks} scrollToSection={scrollToSection} />
      <LinkGroup title="Resources" links={resourceLinks} />
      <LinkGroup title="Company" links={companyLinks} />
    </div>
  );
};

export default FooterLinks;
