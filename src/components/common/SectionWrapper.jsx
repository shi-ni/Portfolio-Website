import React from 'react';

export function SectionWrapper({ id, title, icon, children }) {
  return (
    <section
      id={id}
      className="container mx-auto px-6 py-16 md:py-24 max-w-7xl"
    >
      <div className="flex items-center mb-8">
        {icon}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ml-3">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
