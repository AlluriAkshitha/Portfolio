import React, { useRef, useEffect, useState } from 'react';
import { projects } from '../data';
import { ExternalLink, GitBranch } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setVisibleProjects(projects.map(project => project.title));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-pastel-pink/30 to-pastel-peach/30"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 relative">
            <span className="relative z-10">My Projects</span>
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-pastel-darkPeach rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${
                  visibleProjects.includes(project.title) ? 'opacity-100' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-pastel-lavender/30 text-pastel-darkLavender text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-end">
                    <a 
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-pastel-darkLavender hover:bg-pastel-lavender text-white hover:text-gray-800 rounded-lg transition-colors duration-300 text-sm font-medium"
                    >
                      <GitBranch size={16} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;