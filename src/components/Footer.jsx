import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 pt-8 md:pt-12 border-t border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] text-sm">
    <div className="text-[var(--color-text-secondary)] text-xs sm:text-sm">
      &copy; {new Date().getFullYear()} Chandrakanth Puligundla. All rights reserved.
    </div>
    <div className="flex gap-4 md:gap-6">
      <a href="https://github.com/chandrakanth10" target="_blank" rel="noopener noreferrer" className="p-2 text-[var(--color-text-secondary)] hover:text-white transition-colors duration-200">
        <Github size={20} />
      </a>
      <a href="https://linkedin.com/in/chandrakanth10" target="_blank" rel="noopener noreferrer" className="p-2 text-[var(--color-text-secondary)] hover:text-white transition-colors duration-200">
        <Linkedin size={20} />
      </a>
      <a href="mailto:cpuligun@asu.edu" className="p-2 text-[var(--color-text-secondary)] hover:text-white transition-colors duration-200">
        <Mail size={20} />
      </a>
    </div>
  </footer>
);

export default Footer;
