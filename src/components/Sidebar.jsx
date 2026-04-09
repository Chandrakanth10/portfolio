const Sidebar = ({ navLinks, activeSection, onNavClick }) => (
  <aside className="hidden md:block w-48 shrink-0 fixed top-32 h-[calc(100vh-12rem)] border-r border-[var(--color-border-subtle)] pr-4">
    <div className="space-y-1">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={(e) => onNavClick(e, link.id)}
          className={`block px-4 py-2 text-sm transition-all duration-200 rounded-[4px] ${activeSection === link.id
            ? 'text-[var(--color-brand-green)] bg-[var(--color-brand-green)]/10 font-medium translate-x-1'
            : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-bg-surface)]'
            }`}
        >
          {link.label}
        </a>
      ))}
    </div>
  </aside>
);

export default Sidebar;
