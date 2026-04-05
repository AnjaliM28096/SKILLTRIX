import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Navbar = () => {
  const { NAV_LINKS } = useApp();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Adjust to trigger in the middle of the viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => {
      NAV_LINKS.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [NAV_LINKS]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <span className="text-xl font-bold text-indigo-600">SkillTrix</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a 
              key={l.id} 
              href={`/#${l.id}`} 
              className={`text-sm transition-all duration-300 font-medium relative group ${
                activeSection === l.id ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              {l.name}
              {/* Active underline indicator */}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
                activeSection === l.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden md:block px-5 py-2 text-sm font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Login
          </Link>
          <Link to="/signup" className="px-5 py-2 text-sm font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
