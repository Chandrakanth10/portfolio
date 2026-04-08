import { Mail, Github, Linkedin, Terminal } from 'lucide-react';

const Navbar = ({ navLinks, activeSection, onNavClick }) => (
  <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-deep)]/80 backdrop-blur-md border-b border-[var(--color-border-subtle)] h-[56px] md:h-[65px] transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer min-w-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="p-1.5 rounded-[4px] bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] flex-shrink-0">
            <Terminal size={16} className="text-[var(--color-brand-green)]" />
          </div>
          <span className="font-bold text-base md:text-lg tracking-tight truncate">Chandrakanth Puligundla</span>
        </div>

        <div className="flex items-center gap-1.5 md:gap-3 flex-shrink-0">
          <a href="https://github.com/chandrakanth10" target="_blank" rel="noopener noreferrer" className="p-2 rounded-[6px] text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-bg-surface)] transition-all">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/chandrakanth10" target="_blank" rel="noopener noreferrer" className="p-2 rounded-[6px] text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-bg-surface)] transition-all">
            <Linkedin size={18} />
          </a>
          <a href="mailto:cpuligun@asu.edu" className="hidden sm:flex items-center justify-center text-[13px] font-medium text-black px-4 py-1.5 rounded-[6px] bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-hover)] transition-all gap-1.5">
            <Mail size={14} />
            Get in Touch
          </a>
          <a href="mailto:cpuligun@asu.edu" className="sm:hidden p-2 rounded-[6px] text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-bg-surface)] transition-all">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </nav>

    <div className="md:hidden fixed top-[56px] left-0 right-0 z-40 bg-[var(--color-bg-deep)]/90 backdrop-blur-md border-b border-[var(--color-border-subtle)]">
      <div className="flex overflow-x-auto no-scrollbar px-4 py-2 gap-1">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => onNavClick(e, link.id)}
            className={`whitespace-nowrap px-3 py-1.5 text-xs font-medium rounded-full transition-all flex-shrink-0 ${activeSection === link.id
              ? 'text-[var(--color-brand-green)] bg-[var(--color-brand-green)]/10'
              : 'text-[var(--color-text-secondary)]'
              }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </>
);

export default Navbar;
