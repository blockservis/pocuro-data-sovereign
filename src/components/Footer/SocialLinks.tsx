
import React from 'react';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const SocialLinks: React.FC = () => {
  return (
    <div className="col-span-1 md:col-span-1">
      <Link to="/" className="flex items-center gap-2 mb-4">
        <img 
          src="/lovable-uploads/b51bfe97-8e2b-4e28-96cd-b054392494f0.png" 
          alt="Pocuro Logo" 
          className="h-10 w-auto"
        />
        <span className="text-xl font-bold text-white">Pocuro</span>
      </Link>
      <p className="text-gray-300 mb-4">
        Privacy-first personal resource planner. Your data, your control.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-300 hover:text-pocuro-aqua-blue">
          <Facebook size={20} />
        </a>
        <a href="#" className="text-gray-300 hover:text-pocuro-aqua-blue">
          <Twitter size={20} />
        </a>
        <a href="#" className="text-gray-300 hover:text-pocuro-aqua-blue">
          <Linkedin size={20} />
        </a>
        <a href="#" className="text-gray-300 hover:text-pocuro-aqua-blue">
          <Github size={20} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
