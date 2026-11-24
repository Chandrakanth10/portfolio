import { logos } from './logos.js';

export const xploreUrl = 'https://ieeexplore.ieee.org/author/659163992295229';

export const papersNote = 'peer-reviewed IEEE conference papers';

// Newest first, in the order IEEE Xplore added them. Each title links to its IEEE Xplore article.
export const papers = [
  {
    id: 'iemcon-2026-oracleforge',
    venue: 'IEEE IEMCON 2026',
    chip: 'IEEE IEMCON',
    title: 'OracleForge: Counterexample-Driven Test Oracle Synthesis for LLM-Generated Unit Tests',
    url: 'https://ieeexplore.ieee.org/document/11794698/',
    description: 'Strengthens the assertions in LLM-generated unit tests with mutation analysis, metamorphic relations and counterexamples.',
    logo: logos.ieee,
    topics: ['LLMs', 'Software testing', 'Test oracles'],
    authors: ['C. Puligundla', 'N. Shaik', 'K. A. Alobaid', 'P. R. Seknametla', 'R. Sunkara']
  },
  {
    id: 'iemcon-2026-specshield',
    venue: 'IEEE IEMCON 2026',
    chip: 'IEEE IEMCON',
    title: 'SpecShield: Probabilistic Contract-Guided LLM Program Repair under Weak Test Suites',
    url: 'https://ieeexplore.ieee.org/document/11794691/',
    description: 'Checks LLM-proposed program repairs against contracts inferred from code, documentation and runtime traces when tests are weak.',
    logo: logos.ieee,
    topics: ['LLMs', 'Program repair', 'Software contracts'],
    authors: ['C. Puligundla', 'K. Ramamurthy', 'K. A. Alobaid', 'N. H. Badabagni', 'O. Oyebode']
  },
  {
    id: 'intcec-2026-edge',
    venue: 'IEEE INTCEC 2026',
    chip: 'IEEE INTCEC',
    title: 'Inference at the Edge: A Runtime Quantization Dispatcher for Real-Time Industrial Deployment of Small Language Models',
    url: 'https://ieeexplore.ieee.org/document/11764784/',
    description: 'Picks a quantization scheme for each request so small language models run in real time on industrial edge devices.',
    logo: logos.ieee,
    topics: ['Small language models', 'Quantization', 'Edge AI'],
    authors: ['C. Puligundla']
  },
  {
    id: 'intcec-2026-carat',
    venue: 'IEEE INTCEC 2026',
    chip: 'IEEE INTCEC',
    title: 'CARAT: Causal Attribution of Reasoning-Activated Tool Hallucination',
    url: 'https://ieeexplore.ieee.org/document/11764843/',
    description: 'Traces the reasoning steps that lead language models to hallucinate tool calls, and uses them to cut those errors.',
    logo: logos.ieee,
    topics: ['LLM agents', 'Tool use', 'Hallucination'],
    authors: ['C. Puligundla']
  },
  {
    id: 'aibthings-2025-triage',
    venue: 'IEEE AIBThings 2025',
    chip: 'IEEE AIBThings',
    title: 'Integrating LLMs for Automated Bug Triaging and Root Cause Localization in Software Systems',
    url: 'https://ieeexplore.ieee.org/document/11296163/',
    description: 'Combines LLMs, graphs and software-system data to triage bugs, locate probable root causes and generate tests.',
    logo: logos.ieee,
    topics: ['LLMs', 'Bug triage', 'Root cause analysis'],
    authors: ['P. Pisal', 'P. Jalan', 'S. R. Chigurupati', 'C. Puligundla', 'S. Bhogavalli']
  },
  {
    id: 'aibthings-2025-spx',
    venue: 'IEEE AIBThings 2025',
    chip: 'IEEE AIBThings',
    title: 'SPX: A Novel LLM-Based Framework for Explaining and Estimating User Story Points',
    url: 'https://ieeexplore.ieee.org/document/11296255/',
    description: 'Presents a novel LLM-based framework for automated story point estimation and explanation in agile development.',
    logo: logos.ieee,
    topics: ['LLMs', 'Agile', 'Effort estimation'],
    authors: ['A. Jadhav', 'C. Puligundla', 'S. R. Chigurupati', 'P. Jalan', 'S. Bhogavalli']
  },
  {
    id: 'istas-2025',
    venue: 'IEEE ISTAS 2025',
    chip: 'IEEE ISTAS',
    title: 'Bridging Quantum and Classical AI: Cloud-Based Quantum Computing for Machine Learning',
    url: 'https://ieeexplore.ieee.org/document/11269628/',
    description: 'Explores the integration of quantum computing with classical AI through cloud-based architectures for machine learning applications.',
    logo: logos.ieee,
    topics: ['Quantum computing', 'Cloud', 'Machine learning'],
    authors: ['C. Puligundla']
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
