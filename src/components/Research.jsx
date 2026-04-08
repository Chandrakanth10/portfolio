import { ArrowUpRight } from 'lucide-react';

const Research = () => (
  <section id="research" className="mb-12 scroll-mt-12">
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-4">
      <h2 className="text-3xl font-bold tracking-tight text-white">Research Paper Publications</h2>
      <a href="https://ieeexplore.ieee.org/author/659163992295229" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-brand-green)] transition-colors inline-flex items-center gap-1.5 mt-2 sm:mt-0">
        IEEE Xplore Profile <ArrowUpRight size={14} />
      </a>
    </div>
    <p className="text-[var(--color-text-secondary)] mb-10">4 peer-reviewed IEEE conference papers in 2025.</p>

    <div className="space-y-4">
      <a href="https://ieeexplore.ieee.org/author/659163992295229" target="_blank" rel="noopener noreferrer" className="group block border border-[var(--color-border-subtle)] rounded-[6px] p-6 md:p-8 hover:border-[var(--color-brand-green)] transition-all duration-300 bg-gradient-to-r from-[var(--color-bg-surface)]/40 to-transparent">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-green)] bg-[var(--color-brand-green)]/10 px-2.5 py-1 rounded-[4px]">Sole Author</span>
            <span className="text-[10px] uppercase font-medium tracking-wide text-[var(--color-text-secondary)]">IEEE ISTAS 2025</span>
          </div>
          <ArrowUpRight size={16} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-brand-green)] transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[var(--color-brand-green)] transition-colors mb-2">Bridging Quantum and Classical AI: Cloud-Based Quantum Computing for Machine Learning</h3>
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-3xl">
          Explores the integration of quantum computing with classical AI through cloud-based architectures for machine learning applications.
        </p>
      </a>

      <a href="https://ieeexplore.ieee.org/author/659163992295229" target="_blank" rel="noopener noreferrer" className="group block border border-[var(--color-border-subtle)] rounded-[6px] p-6 md:p-8 hover:border-[var(--color-brand-green)] transition-all duration-300 bg-gradient-to-r from-[var(--color-bg-surface)]/40 to-transparent">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-green)] bg-[var(--color-brand-green)]/10 px-2.5 py-1 rounded-[4px]">Sole Author</span>
            <span className="text-[10px] uppercase font-medium tracking-wide text-[var(--color-text-secondary)]">IEEE ICCCNT 2025</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-yellow-400 bg-yellow-400/10 px-2.5 py-1 rounded-[4px]">Presented</span>
          </div>
          <ArrowUpRight size={16} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-brand-green)] transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[var(--color-brand-green)] transition-colors mb-2">Scalable Intelligence: A Survey on Deploying AI Models in Distributed Cloud Platforms</h3>
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-3xl">
          Surveys scalable deployment strategies for AI models across distributed cloud platforms, examining orchestration, resource optimization, and inference at scale.
        </p>
      </a>

      <a href="https://ieeexplore.ieee.org/author/659163992295229" target="_blank" rel="noopener noreferrer" className="group block border border-[var(--color-border-subtle)] rounded-[6px] p-6 md:p-8 hover:border-[var(--color-brand-green)] transition-all duration-300">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="text-[10px] uppercase font-medium tracking-wide text-[var(--color-text-secondary)]">IEEE AIBThings 2025</span>
          <ArrowUpRight size={16} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-brand-green)] transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[var(--color-brand-green)] transition-colors mb-2">SPX: A Novel LLM-Based Framework for Explaining and Estimating User Story Points</h3>
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-3xl mb-3">
          Presents a novel LLM-based framework for automated story point estimation and explanation in agile development.
        </p>
        <p className="text-xs text-[var(--color-text-secondary)]/60">A. Jadhav, <span className="text-white/70">C. Puligundla</span>, S. R. Chigurupati, P. Jalan, S. Bhogavalli</p>
      </a>

      <a href="https://ieeexplore.ieee.org/author/659163992295229" target="_blank" rel="noopener noreferrer" className="group block border border-[var(--color-border-subtle)] rounded-[6px] p-6 md:p-8 hover:border-[var(--color-brand-green)] transition-all duration-300">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="text-[10px] uppercase font-medium tracking-wide text-[var(--color-text-secondary)]">IEEE AIBThings 2025</span>
          <ArrowUpRight size={16} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-brand-green)] transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[var(--color-brand-green)] transition-colors mb-2">Integrating LLMs for Automated Bug Triaging and Root Cause Localization in Software Systems</h3>
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-3xl mb-3">
          Proposes an LLM-based approach for automated bug triaging and root cause localization in large-scale software systems.
        </p>
        <p className="text-xs text-[var(--color-text-secondary)]/60">P. Pisal, P. Jalan, S. R. Chigurupati, <span className="text-white/70">C. Puligundla</span>, S. Bhogavalli</p>
      </a>
    </div>
  </section>
);

export default Research;
