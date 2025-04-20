import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-pastel-darkLavender to-pastel-darkPink text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
          </div>
          
          <div className="flex space-x-12">
            
            
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="opacity-80">© {currentYear} Akshitha Alluri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;