import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export function Hero() {
  return (
    <section
      id="home"
      className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center max-w-7xl"
    >
      <div className="md:w-3/5">
        <span className="text-amber-500 font-semibold text-lg">
          Hi, my name is
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-2 mb-4">
          {portfolioData.name}.
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-6">
          {portfolioData.title}
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-8">
          {portfolioData.summary}
        </p>
        <div className="flex space-x-4">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-amber-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-amber-400 transition-all transform hover:scale-105"
          >
            <Github size={20} className="mr-2" />
            GitHub
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-all transform hover:scale-105"
          >
            <Linkedin size={20} className="mr-2" />
            LinkedIn
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="flex items-center bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-all transform hover:scale-105"
          >
            <Mail size={20} className="mr-2" />
            Email
          </a>
        </div>
      </div>
      <div className="md:w-2/5 mt-12 md:mt-0 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-amber-500 shadow-2xl overflow-hidden bg-white">
          {portfolioData.image ? (
            <img
              src={portfolioData.image}
              alt={portfolioData.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Code size={120} className="text-amber-500 opacity-50" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
