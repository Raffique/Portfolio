import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'} py-8`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} <span className="font-medium">TechEngineer</span>. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="#" 
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
              aria-label="Website"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;