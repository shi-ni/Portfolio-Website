import React from 'react';
import { GraduationCap } from 'lucide-react';
import { SectionWrapper } from '../common/SectionWrapper';
import { portfolioData } from '../../data/portfolio';

export function Education() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      icon={<GraduationCap size={32} className="text-amber-500" />}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900">
          {portfolioData.education.institution}
        </h3>
        <p className="text-amber-500 font-medium mb-1">
          {portfolioData.education.degree}
        </p>
        <p className="text-gray-600 mb-4">{portfolioData.education.duration}</p>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          Relevant Coursework:
        </h4>
        <div className="flex flex-wrap gap-2">
          {portfolioData.education.courses.map((course) => (
            <span
              key={course}
              className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
