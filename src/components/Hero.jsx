import { Terminal, Code2, Database, Cloud } from 'lucide-react';

const Hero = () => (
  <section id="hero" className="mb-12 pt-4">
    <div className="mb-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] text-xs font-medium text-[var(--color-text-secondary)] mb-8 hover:border-[var(--color-text-secondary)] transition-colors cursor-default">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-green)] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-green)]"></span>
        </span>
        San Francisco Bay Area
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4 text-white">
        Chandrakanth Puligundla
      </h1>
      <p className="text-2xl sm:text-3xl text-[var(--color-text-secondary)] font-bold tracking-tight mb-8">
        Software Engineer at Albertsons
      </p>

      <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mb-8 leading-relaxed">
        Software Engineer specializing in scalable APIs, distributed systems, and cloud infrastructure. Experienced in building high-availability services handling billions of requests.
      </p>

      <div className="flex flex-wrap gap-3 justify-start">
        {[
          { name: "Python", icon: Terminal },
          { name: "Java", icon: Code2 },
          { name: "SQL", icon: Database },
          { name: "BigQuery", icon: Database },
          { name: "Snowflake", icon: Cloud }
        ].map((skill) => (
          <div key={skill.name} className="flex items-center gap-2 px-4 py-2 rounded-[6px] border border-[#2e2e2e] bg-[#1a1a1a] hover:bg-[#252525] hover:border-[#3e3e3e] transition-all cursor-default group">
            <skill.icon size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
            <span className="text-sm font-medium text-[var(--color-text-secondary)] group-hover:text-white transition-colors">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
