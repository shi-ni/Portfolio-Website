import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <motion.header 
      className="bg-secondary-900/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 w-full shadow-md border-b border-secondary-700"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <a
          href="#home"
          onClick={(e) => smoothScroll(e, 'home')}
          className="text-2xl font-bold text-primary-400 hover:text-primary-300 transition-colors"
        >
          {portfolioData.name}
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-secondary-100 focus:outline-none"
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
              className="text-secondary-300 hover:text-primary-400 transition-colors font-medium"
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
              className="block py-2 text-secondary-300 hover:text-primary-400 transition-colors font-medium"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
