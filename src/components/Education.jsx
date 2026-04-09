import { GraduationCap } from 'lucide-react';

const Education = () => (
  <section id="education" className="mb-8 md:mb-12 scroll-mt-12">
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-8 md:mb-12">Education</h2>

    <div className="relative border-l border-[var(--color-border-subtle)] ml-4 md:ml-6 space-y-12">
      <div className="relative pl-8 md:pl-14">
        <div className="absolute -left-[18px] md:-left-[24px] top-0 w-9 h-9 md:w-12 md:h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10 shadow-lg">
          <GraduationCap className="w-4 h-4 md:w-6 md:h-6 text-[#8C1D40]" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
          <h3 className="text-lg md:text-xl font-semibold text-white">Master of Science, Computer Science</h3>
          <span className="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)]">Jan 22 — Dec 23</span>
        </div>
        <div className="text-base md:text-lg text-zinc-300 mb-2">Arizona State University</div>
        <ul className="list-disc pl-4 md:pl-5 space-y-1 text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed max-w-3xl">
          <li>GPA: 4.0/4.0 (Distinction).</li>
          <li>Focused on Distributed Systems and Software Engineering.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Education;
