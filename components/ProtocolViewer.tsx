'use client';

import React, { useState } from 'react';
import { Copy, Check, Download, BookOpen, AlertOctagon, Terminal, ListOrdered } from 'lucide-react';
import { SKILL_MD_RAW, FORBIDDEN_WORDS } from '@/lib/constants';

export default function ProtocolViewer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SKILL_MD_RAW);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([SKILL_MD_RAW], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'anti-repetition-v3.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="specification" className="py-16 lg:py-24 border-b border-slate-900 bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 px-3 py-1 text-xs font-semibold text-blue-400 mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            Core Instruction Specification
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Pristine Skill.md Specification v3
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Engineered by <strong className="text-white">Sparsh Keshwani</strong> as a global system override.
            Integrate directly into any prompt layer, custom instruction set, or local agent runner.
          </p>
        </div>

        {/* 3 Pillars Architecture */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pillar 1 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-950/60 border border-red-800/40 text-red-400 mb-4">
                <AlertOctagon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">1. Zero Conversational Filler</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Absolute ban on greetings (*&ldquo;Certainly!&rdquo;*, *&ldquo;I&rsquo;d be happy to help&rdquo;*), meta-commentary, and trailing pleasantries. The <strong>First-Token Rule</strong> mandates immediate payload delivery at byte 0.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] font-mono text-cyan-400">
              first_token == payload_start
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-950/60 border border-amber-800/40 text-amber-400 mb-4">
                <Terminal className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">2. Hard-Banned Registry</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                17 overused AI cliches (<em>delve, tapestry, testament, beacon, spearhead, synergy</em>) are blacklisted at the tokenizer level. Mandates authoritative clinical tone in active voice.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] font-mono text-amber-400">
              17 prohibited lexical tokens
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 mb-4">
                <ListOrdered className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">3. Complete Execution Mandate</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Clean Markdown H2/H3 layouts with bold key metrics. <strong>Zero placeholder comments:</strong> every function, schema, and loop must be fully written out and production-ready.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] font-mono text-emerald-400">
              zero &apos;// TODO&apos; or truncated logic
            </div>
          </div>
        </div>

        {/* Forbidden Words Cloud */}
        <div className="mb-12 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Hard-Banned Tokenizer Registry (17 Prohibited Terms)
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Any generation emitting these tokens constitutes an immediate protocol failure:
              </p>
            </div>
            <span className="rounded-full bg-red-950/80 border border-red-800/50 px-3 py-1 font-mono text-xs font-semibold text-red-400">
              Zero-Tolerance Blacklist
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {FORBIDDEN_WORDS.map((word) => (
              <span
                key={word}
                className="inline-flex items-center gap-1.5 rounded-lg border border-red-900/50 bg-red-950/30 px-3 py-1.5 font-mono text-xs font-semibold text-red-300 hover:border-red-600 transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Code Block Container */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
          <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs font-semibold text-slate-300">
                skills/anti-repetition-v3.md
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-700 transition-colors"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Spec'}</span>
              </button>

              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/40 px-3 py-1.5 text-xs font-medium text-cyan-300 hover:bg-cyan-900/60 transition-colors"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download .md</span>
              </button>
            </div>
          </div>

          <div className="p-6 font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto whitespace-pre selection:bg-cyan-500 selection:text-black">
            {SKILL_MD_RAW}
          </div>
        </div>
      </div>
    </section>
  );
}
