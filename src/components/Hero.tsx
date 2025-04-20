import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pastel-lavender via-pastel-pink to-pastel-blue overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pastel-mint opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-pastel-yellow opacity-30 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-pastel-peach opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className={`transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-pastel-darkLavender">Akshitha Alluri</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-8">
            Aspiring AI Engineer & Developer
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-pastel-darkLavender hover:bg-pastel-lavender text-white hover:text-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              View Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-white hover:bg-pastel-pink text-pastel-darkLavender hover:text-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium border border-pastel-lavender"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={handleScrollDown}
          className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          <ChevronDown size={24} className="text-pastel-darkLavender" />
        </button>
      </div>
    </section>
  );
};

export default Hero;