import React, { useRef, useEffect, useState } from 'react';
import { educations } from '../data';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 relative">
            <span className="relative z-10">Education</span>
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-pastel-darkYellow rounded-full"></span>
          </h2>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-pastel-yellow transform md:translate-x-px"></div>
            
            {educations.map((education, index) => (
              <div 
                key={education.institution}
                className={`relative mb-12 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 bg-pastel-darkYellow rounded-full transform -translate-x-2.5 md:-translate-x-3 flex items-center justify-center z-10">
                    <GraduationCap size={16} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className={`pl-8 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="mb-1">
                        <span className="inline-block px-3 py-1 bg-pastel-yellow text-pastel-lightYellow text-xs font-medium rounded-full mb-2">
                          {education.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-gray-800 mb-1">{education.institution}</h3>
                      <h4 className="text-pastel-darkLavender font-medium mb-2">{education.degree}</h4>
                      <p className="text-gray-700 text-sm mb-2">{education.description}</p>
                      <p className="font-medium text-gray-800">GPA: <span className="text-pastel-green">{education.gpa}</span></p>
                    </div>
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

export default Education;
