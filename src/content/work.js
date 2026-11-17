import albertsonsLogo from '../assets/logos/albertsons.png'
import amazonLogo from '../assets/logos/amazon.png'
import vodafoneLogo from '../assets/logos/vodafone.svg'

export const roles = [
  {
    id: 'albertsons',
    chip: 'Albertsons',
    logo: { src: albertsonsLogo, tile: '#ffffff', fit: 0.82 },
    current: true,
    onHome: true,
    title: 'Data Engineer',
    date: 'Jan 2024 — Present',
    company: 'Albertsons (Contract)',
    bullets: [
      'Developed & scaled customer data API, serving 2B monthly requests with high availability.',
      'Built Python data quality tool; catches 86% of bugs before business teams, reducing escalations.',
      'Launched critical internal migration monitoring tool in Python, supporting 100+ engineers during Snowflake to BigQuery transition.'
    ]
  },
  {
    id: 'amazon',
    chip: 'Amazon',
    logo: { src: amazonLogo, tile: '#ff6200', fit: 1 },
    onHome: true,
    title: 'SDE Intern',
    date: 'May 2023 — Aug 2023',
    company: 'Amazon',
    bullets: [
      'Designed and implemented scalable APIs using Java, Spring, and Google Guice for 4,000+ datasheets serving millions of requests.',
      'Optimized API response times by 33% through strategic timeout optimization techniques.',
      'Deployed robust timeout feature, reducing unexpected service interruptions by 67%.',
      'Led legacy system migration, rerouting 8% of traffic seamlessly.'
    ]
  },
  {
    id: 'vodafone',
    chip: 'Vodafone',
    logo: { src: vodafoneLogo, tile: '#ffffff', fit: 0.8 },
    onHome: true,
    title: 'Software Development Engineer',
    date: 'Jul 2021 — Nov 2021',
    company: 'Vodafone',
    bullets: [
      'Increased user activity by 28% through successful overhaul of key patient engagement mechanisms.',
      'Engineered 11 RESTful APIs, improving UX and reducing redundant requests by 21%.',
      'Facilitated CI/CD practices with Git/Agile, leading to 14% increase in code delivery speed.'
    ]
  },
  {
    id: 'lmkinfotech',
    chip: 'LMKInfotech',
    title: 'SDE Intern',
    date: 'Apr 2020 — Aug 2020',
    company: 'LMKInfotech',
    bullets: [
      'Crafted scalable RESTful web APIs in Java and Spring Boot for financial management tool.',
      'Achieved 100% test and code coverage, validating 150+ CRUD operations.',
      'Rectified 5 crucial bugs, guaranteeing a seamless release with 100% on-time record.'
    ]
  }
];

export const education = [
  {
    id: 'asu',
    degree: 'Master of Science, Computer Science',
    school: 'Arizona State University',
    date: 'Jan 22 — Dec 23',
    notes: [
      'GPA: 4.0/4.0 (Distinction).',
      'Focused on Distributed Systems and Software Engineering.'
    ]
  }
];

export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'SQL'] },
  { group: 'Data Platforms', items: ['Google BigQuery', 'Snowflake'] },
  { group: 'Tools', items: ['Git', 'CI/CD'] }
];
