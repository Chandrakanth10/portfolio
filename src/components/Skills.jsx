import { Terminal, Code2, Database, Cloud, Command, Zap } from 'lucide-react';

const columns = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', icon: Terminal },
      { name: 'Java', icon: Code2 },
      { name: 'SQL', icon: Database }
    ]
  },
  {
    title: 'Data Platforms',
    items: [
      { name: 'Google BigQuery', icon: Database },
      { name: 'Snowflake', icon: Cloud }
    ]
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: Command },
      { name: 'CI/CD', icon: Zap }
    ]
  }
];

const Skills = () => (
  <section id="skills" className="mb-8 md:mb-12 scroll-mt-12">
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-8 md:mb-12">Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12">
      {columns.map((col) => (
        <div key={col.title}>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-6 md:mb-8">{col.title}</h3>
          <div className="space-y-4">
            {col.items.map((skill) => (
              <div key={skill.name} className="flex items-center gap-3 group cursor-default">
                <div className="w-10 h-10 rounded-[6px] bg-[#1a1a1a] border border-[#2e2e2e] flex items-center justify-center group-hover:border-[var(--color-brand-green)] transition-colors duration-300">
                  <skill.icon size={18} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                </div>
                <span className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
