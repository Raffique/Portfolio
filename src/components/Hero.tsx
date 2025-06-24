import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) title.classList.add('animate-fade-in');
    
    setTimeout(() => {
      if (subtitle) subtitle.classList.add('animate-fade-in');
    }, 300);
    
    setTimeout(() => {
      if (cta) cta.classList.add('animate-fade-in');
    }, 600);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 transition-opacity duration-1000 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Electronics & Software Engineer
            <span className="block text-blue-500">With a Passion for Innovation</span>
          </h1>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl opacity-0 transition-opacity duration-1000 delay-300 mb-8 max-w-3xl mx-auto"
          >
            7+ years of experience across embedded systems, industrial electronics, robotics, 
            PCB design, 3D printing, AI, web & mobile development, and simulation.
          </p>
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 transition-opacity duration-1000 delay-600"
          >
            <button 
              onClick={scrollToProjects}
              className={`px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              View My Work
            </button>
            <a 
              href="#contact" 
              className={`px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                darkMode 
                  ? 'border-2 border-blue-500 text-blue-400 hover:bg-blue-900/30' 
                  : 'border-2 border-blue-600 text-blue-700 hover:bg-blue-50'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
          className={`p-2 rounded-full ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default Hero;