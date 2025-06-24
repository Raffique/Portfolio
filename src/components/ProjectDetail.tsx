import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, X } from 'lucide-react';
import { projectsData } from '../data/projects';

interface ProjectDetailProps {
  darkMode: boolean;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ darkMode }) => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p, index) => index.toString() === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-2xl font-bold">Project not found</h2>
          <Link 
            to="/" 
            className={`inline-flex items-center mt-4 ${
              darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
            }`}
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-20">
        <Link 
          to="/" 
          className={`inline-flex items-center mb-8 ${
            darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
          }`}
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Link>

        <div className={`rounded-xl overflow-hidden shadow-xl ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div 
            className="h-96 bg-cover bg-center" 
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">{project.title}</h1>
              <div className="flex space-x-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors ${
                      darkMode 
                        ? 'hover:bg-gray-700 text-gray-400 hover:text-white' 
                        : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Github size={24} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors ${
                      darkMode 
                        ? 'hover:bg-gray-700 text-gray-400 hover:text-white' 
                        : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode 
                          ? 'bg-gray-700 text-blue-300' 
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Categories</h2>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {project.gallery && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <div 
                        key={index} 
                        className="rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img 
                          src={image} 
                          alt={`Project image ${index + 1}`} 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Full size project image" 
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;