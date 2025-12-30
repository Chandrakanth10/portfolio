import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code2, Server, Globe, ChevronRight, Star, ChevronDown, Terminal, Cpu, Box, Layout, GraduationCap, Database, Cloud, Layers, Command, FileJson, Zap, ShoppingBag } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -35% 0px' });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { id: 'hero', label: 'About' },
    { id: 'work', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
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
                onClick={() => handleNavClick(link.id)}
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
          <section id="hero" className="mb-24 pt-4">
            <div className="mb-12">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] text-xs font-medium text-[var(--color-text-secondary)] mb-8 hover:border-[var(--color-text-secondary)] transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-green)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-green)]"></span>
                </span>
                Based in USA
              </div>

              <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-6 text-white">
                Chandrakanth Puligundla <br />
                <span className="text-[var(--color-text-secondary)]">Software Engineer at Albertsons</span>
              </h1>

              <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mb-10 leading-relaxed">
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

          <div className="w-full h-px bg-[var(--color-border-subtle)] mb-24"></div>

          {/* Work History */}
          <section id="work" className="mb-24 scroll-mt-24">
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

          <div className="w-full h-px bg-[var(--color-border-subtle)] mb-24"></div>

          {/* Education */}
          <section id="education" className="mb-24 scroll-mt-24">
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

          <div className="w-full h-px bg-[var(--color-border-subtle)] mb-24"></div>

          {/* Projects */}
          <section id="projects" className="mb-24 scroll-mt-24">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-white">Selected Projects</h2>
              <a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-white flex items-center gap-1 transition-colors duration-200 group">
                View All <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <div className="group bg-[var(--color-bg-surface)]/30 border border-[var(--color-border-subtle)] rounded-[6px] p-6 hover:border-[var(--color-brand-green)] hover:bg-[var(--color-bg-surface)] transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg text-white group-hover:text-[var(--color-brand-green)] transition-colors">Consensus Core</h3>
                  <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm mb-6 leading-relaxed">
                  High-performance Paxos implementation handling 10k+ requests/sec. Designed for fault tolerance and sub-millisecond latency.
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">Rust</span>
                  <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">gRPC</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group bg-[var(--color-bg-surface)]/30 border border-[var(--color-border-subtle)] rounded-[6px] p-6 hover:border-[var(--color-brand-green)] hover:bg-[var(--color-bg-surface)] transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg text-white group-hover:text-[var(--color-brand-green)] transition-colors">Neural Search</h3>
                  <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm mb-6 leading-relaxed">
                  Vector similarity search engine optimizing HNSW indexing. Scales to billions of vectors with real-time updates.
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">Python</span>
                  <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">C++</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group bg-[var(--color-bg-surface)]/30 border border-[var(--color-border-subtle)] rounded-[6px] p-6 hover:border-[var(--color-brand-green)] hover:bg-[var(--color-bg-surface)] transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg text-white group-hover:text-[var(--color-brand-green)] transition-colors">StreamFlow</h3>
                  <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm mb-6 leading-relaxed">
                  Real-time event streaming service processing TBs of data. Guarantees exactly-once delivery and aggregation.
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">Go</span>
                  <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">Kafka</span>
                </div>
              </div>

              {/* Project 4 */}
              <div className="group bg-[var(--color-bg-surface)]/30 border border-[var(--color-border-subtle)] rounded-[6px] p-6 hover:border-[var(--color-brand-green)] hover:bg-[var(--color-bg-surface)] transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg text-white group-hover:text-[var(--color-brand-green)] transition-colors">Infra UI</h3>
                  <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm mb-6 leading-relaxed">
                  Visual editor for Terraform configurations. Features real-time state sync, dependency graphing, and drift detection.
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">React</span>
                  <span className="text-[10px] uppercase font-medium tracking-wide px-2 py-1 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-[4px] bg-[#1a1a1a]">TypeScript</span>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-[var(--color-border-subtle)] mb-24"></div>

          {/* Skills */}
          <section id="skills" className="mb-24 scroll-mt-24">
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
    </div>
  );
};

export default App;
