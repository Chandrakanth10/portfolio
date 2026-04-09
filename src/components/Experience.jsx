import { ShoppingBag, Cloud, Globe, Code2 } from 'lucide-react';

const jobs = [
  {
    title: 'Software Engineer',
    date: 'Jan 2024 — Present',
    company: 'Albertsons (Contract)',
    companyColor: 'text-[var(--color-brand-green)]',
    icon: ShoppingBag,
    iconColor: 'text-[#00539F]',
    featured: true,
    bullets: [
      'Developed & scaled customer data API, serving 2B monthly requests with high availability.',
      'Built Python data quality tool; catches 86% of bugs before business teams, reducing escalations.',
      'Launched critical internal migration monitoring tool in Python, supporting 100+ engineers during Snowflake to BigQuery transition.'
    ]
  },
  {
    title: 'SDE Intern',
    date: 'May 2023 — Aug 2023',
    company: 'Amazon',
    companyColor: 'text-zinc-300',
    icon: Cloud,
    iconColor: 'text-[#FF9900]',
    bullets: [
      'Designed and implemented scalable APIs using Java, Spring, and Google Guice for 4,000+ datasheets serving millions of requests.',
      'Optimized API response times by 33% through strategic timeout optimization techniques.',
      'Deployed robust timeout feature, reducing unexpected service interruptions by 67%.',
      'Led legacy system migration, rerouting 8% of traffic seamlessly.'
    ]
  },
  {
    title: 'Software Development Engineer',
    date: 'Jul 2021 — Nov 2021',
    company: 'Vodafone',
    companyColor: 'text-zinc-300',
    icon: Globe,
    iconColor: 'text-[#E60000]',
    bullets: [
      'Increased user activity by 28% through successful overhaul of key patient engagement mechanisms.',
      'Engineered 11 RESTful APIs, improving UX and reducing redundant requests by 21%.',
      'Facilitated CI/CD practices with Git/Agile, leading to 14% increase in code delivery speed.'
    ]
  },
  {
    title: 'SDE Intern',
    date: 'Apr 2020 — Aug 2020',
    company: 'LMKInfotech',
    companyColor: 'text-zinc-300',
    icon: Code2,
    iconColor: 'text-zinc-400',
    bullets: [
      'Crafted scalable RESTful web APIs in Java and Spring Boot for financial management tool.',
      'Achieved 100% test and code coverage, validating 150+ CRUD operations.',
      'Rectified 5 crucial bugs, guaranteeing a seamless release with 100% on-time record.'
    ]
  }
];

const Experience = () => (
  <section id="work" className="mb-8 md:mb-12 scroll-mt-12">
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-8 md:mb-12">Work Experience</h2>

    <div className="relative border-l border-[var(--color-border-subtle)] ml-4 md:ml-6 space-y-10 md:space-y-12">
      {jobs.map((job) => (
        <div key={`${job.company}-${job.title}`} className="relative pl-8 md:pl-14">
          <div className={`absolute -left-[18px] md:-left-[24px] top-0 w-9 h-9 md:w-12 md:h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10 ${job.featured ? 'shadow-lg' : ''}`}>
            <job.icon className={`w-4 h-4 md:w-6 md:h-6 ${job.iconColor}`} />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
            <h3 className="text-lg md:text-xl font-semibold text-white">{job.title}</h3>
            <span className="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)]">{job.date}</span>
          </div>
          <div className={`text-base md:text-lg ${job.companyColor} mb-2`}>{job.company}</div>
          <ul className="list-disc pl-4 md:pl-5 space-y-1 text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed max-w-3xl">
            {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
