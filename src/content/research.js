import { logos } from './logos.js';

export const xploreUrl = 'https://ieeexplore.ieee.org/author/659163992295229';

export const papersNote = 'peer-reviewed IEEE conference papers in 2025.';

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

export const reviewsNote = 'Invited reviewer for international journals and conferences.';

export const reviewVenues = [
  {
    id: 'iclr-2026',
    logo: logos.iclr,
    name: 'ICLR 2026',
    chip: 'ICLR workshops',
    kind: 'Top-Tier ML Conference',
    groups: [
      {
        name: 'Workshop RSI — Resilient & Safe Intelligence',
        papers: [
          { title: 'Vision-Guided Iterative Refinement for Frontend Code Generation' }
        ]
      },
      {
        name: 'Workshop AIMS — AI for Medicine & Science',
        papers: [
          { title: 'SOK: A Taxonomy of Attack Vectors and Defense Strategies for Agentic Supply Chain Runtime' },
          { title: 'Code Driven Game Theoretic Evolution of LLM Agents as Holistic Strategy Generators' },
          { title: 'Optimal Aggregation Mechanisms for AI Benchmarking and Platinum Benchmarks' }
        ]
      }
    ]
  },
  {
    id: 'plos-one',
    logo: logos.plos,
    name: 'PLOS ONE',
    chip: 'PLOS ONE',
    kind: 'Journal',
    groups: [
      {
        papers: [
          { title: 'Syntactic Denoising and Multi-Strategy Auxiliary Enhancement for Aspect-based Sentiment Analysis' },
          { title: 'Research of Text Paraphrase Generation Based on Self-Contrastive Learning' }
        ]
      }
    ]
  },
  {
    id: 'cvamd-2025',
    logo: logos.miccai,
    name: 'CVAMD 2025',
    chip: 'MICCAI CVAMD',
    kind: 'MICCAI Workshop',
    groups: [
      {
        papers: [
          { title: 'Dual-LVT: A Dual Attention Language-Vision Transformer for Tumor Segmentation' },
          { title: 'Hierarchical Classification for Improved Histopathology Image Analysis' }
        ]
      }
    ]
  },
  {
    id: 'dravidianlangtech-2026',
    logo: logos.acl,
    name: 'DravidianLangTech 2026',
    chip: 'ACL DravidianLangTech',
    kind: 'ACL Workshop',
    groups: [
      {
        papers: [
          { title: 'Multi Architecture Transformer Ensemble for Detecting Abusive Tamil Text Targeting Women' },
          { title: 'Unsupervised Cross-Lingual Machine Translation for Low-Resource Indian Languages' },
          { title: 'Shared Task on Prompt Style Recovery for Large Language Models in Telugu' },
          { title: 'Hope Speech Detection in Code-Mixed Tulu Language Using Multiple Features' },
          { title: 'Prompting and LoRA Adaptation for Tamil Abusive Language Detection' }
        ]
      }
    ]
  },
  {
    id: 'lt-edi-2026',
    logo: logos.acl,
    name: 'LT-EDI 2026',
    chip: 'LT-EDI',
    kind: 'ACL Workshop',
    groups: [
      {
        papers: [
          { title: 'Overview of the Multimodal Homophobia and Transphobia Meme Classification Shared Task' }
        ]
      }
    ]
  }
];

export const reviewCount = reviewVenues
  .flatMap((venue) => venue.groups)
  .reduce((count, group) => count + group.papers.length, 0);
