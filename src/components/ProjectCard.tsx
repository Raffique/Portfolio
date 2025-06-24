import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, darkMode, index }) => {
  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <Link to={`/project/${index}`}>
        <div 
          className="h-48 bg-cover bg-center" 
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
      </Link>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Link to={`/project/${index}`}>
            <h3 className="text-xl font-bold hover:text-blue-500 transition-colors">
              {project.title}
            </h3>
          </Link>
          <div className="flex space-x-2">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  darkMode ? 'hover:bg-gray-700 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
                aria-label="GitHub Repository"
              >
                <Github size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  darkMode ? 'hover:bg-gray-700 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className={`text-xs px-3 py-1 rounded-full ${
                darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-800'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;