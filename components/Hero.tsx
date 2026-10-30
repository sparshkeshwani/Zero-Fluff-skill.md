'use client';

import React, { useState } from 'react';
import { Copy, Check, Terminal, ShieldAlert, Sparkles, ArrowRight, Zap, Code2 } from 'lucide-react';
import { SKILL_MD_RAW } from '@/lib/constants';

export default function Hero() {
  const [copiedSkill, setCopiedSkill] = useState(false);
  const [copiedCli, setCopiedCli] = useState(false);

  const handleCopySkill = () => {
    navigator.clipboard.writeText(SKILL_MD_RAW);
    setCopiedSkill(true);
    setTimeout(() => setCopiedSkill(false), 2000);
  };

  const handleCopyCli = () => {
    navigator.clipboard.writeText('npx skillmd init');
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-60 h-60 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badges bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 font-medium text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Viral Open-Source Standard
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 font-medium text-purple-300">
            Author: <strong className="text-white">Sparsh Keshwani</strong>
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 font-medium text-emerald-300">
            Spec Version 3.0.0
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 px-3 py-1 font-medium text-blue-300">
            Universal Compatibility
          </span>
        </div>

        {/* Hero Title & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Eradicate AI Conversational Bloat with{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Skill.md
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            The <strong className="text-white font-semibold">Zero-Tolerance Conciseness Protocol (v3)</strong> engineered by{' '}
            <span className="text-cyan-400 font-semibold underline decoration-cyan-500/40 underline-offset-4">
              Sparsh Keshwani
            </span>
            . Permanently eliminate sycophantic preambles (*&ldquo;Certainly! I&rsquo;d be happy to help&rdquo;*), hard-ban 17
            recycled AI buzzwords, and enforce instant first-token execution across Claude, ChatGPT, Gemini, and Grok.
          </p>

          {/* Action Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={handleCopySkill}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-400 hover:to-blue-500 hover:scale-[1.02] active:scale-[0.98]"
            >
              {copiedSkill ? <Check className="h-4 w-4 text-white" /> : <Copy className="h-4 w-4" />}
              <span>{copiedSkill ? 'Skill.md Copied to Clipboard!' : '1-Click Copy Skill.md v3'}</span>
            </button>

            <a
              href="#playground"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
            >
              <Zap className="h-4 w-4 text-amber-400" />
              <span>Interactive Simulator</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </a>

            {/* Terminal snippet */}
            <button
              onClick={handleCopyCli}
              className="w-full sm:w-auto inline-flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-black/60 px-4 py-3 font-mono text-xs text-slate-300 hover:border-slate-700 transition-colors"
              title="Copy terminal command"
            >
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">$</span>
                <span>npx skillmd init</span>
              </div>
              {copiedCli ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5 text-slate-500 hover:text-slate-300" />}
            </button>
          </div>
        </div>

        {/* High-Impact Metric Cards */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm transition-all hover:border-cyan-500/40">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Directness</span>
              <Zap className="h-4 w-4 text-cyan-400" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">100.0%</div>
            <p className="mt-1 text-xs text-slate-400">
              First-token rule compliance. Zero introductory whitespace or polite preamble.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm transition-all hover:border-blue-500/40">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Token Savings</span>
              <Sparkles className="h-4 w-4 text-blue-400" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">-42.3%</div>
            <p className="mt-1 text-xs text-slate-400">
              Average token bloat eliminated per technical response across 1,000 runs.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm transition-all hover:border-red-500/40">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Banned Slop</span>
              <ShieldAlert className="h-4 w-4 text-red-400" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">17 Terms</div>
            <p className="mt-1 text-xs text-slate-400">
              Hard-banned dictionary: *delve, tapestry, testament, beacon, spearhead, synergy*.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm transition-all hover:border-emerald-500/40">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Backtest Score</span>
              <Code2 className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">10 / 10</div>
            <p className="mt-1 text-xs text-slate-400">
              Perfect scorecard across Claude 3.7, GPT-4o, Gemini 2.5, Grok 3, DeepSeek.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
