export const xploreUrl = 'https://ieeexplore.ieee.org/author/659163992295229';

export const papersNote = 'peer-reviewed IEEE conference papers in 2025.';

export const papers = [
  {
    id: 'istas-2025',
    venue: 'IEEE ISTAS 2025',
    chip: 'IEEE ISTAS',
    title: 'Bridging Quantum and Classical AI: Cloud-Based Quantum Computing for Machine Learning',
    description: 'Explores the integration of quantum computing with classical AI through cloud-based architectures for machine learning applications.',
    tags: ['Sole Author']
  },
  {
    id: 'icccnt-2025',
    venue: 'IEEE ICCCNT 2025',
    chip: 'IEEE ICCCNT',
    title: 'Scalable Intelligence: A Survey on Deploying AI Models in Distributed Cloud Platforms',
    description: 'Surveys scalable deployment strategies for AI models across distributed cloud platforms, examining orchestration, resource optimization, and inference at scale.',
    tags: ['Sole Author', 'Presented']
  },
  {
    id: 'aibthings-2025-spx',
    venue: 'IEEE AIBThings 2025',
    chip: 'IEEE AIBThings',
    title: 'SPX: A Novel LLM-Based Framework for Explaining and Estimating User Story Points',
    description: 'Presents a novel LLM-based framework for automated story point estimation and explanation in agile development.',
    tags: [],
    authors: ['A. Jadhav', 'C. Puligundla', 'S. R. Chigurupati', 'P. Jalan', 'S. Bhogavalli']
  },
  {
    id: 'aibthings-2025-triage',
    venue: 'IEEE AIBThings 2025',
    chip: 'IEEE AIBThings',
    title: 'Integrating LLMs for Automated Bug Triaging and Root Cause Localization in Software Systems',
    description: 'Proposes an LLM-based approach for automated bug triaging and root cause localization in large-scale software systems.',
    tags: [],
    authors: ['P. Pisal', 'P. Jalan', 'S. R. Chigurupati', 'C. Puligundla', 'S. Bhogavalli']
  }
];

export const reviewsNote = 'Invited reviewer for international journals and conferences.';

export const reviewVenues = [
  {
    id: 'iclr-2026',
    name: 'ICLR 2026',
    chip: 'ICLR workshops',
    kind: 'Top-Tier ML Conference',
    groups: [
      {
        name: 'Workshop RSI — Resilient & Safe Intelligence',
        papers: [
          { title: 'Vision-Guided Iterative Refinement for Frontend Code Generation', note: 'Critic-in-the-loop framework leveraging VLMs for automated frontend code refinement.' }
        ]
      },
      {
        name: 'Workshop AIMS — AI for Medicine & Science',
        papers: [
          { title: 'SOK: A Taxonomy of Attack Vectors and Defense Strategies for Agentic Supply Chain Runtime', note: 'Runtime-focused taxonomy of data and tool supply chain threats for AI agents.' },
          { title: 'Code Driven Game Theoretic Evolution of LLM Agents as Holistic Strategy Generators', note: 'Evolutionary tournament framework for LLM agents as holistic policy generators.' },
          { title: 'Optimal Aggregation Mechanisms for AI Benchmarking and Platinum Benchmarks', note: 'Game-theoretic model of benchmark aggregation with optimal weighting rules.' }
        ]
      }
    ]
  },
  {
    id: 'plos-one',
    name: 'PLOS ONE',
    chip: 'PLOS ONE',
    kind: 'Journal',
    groups: [
      {
        papers: [
          { title: 'Syntactic Denoising and Multi-Strategy Auxiliary Enhancement for Aspect-based Sentiment Analysis', note: 'Full review cycle including re-review of revised submission.', ref: 'PONE-D-25-17433' },
          { title: 'Research of Text Paraphrase Generation Based on Self-Contrastive Learning', note: 'Reviewed revised manuscript on paraphrase generation using self-contrastive learning techniques.', ref: 'PONE-D-25-16567R1' }
        ]
      }
    ]
  },
  {
    id: 'cvamd-2025',
    name: 'CVAMD 2025',
    chip: 'MICCAI CVAMD',
    kind: 'MICCAI Workshop',
    groups: [
      {
        papers: [
          { title: 'Dual-LVT: A Dual Attention Language-Vision Transformer for Tumor Segmentation', note: 'Vision-language transformer approach for automated tumor segmentation.' },
          { title: 'Hierarchical Classification for Improved Histopathology Image Analysis', note: 'Hierarchical classification methods for histopathology image analysis.' }
        ]
      }
    ]
  },
  {
    id: 'dravidianlangtech-2026',
    name: 'DravidianLangTech 2026',
    chip: 'ACL DravidianLangTech',
    kind: 'ACL Workshop',
    groups: [
      {
        papers: [
          { title: 'Multi Architecture Transformer Ensemble for Detecting Abusive Tamil Text Targeting Women', note: 'Transformer ensemble approach for abusive language detection in Tamil.' },
          { title: 'Unsupervised Cross-Lingual Machine Translation for Low-Resource Indian Languages', note: 'Cross-lingual translation methods for low-resource Dravidian languages.' },
          { title: 'Shared Task on Prompt Style Recovery for Large Language Models in Telugu', note: 'Prompt style recovery shared task targeting LLM outputs in Telugu.' },
          { title: 'Hope Speech Detection in Code-Mixed Tulu Language Using Multiple Features', note: 'Multi-feature approach for hope speech detection in code-mixed Tulu.' },
          { title: 'Prompting and LoRA Adaptation for Tamil Abusive Language Detection', note: 'Comparative study of open LLMs with prompting and LoRA for abusive language detection.' }
        ]
      }
    ]
  },
  {
    id: 'lt-edi-2026',
    name: 'LT-EDI 2026',
    chip: 'LT-EDI',
    kind: 'Workshop',
    groups: [
      {
        papers: [
          { title: 'Overview of the Multimodal Homophobia and Transphobia Meme Classification Shared Task', note: 'Shared task overview on multimodal classification of homophobic and transphobic memes.' }
        ]
      }
    ]
  }
];
