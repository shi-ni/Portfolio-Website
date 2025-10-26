import React from 'react';
import { motion } from 'framer-motion';

export function SkillCard({ title, icon, skills }) {
  // Ensure the icon uses the primary color even if its className is different
  const coloredIcon =
    icon && React.isValidElement(icon)
      ? React.cloneElement(icon, {
          className: `${(icon.props.className || '')
            .split(/\s+/)
            .filter((c) => !/amber-/.test(c) && !/text-amber/.test(c))
            .join(' ')
            .trim()} text-primary-400`,
        })
      : icon;

  return (
    <motion.div
      className="bg-secondary-800 p-6 rounded-lg shadow-lg border border-secondary-700"
      whileHover={{
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)',
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.985 }}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center mb-4">
        {coloredIcon}
        <h3 className="text-xl font-bold text-white ml-3">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-primary-900/50 text-primary-200 text-sm font-medium px-3 py-1 rounded-full border border-primary-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
