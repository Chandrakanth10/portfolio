import { logos } from './logos.js';

// Bullets and notes are in parts (see Rich.jsx): plain text, { fig } for a figure,
// and { name, logo } for a tool with its logo.
const python = { name: 'Python', logo: logos.python };
const java = { name: 'Java', logo: logos.java };
const snowflake = { name: 'Snowflake', logo: logos.snowflake };
const bigquery = { name: 'BigQuery', logo: logos.bigquery };
const airflow = { name: 'Apache Airflow', logo: logos.airflow };

export const roles = [
  {
    id: 'walmart',
    chip: 'Walmart Global Tech',
    logo: logos.walmart,
    current: true,
    title: 'Data Engineer – MLOps',
    date: 'Jul 2026 — Present',
    company: 'Walmart Global Tech',
    // The Work page's outline is narrow; there the name is shortened.
    short: 'Walmart',
    bullets: [
      ['Accelerated data processing by orchestrating ', { fig: '5+' }, ' DAGs to use GPUs, cutting compute time by ', { fig: '30%' }, '.'],
      ['Identified data migration gaps through cross-source analysis of data spanning ', { fig: '85M+' }, ' items.'],
      ['Partnered with data scientists to deploy and automate pipelines through CI/CD, reducing bottlenecks.']
    ]
  },
  {
    id: 'albertsons',
    chip: 'Albertsons',
    logo: logos.albertsons,
    onHome: true,
    title: 'Data Engineer',
    date: 'Jan 2024 — Jul 2026',
    company: 'Albertsons',
    bullets: [
      [
        'Engineered ',
        { fig: '120+' },
        ' ETL pipelines on Google Cloud and delivered OKR reports across ',
        { fig: '12' },
        ' business divisions, enabling teams to track performance and progress toward business goals.'
      ],
      [
        'Designed an automated data quality framework using SQL validation and ',
        airflow,
        ', detecting ',
        { fig: '86%' },
        ' of data defects before business-team escalation.'
      ],
      [
        'Engineered and launched a critical internal migration monitoring tool in ',
        python,
        ', supporting ',
        { fig: '100+' },
        ' engineers during a large-scale data transition from ',
        snowflake,
        ' to ',
        bigquery,
        '.'
      ],
      [
        'Developed ',
        { fig: '30+' },
        ' PySpark data transformation workflows in Databricks, leveraging Spark and distributed processing to support large-volume ETL pipelines, analytics datasets, and reporting needs.'
      ]
    ]
  },
  {
    id: 'amazon',
    chip: 'Amazon',
    logo: logos.amazon,
    onHome: true,
    title: 'Data Engineer Intern',
    date: 'May 2023 — Aug 2023',
    company: 'Amazon',
    bullets: [
      ['Collaborated with ', { fig: '4+' }, ' teams to design validation protocols, manage data, and query improvements.'],
      ['Optimized ', { fig: '10+' }, ' complex SQL queries, reducing average query execution time by ', { fig: '25%' }, '.'],
      [
        'Built and maintained a centralized data dictionary to document table definitions, field-level metadata, business rules, and data ownership, improving data understanding and consistency.'
      ]
    ]
  },
  {
    id: 'vodafone',
    chip: 'Vodafone',
    logo: logos.vodafone,
    onHome: true,
    title: 'Data Engineer',
    date: 'Apr 2020 — Dec 2021',
    company: 'Vodafone',
    bullets: [
      ['Collaborated with partners to design and implement solutions for data integration and visualization.'],
      ['Was part of the on call team for handling the incident tickets, timely resolved, and escalated the tickets.'],
      ['Built ', { fig: '20+' }, ' pipelines, implemented job scheduling, using ', airflow, ', to streamline data processes.']
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
  { group: 'Languages', items: [java, python, 'SQL', 'Spark', 'PySpark'] },
  { group: 'Databases', items: ['Oracle DB', 'MySQL', 'PostgreSQL', 'DBMS'] },
  { group: 'Data Engineering', items: [snowflake, bigquery, 'Google Cloud', 'Databricks'] },
  { group: 'Scheduling Tools', items: [airflow, 'Google Cloud Composer'] },
  { group: 'Reporting', items: ['Power BI', 'Looker', 'ThoughtSpot'] },
  { group: 'Gen AI & ML', items: ['RAG', 'MCP', 'Prompt Engineering', 'Semantic Modeling', 'LookML'] },
  { group: 'Data Modelling', items: ['Medallion Architecture', 'Star Schema', 'Slowly Changing Dimensions', 'Batch Processing'] }
];
