import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { SectionWrapper } from '../common/SectionWrapper';
import { portfolioData } from '../../data/portfolio';

export function Contact() {
  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      icon={<Mail size={32} className="text-amber-500" />}
    >
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-700 mb-8">
          I'm always open to discussing new projects, creative ideas, or
          opportunities. Feel free to reach out to me.
        </p>
        <a
          href={`mailto:${portfolioData.contact.email}`}
          className="inline-block bg-amber-500 text-black font-bold py-4 px-8 rounded-lg text-lg hover:bg-amber-400 transition-all transform hover:scale-105"
        >
          Say Hello
        </a>
        <div className="flex justify-center space-x-8 mt-12">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-amber-500 transition-colors"
          >
            <Github size={32} />
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-amber-500 transition-colors"
          >
            <Linkedin size={32} />
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="text-gray-600 hover:text-amber-500 transition-colors"
          >
            <Mail size={32} />
          </a>
          <a
            href={`tel:${portfolioData.contact.phone}`}
            className="text-gray-600 hover:text-amber-500 transition-colors"
          >
            <Phone size={32} />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
