import React from 'react';
import { portfolioData } from '../../data/portfolio';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-6 text-center text-gray-500 max-w-7xl">
        <p>
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights
          reserved.
        </p>
        <p className="text-sm mt-1">Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
