import React from 'react';
import { motion } from 'framer-motion';

export function SectionWrapper({ id, title, icon, children }) {
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
    <motion.section
      id={id}
      className="container mx-auto px-6 py-16 md:py-24 max-w-7xl"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55 }}
    >
      <div className="flex items-center mb-8">
        {coloredIcon}
        <h2 className="text-3xl md:text-4xl font-bold text-white ml-3">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}
