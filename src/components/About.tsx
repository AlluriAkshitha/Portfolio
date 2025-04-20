import React, { useRef, useEffect, useState } from 'react';

const About: React.FC = () => {
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
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-pastel-mint/30 to-pastel-blue/30"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 relative">
            <span className="relative z-10">About Me</span>
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-pastel-darkMint rounded-full"></span>
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-pastel-lavender/50 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">
                  Akshitha Alluri
                </h3>
                <p className="text-lg text-pastel-darkLavender font-medium mb-6">
                  Aspiring AI Engineer & Developer
                </p>
                <div className="flex space-x-4 mb-6">
                  <a 
                    href="https://github.com/AlluriAkshitha" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white text-pastel-darkLavender rounded-full hover:bg-pastel-darkLavender hover:text-white transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3.5 1.5a13.28 13.28 0 0 0-7 0C6 2 5 2 5 2a4.28 4.28 0 0 0 0 3.5A5.49 5.49 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/akshithaalluri1788" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white text-pastel-darkLavender rounded-full hover:bg-pastel-darkLavender hover:text-white transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a 
                    href="mailto:alluriakshitha1788@gmail.com" 
                    className="p-2 bg-white text-pastel-darkLavender rounded-full hover:bg-pastel-darkLavender hover:text-white transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </a>
                </div>
                <a 
                  href="https://drive.google.com/file/d/1kc5usZynBI8aLbfrbUztrSynhLY9qdz2/view?usp=drive_link" 
                  target="_blank" 
                  className="inline-block bg-pastel-darkLavender hover:bg-pastel-lavender text-white hover:text-gray-800 py-2 px-6 rounded-lg transition-colors duration-300 font-medium text-center shadow-md hover:shadow-lg"
                >
                  Resume
                </a>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  I'm an aspiring AI engineer with a deep passion for building impactful and intelligent solutions. With a strong interest in AI, Machine Learning, and Web Development, I thrive on transforming innovative ideas into real-world applications.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I'm constantly exploring new technologies to grow as a developer and to contribute to meaningful projects that make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
