import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';

function Nav () {
  const [activeLink, setActiveLink ] = useState('');
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.substring(1);
    setActiveLink(pathname || 'home');
  },
  [location])

    return (
      <nav>
        <ul className="nav-elements">
          <li>
            <Link to='/' className={activeLink === 'home' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to='/about' className={activeLink === 'about' ? 'active' : ''}>About</Link>
          </li>
          <li>
            <Link to='/projects' className={activeLink === 'projects' ? 'active' : ''}>Projects</Link>
          </li>
          <li>
            <Link to='contact' className={activeLink === 'contact' ? 'active' : ''}>Contact</Link>
          </li>
        </ul>
      </nav>
    )

}

export default Nav