import React, { useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code2, Server, Globe, ChevronRight, Star, ChevronDown, Terminal, Cpu, Box, Layout } from 'lucide-react';

const App = () => {

  return (
    <div className="min-h-screen text-[var(--color-text-primary)] font-sans selection:bg-[var(--color-brand-green)] selection:text-black">

      {/* Navbar: 65px height, exact Supabase blur and border */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-deep)]/80 backdrop-blur-md border-b border-[var(--color-border-subtle)] h-[65px] transition-all duration-200">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Left: Logo & Nav Links */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-6 h-6 bg-[var(--color-brand-green)] rounded-md flex items-center justify-center shadow-[0_0_10px_rgba(62,207,142,0.2)]">
                <span className="font-bold text-black text-xs">⚡</span>
              </div>
              <span className="font-semibold tracking-tight text-white text-lg">Supabase</span>
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
              <a href="#" className="flex items-center justify-center text-[13px] font-medium text-[#ededed] px-3 py-1.5 rounded-[6px] bg-[#242424] border border-[#363636] hover:bg-[#2e2e2e] hover:border-[#3e3e3e] transition-all">
                Sign in
              </a>
              <a href="#" className="flex items-center justify-center text-[13px] font-bold text-black px-3 py-1.5 rounded-[6px] bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-hover)] transition-all shadow-[0_0_10px_rgba(62,207,142,0.15)] hover:shadow-[0_0_15px_rgba(62,207,142,0.3)]">
                Start your project
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-24">

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-24 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] text-xs font-medium text-[var(--color-text-secondary)] mb-8 hover:border-[var(--color-text-secondary)] transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-green)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-green)]"></span>
            </span>
            Building cool stuff in San Francisco
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-6 text-white">
            Software Engineer <br />
            <span className="text-[var(--color-text-secondary)]">at Google</span>
          </h1>

          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mb-10 leading-relaxed">
            Specializing in distributed systems, high-performance computing, and delighting users with pixel-perfect interfaces.
          </p>

          <div className="flex flex-wrap gap-3 justify-start">
            {[
              { name: "Python", icon: Terminal },
              { name: "Data Structures", icon: Cpu },
              { name: "Object Oriented", icon: Box },
              { name: "Backend Design", icon: Server },
              { name: "Distributed Systems", icon: Globe }
            ].map((skill) => (
              <div key={skill.name} className="flex items-center gap-2 px-4 py-2 rounded-[6px] border border-[#2e2e2e] bg-[#1a1a1a] hover:bg-[#252525] hover:border-[#3e3e3e] transition-all cursor-default group">
                <skill.icon size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                <span className="text-sm font-medium text-[var(--color-text-secondary)] group-hover:text-white transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-[var(--color-border-subtle)] mb-24"></div>

        {/* Work History */}
        <section id="work" className="max-w-6xl mx-auto px-6 mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-12">Work Experience</h2>

          <div className="relative border-l border-[var(--color-border-subtle)] ml-3 md:ml-6 space-y-12">
            {/* Google */}
            <div className="relative pl-10 md:pl-14">
              <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10 shadow-lg group-hover:border-[var(--color-brand-green)] transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-xl font-semibold text-white">Senior Software Engineer</h3>
                <span className="text-sm font-mono text-[var(--color-text-secondary)]">2022 — Present</span>
              </div>
              <div className="text-lg text-[var(--color-brand-green)] mb-2">Google</div>
              <ul className="list-disc pl-5 space-y-1 text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                <li>Leading the Distributed Systems infrastructure team.</li>
                <li>Architected a global consensus protocol reducing cross-region latency by 40%.</li>
                <li>Mentoring 5 junior engineers and driving engineering excellence initiatives.</li>
              </ul>
            </div>

            {/* Stripe */}
            <div className="relative pl-10 md:pl-14">
              <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10">
                <svg className="w-8 h-8 text-white" viewBox="0 0 60 25" fill="currentColor"><path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.03c-1.08.54-2.72.85-4.47.85-4.54 0-6.8-2.63-6.8-6.18 0-3.32 2.22-6.24 6.27-6.24 3.93 0 5.82 2.76 5.82 5.9v1.07zm-7.9-1.93h4.63c-.15-1.57-1.12-2.31-2.43-2.31-1.55 0-2.3 1.09-2.2 2.31zM23.1 7.77h4.08V20H23.1V7.77zm0-5.8h4.08V5.6H23.1V1.97zM29.6 11.23h2v-3.4h3.6v3.4h2.26v2.96H35.2v3.85c0 1.13.59 1.5 1.7 1.5.6 0 1.06-.06 1.48-.18v3.08c-.76.32-1.74.45-2.75.45-2.88 0-4.04-1.58-4.04-3.9v-4.8H29.6v-2.96zM13.78 19.82c-3.14 0-5.18-1.74-5.18-4.32 0-2.58 2.05-4.33 5.39-4.33 1.25 0 2.5.2 3.16.48v2.85c-.8-.4-1.74-.6-2.58-.6-1.5 0-2.3.69-2.3 1.57 0 .9.8 1.59 2.1 1.59.85 0 1.8-.21 2.6-.63v2.88c-.68.32-1.9.5-3.2.5zm19.6-12.05h4.09v2.54c1.17-2.02 3.28-2.95 5.56-2.5v4h-.6c-3.32 0-5.06 1.76-5.06 5.2V20h-4v-12.2zM8.34 20l-1.9-5.75L4.53 20H.17l4.38-12.2h4.52l4.43 12.2h-5.16z"></path></svg>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-xl font-semibold text-white">Software Engineer</h3>
                <span className="text-sm font-mono text-[var(--color-text-secondary)]">2020 — 2022</span>
              </div>
              <div className="text-lg text-zinc-300 mb-2">Stripe</div>
              <ul className="list-disc pl-5 space-y-1 text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                <li>Core Payments Team. Designed and implemented the new geometric API for payment intents.</li>
                <li>Handled millions of daily transactions with 99.999% reliability.</li>
              </ul>
            </div>

            {/* Uber */}
            <div className="relative pl-10 md:pl-14">
              <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm7.05 17.65c-.32.07-.63.1-.94.1-1.77 0-3.34-.84-4.34-2.14-1.01 1.3-2.58 2.14-4.35 2.14-1.12 0-2.16-.34-3.04-.92-.89.58-1.93.92-3.04.92-1.77 0-3.34-.84-4.34-2.14-1 .31-2.07.49-3.18.49C4.1 16.1 2.39 12.28 2.39 12s1.71-4.1 3.42-4.1c1.11 0 2.18.18 3.18.49 1-1.3 2.57-2.14 4.34-2.14 1.11 0 2.15.34 3.04.92.89-.58 1.93-.92 3.04-.92 1.77 0 3.34.84 4.35 2.14 1-.31 2.07-.49 3.18-.49 1.71 0 3.42 1.83 3.42 2.1s-1.71 4.1-3.42 4.1c-1.11 0-2.18-.18-3.18-.49z" /></svg>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-xl font-semibold text-white">Backend Engineer</h3>
                <span className="text-sm font-mono text-[var(--color-text-secondary)]">2018 — 2020</span>
              </div>
              <div className="text-lg text-zinc-300 mb-2">Uber</div>
              <ul className="list-disc pl-5 space-y-1 text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                <li>Driver Platform. Optimized driver allocation algorithms using Go and Kafka.</li>
                <li>Reduced rider wait times by 15% in high-density markets.</li>
              </ul>
            </div>

            {/* Airbnb */}
            <div className="relative pl-10 md:pl-14">
              <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-[6px] border border-[var(--color-border-subtle)] bg-[#1a1a1a] flex items-center justify-center z-10">
                <svg className="w-6 h-6 text-[#FF5A5F]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.94c3.4 0 6.64 3.46 6.64 7.63 0 5.86-5.06 9.4-6.64 12.43-1.58-3.03-6.64-6.57-6.64-12.43C5.36 5.4 8.6 1.94 12 1.94zm0-1.94C7.02 0 3 4.36 3 9.57c0 7.39 9 14.43 9 14.43s9-7.04 9-14.43C21 4.36 16.98 0 12 0z" /><path d="M12 6.8c-1.59 0-2.58.98-2.58 2.22 0 1.25.99 2.22 2.58 2.22 1.59 0 2.58-.97 2.58-2.22 0-1.24-.99-2.22-2.58-2.22z" /></svg>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-xl font-semibold text-white">Software Engineer Intern</h3>
                <span className="text-sm font-mono text-[var(--color-text-secondary)]">2017</span>
              </div>
              <div className="text-lg text-zinc-300 mb-2">Airbnb</div>
              <ul className="list-disc pl-5 space-y-1 text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                <li>Search ranking team. Implemented a new ranking signal based on host responsiveness.</li>
                <li>Directly increased booking conversion rates by 2%.</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-[var(--color-border-subtle)] mb-24"></div>

        {/* Projects */}
        <section id="projects" className="max-w-6xl mx-auto px-6 mb-24">
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
        <section id="skills" className="max-w-6xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Languages */}
            <div className="p-6 border border-[var(--color-border-subtle)] rounded-[6px] bg-[var(--color-bg-surface)]/40 hover:bg-[var(--color-bg-surface)] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6 text-white">
                <div className="p-2 border border-[var(--color-border-subtle)] rounded-[6px] bg-[#1a1a1a]">
                  <Code2 size={16} />
                </div>
                <h3 className="font-semibold tracking-tight">Languages</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">TypeScript</span>
                  <span className="text-[var(--color-text-primary)]">Advanced</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">Golang</span>
                  <span className="text-[var(--color-text-primary)]">Proficient</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">Python</span>
                  <span className="text-[var(--color-text-primary)]">Intermediate</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">Rust</span>
                  <span className="text-[var(--color-text-primary)]">Basic</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="p-6 border border-[var(--color-border-subtle)] rounded-[6px] bg-[var(--color-bg-surface)]/40 hover:bg-[var(--color-bg-surface)] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6 text-white">
                <div className="p-2 border border-[var(--color-border-subtle)] rounded-[6px] bg-[#1a1a1a]">
                  <Server size={16} />
                </div>
                <h3 className="font-semibold tracking-tight">Backend</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">PostgreSQL</span>
                  <span className="text-[var(--color-text-primary)]">Expert</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">Docker/K8s</span>
                  <span className="text-[var(--color-text-primary)]">Proficient</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">GCP/AWS</span>
                  <span className="text-[var(--color-text-primary)]">Advanced</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">Redis</span>
                  <span className="text-[var(--color-text-primary)]">Proficient</span>
                </div>
              </div>
            </div>

            {/* Frontend */}
            <div className="p-6 border border-[var(--color-border-subtle)] rounded-[6px] bg-[var(--color-bg-surface)]/40 hover:bg-[var(--color-bg-surface)] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6 text-white">
                <div className="p-2 border border-[var(--color-border-subtle)] rounded-[6px] bg-[#1a1a1a]">
                  <Globe size={16} />
                </div>
                <h3 className="font-semibold tracking-tight">Frontend</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">React</span>
                  <span className="text-[var(--color-text-primary)]">Expert</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">Next.js</span>
                  <span className="text-[var(--color-text-primary)]">Proficient</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">Tailwind</span>
                  <span className="text-[var(--color-text-primary)]">Expert</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-[var(--color-border-subtle)] mb-12"></div>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[var(--color-text-secondary)] text-sm">
            © {new Date().getFullYear()} Jane Doe. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-[var(--color-text-secondary)] hover:text-white transition-colors duration-200">
              <Github size={20} />
            </a>
            <a href="#" className="text-[var(--color-text-secondary)] hover:text-white transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hello@example.com" className="text-[var(--color-text-secondary)] hover:text-white transition-colors duration-200">
              <Mail size={20} />
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;
