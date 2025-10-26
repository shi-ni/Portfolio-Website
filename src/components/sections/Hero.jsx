import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      id="home"
      className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center max-w-7xl"
    >
      <motion.div 
        className="md:w-3/5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          variants={itemVariants}
          className="text-primary-400 font-semibold text-lg inline-block"
        >
          Hi, my name is
        </motion.span>
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-white mt-2 mb-4"
        >
          <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
            {portfolioData.name}.
          </span>
        </motion.h1>
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-secondary-300 mb-6"
        >
          {portfolioData.title}
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-secondary-300 max-w-2xl mb-8"
        >
          {portfolioData.summary}
        </motion.p>
        <motion.div 
          variants={itemVariants}
          className="flex space-x-4"
        >
          <motion.a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} className="mr-2" />
            GitHub
          </motion.a>
          <motion.a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-secondary-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg border border-secondary-600"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgb(55, 65, 81)",
              boxShadow: "0 15px 30px rgba(100, 116, 139, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} className="mr-2" />
            LinkedIn
          </motion.a>
          <motion.a
            href={`mailto:${portfolioData.contact.email}`}
            className="flex items-center bg-secondary-800 text-secondary-100 font-bold py-3 px-6 rounded-lg border border-secondary-700"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgb(55, 65, 81)",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} className="mr-2" />
            Email
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div 
        className="md:w-2/5 mt-12 md:mt-0 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div 
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary-500 shadow-2xl overflow-hidden bg-secondary-800"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
            borderColor: "rgba(96, 165, 250, 1)"
          }}
          transition={{ duration: 0.3 }}
        >
          {portfolioData.image ? (
            <img
              src={portfolioData.image}
              alt={portfolioData.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Code size={120} className="text-primary-400 opacity-50" />
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
