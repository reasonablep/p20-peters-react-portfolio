import React, { useState } from 'react';

function Nav () {
  const [activeLink, setActiveLink ] = useState(null);

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(section);
  };

    return (
        <nav>
               <ul className="nav-elements">
            <a href="#about" className={activeLink === 'about' ? 'active' : ''}
            onClick={() => handleNavClick('about')}>
              About</a>
            <a href="#projects" className={activeLink === 'projects' ? 'active' : ''}
            onClick={() => handleNavClick('projects')}>
              Projects</a>
            <a href="#contact" className={activeLink === 'contact' ? 'active' : ''}
            onClick={() => handleNavClick('contact')}>
              Contact Me</a>
          </ul>
        </nav>
    )
}

export default Nav