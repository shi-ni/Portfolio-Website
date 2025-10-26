import React from 'react';
import { Code, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../common/SectionWrapper';
import { SkillCard } from '../common/SkillCard';
import { portfolioData } from '../../data/portfolio';

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <SectionWrapper
      id="skills"
      title="My Skills"
      icon={<Code size={32} className="text-primary-400" />}
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SkillCard
          title="Frontend"
          icon={<Code size={24} className="text-primary-400" />}
          skills={portfolioData.skills.frontend}
        />
        <SkillCard
          title="Backend"
          icon={<Server size={24} className="text-primary-400" />}
          skills={portfolioData.skills.backend}
        />
        <SkillCard
          title="Languages"
          icon={<Code size={24} className="text-primary-400" />}
          skills={portfolioData.skills.languages}
        />
      </motion.div>
    </SectionWrapper>
  );
}
