import React from 'react';
import { Code } from 'lucide-react';
import { SectionWrapper } from '../common/SectionWrapper';
import { ProjectCard } from '../common/ProjectCard';
import { portfolioData } from '../../data/portfolio';

export function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      icon={<Code size={32} className="text-amber-500" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
