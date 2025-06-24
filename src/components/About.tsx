import React from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl flex items-center justify-center">
                <img
                  src="images/portfolio/person/raffique.jpeg"
                  alt="Professional portrait"
                  className="h-full"
                />
              </div>
              <div 
                className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full ${
                  darkMode ? 'bg-blue-600' : 'bg-blue-500'
                } -z-10`}
              ></div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <p>
                  With 7 years of experience in electronics and software engineering, I've developed
                  a unique blend of skills across hardware and software domains. My journey has taken
                  me from designing embedded systems to developing complex robotics solutions.
                </p>
                <p>
                  I specialize in bridging the gap between hardware and software, bringing a holistic
                  approach to engineering challenges. My experience spans industrial electronics,
                  robotics, PCB design, and modern software development.
                </p>
                <p>
                  I'm passionate about creating innovative solutions that combine cutting-edge
                  technology with practical applications. Whether it's developing autonomous systems,
                  designing custom electronics, or building modern web applications, I bring creativity
                  and technical expertise to every project.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <span className="text-blue-500 text-xl font-bold">7+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Years Experience</h3>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                      Professional Engineering
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <span className="text-blue-500 text-xl font-bold">20+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Projects Completed</h3>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                      Across Various Domains
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;