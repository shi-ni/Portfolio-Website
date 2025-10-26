import React from 'react';
import { Code, Server } from 'lucide-react';
import { SectionWrapper } from '../common/SectionWrapper';
import { SkillCard } from '../common/SkillCard';
import { portfolioData } from '../../data/portfolio';

export function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="My Skills"
      icon={<Code size={32} className="text-amber-500" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SkillCard
          title="Frontend"
          icon={<Code size={24} className="text-amber-500" />}
          skills={portfolioData.skills.frontend}
        />
        <SkillCard
          title="Backend"
          icon={<Server size={24} className="text-amber-500" />}
          skills={portfolioData.skills.backend}
        />
        <SkillCard
          title="Languages"
          icon={<Code size={24} className="text-amber-500" />}
          skills={portfolioData.skills.languages}
        />
      </div>
    </SectionWrapper>
  );
}
