import { GraduationCap } from 'lucide-react';

const Education = () => (
  <section id="education" className="mb-12 scroll-mt-12">
    <h2 className="text-3xl font-bold tracking-tight text-white mb-12">Education</h2>

    <div className="relative border-l border-[var(--color-border-subtle)] ml-3 md:ml-6 space-y-12">
      <div className="relative pl-10 md:pl-14">
        <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10 shadow-lg group-hover:border-[var(--color-brand-green)] transition-colors">
          <GraduationCap className="w-6 h-6 text-[#8C1D40]" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
          <h3 className="text-xl font-semibold text-white">Master of Science, Computer Science</h3>
          <span className="text-sm font-mono text-[var(--color-text-secondary)]">Jan 22 — Dec 23</span>
        </div>
        <div className="text-lg text-zinc-300 mb-2">Arizona State University</div>
        <ul className="list-disc pl-5 space-y-1 text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
          <li>GPA: 4.0/4.0 (Distinction).</li>
          <li>Focused on Distributed Systems and Software Engineering.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Education;
