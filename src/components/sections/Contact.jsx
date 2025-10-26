import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../common/SectionWrapper';
import { portfolioData } from '../../data/portfolio';

export function Contact() {
  const socialIcons = [
    { icon: Github, href: portfolioData.contact.github, label: 'GitHub' },
    { icon: Linkedin, href: portfolioData.contact.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${portfolioData.contact.email}`, label: 'Email' },
    { icon: Phone, href: `tel:${portfolioData.contact.phone}`, label: 'Phone' }
  ];

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      icon={<Mail size={32} className="text-primary-400" />}
    >
      <div className="text-center max-w-2xl mx-auto">
        <motion.p 
          className="text-lg text-secondary-300 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          I'm always open to discussing new projects, creative ideas, or
          opportunities. Feel free to reach out to me.
        </motion.p>
        <motion.a
          href={`mailto:${portfolioData.contact.email}`}
          className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello
        </motion.a>
        <motion.div 
          className="flex justify-center space-x-8 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialIcons.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-secondary-400 hover:text-primary-400 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  color: "rgb(96, 165, 250)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={32} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
