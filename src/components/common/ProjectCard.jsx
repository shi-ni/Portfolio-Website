import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-secondary-800 rounded-lg shadow-lg overflow-hidden border border-secondary-700"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.25), 0 0 30px rgba(59, 130, 246, 0.15)",
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-secondary-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary-900/50 text-primary-200 text-xs font-medium px-3 py-1 rounded-full border border-primary-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-400 font-medium hover:text-primary-300 transition-colors"
        >
          View on GitHub
          <Github size={18} className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
}
