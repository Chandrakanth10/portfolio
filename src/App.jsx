import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code2, Globe, Terminal, GraduationCap, Database, Cloud, Command, Zap, ShoppingBag, BookOpen, FileText, PenTool, ArrowUpRight } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleScroll = () => {
      const scrollPosition = window.scrollY + (window.innerWidth < 768 ? 130 : 100); // Offset for header + mobile nav

      // Check if we're at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection(navLinks[navLinks.length - 1].id);
        return;
      }

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: 'hero', label: 'About' },
    { id: 'work', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'research', label: 'Research' },
    { id: 'reviews', label: 'Peer Reviews' },
    { id: 'media', label: 'Media' },
    { id: 'writing', label: 'Writing' },
    { id: 'skills', label: 'Skills' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth < 768 ? 110 : 80; // Account for fixed header + mobile nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen text-[var(--color-text-primary)] font-sans selection:bg-[var(--color-brand-green)] selection:text-black">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-deep)]/80 backdrop-blur-md border-b border-[var(--color-border-subtle)] h-[56px] md:h-[65px] transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">

          {/* Left: Name */}
          <div className="flex items-center gap-2 md:gap-3 cursor-pointer min-w-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="p-1.5 rounded-[4px] bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] flex-shrink-0">
              <Terminal size={16} className="text-[var(--color-brand-green)]" />
            </div>
            <span className="font-bold text-base md:text-lg tracking-tight truncate">Chandrakanth Puligundla</span>
          </div>

          {/* Right: Social Links & Contact */}
          <div className="flex items-center gap-1.5 md:gap-3 flex-shrink-0">
            <a href="https://github.com/chandrakanth10" target="_blank" rel="noopener noreferrer" className="p-2 rounded-[6px] text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-bg-surface)] transition-all">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/chandrakanth10" target="_blank" rel="noopener noreferrer" className="p-2 rounded-[6px] text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-bg-surface)] transition-all">
              <Linkedin size={18} />
            </a>
            <a href="mailto:cpuligun@asu.edu" className="hidden sm:flex items-center justify-center text-[13px] font-medium text-black px-4 py-1.5 rounded-[6px] bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-hover)] transition-all gap-1.5">
              <Mail size={14} />
              Get in Touch
            </a>
            <a href="mailto:cpuligun@asu.edu" className="sm:hidden p-2 rounded-[6px] text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-bg-surface)] transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Nav — horizontal scroll */}
      <div className="md:hidden fixed top-[56px] left-0 right-0 z-40 bg-[var(--color-bg-deep)]/90 backdrop-blur-md border-b border-[var(--color-border-subtle)]">
        <div className="flex overflow-x-auto no-scrollbar px-4 py-2 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`whitespace-nowrap px-3 py-1.5 text-xs font-medium rounded-full transition-all flex-shrink-0 ${activeSection === link.id
                ? 'text-[var(--color-brand-green)] bg-[var(--color-brand-green)]/10'
                : 'text-[var(--color-text-secondary)]'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-12 md:flex md:gap-12 relative">

        {/* Sticky Sidebar — desktop only */}
        <aside className="hidden md:block w-48 shrink-0 fixed top-32 h-[calc(100vh-8rem)]">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block px-4 py-2 text-sm transition-all duration-200 rounded-[4px] ${activeSection === link.id
                  ? 'text-[var(--color-brand-green)] bg-[var(--color-brand-green)]/10 font-medium translate-x-1'
                  : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-bg-surface)]'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:pl-64">
          {/* Hero Section */}
          <section id="hero" className="mb-12 pt-4">
            <div className="mb-12">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] text-xs font-medium text-[var(--color-text-secondary)] mb-8 hover:border-[var(--color-text-secondary)] transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-green)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-green)]"></span>
                </span>
                San Francisco Bay Area
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4 text-white">
                Chandrakanth Puligundla
              </h1>
              <p className="text-2xl sm:text-3xl text-[var(--color-text-secondary)] font-bold tracking-tight mb-8">
                Software Engineer at Albertsons
              </p>

              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mb-8 leading-relaxed">
                Software Engineer specializing in scalable APIs, distributed systems, and cloud infrastructure. Experienced in building high-availability services handling billions of requests.
              </p>

              <div className="flex flex-wrap gap-3 justify-start">
                {[
                  { name: "Python", icon: Terminal },
                  { name: "Java", icon: Code2 },
                  { name: "SQL", icon: Database },
                  { name: "BigQuery", icon: Database },
                  { name: "Snowflake", icon: Cloud }
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 px-4 py-2 rounded-[6px] border border-[#2e2e2e] bg-[#1a1a1a] hover:bg-[#252525] hover:border-[#3e3e3e] transition-all cursor-default group">
                    <skill.icon size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium text-[var(--color-text-secondary)] group-hover:text-white transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-[var(--color-border-subtle)] mb-12"></div>

          {/* Work History */}
          <section id="work" className="mb-12 scroll-mt-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-12">Work Experience</h2>

            <div className="relative border-l border-[var(--color-border-subtle)] ml-3 md:ml-6 space-y-12">
              {/* Albertaons */}
              <div className="relative pl-10 md:pl-14">
                <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10 shadow-lg group-hover:border-[var(--color-brand-green)] transition-colors">
                  <ShoppingBag className="w-6 h-6 text-[#00539F]" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-xl font-semibold text-white">Software Engineer</h3>
                  <span className="text-sm font-mono text-[var(--color-text-secondary)]">Jan 2024 — Present</span>
                </div>
                <div className="text-lg text-[var(--color-brand-green)] mb-2">Albertsons</div>
                <ul className="list-disc pl-5 space-y-1 text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                  <li>Developed & scaled customer data API, serving 2B monthly requests with high availability.</li>
                  <li>Built Python data quality tool; catches 86% of bugs before business teams, reducing escalations.</li>
                  <li>Launched critical internal migration monitoring tool in Python, supporting 100+ engineers during Snowflake to BigQuery transition.</li>
                </ul>
              </div>

              {/* Amazon */}
              <div className="relative pl-10 md:pl-14">
                <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10">
                  <Cloud className="w-6 h-6 text-[#FF9900]" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-xl font-semibold text-white">SDE Intern</h3>
                  <span className="text-sm font-mono text-[var(--color-text-secondary)]">May 2023 — Aug 2023</span>
                </div>
                <div className="text-lg text-zinc-300 mb-2">Amazon</div>
                <ul className="list-disc pl-5 space-y-1 text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                  <li>Designed and implemented scalable APIs using Java, Spring, and Google Guice for 4,000+ datasheets serving millions of requests.</li>
                  <li>Optimized API response times by 33% through strategic timeout optimization techniques.</li>
                  <li>Deployed robust timeout feature, reducing unexpected service interruptions by 67%.</li>
                  <li>Led legacy system migration, rerouting 8% of traffic seamlessly.</li>
                </ul>
              </div>

              {/* Vodafone */}
              <div className="relative pl-10 md:pl-14">
                <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10">
                  <Globe className="w-6 h-6 text-[#E60000]" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-xl font-semibold text-white">Software Development Engineer</h3>
                  <span className="text-sm font-mono text-[var(--color-text-secondary)]">Jul 2021 — Nov 2021</span>
                </div>
                <div className="text-lg text-zinc-300 mb-2">Vodafone</div>
                <ul className="list-disc pl-5 space-y-1 text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                  <li>Increased user activity by 28% through successful overhaul of key patient engagement mechanisms.</li>
                  <li>Engineered 11 RESTful APIs, improving UX and reducing redundant requests by 21%.</li>
                  <li>Facilitated CI/CD practices with Git/Agile, leading to 14% increase in code delivery speed.</li>
                </ul>
              </div>

              {/* LMKInfotech */}
              <div className="relative pl-10 md:pl-14">
                <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10">
                  <Code2 className="w-6 h-6 text-zinc-400" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-xl font-semibold text-white">SDE Intern</h3>
                  <span className="text-sm font-mono text-[var(--color-text-secondary)]">Apr 2020 — Aug 2020</span>
                </div>
                <div className="text-lg text-zinc-300 mb-2">LMKInfotech</div>
                <ul className="list-disc pl-5 space-y-1 text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                  <li>Crafted scalable RESTful web APIs in Java and Spring Boot for financial management tool.</li>
                  <li>Achieved 100% test and code coverage, validating 150+ CRUD operations.</li>
                  <li>Rectified 5 crucial bugs, guaranteeing a seamless release with 100% on-time record.</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-[var(--color-border-subtle)] mb-12"></div>

          {/* Education */}
          <section id="education" className="mb-12 scroll-mt-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-12">Education</h2>

            <div className="relative border-l border-[var(--color-border-subtle)] ml-3 md:ml-6 space-y-12">
              {/* ASU */}
              <div className="relative pl-10 md:pl-14">
                <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10 shadow-lg group-hover:border-[var(--color-brand-green)] transition-colors">
                  <GraduationCap className="w-6 h-6 text-[#8C1D40]" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-xl font-semibold text-white">Master of Science, Computer Science</h3>
                  <span className="text-sm font-mono text-[var(--color-text-secondary)]">Jan 22 — Dec 23</span>
                </div>
                <div className="text-lg text-zinc-300 mb-2">Arizona State University</div>
                <ul className="list-disc pl-5 space-y-1 text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                  <li>GPA: 4.0/4.0 (Distinction).</li>
                  <li>Focused on Distributed Systems and Software Engineering.</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-[var(--color-border-subtle)] mb-12"></div>

          {/* Research Paper Publications */}
          <section id="research" className="mb-12 scroll-mt-12">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-4">
              <h2 className="text-3xl font-bold tracking-tight text-white">Research Paper Publications</h2>
              <a href="https://ieeexplore.ieee.org/author/659163992295229" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-brand-green)] transition-colors inline-flex items-center gap-1.5 mt-2 sm:mt-0">
                IEEE Xplore Profile <ArrowUpRight size={14} />
              </a>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-10">3 peer-reviewed IEEE conference papers published in 2025.</p>

            <div className="space-y-4">
              {/* Paper 1 — Solo, featured */}
              <a href="https://ieeexplore.ieee.org/author/659163992295229" target="_blank" rel="noopener noreferrer" className="group block border border-[var(--color-border-subtle)] rounded-[6px] p-6 md:p-8 hover:border-[var(--color-brand-green)] transition-all duration-300 bg-gradient-to-r from-[var(--color-bg-surface)]/40 to-transparent">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-green)] bg-[var(--color-brand-green)]/10 px-2.5 py-1 rounded-[4px]">Sole Author</span>
                    <span className="text-[10px] uppercase font-medium tracking-wide text-[var(--color-text-secondary)]">IEEE ISTAS 2025</span>
                  </div>
                  <ArrowUpRight size={16} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-brand-green)] transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[var(--color-brand-green)] transition-colors mb-2">Bridging Quantum and Classical AI: Cloud-Based Quantum Computing for Machine Learning</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-3xl">
                  Explores the integration of quantum computing with classical AI through cloud-based architectures for machine learning applications.
                </p>
              </a>

              {/* Paper 2 */}
              <a href="https://ieeexplore.ieee.org/author/659163992295229" target="_blank" rel="noopener noreferrer" className="group block border border-[var(--color-border-subtle)] rounded-[6px] p-6 md:p-8 hover:border-[var(--color-brand-green)] transition-all duration-300">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="text-[10px] uppercase font-medium tracking-wide text-[var(--color-text-secondary)]">IEEE AIBThings 2025</span>
                  <ArrowUpRight size={16} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-brand-green)] transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[var(--color-brand-green)] transition-colors mb-2">SPX: A Novel LLM-Based Framework for Explaining and Estimating User Story Points</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-3xl mb-3">
                  Presents a novel LLM-based framework for automated story point estimation and explanation in agile development.
                </p>
                <p className="text-xs text-[var(--color-text-secondary)]/60">A. Jadhav, <span className="text-white/70">C. Puligundla</span>, S. R. Chigurupati, P. Jalan, S. Bhogavalli</p>
              </a>

              {/* Paper 3 */}
              <a href="https://ieeexplore.ieee.org/author/659163992295229" target="_blank" rel="noopener noreferrer" className="group block border border-[var(--color-border-subtle)] rounded-[6px] p-6 md:p-8 hover:border-[var(--color-brand-green)] transition-all duration-300">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="text-[10px] uppercase font-medium tracking-wide text-[var(--color-text-secondary)]">IEEE AIBThings 2025</span>
                  <ArrowUpRight size={16} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-brand-green)] transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[var(--color-brand-green)] transition-colors mb-2">Integrating LLMs for Automated Bug Triaging and Root Cause Localization in Software Systems</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-3xl mb-3">
                  Proposes an LLM-based approach for automated bug triaging and root cause localization in large-scale software systems.
                </p>
                <p className="text-xs text-[var(--color-text-secondary)]/60">P. Pisal, P. Jalan, S. R. Chigurupati, <span className="text-white/70">C. Puligundla</span>, S. Bhogavalli</p>
              </a>
            </div>
          </section>

          <div className="w-full h-px bg-[var(--color-border-subtle)] mb-12"></div>

          {/* Peer Reviews */}
          <section id="reviews" className="mb-12 scroll-mt-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-12">Peer Reviews</h2>
            <div className="relative border-l border-[var(--color-border-subtle)] ml-3 md:ml-6 space-y-12">
              <div className="relative pl-10 md:pl-14">
                <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10 shadow-lg group-hover:border-[var(--color-brand-green)] transition-colors">
                  <BookOpen className="w-6 h-6 text-zinc-400" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-xl font-semibold text-white">PLOS ONE</h3>
                  <span className="text-sm font-mono text-[var(--color-text-secondary)]">2025</span>
                </div>
                <div className="text-lg text-[var(--color-brand-green)] mb-2">Reviewer</div>
                <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                  Reviewed manuscript PONE-D-25-17433: "Syntactic denoising and multi-strategy auxiliary enhancement for Aspect-based Sentiment Analysis." Completed full review cycle including re-review of revised submission.
                </p>
              </div>

              <div className="relative pl-10 md:pl-14">
                <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10 shadow-lg group-hover:border-[var(--color-brand-green)] transition-colors">
                  <FileText className="w-6 h-6 text-zinc-400" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-xl font-semibold text-white">CVAMD 2025</h3>
                  <span className="text-sm font-mono text-[var(--color-text-secondary)]">2025</span>
                </div>
                <div className="text-lg text-[var(--color-brand-green)] mb-2">Reviewer</div>
                <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                  Reviewed 2 papers: "Dual-LVT: A Dual Attention Language-Vision Transformer for Tumor Segmentation" and "Hierarchical Classification for Improved Histopathology Image Analysis."
                </p>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-[var(--color-border-subtle)] mb-12"></div>

          {/* Media Appearances */}
          <section id="media" className="mb-12 scroll-mt-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Media Appearances</h2>
            <p className="text-[var(--color-text-secondary)] mb-10">Quoted and featured in leading technology publications.</p>

            {/* Articles List */}
            <div className="border border-[var(--color-border-subtle)] rounded-[6px] overflow-hidden divide-y divide-[var(--color-border-subtle)]">
              {[
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
              ].map((item) => (
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

          <div className="w-full h-px bg-[var(--color-border-subtle)] mb-12"></div>

          {/* Technical Writing */}
          <section id="writing" className="mb-12 scroll-mt-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-12">Technical Writing</h2>
            <div className="relative border-l border-[var(--color-border-subtle)] ml-3 md:ml-6 space-y-6 mb-10">

              {/* HackerNoon */}
              <div className="relative pl-10 md:pl-14">
                <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10 shadow-lg group-hover:border-[var(--color-brand-green)] transition-colors">
                  <PenTool className="w-6 h-6 text-[#00FF00]" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <a href="https://hackernoon.com/u/ckp" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-white hover:text-[var(--color-brand-green)] transition-colors inline-flex items-center gap-2">
                    HackerNoon <ExternalLink size={16} />
                  </a>
                </div>

                <div className="space-y-5">
                  <a href="https://hackernoon.com/metas-$10-billion-bet-building-an-undersea-cable-empire-to-power-its-ai-future" target="_blank" rel="noopener noreferrer" className="group block cursor-pointer">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-lg text-white font-medium group-hover:text-[var(--color-brand-green)] transition-colors">Meta's $10 Billion Bet: Building an Undersea Cable Empire to Power Its AI Future</h4>
                      <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-2">
                      Analyzing Meta's strategic investment in subsea infrastructure to support their growing AI computational demands.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">AI Strategy</span>
                      <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">Infrastructure</span>
                    </div>
                  </a>

                  <a href="https://hackernoon.com/ais-dirty-secret-the-energy-cost-of-training-the-next-gpt-5" target="_blank" rel="noopener noreferrer" className="group block cursor-pointer">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-lg text-white font-medium group-hover:text-[var(--color-brand-green)] transition-colors">AI's Dirty Secret: The Energy Cost of Training the Next GPT-5</h4>
                      <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-2">
                      Examining the environmental impact and energy consumption challenges associated with training large language models.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">Green AI</span>
                      <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">Sustainability</span>
                    </div>
                  </a>

                  <a href="https://hackernoon.com/forget-chatbots-meet-actionbots-why-amazons-nova-act-could-reshape-web-interaction" target="_blank" rel="noopener noreferrer" className="group block cursor-pointer">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-lg text-white font-medium group-hover:text-[var(--color-brand-green)] transition-colors">Forget Chatbots, Meet ActionBots: Why Amazon's Nova Act Could Reshape Web Interaction</h4>
                      <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-2">
                      Discussing the shift from conversational AI to agentic 'action-bots' capable of performing complex tasks.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">Agents</span>
                      <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">Future of Web</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-[var(--color-border-subtle)] mb-12"></div>

          {/* Skills */}
          <section id="skills" className="mb-12 scroll-mt-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-12">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              {/* Column 1: Languages */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-8">Languages</h3>
                <div className="space-y-4">
                  {[
                    { name: "Python", icon: Terminal },
                    { name: "Java", icon: Code2 },
                    { name: "SQL", icon: Database }
                  ].map(skill => (
                    <div key={skill.name} className="flex items-center gap-3 group cursor-default">
                      <div className="w-10 h-10 rounded-[6px] bg-[#1a1a1a] border border-[#2e2e2e] flex items-center justify-center group-hover:border-[var(--color-brand-green)] transition-colors duration-300">
                        <skill.icon size={18} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Data Platforms */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-8">Data Platforms</h3>
                <div className="space-y-4">
                  {[
                    { name: "Google BigQuery", icon: Database },
                    { name: "Snowflake", icon: Cloud }
                  ].map(skill => (
                    <div key={skill.name} className="flex items-center gap-3 group cursor-default">
                      <div className="w-10 h-10 rounded-[6px] bg-[#1a1a1a] border border-[#2e2e2e] flex items-center justify-center group-hover:border-[var(--color-brand-green)] transition-colors duration-300">
                        <skill.icon size={18} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Tools */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-8">Tools</h3>
                <div className="space-y-4">
                  {[
                    { name: "Git", icon: Command },
                    { name: "CI/CD", icon: Zap }
                  ].map(skill => (
                    <div key={skill.name} className="flex items-center gap-3 group cursor-default">
                      <div className="w-10 h-10 rounded-[6px] bg-[#1a1a1a] border border-[#2e2e2e] flex items-center justify-center group-hover:border-[var(--color-brand-green)] transition-colors duration-300">
                        <skill.icon size={18} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* Footer */}
          <footer className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] text-sm">
            <div className="text-[var(--color-text-secondary)] text-sm">
              © {new Date().getFullYear()} Chandrakanth Puligundla. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/chandrakanth10" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-white transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/chandrakanth10" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="mailto:cpuligun@asu.edu" className="text-[var(--color-text-secondary)] hover:text-white transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </footer>

        </main>
      </div>
    </div >
  );
};

export default App;
