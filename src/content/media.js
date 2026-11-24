import { logos } from './logos.js';

export const pressNote = 'Quoted and featured in leading technology publications.';

// Each publication with the articles that quote or feature me, in the order the Media page lists
// them. Its id is the Media row's anchor, which the home page's "Quoted in" chips link to.
export const publications = [
  {
    id: 'fortune',
    name: 'Fortune',
    logo: logos.fortune,
    articles: [
      { title: 'How Retail Giants Are Using AI to Reinvent the Supply Chain', url: 'https://fortune.com/2025/07/23/walmart-amazon-ai-supply-chain-retail/' },
    ]
  },
  {
    id: 'venturebeat',
    name: 'VentureBeat',
    logo: logos.venturebeat,
    articles: [
      { title: 'Scaling Smarter: Right-Sizing Compute for AI', url: 'https://venturebeat.com/ai/scaling-smarter-how-enterprise-it-teams-can-right-size-their-compute-for-ai' },
    ]
  },
  {
    id: 'cio',
    name: 'CIO',
    logo: logos.cio,
    articles: [
      { title: '7 Things You Need to Know About AI and the Data Center', url: 'https://www.cio.com/article/222623/7-things-to-know-about-ai-in-the-data-center.html' },
      { title: '5 Tactics to Reduce IT Costs Without Hurting Innovation', url: 'https://www.cio.com/article/4027937/5-tactics-to-reduce-it-costs-without-hurting-innovation.html' },
      { title: '7 Enterprise Cloud Strategy Trends Shaking Up IT Today', url: 'https://www.cio.com/article/4026759/7-enterprise-cloud-strategy-trends-shaking-up-it-today.html' },
    ]
  },
  {
    id: 'pymnts',
    name: 'PYMNTS',
    logo: logos.pymnts,
    articles: [
      { title: 'What Is Multimodal AI and Why Retailers Should Care', url: 'https://www.pymnts.com/artificial-intelligence-2/2025/beyond-data-points-ai-that-understands-images-voice-and-your-customers-journey/' },
    ]
  },
  {
    id: 'leaddev',
    name: 'LeadDev',
    logo: logos.leaddev,
    articles: [
      { title: 'The Unions Are (Finally) Coming for Big Tech', url: 'https://leaddev.com/leadership/unions-finally-coming-big-tech' },
    ]
  },
  {
    id: 'devops-com',
    name: 'DevOps.com',
    logo: logos.devops,
    articles: [
      { title: 'Tackling the AI-Fueled API Explosion With Visibility', url: 'https://devops.com/tackling-the-ai-fueled-api-explosion-with-visibility/' },
    ]
  },
  {
    id: 'okoone',
    name: 'Okoone',
    logo: logos.okoone,
    articles: [
      { title: 'The Cloud Trends Every Enterprise Leader Should Know', url: 'https://www.okoone.com/spark/strategy-transformation/the-cloud-trends-every-enterprise-leader-should-know/' },
    ]
  },
  {
    id: 'origen',
    name: 'Origen',
    logo: logos.origen,
    articles: [
      { title: 'Inside the Cloud Shift: Strategies Top Enterprises Are Betting On', url: 'https://www.origen.co/insights/inside-the-cloud-shift-strategies-top-enterprises-are-betting-on-765' },
    ]
  }
];

export const pressCount = publications.reduce((count, publication) => count + publication.articles.length, 0);
export const writing = {
  outlet: 'HackerNoon',
  logo: logos.hackernoon,
  profileUrl: 'https://hackernoon.com/u/ckp',
  articles: [
    {
      url: 'https://hackernoon.com/metas-$10-billion-bet-building-an-undersea-cable-empire-to-power-its-ai-future',
      title: "Meta's $10 Billion Bet: Building an Undersea Cable Empire to Power Its AI Future",
      description: "Analyzing Meta's strategic investment in subsea infrastructure to support their growing AI computational demands."
    },
    {
      url: 'https://hackernoon.com/ais-dirty-secret-the-energy-cost-of-training-the-next-gpt-5',
      title: "AI's Dirty Secret: The Energy Cost of Training the Next GPT-5",
      description: 'Examining the environmental impact and energy consumption challenges associated with training large language models.'
    },
    {
      url: 'https://hackernoon.com/forget-chatbots-meet-actionbots-why-amazons-nova-act-could-reshape-web-interaction',
      title: "Forget Chatbots, Meet ActionBots: Why Amazon's Nova Act Could Reshape Web Interaction",
      description: "Discussing the shift from conversational AI to agentic 'action-bots' capable of performing complex tasks."
    }
  ]
};
