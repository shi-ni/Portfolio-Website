import React, { useState } from 'react';
import { Video, ChevronUp, ChevronDown } from 'lucide-react';
import { SectionWrapper } from '../common/SectionWrapper';
import { portfolioData } from '../../data/portfolio';

export function Experience() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      icon={<Video size={32} className="text-amber-500" />}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center p-6 text-left"
        >
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {portfolioData.experience[0].title}
            </h3>
            <p className="text-amber-500 font-medium">
              {portfolioData.experience[0].company} |{' '}
              {portfolioData.experience[0].duration}
            </p>
          </div>
          {isOpen ? (
            <ChevronUp size={24} className="text-gray-500" />
          ) : (
            <ChevronDown size={24} className="text-gray-500" />
          )}
        </button>
        <div
          className={`transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="p-6 pt-0">
            <p className="text-gray-700">
              {portfolioData.experience[0].description}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
