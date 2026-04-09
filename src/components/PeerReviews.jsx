const PeerReviews = () => (
  <section id="reviews" className="mb-12 scroll-mt-12">
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-4">
      <h2 className="text-3xl font-bold tracking-tight text-white">Peer Reviews</h2>
      <span className="text-sm text-[var(--color-brand-amber)] mt-2 sm:mt-0">14 papers across 5 venues</span>
    </div>
    <p className="text-[var(--color-text-secondary)] mb-10">Invited reviewer for international journals and conferences.</p>

    <div className="space-y-4">
      {/* ICLR 2026 — Merged (RSI + AIMS) */}
      <div className="group border border-[var(--color-border-subtle)] rounded-[6px] hover:border-[var(--color-brand-green)] transition-all duration-300 bg-gradient-to-r from-[var(--color-bg-surface)]/40 to-transparent">
        <div className="p-6 md:p-8 pb-0 md:pb-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-amber)] bg-[var(--color-brand-amber)]/10 px-2.5 py-1 rounded-[4px]">ICLR 2026</span>
              <span className="text-[10px] uppercase font-medium tracking-wide text-[var(--color-text-secondary)]">Top-Tier ML Conference</span>
            </div>
            <span className="text-xs font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-surface)] px-2.5 py-1 rounded-[4px] flex-shrink-0">4 Papers</span>
          </div>
        </div>

        <div className="px-6 md:px-8 pt-5">
          <p className="text-[10px] uppercase font-medium tracking-widest text-[var(--color-text-secondary)]/60 mb-3">Workshop RSI — Resilient & Safe Intelligence</p>
          <div className="border-l-2 border-[var(--color-brand-green)]/30 pl-5 mb-5">
            <h3 className="text-base font-semibold text-white mb-1">Vision-Guided Iterative Refinement for Frontend Code Generation</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Critic-in-the-loop framework leveraging VLMs for automated frontend code refinement.</p>
          </div>
        </div>

        <div className="px-6 md:px-8 pb-6 md:pb-8">
          <p className="text-[10px] uppercase font-medium tracking-widest text-[var(--color-text-secondary)]/60 mb-3">Workshop AIMS — AI for Medicine & Science</p>
          <div className="space-y-4">
            <div className="border-l-2 border-[var(--color-brand-green)]/30 pl-5">
              <h3 className="text-base font-semibold text-white mb-1">SOK: A Taxonomy of Attack Vectors and Defense Strategies for Agentic Supply Chain Runtime</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Runtime-focused taxonomy of data and tool supply chain threats for AI agents.</p>
            </div>
            <div className="border-l-2 border-[var(--color-brand-green)]/30 pl-5">
              <h3 className="text-base font-semibold text-white mb-1">Code Driven Game Theoretic Evolution of LLM Agents as Holistic Strategy Generators</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Evolutionary tournament framework for LLM agents as holistic policy generators.</p>
            </div>
            <div className="border-l-2 border-[var(--color-brand-green)]/30 pl-5">
              <h3 className="text-base font-semibold text-white mb-1">Optimal Aggregation Mechanisms for AI Benchmarking and Platinum Benchmarks</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Game-theoretic model of benchmark aggregation with optimal weighting rules.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PLOS ONE */}
      <div className="group border border-[var(--color-border-subtle)] rounded-[6px] p-6 md:p-8 hover:border-[var(--color-brand-green)] transition-all duration-300">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-amber)] bg-[var(--color-brand-amber)]/10 px-2.5 py-1 rounded-[4px]">PLOS ONE</span>
            <span className="text-[10px] uppercase font-medium tracking-wide text-[var(--color-text-secondary)]">Journal</span>
          </div>
          <span className="text-xs font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-surface)] px-2.5 py-1 rounded-[4px]">2 Papers</span>
        </div>
        <div className="space-y-4">
          <div className="border-l-2 border-[var(--color-brand-green)]/30 pl-5">
            <h3 className="text-base font-semibold text-white mb-1">Syntactic Denoising and Multi-Strategy Auxiliary Enhancement for Aspect-based Sentiment Analysis</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Full review cycle including re-review of revised submission.</p>
            <p className="text-xs text-[var(--color-text-secondary)]/50 mt-2 font-mono">PONE-D-25-17433</p>
          </div>
          <div className="border-l-2 border-[var(--color-brand-green)]/30 pl-5">
            <h3 className="text-base font-semibold text-white mb-1">Research of Text Paraphrase Generation Based on Self-Contrastive Learning</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Reviewed revised manuscript on paraphrase generation using self-contrastive learning techniques.</p>
            <p className="text-xs text-[var(--color-text-secondary)]/50 mt-2 font-mono">PONE-D-25-16567R1</p>
          </div>
        </div>
      </div>

      {/* CVAMD 2025 */}
      <div className="group border border-[var(--color-border-subtle)] rounded-[6px] p-6 md:p-8 hover:border-[var(--color-brand-green)] transition-all duration-300">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-amber)] bg-[var(--color-brand-amber)]/10 px-2.5 py-1 rounded-[4px]">CVAMD 2025</span>
            <span className="text-[10px] uppercase font-medium tracking-wide text-[var(--color-text-secondary)]">MICCAI Workshop</span>
          </div>
          <span className="text-xs font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-surface)] px-2.5 py-1 rounded-[4px]">2 Papers</span>
        </div>
        <div className="space-y-4">
          <div className="border-l-2 border-[var(--color-brand-green)]/30 pl-5">
            <h3 className="text-base font-semibold text-white mb-1">Dual-LVT: A Dual Attention Language-Vision Transformer for Tumor Segmentation</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Vision-language transformer approach for automated tumor segmentation.</p>
          </div>
          <div className="border-l-2 border-[var(--color-brand-green)]/30 pl-5">
            <h3 className="text-base font-semibold text-white mb-1">Hierarchical Classification for Improved Histopathology Image Analysis</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Hierarchical classification methods for histopathology image analysis.</p>
          </div>
        </div>
      </div>

      {/* DravidianLangTech 2026 */}
      <div className="group border border-[var(--color-border-subtle)] rounded-[6px] p-6 md:p-8 hover:border-[var(--color-brand-green)] transition-all duration-300">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-amber)] bg-[var(--color-brand-amber)]/10 px-2.5 py-1 rounded-[4px]">DravidianLangTech 2026</span>
            <span className="text-[10px] uppercase font-medium tracking-wide text-[var(--color-text-secondary)]">ACL Workshop</span>
          </div>
          <span className="text-xs font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-surface)] px-2.5 py-1 rounded-[4px]">5 Papers</span>
        </div>
        <div className="space-y-4">
          <div className="border-l-2 border-[var(--color-brand-green)]/30 pl-5">
            <h3 className="text-base font-semibold text-white mb-1">Multi Architecture Transformer Ensemble for Detecting Abusive Tamil Text Targeting Women</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Transformer ensemble approach for abusive language detection in Tamil.</p>
          </div>
          <div className="border-l-2 border-[var(--color-brand-green)]/30 pl-5">
            <h3 className="text-base font-semibold text-white mb-1">Unsupervised Cross-Lingual Machine Translation for Low-Resource Indian Languages</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Cross-lingual translation methods for low-resource Dravidian languages.</p>
          </div>
          <div className="border-l-2 border-[var(--color-brand-green)]/30 pl-5">
            <h3 className="text-base font-semibold text-white mb-1">Shared Task on Prompt Style Recovery for Large Language Models in Telugu</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Prompt style recovery shared task targeting LLM outputs in Telugu.</p>
          </div>
          <div className="border-l-2 border-[var(--color-brand-green)]/30 pl-5">
            <h3 className="text-base font-semibold text-white mb-1">Hope Speech Detection in Code-Mixed Tulu Language Using Multiple Features</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Multi-feature approach for hope speech detection in code-mixed Tulu.</p>
          </div>
          <div className="border-l-2 border-[var(--color-brand-green)]/30 pl-5">
            <h3 className="text-base font-semibold text-white mb-1">Prompting and LoRA Adaptation for Tamil Abusive Language Detection</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Comparative study of open LLMs with prompting and LoRA for abusive language detection.</p>
          </div>
        </div>
      </div>

      {/* LT-EDI 2026 */}
      <div className="group border border-[var(--color-border-subtle)] rounded-[6px] p-6 md:p-8 hover:border-[var(--color-brand-green)] transition-all duration-300">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-amber)] bg-[var(--color-brand-amber)]/10 px-2.5 py-1 rounded-[4px]">LT-EDI 2026</span>
            <span className="text-[10px] uppercase font-medium tracking-wide text-[var(--color-text-secondary)]">Workshop</span>
          </div>
          <span className="text-xs font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-surface)] px-2.5 py-1 rounded-[4px]">1 Paper</span>
        </div>
        <div className="border-l-2 border-[var(--color-brand-green)]/30 pl-5">
          <h3 className="text-base font-semibold text-white mb-1">Overview of the Multimodal Homophobia and Transphobia Meme Classification Shared Task</h3>
          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Shared task overview on multimodal classification of homophobic and transphobic memes.</p>
        </div>
      </div>
    </div>
  </section>
);

export default PeerReviews;
