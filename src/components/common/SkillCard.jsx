import React from 'react';

export function SkillCard({ title, icon, skills }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-bold text-gray-900 ml-3">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
