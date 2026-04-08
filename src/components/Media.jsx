import { ArrowUpRight } from 'lucide-react';

const articles = [
  { pub: 'Fortune', title: 'How Retail Giants Are Using AI to Reinvent the Supply Chain', url: 'https://fortune.com/2025/07/23/walmart-amazon-ai-supply-chain-retail/' },
  { pub: 'VentureBeat', title: 'Scaling Smarter: Right-Sizing Compute for AI', url: 'https://venturebeat.com/ai/scaling-smarter-how-enterprise-it-teams-can-right-size-their-compute-for-ai' },
  { pub: 'CIO', title: '7 Things You Need to Know About AI and the Data Center', url: 'https://www.cio.com/article/222623/7-things-to-know-about-ai-in-the-data-center.html' },
  { pub: 'CIO', title: '5 Tactics to Reduce IT Costs Without Hurting Innovation', url: 'https://www.cio.com/article/4027937/5-tactics-to-reduce-it-costs-without-hurting-innovation.html' },
  { pub: 'CIO', title: '7 Enterprise Cloud Strategy Trends Shaking Up IT Today', url: 'https://www.cio.com/article/4026759/7-enterprise-cloud-strategy-trends-shaking-up-it-today.html' },
  { pub: 'PYMNTS', title: 'What Is Multimodal AI and Why Retailers Should Care', url: 'https://www.pymnts.com/artificial-intelligence-2/2025/beyond-data-points-ai-that-understands-images-voice-and-your-customers-journey/' },
  { pub: 'LeadDev', title: 'The Unions Are (Finally) Coming for Big Tech', url: 'https://leaddev.com/leadership/unions-finally-coming-big-tech' },
  { pub: 'DevOps.com', title: 'Tackling the AI-Fueled API Explosion With Visibility', url: 'https://devops.com/tackling-the-ai-fueled-api-explosion-with-visibility/' },
  { pub: 'Okoone', title: 'The Cloud Trends Every Enterprise Leader Should Know', url: 'https://www.okoone.com/spark/strategy-transformation/the-cloud-trends-every-enterprise-leader-should-know/' },
  { pub: 'Origen', title: 'Inside the Cloud Shift: Strategies Top Enterprises Are Betting On', url: 'https://www.origen.co/insights/inside-the-cloud-shift-strategies-top-enterprises-are-betting-on-765' }
];

const Media = () => (
  <section id="media" className="mb-12 scroll-mt-12">
    <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Media Appearances</h2>
    <p className="text-[var(--color-text-secondary)] mb-10">Quoted and featured in leading technology publications.</p>

    <div className="border border-[var(--color-border-subtle)] rounded-[6px] overflow-hidden divide-y divide-[var(--color-border-subtle)]">
      {articles.map((item) => (
        <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row md:items-center gap-1.5 md:gap-6 p-4 md:p-5 hover:bg-[var(--color-bg-surface)] transition-colors">
          <div className="flex items-center justify-between md:contents">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-green)] md:w-32 flex-shrink-0">{item.pub}</span>
            <ArrowUpRight size={15} className="md:hidden text-[var(--color-text-secondary)] flex-shrink-0" />
          </div>
          <span className="text-sm md:text-[15px] text-white/80 md:text-white group-hover:text-[var(--color-brand-green)] transition-colors flex-1 min-w-0">{item.title}</span>
          <ArrowUpRight size={15} className="hidden md:block text-[var(--color-text-secondary)] group-hover:text-[var(--color-brand-green)] transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
        </a>
      ))}
    </div>
  </section>
);

export default Media;
