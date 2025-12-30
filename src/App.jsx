import React from 'react';
import { MapPin, Mail, Github, Linkedin, ExternalLink, Code2, Server, Database, Globe } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-deep)] text-[var(--color-text-primary)] font-sans selection:bg-white selection:text-black">
      {/* Maximum width container with padding */}
      <div className="max-w-4xl mx-auto px-6 py-20 sm:py-32">

        {/* Hero Section */}
        <header className="mb-24 fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
            Jane Doe
          </h1>
          <h2 className="text-xl text-[var(--color-text-secondary)] font-medium mb-6">
            Software Engineer at Google
          </h2>
          <div className="flex items-center gap-2 text-[var(--color-text-secondary)] text-sm">
            <MapPin size={16} />
            <span>San Francisco, CA</span>
          </div>
        </header>

        {/* Experience / Trusted By */}
        <section className="mb-24">
          <p className="text-xs font-semibold tracking-wider text-[var(--color-text-secondary)] uppercase mb-6">
            Work History
          </p>
          <div className="flex flex-wrap gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Google Logo Placeholder */}
            <div className="text-xl font-bold tracking-tighter flex items-center gap-2 text-white">
              <span className="text-2xl">G</span> Google
            </div>
            {/* Placeholder Company 1 */}
            <div className="text-xl font-semibold tracking-tight text-[var(--color-text-secondary)] hover:text-white transition-colors">
              STRIPE
            </div>
            {/* Placeholder Company 2 */}
            <div className="text-xl font-bold italic text-[var(--color-text-secondary)] hover:text-white transition-colors">
              Uber
            </div>
            {/* Placeholder Company 3 */}
            <div className="text-xl font-bold tracking-wider text-[var(--color-text-secondary)] hover:text-white transition-colors">
              AIRBNB
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-24">
          <h3 className="text-lg font-semibold mb-8 border-b border-[var(--color-border-subtle)] pb-2 inline-block text-white">
            Selected Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="group border border-[var(--color-border-subtle)] p-6 hover:border-zinc-500 transition-colors duration-300 bg-[var(--color-bg-surface)]">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-base font-medium text-white group-hover:underline decoration-1 underline-offset-4">
                  Distributed Consensus Core
                </h4>
                <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                A high-performance Paxos implementation handling 10k+ requests per second with sub-millisecond latency.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs border border-[var(--color-border-subtle)] px-2 py-1 text-[var(--color-text-secondary)] bg-zinc-950">
                  Rust
                </span>
                <span className="text-xs border border-[var(--color-border-subtle)] px-2 py-1 text-[var(--color-text-secondary)] bg-zinc-950">
                  gRPC
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group border border-[var(--color-border-subtle)] p-6 hover:border-zinc-500 transition-colors duration-300 bg-[var(--color-bg-surface)]">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-base font-medium text-white group-hover:underline decoration-1 underline-offset-4">
                  Neural Search Engine
                </h4>
                <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Vector similarity search engine optimizing HNSW indexing for billion-scale datasets.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs border border-[var(--color-border-subtle)] px-2 py-1 text-[var(--color-text-secondary)] bg-zinc-950">
                  Python
                </span>
                <span className="text-xs border border-[var(--color-border-subtle)] px-2 py-1 text-[var(--color-text-secondary)] bg-zinc-950">
                  PyTorch
                </span>
                <span className="text-xs border border-[var(--color-border-subtle)] px-2 py-1 text-[var(--color-text-secondary)] bg-zinc-950">
                  C++
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group border border-[var(--color-border-subtle)] p-6 hover:border-zinc-500 transition-colors duration-300 bg-[var(--color-bg-surface)]">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-base font-medium text-white group-hover:underline decoration-1 underline-offset-4">
                  Real-time Data Streamer
                </h4>
                <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Low-latency event streaming service processing TBs of data daily with exactly-once delivery guarantees.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs border border-[var(--color-border-subtle)] px-2 py-1 text-[var(--color-text-secondary)] bg-zinc-950">
                  Go
                </span>
                <span className="text-xs border border-[var(--color-border-subtle)] px-2 py-1 text-[var(--color-text-secondary)] bg-zinc-950">
                  Kafka
                </span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group border border-[var(--color-border-subtle)] p-6 hover:border-zinc-500 transition-colors duration-300 bg-[var(--color-bg-surface)]">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-base font-medium text-white group-hover:underline decoration-1 underline-offset-4">
                  Infrastructure as Code UI
                </h4>
                <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Visual editor for Terraform configurations with real-time state synchronization and dependency graphing.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs border border-[var(--color-border-subtle)] px-2 py-1 text-[var(--color-text-secondary)] bg-zinc-950">
                  React
                </span>
                <span className="text-xs border border-[var(--color-border-subtle)] px-2 py-1 text-[var(--color-text-secondary)] bg-zinc-950">
                  TypeScript
                </span>
                <span className="text-xs border border-[var(--color-border-subtle)] px-2 py-1 text-[var(--color-text-secondary)] bg-zinc-950">
                  WASM
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-24">
          <h3 className="text-lg font-semibold mb-8 border-b border-[var(--color-border-subtle)] pb-2 inline-block text-white">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border border-[var(--color-border-subtle)] p-6 bg-[var(--color-bg-surface)]">
              <div className="flex items-center gap-3 mb-4 text-white">
                <Code2 size={20} />
                <span className="text-sm font-medium">Languages</span>
              </div>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li>TypeScript / JavaScript</li>
                <li>Go (Golang)</li>
                <li>Python</li>
                <li>Rust</li>
              </ul>
            </div>
            <div className="border border-[var(--color-border-subtle)] p-6 bg-[var(--color-bg-surface)]">
              <div className="flex items-center gap-3 mb-4 text-white">
                <Server size={20} />
                <span className="text-sm font-medium">Backend & Infra</span>
              </div>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li>Node.js & Express</li>
                <li>Docker & Kubernetes</li>
                <li>GCP / AWS</li>
                <li>PostgreSQL & Redis</li>
              </ul>
            </div>
            <div className="border border-[var(--color-border-subtle)] p-6 bg-[var(--color-bg-surface)]">
              <div className="flex items-center gap-3 mb-4 text-white">
                <Globe size={20} />
                <span className="text-sm font-medium">Frontend</span>
              </div>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li>React & Next.js</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Web Performance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <footer className="border-t border-[var(--color-border-subtle)] pt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="text-sm text-[var(--color-text-secondary)]">
            © {new Date().getFullYear()} Jane Doe. Built with React & Tailwind.
          </div>
          <div className="flex gap-4">
            <a href="#" className="p-3 border border-[var(--color-border-subtle)] hover:bg-[var(--color-border-subtle)] transition-colors text-[var(--color-text-secondary)] hover:text-white rounded-sm">
              <Github size={18} />
            </a>
            <a href="#" className="p-3 border border-[var(--color-border-subtle)] hover:bg-[var(--color-border-subtle)] transition-colors text-[var(--color-text-secondary)] hover:text-white rounded-sm">
              <Linkedin size={18} />
            </a>
            <a href="mailto:hello@example.com" className="p-3 border border-[var(--color-border-subtle)] hover:bg-[var(--color-border-subtle)] transition-colors text-[var(--color-text-secondary)] hover:text-white rounded-sm">
              <Mail size={18} />
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Portfolio;
