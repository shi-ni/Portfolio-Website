import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    'Home',
    'Skills',
    'Projects',
    'Experience',
    'Education',
    'Contact',
  ];

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId.toLowerCase()).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setIsOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 w-full shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <a
          href="#home"
          onClick={(e) => smoothScroll(e, 'home')}
          className="text-2xl font-bold text-amber-500 hover:text-amber-400 transition-colors"
        >
          {portfolioData.name}
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => smoothScroll(e, link)}
              className="text-gray-600 hover:text-amber-500 transition-colors font-medium"
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div className="flex flex-col px-6 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => smoothScroll(e, link)}
              className="block py-2 text-gray-600 hover:text-amber-500 transition-colors font-medium"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
