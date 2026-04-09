import { ExternalLink, PenTool } from 'lucide-react';

const articles = [
  {
    url: 'https://hackernoon.com/metas-$10-billion-bet-building-an-undersea-cable-empire-to-power-its-ai-future',
    title: "Meta's $10 Billion Bet: Building an Undersea Cable Empire to Power Its AI Future",
    description: "Analyzing Meta's strategic investment in subsea infrastructure to support their growing AI computational demands.",
    tags: ['AI Strategy', 'Infrastructure']
  },
  {
    url: 'https://hackernoon.com/ais-dirty-secret-the-energy-cost-of-training-the-next-gpt-5',
    title: "AI's Dirty Secret: The Energy Cost of Training the Next GPT-5",
    description: 'Examining the environmental impact and energy consumption challenges associated with training large language models.',
    tags: ['Green AI', 'Sustainability']
  },
  {
    url: 'https://hackernoon.com/forget-chatbots-meet-actionbots-why-amazons-nova-act-could-reshape-web-interaction',
    title: "Forget Chatbots, Meet ActionBots: Why Amazon's Nova Act Could Reshape Web Interaction",
    description: "Discussing the shift from conversational AI to agentic 'action-bots' capable of performing complex tasks.",
    tags: ['Agents', 'Future of Web']
  }
];

const Writing = () => (
  <section id="writing" className="mb-8 md:mb-12 scroll-mt-12">
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-8 md:mb-12">Technical Writing</h2>
    <div className="relative border-l border-[var(--color-border-subtle)] ml-4 md:ml-6 space-y-6 mb-10">
      <div className="relative pl-8 md:pl-14">
        <div className="absolute -left-[18px] md:-left-[24px] top-0 w-9 h-9 md:w-12 md:h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10 shadow-lg group-hover:border-[var(--color-brand-green)] transition-colors">
          <PenTool className="w-4 h-4 md:w-6 md:h-6 text-[#00FF00]" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <a href="https://hackernoon.com/u/ckp" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-white hover:text-[var(--color-brand-green)] transition-colors inline-flex items-center gap-2">
            HackerNoon <ExternalLink size={16} />
          </a>
        </div>

        <div className="space-y-5">
          {articles.map((article) => (
            <a key={article.url} href={article.url} target="_blank" rel="noopener noreferrer" className="group block cursor-pointer">
              <div className="flex justify-between items-start mb-1">
                <h4 className="text-base sm:text-lg text-white font-medium group-hover:text-[var(--color-brand-green)] transition-colors">{article.title}</h4>
                <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-2">{article.description}</p>
              <div className="flex gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-brand-amber)]/20 text-[var(--color-brand-amber)] rounded-[4px] bg-[var(--color-brand-amber)]/5">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Writing;
