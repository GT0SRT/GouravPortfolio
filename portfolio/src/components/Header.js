import React from 'react';
import useStore from '../store/useStore';

const Header = () => {
  const { activeNav, setActiveNav } = useStore();

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <a href="#" className="text-2xl font-bold text-red-500">Gourav.</a>
      <nav>
        <a href="#home" onClick={() => setActiveNav('#home')} className={`mx-2 text-white hover:text-red-500 ${activeNav === '#home' ? 'text-red-500' : ''}`}>HOME</a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={`mx-2 text-white hover:text-red-500 ${activeNav === '#about' ? 'text-red-500' : ''}`}>ABOUT</a>
        <a href="#education" onClick={() => setActiveNav('#education')} className={`mx-2 text-white hover:text-red-500 ${activeNav === '#education' ? 'text-red-500' : ''}`}>EDUCATION</a>
        <a href="#skills" onClick={() => setActiveNav('#skills')} className={`mx-2 text-white hover:text-red-500 ${activeNav === '#skills' ? 'text-red-500' : ''}`}>SKILLS</a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={`mx-2 text-white hover:text-red-500 ${activeNav === '#services' ? 'text-red-500' : ''}`}>SERVICES</a>
        <a href="#projects" onClick={() => setActiveNav('#projects')} className={`mx-2 text-white hover:text-red-500 ${activeNav === '#projects' ? 'text-red-500' : ''}`}>PROJECTS</a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={`mx-2 text-white hover:text-red-500 ${activeNav === '#contact' ? 'text-red-500' : ''}`}>CONTACT</a>
      </nav>
    </header>
  );
};

export default Header;
