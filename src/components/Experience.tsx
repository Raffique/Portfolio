import React from 'react';
import { experienceData } from '../data/experience';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section 
      id="experience" 
      className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            My career path spanning various roles in engineering and technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((experience, index) => (
            <div 
              key={index} 
              className={`relative pl-8 pb-12 ${index === experienceData.length - 1 ? '' : 'border-l-2'} ${
                darkMode ? 'border-gray-700' : 'border-gray-300'
              }`}
            >
              <div 
                className={`absolute top-0 left-0 w-4 h-4 rounded-full -ml-2 mt-1 ${
                  darkMode ? 'bg-blue-500' : 'bg-blue-600'
                }`}
              ></div>
              <div className={`mb-1 text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {experience.period}
              </div>
              <h3 className="text-xl font-bold mb-1">
                {experience.role} <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>at {experience.company}</span>
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {experience.location}
              </p>
              <ul className="list-disc pl-5 space-y-2">
                {experience.responsibilities.map((item, idx) => (
                  <li key={idx} className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {experience.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className={`text-xs px-3 py-1 rounded-full ${
                      darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;