import React from 'react';
import { GraduationCap } from 'lucide-react';
import { SectionWrapper } from '../common/SectionWrapper';
import { portfolioData } from '../../data/portfolio';

export function Education() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      icon={<GraduationCap size={32} className="text-primary-400" />}
    >
      <div className="bg-secondary-800 p-6 rounded-lg shadow-lg border border-secondary-700">
        <h3 className="text-2xl font-bold text-white">
          {portfolioData.education.institution}
        </h3>
        <p className="text-primary-400 font-medium mb-1">
          {portfolioData.education.degree}
        </p>
        <p className="text-secondary-300 mb-4">{portfolioData.education.duration}</p>
        <h4 className="text-lg font-semibold text-white mb-2">
          Relevant Coursework:
        </h4>
        <div className="flex flex-wrap gap-2">
          {portfolioData.education.courses.map((course) => (
            <span
              key={course}
              className="bg-primary-900/50 text-primary-200 text-sm font-medium px-3 py-1 rounded-full border border-primary-700"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
