import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code2, Server, Globe, ChevronRight, Star, ChevronDown, Terminal, Cpu, Box, Layout, GraduationCap, Database, Cloud, Layers, Command, FileJson, Zap, ShoppingBag, BookOpen, FileText, Mic, Video, Users, PenTool } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header

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
      const offset = 80; // Account for fixed header
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

      {/* Navbar: 65px height, exact Supabase blur and border */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-deep)]/80 backdrop-blur-md border-b border-[var(--color-border-subtle)] h-[65px] transition-all duration-200">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Left: Logo & Nav Links */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="p-1.5 rounded-[4px] bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)]">
                <Terminal size={16} className="text-[var(--color-brand-green)]" />
              </div>
              <span className="font-bold text-lg tracking-tight">Portfolio</span>
            </div>

            {/* Links - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer group">
                Product <ChevronDown size={12} className="text-[#666] group-hover:text-white transition-colors" />
              </div>
              <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer group">
                Developers <ChevronDown size={12} className="text-[#666] group-hover:text-white transition-colors" />
              </div>
              <a href="#" className="hover:text-white transition-colors">Pricing</a>
              <a href="#" className="hover:text-white transition-colors">Docs</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {/* GitHub Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] hover:bg-[#252525] transition-colors cursor-pointer group">
              <Github size={14} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
              <span className="text-xs font-medium text-[var(--color-text-primary)]">Star us on GitHub</span>
              <div className="w-[1px] h-3 bg-[var(--color-border-subtle)] mx-1"></div>
              <span className="text-xs text-[var(--color-text-secondary)]">94.2k</span>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <a href="#" className="hidden sm:flex items-center justify-center text-[13px] font-medium text-[#ededed] px-3 py-1.5 rounded-[6px] bg-[#242424] border border-[#363636] hover:bg-[#2e2e2e] hover:border-[#3e3e3e] transition-all">
                Sign in
              </a>
              <a href="#" className="flex items-center justify-center text-[13px] font-bold text-black px-3 py-1.5 rounded-[6px] bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-hover)] transition-all shadow-[0_0_10px_rgba(62,207,142,0.15)] hover:shadow-[0_0_15px_rgba(62,207,142,0.3)]">
                Start your project
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-12 md:flex md:gap-12 relative">

        {/* Sticky Sidebar */}
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
                Based in USA
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
                  { name: "Spring Boot", icon: Server },
                  { name: "React", icon: Globe },
                  { name: "AWS", icon: Cloud }
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
            <h2 className="text-3xl font-bold tracking-tight text-white mb-12">Research Paper Publications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Research Paper 1 */}
              <div className="group bg-[var(--color-bg-surface)]/30 border border-[var(--color-border-subtle)] rounded-[6px] p-6 hover:border-[var(--color-brand-green)] hover:bg-[var(--color-bg-surface)] transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg text-white group-hover:text-[var(--color-brand-green)] transition-colors">Distributed Consensus in Edge Networks</h3>
                  <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm mb-6 leading-relaxed">
                  Published in IEEE International Conference on Cloud Computing (CLOUD). Proposes a lightweight consensus mechanism optimized for edge computing environments with intermittent connectivity.
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">IEEE CLOUD 2024</span>
                  <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">Paper</span>
                </div>
              </div>

              {/* Research Paper 2 */}
              <div className="group bg-[var(--color-bg-surface)]/30 border border-[var(--color-border-subtle)] rounded-[6px] p-6 hover:border-[var(--color-brand-green)] hover:bg-[var(--color-bg-surface)] transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg text-white group-hover:text-[var(--color-brand-green)] transition-colors">Optimizing Vector Search at Scale</h3>
                  <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm mb-6 leading-relaxed">
                  Published in ACM SIGMOD. Presents a novel indexing strategy for high-dimensional vector data, reducing query latency by 40% in billion-scale datasets.
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">SIGMOD 2023</span>
                  <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">Paper</span>
                </div>
              </div>
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
                  <h3 className="text-xl font-semibold text-white">Journal of Parallel and Distributed Computing</h3>
                  <span className="text-sm font-mono text-[var(--color-text-secondary)]">2024</span>
                </div>
                <div className="text-lg text-[var(--color-brand-green)] mb-2">Reviewer</div>
                <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                  Reviewed 3 manuscripts focusing on distributed consensus algorithms and fault tolerance in large-scale systems.
                </p>
              </div>

              <div className="relative pl-10 md:pl-14">
                <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10 shadow-lg group-hover:border-[var(--color-brand-green)] transition-colors">
                  <FileText className="w-6 h-6 text-zinc-400" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-xl font-semibold text-white">IEEE Transactions on Cloud Computing</h3>
                  <span className="text-sm font-mono text-[var(--color-text-secondary)]">2023</span>
                </div>
                <div className="text-lg text-[var(--color-brand-green)] mb-2">Reviewer</div>
                <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                  Provided critical feedback on 5 papers related to serverless computing architectures and performance optimization.
                </p>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-[var(--color-border-subtle)] mb-12"></div>

          {/* Media Appearances */}
          <section id="media" className="mb-12 scroll-mt-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-12">Media Appearances</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group bg-[var(--color-bg-surface)]/30 border border-[var(--color-border-subtle)] rounded-[6px] p-6 hover:border-[var(--color-brand-green)] hover:bg-[var(--color-bg-surface)] transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg text-white group-hover:text-[var(--color-brand-green)] transition-colors">The Future of Distributed Systems</h3>
                  <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm mb-6 leading-relaxed">
                  Featured guest on the "Tech Frontiers" podcast, discussing the evolution of consensus protocols and their application in modern cloud infrastructure.
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">Podcast</span>
                  <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">Tech Frontiers</span>
                </div>
              </div>

              <div className="group bg-[var(--color-bg-surface)]/30 border border-[var(--color-border-subtle)] rounded-[6px] p-6 hover:border-[var(--color-brand-green)] hover:bg-[var(--color-bg-surface)] transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg text-white group-hover:text-[var(--color-brand-green)] transition-colors">Scaling Al Infrastructure</h3>
                  <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm mb-6 leading-relaxed">
                  Interviewed by "TechDaily" on the challenges of scaling infrastructure for large language models and vector databases.
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">Article</span>
                  <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">TechDaily</span>
                </div>
              </div>
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

            {/* Towards Data Science */}
            <div className="relative border-l border-[var(--color-border-subtle)] ml-3 md:ml-6 space-y-6">
              <div className="relative pl-10 md:pl-14">
                <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10 shadow-lg group-hover:border-[var(--color-brand-green)] transition-colors">
                  <PenTool className="w-6 h-6 text-[#FF6347]" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">Towards Data Science</h3>
                </div>

                <div className="space-y-5">
                  <div className="group cursor-pointer">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-lg text-white font-medium group-hover:text-[var(--color-brand-green)] transition-colors">Efficient Vector Search in Production</h4>
                      <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-2">
                      Exploring practical strategies for scaling vector search using HNSW indexes and quantization techniques for real-time AI applications.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">AI/ML</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <div className="w-full h-px bg-[var(--color-border-subtle)] mb-12"></div>

          {/* Skills */}
          <section id="skills" className="mb-12 scroll-mt-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-12">Skills</h2>
            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              {/* Column 1: Languages */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-8">Languages</h3>
                <div className="space-y-4">
                  {[
                    { name: "Python", icon: Terminal },
                    { name: "Java", icon: Code2 },
                    { name: "JavaScript", icon: FileJson },
                    { name: "SQL", icon: Database },
                    { name: "C++", icon: Cpu }
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

              {/* Column 2: Frameworks */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-8">Frameworks</h3>
                <div className="space-y-4">
                  {[
                    { name: "Spring Boot", icon: Server },
                    { name: "React.js", icon: Globe },
                    { name: "Node.js", icon: Layout },
                    { name: "Django", icon: Layers },
                    { name: "JUnit / TestNG", icon: Zap }
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

              {/* Column 3: Infrastructure */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-8">Infrastructure</h3>
                <div className="space-y-4">
                  {[
                    { name: "AWS", icon: Cloud },
                    { name: "Docker", icon: Box },
                    { name: "Kubernetes", icon: Layers },
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

          <div className="w-full h-px bg-[var(--color-border-subtle)] mb-12"></div>

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
