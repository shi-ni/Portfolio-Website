import React from 'react';
import { Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../common/SectionWrapper';
import { ProjectCard } from '../common/ProjectCard';
import { portfolioData } from '../../data/portfolio';

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      icon={<Code size={32} className="text-primary-400" />}
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
