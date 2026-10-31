'use client';

import React, { useState } from 'react';
import { UserCheck, ShieldCheck, Copy, Check, ExternalLink, Code2, Heart, Share2, Quote } from 'lucide-react';

const BIBTEX_CITATION = `@software{keshwani2026skillmd,
  author = {Keshwani, Sparsh},
  title = {Skill.md: Anti-Repetition and Zero-Tolerance Conciseness Protocol v3},
  year = {2026},
  publisher = {GitHub},
  journal = {GitHub Repository},
  url = {https://github.com/sparshkeshwani/skill.md},
  version = {3.0.0}
}`;

export default function AuthorShowcase() {
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [copiedTopics, setCopiedTopics] = useState(false);

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(BIBTEX_CITATION);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2000);
  };

  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(`Skill.md by Sparsh Keshwani - The Zero-Tolerance Anti-Repetition AI Protocol: ${shareUrl}`);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <section id="author" className="py-16 lg:py-24 border-b border-slate-900 bg-slate-900/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle gradient orb */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-500 text-white font-black text-2xl shadow-lg shadow-cyan-500/20">
                  SK
                </div>
                <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border-2 border-slate-900">
                  <ShieldCheck className="h-4 w-4 text-cyan-400" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white">Sparsh Keshwani</h3>
                  <span className="rounded bg-cyan-950 border border-cyan-800 px-2 py-0.5 font-mono text-[10px] font-bold text-cyan-300">
                    Creator & Maintainer
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Systems Architect & Prompt Engineering Researcher • Author of <span className="text-cyan-400 font-semibold">Skill.md</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition-colors"
              >
                {copiedShare ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Share2 className="h-3.5 w-3.5" />}
                <span>{copiedShare ? 'Copied Link!' : 'Share Protocol'}</span>
              </button>

              <a
                href="https://github.com/sparshkeshwani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-cyan-500/40 bg-cyan-950/40 px-3.5 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-900/60 transition-colors"
              >
                <Code2 className="h-3.5 w-3.5" />
                <span>GitHub Profile</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Author Statement / Manifesto */}
          <div className="mt-8 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="flex gap-3">
              <Quote className="h-6 w-6 text-cyan-500 shrink-0 mt-1" />
              <p className="italic text-slate-300">
                &ldquo;Modern AI interfaces fail not because the underlying frontier models lack intelligence, but because RLHF alignment has optimized them for polite conversational fluff and corporate padding. In high-velocity engineering, every preamble sentence is an interruption; every repeated buzzword is cognitive noise. <strong className="text-white not-italic font-semibold">Skill.md</strong> was engineered to establish an absolute, non-negotiable protocol standard: deliver technical value on token zero, speak in clinical active voice, and ban conversational waste permanently.&rdquo;
              </p>
            </div>
            <div className="text-right text-xs font-semibold text-cyan-400">
              — Sparsh Keshwani, Creator of Skill.md
            </div>
          </div>

          {/* GitHub Repository Topics (SEO) */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="text-cyan-400">#</span> Official GitHub Repository Topics (SEO)
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Add these 20 topics to your GitHub repo settings to maximize discovery in GitHub Explore and search engines.
                </div>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('prompt-engineering, ai-agents, llm, system-prompt, cursor-rules, token-optimization, claude, chatgpt, gemini, grok, windsurf-rules, anti-repetition, conciseness-protocol, developer-tools, anti-hallucination, ai-safety, system-override, skill-md, sparsh-keshwani, zero-fluff');
                  setCopiedTopics(true);
                  setTimeout(() => setCopiedTopics(false), 2000);
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/40 px-3 py-1.5 text-xs font-semibold text-cyan-300 hover:bg-cyan-900/60 transition-colors shrink-0"
              >
                {copiedTopics ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedTopics ? 'All 20 Topics Copied!' : 'Copy 20 Topics'}</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[
                'prompt-engineering', 'ai-agents', 'llm', 'system-prompt',
                'cursor-rules', 'token-optimization', 'claude', 'chatgpt',
                'gemini', 'grok', 'windsurf-rules', 'anti-repetition',
                'conciseness-protocol', 'developer-tools', 'anti-hallucination',
                'ai-safety', 'system-override', 'skill-md', 'sparsh-keshwani', 'zero-fluff'
              ].map((topic) => (
                <span
                  key={topic}
                  className="rounded-md bg-slate-950 border border-slate-800 px-2 py-0.5 font-mono text-[11px] text-cyan-400 hover:border-cyan-500/60 transition-colors"
                >
                  #{topic}
                </span>
              ))}
            </div>
          </div>

          {/* Academic & Developer Citation Box */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Cite this Project / BibTeX Reference
              </div>
              <button
                onClick={handleCopyBibtex}
                className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                {copiedBibtex ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedBibtex ? 'BibTeX Copied!' : 'Copy BibTeX'}</span>
              </button>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-[11px] text-slate-400 overflow-x-auto whitespace-pre selection:bg-cyan-500 selection:text-black">
              {BIBTEX_CITATION}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
