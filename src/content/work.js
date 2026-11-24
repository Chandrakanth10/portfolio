import { logos } from './logos.js';

// Bullets and notes are in parts (see Rich.jsx): plain text, { fig } for a figure,
// and { name, logo } for a tool with its logo.
const python = { name: 'Python', logo: logos.python };
const java = { name: 'Java', logo: logos.java };

export const roles = [
  {
    id: 'albertsons',
    chip: 'Albertsons',
    logo: logos.albertsons,
    current: true,
    onHome: true,
    title: 'Data Engineer',
    date: 'Jan 2024 — Present',
    company: 'Albertsons',
    tag: 'Contract',
    bullets: [
      ['Developed & scaled customer data API, serving ', { fig: '2B' }, ' monthly requests with high availability.'],
      ['Built ', python, ' data quality tool; catches ', { fig: '86%' }, ' of bugs before business teams, reducing escalations.'],
      [
        'Launched critical internal migration monitoring tool in ',
        python,
        ', supporting ',
        { fig: '100+' },
        ' engineers during ',
        { name: 'Snowflake', logo: logos.snowflake },
        ' to ',
        { name: 'BigQuery', logo: logos.bigquery },
        ' transition.'
      ]
    ]
  },
  {
    id: 'amazon',
    chip: 'Amazon',
    logo: logos.amazon,
    onHome: true,
    title: 'SDE Intern',
    date: 'May 2023 — Aug 2023',
    company: 'Amazon',
    bullets: [
      [
        'Designed and implemented scalable APIs using ',
        java,
        ', ',
        { name: 'Spring', logo: logos.spring },
        ', and Google Guice for ',
        { fig: '4,000+' },
        ' datasheets serving millions of requests.'
      ],
      ['Optimized API response times by ', { fig: '33%' }, ' through strategic timeout optimization techniques.'],
      ['Deployed robust timeout feature, reducing unexpected service interruptions by ', { fig: '67%' }, '.'],
      ['Led legacy system migration, rerouting ', { fig: '8%' }, ' of traffic seamlessly.']
    ]
  },
  {
    id: 'vodafone',
    chip: 'Vodafone',
    logo: logos.vodafone,
    onHome: true,
    title: 'Software Development Engineer',
    date: 'Jul 2021 — Nov 2021',
    company: 'Vodafone',
    bullets: [
      ['Increased user activity by ', { fig: '28%' }, ' through successful overhaul of key patient engagement mechanisms.'],
      ['Engineered ', { fig: '11' }, ' RESTful APIs, improving UX and reducing redundant requests by ', { fig: '21%' }, '.'],
      [
        'Facilitated CI/CD practices with ',
        { name: 'Git', logo: logos.git },
        '/Agile, leading to ',
        { fig: '14%' },
        ' increase in code delivery speed.'
      ]
    ]
  },
  {
    id: 'lmkinfotech',
    chip: 'LMKInfotech',
    logo: logos.lmkinfotech,
    title: 'SDE Intern',
    date: 'Apr 2020 — Aug 2020',
    company: 'LMKInfotech',
    bullets: [
      [
        'Crafted scalable RESTful web APIs in ',
        java,
        ' and ',
        { name: 'Spring Boot', logo: logos.spring },
        ' for financial management tool.'
      ],
      ['Achieved ', { fig: '100%' }, ' test and code coverage, validating ', { fig: '150+' }, ' CRUD operations.'],
      ['Rectified ', { fig: '5' }, ' crucial bugs, guaranteeing a seamless release with ', { fig: '100%' }, ' on-time record.']
    ]
  }
];

export const education = [
  {
    id: 'asu',
    logo: logos.asu,
    degree: 'Master of Science, Computer Science',
    school: 'Arizona State University',
    date: 'Jan 2022 — Dec 2023',
    notes: [
      ['GPA: ', { fig: '4.0/4.0' }, ' (Distinction).'],
      ['Focused on Distributed Systems and Software Engineering.']
    ]
  }
];

export const skills = [
  { group: 'Languages', items: [python, java, 'SQL'] },
  { group: 'Data Platforms', items: [{ name: 'Google BigQuery', logo: logos.bigquery }, { name: 'Snowflake', logo: logos.snowflake }] },
  { group: 'Tools', items: [{ name: 'Git', logo: logos.git }, 'CI/CD'] }
];
