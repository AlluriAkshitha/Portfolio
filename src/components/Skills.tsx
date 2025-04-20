import React, { useRef, useEffect, useState } from 'react';
import { skills } from '../data';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);

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
        setVisibleSkills(skills.map(skill => skill.name));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="h-6 w-6" />;
    }
    return null;
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 relative">
            <span className="relative z-10">My Skills</span>
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-pastel-darkPink rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${
                  visibleSkills.includes(skill.name) ? 'opacity-100' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg mr-4 bg-gradient-to-br from-pastel-lavender to-pastel-darkLavender text-white">
                    {renderIcon(skill.icon)}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-800">{skill.name}</h3>
                </div>
                
                <div className="mb-4">
                  <div className="h-2 bg-pastel-lavender/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pastel-darkLavender to-pastel-darkPink rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: visibleSkills.includes(skill.name) ? `${skill.proficiency}%` : '0%'
                      }}
                    />
                  </div>
                  <div className="mt-1 text-right text-sm text-gray-600">
                    {skill.proficiency}%
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;