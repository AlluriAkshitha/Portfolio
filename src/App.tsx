import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a better transition
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="w-16 h-16 border-4 border-pastel-darkLavender border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;