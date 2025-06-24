import React, { useState } from 'react';
import { skillsData } from '../data/skills';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(skillsData.map(skill => skill.category)));

  const filteredSkills = activeCategory 
    ? skillsData.filter(skill => skill.category === activeCategory)
    : skillsData;

  return (
    <section 
      id="skills" 
      className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            My diverse skill set spans hardware, software, and everything in between.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === null
                ? 'bg-blue-500 text-white'
                : darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Skills
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-500 text-white'
                  : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-300 h-2 rounded-full mb-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs">
                <span>{skill.category}</span>
                <span>{skill.proficiency}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;