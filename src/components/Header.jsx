import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header>  
      <nav className="bg-white flex justify-center p-6 w-screen sm:p-6">
        <ul className="text-black flex gap-x-4 sm:gap-x-4">
          <li className="relative table-cell py-2">
            <NavLink 
              to="/" 
              className={`inline-block relative no-underline after-line text-base sm:text-lg md:text-xl ${isActive('/') ? 'font-bold after:!w-full after:!left-0' : ''}`}
            >
              Home
            </NavLink>
          </li>
          <li className="relative table-cell py-2">
            <NavLink 
              to="/about" 
              className={`inline-block relative no-underline after-line text-base sm:text-lg md:text-xl ${isActive('/about') ? 'font-bold after:!w-full after:!left-0' : ''}`}
            >
              About
            </NavLink>
          </li>
          <li className="relative table-cell py-2">
            <NavLink 
              to="/portfolio" 
              className={`inline-block relative no-underline after-line text-base sm:text-lg md:text-xl ${isActive('/portfolio') ? 'font-bold after:!w-full after:!left-0' : ''}`}
            >
              Portfolio
            </NavLink>
          </li>
          <li className="relative table-cell py-2">
            <NavLink 
              to="/contacts" 
              className={`inline-block relative no-underline after-line text-base sm:text-lg md:text-xl ${isActive('/contacts') ? 'font-bold after:!w-full after:!left-0' : ''}`}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>  
    </header>
  );
};

export default Header;