import { logos } from './logos.js';

export const xploreUrl = 'https://ieeexplore.ieee.org/author/659163992295229';

export const papersNote = 'peer-reviewed IEEE conference papers in 2025';

export const papers = [
  {
    id: 'istas-2025',
    venue: 'IEEE ISTAS 2025',
    chip: 'IEEE ISTAS',
    title: 'Bridging Quantum and Classical AI: Cloud-Based Quantum Computing for Machine Learning',
    description: 'Explores the integration of quantum computing with classical AI through cloud-based architectures for machine learning applications.',
    logo: logos.ieee,
    topics: ['Quantum computing', 'Cloud', 'Machine learning'],
    authors: ['C. Puligundla']
  },
  {
    id: 'icccnt-2025',
    venue: 'IEEE ICCCNT 2025',
    chip: 'IEEE ICCCNT',
    title: 'Scalable Intelligence: A Survey on Deploying AI Models in Distributed Cloud Platforms',
    description: 'Surveys scalable deployment strategies for AI models across distributed cloud platforms, examining orchestration, resource optimization, and inference at scale.',
    logo: logos.ieee,
    topics: ['Cloud', 'Distributed systems', 'Model serving'],
    authors: ['C. Puligundla']
  },
  {
    id: 'aibthings-2025-spx',
    venue: 'IEEE AIBThings 2025',
    chip: 'IEEE AIBThings',
    title: 'SPX: A Novel LLM-Based Framework for Explaining and Estimating User Story Points',
    description: 'Presents a novel LLM-based framework for automated story point estimation and explanation in agile development.',
    logo: logos.ieee,
    topics: ['LLMs', 'Agile', 'Effort estimation'],
    authors: ['A. Jadhav', 'C. Puligundla', 'S. R. Chigurupati', 'P. Jalan', 'S. Bhogavalli']
  },
  {
    id: 'aibthings-2025-triage',
    venue: 'IEEE AIBThings 2025',
    chip: 'IEEE AIBThings',
    title: 'Integrating LLMs for Automated Bug Triaging and Root Cause Localization in Software Systems',
    description: 'Proposes an LLM-based approach for automated bug triaging and root cause localization in large-scale software systems.',
    logo: logos.ieee,
    topics: ['LLMs', 'Bug triage', 'Root cause analysis'],
    authors: ['P. Pisal', 'P. Jalan', 'S. R. Chigurupati', 'C. Puligundla', 'S. Bhogavalli']
  }
];

export const reviewsNote = 'Paper titles are withheld for confidentiality.';

// Each group holds the number of papers reviewed there. Their titles are private: see
// review-titles.private.js.
export const reviewVenues = [
  {
    id: 'iclr-2026',
    logo: logos.iclr,
    name: 'ICLR 2026',
    chip: 'ICLR workshops',
    kind: 'Top-Tier ML Conference',
    groups: [
      {
        name: 'Workshop RSI — AI with Recursive Self-Improvement',
        papers: 1
      },
      {
        name: 'Workshop AIMS — AI for Mechanism Design and Strategic Decision Making',
        papers: 3
      }
    ]
  },
  {
    id: 'plos-one',
    logo: logos.plos,
    name: 'PLOS ONE',
    chip: 'PLOS ONE',
    kind: 'Journal',
    groups: [{ papers: 2 }]
  },
  {
    id: 'cvamd-2025',
    logo: logos.cvf,
    name: 'CVAMD 2025',
    chip: 'ICCV CVAMD',
    kind: 'ICCV Workshop',
    groups: [{ papers: 2 }]
  },
  {
    id: 'dravidianlangtech-2026',
    logo: logos.acl,
    name: 'DravidianLangTech 2026',
    chip: 'ACL DravidianLangTech',
    kind: 'ACL Workshop',
    groups: [{ papers: 5 }]
  },
  {
    id: 'lt-edi-2026',
    logo: logos.acl,
    name: 'LT-EDI 2026',
    chip: 'LT-EDI',
    kind: 'ACL Workshop',
    groups: [{ papers: 1 }]
  },
  {
    id: 'spelll-2026',
    logo: logos.spelll,
    name: 'SPELLL 2026',
    chip: 'SPELLL',
    kind: 'Conference',
    groups: [{ papers: 4 }]
  }
];

const reviewGroups = reviewVenues.flatMap((venue) => venue.groups);

export const reviewCount = reviewGroups.reduce((count, group) => count + group.papers, 0);

// Each workshop group is a venue of its own, so ICLR's two workshops make two.
export const reviewVenueCount = reviewGroups.length;
