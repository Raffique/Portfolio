import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [filter, setFilter] = useState<string | null>(null);

  const categories = Array.from(
    new Set(projectsData.flatMap(project => project.categories))
  );

  const filteredProjects = filter
    ? projectsData.filter(project => project.categories.includes(filter))
    : projectsData;

  return (
    <section 
      id="projects" 
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            A selection of my work across various domains of engineering and technology.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === null
                ? 'bg-blue-500 text-white'
                : darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Projects
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-blue-500 text-white'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              darkMode={darkMode} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;