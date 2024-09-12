import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card-bg text-primary py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Mohammaderfan Koupaei</p>
            <p className="text-sm">Software Engineer | AI Enthusiast</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/eerrffuunn" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition duration-300">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mohammaderfan-koupaie-b0397319a/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition duration-300">
              LinkedIn
            </a>
            <a href="mailto:erfdrgus95@gmail.com" className="text-accent hover:text-primary transition duration-300">
              Email
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {currentYear} Mohammaderfan Koupaei. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;