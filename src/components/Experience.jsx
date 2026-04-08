import { ShoppingBag, Cloud, Globe, Code2 } from 'lucide-react';

const Experience = () => (
  <section id="work" className="mb-12 scroll-mt-12">
    <h2 className="text-3xl font-bold tracking-tight text-white mb-12">Work Experience</h2>

    <div className="relative border-l border-[var(--color-border-subtle)] ml-3 md:ml-6 space-y-12">
      <div className="relative pl-10 md:pl-14">
        <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10 shadow-lg group-hover:border-[var(--color-brand-green)] transition-colors">
          <ShoppingBag className="w-6 h-6 text-[#00539F]" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
          <h3 className="text-xl font-semibold text-white">Software Engineer</h3>
          <span className="text-sm font-mono text-[var(--color-text-secondary)]">Jan 2024 — Present</span>
        </div>
        <div className="text-lg text-[var(--color-brand-green)] mb-2">Albertsons</div>
        <ul className="list-disc pl-5 space-y-1 text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
          <li>Developed & scaled customer data API, serving 2B monthly requests with high availability.</li>
          <li>Built Python data quality tool; catches 86% of bugs before business teams, reducing escalations.</li>
          <li>Launched critical internal migration monitoring tool in Python, supporting 100+ engineers during Snowflake to BigQuery transition.</li>
        </ul>
      </div>

      <div className="relative pl-10 md:pl-14">
        <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10">
          <Cloud className="w-6 h-6 text-[#FF9900]" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
          <h3 className="text-xl font-semibold text-white">SDE Intern</h3>
          <span className="text-sm font-mono text-[var(--color-text-secondary)]">May 2023 — Aug 2023</span>
        </div>
        <div className="text-lg text-zinc-300 mb-2">Amazon</div>
        <ul className="list-disc pl-5 space-y-1 text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
          <li>Designed and implemented scalable APIs using Java, Spring, and Google Guice for 4,000+ datasheets serving millions of requests.</li>
          <li>Optimized API response times by 33% through strategic timeout optimization techniques.</li>
          <li>Deployed robust timeout feature, reducing unexpected service interruptions by 67%.</li>
          <li>Led legacy system migration, rerouting 8% of traffic seamlessly.</li>
        </ul>
      </div>

      <div className="relative pl-10 md:pl-14">
        <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10">
          <Globe className="w-6 h-6 text-[#E60000]" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
          <h3 className="text-xl font-semibold text-white">Software Development Engineer</h3>
          <span className="text-sm font-mono text-[var(--color-text-secondary)]">Jul 2021 — Nov 2021</span>
        </div>
        <div className="text-lg text-zinc-300 mb-2">Vodafone</div>
        <ul className="list-disc pl-5 space-y-1 text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
          <li>Increased user activity by 28% through successful overhaul of key patient engagement mechanisms.</li>
          <li>Engineered 11 RESTful APIs, improving UX and reducing redundant requests by 21%.</li>
          <li>Facilitated CI/CD practices with Git/Agile, leading to 14% increase in code delivery speed.</li>
        </ul>
      </div>

      <div className="relative pl-10 md:pl-14">
        <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10">
          <Code2 className="w-6 h-6 text-zinc-400" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
          <h3 className="text-xl font-semibold text-white">SDE Intern</h3>
          <span className="text-sm font-mono text-[var(--color-text-secondary)]">Apr 2020 — Aug 2020</span>
        </div>
        <div className="text-lg text-zinc-300 mb-2">LMKInfotech</div>
        <ul className="list-disc pl-5 space-y-1 text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
          <li>Crafted scalable RESTful web APIs in Java and Spring Boot for financial management tool.</li>
          <li>Achieved 100% test and code coverage, validating 150+ CRUD operations.</li>
          <li>Rectified 5 crucial bugs, guaranteeing a seamless release with 100% on-time record.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
