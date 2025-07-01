import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 p-4">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="text-white text-2xl font-bold">JFKVHS</span>
        </div>
        {/* Navigation Section (centered on md+) */}
        <nav className="hidden md:block flex-1">
          <ul className="flex justify-center gap-6 list-none m-0 p-0 items-center">
            <li><Link to="/" className={`text-white font-semibold hover:text-green-300 transition-colors${location.pathname === '/' ? ' underline text-green-300' : ''}`}>Home</Link></li>
            <li><Link to="/achievement" className={`text-white font-semibold hover:text-green-300 transition-colors${location.pathname === '/achievement' ? ' underline text-green-300' : ''}`}>Achievements</Link></li>
            <li><Link to="/gallery" className={`text-white font-semibold hover:text-green-300 transition-colors${location.pathname === '/gallery' ? ' underline text-green-300' : ''}`}>Gallery</Link></li>
            <li><Link to="/about" className={`text-white font-semibold hover:text-green-300 transition-colors${location.pathname === '/about' ? ' underline text-green-300' : ''}`}>About Us</Link></li>
            <li><Link to="/contact" className={`text-white font-semibold hover:text-green-300 transition-colors${location.pathname === '/contact' ? ' underline text-green-300' : ''}`}>Contact Us</Link></li>
            <li><Link to="/register" className={`text-white font-semibold hover:text-green-300 transition-colors${location.pathname === '/register' ? ' underline text-green-300' : ''}`}>Register</Link></li>
            <li><Link to="/login" className={`text-white font-semibold hover:text-green-300 transition-colors${location.pathname === '/login' ? ' underline text-green-300' : ''}`}>Login</Link></li>
          </ul>
        </nav>
        {/* Hamburger Icon for Mobile (right) */}
        <button
          className="md:hidden text-white focus:outline-none ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Mobile Navigation Dropdown */}
        <nav className={`md:hidden absolute top-16 right-4 bg-green-900 rounded shadow z-20 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col gap-4 p-4">
            <li><Link to="/" className={`text-white font-semibold hover:text-green-300 transition-colors${location.pathname === '/' ? ' underline text-green-300' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/achievement" className={`text-white font-semibold hover:text-green-300 transition-colors${location.pathname === '/achievement' ? ' underline text-green-300' : ''}`} onClick={() => setMenuOpen(false)}>Achievements</Link></li>
            <li><Link to="/gallery" className={`text-white font-semibold hover:text-green-300 transition-colors${location.pathname === '/gallery' ? ' underline text-green-300' : ''}`} onClick={() => setMenuOpen(false)}>Gallery</Link></li>
            <li><Link to="/about" className={`text-white font-semibold hover:text-green-300 transition-colors${location.pathname === '/about' ? ' underline text-green-300' : ''}`} onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" className={`text-white font-semibold hover:text-green-300 transition-colors${location.pathname === '/contact' ? ' underline text-green-300' : ''}`} onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
            <li><Link to="/register" className={`text-white font-semibold hover:text-green-300 transition-colors${location.pathname === '/register' ? ' underline text-green-300' : ''}`} onClick={() => setMenuOpen(false)}>Register</Link></li>
            <li><a href="#login" className="text-white font-semibold hover:text-green-300 transition-colors">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 