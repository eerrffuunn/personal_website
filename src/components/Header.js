import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 bg-background shadow-md py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
        <Link to="/" className="hover:text-accent transition-colors duration-300">
  <img 
    src={logo} 
    alt="MK Logo" 
    className="w-24 h-24 object-contain"  // Increase size to 64x64 pixels
  />
</Link>

          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'About', id: 'about' },
              { name: 'Education', id: 'education' },
              { name: 'Experience', id: 'experience' },
              { name: 'Projects', id: 'projects' },
              { name: 'Skills', id: 'skills' },
              { name: 'Thesis', id: 'thesis' },
              { name: 'References', id: 'references' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-primary font-display font-semibold text-lg hover:text-accent transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary hover:text-accent transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {[
              { name: 'About', id: 'about' },
              { name: 'Education', id: 'education' },
              { name: 'Experience', id: 'experience' },
              { name: 'Projects', id: 'projects' },
              { name: 'Skills', id: 'skills' },
              { name: 'Thesis', id: 'thesis' },
              { name: 'References', id: 'references' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-primary font-display font-semibold text-lg hover:text-accent transition-colors duration-300 text-left"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;