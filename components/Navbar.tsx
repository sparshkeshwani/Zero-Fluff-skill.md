'use client';

import React, { useState } from 'react';
import { Terminal, Copy, Check, Star, ExternalLink, ShieldCheck, Flame, BookOpen } from 'lucide-react';
import { SKILL_MD_RAW } from '@/lib/constants';

export default function Navbar() {
  const [copied, setCopied] = useState(false);

  const handleCopySkill = () => {
    navigator.clipboard.writeText(SKILL_MD_RAW);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand & Author */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/20">
            <Terminal className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-base font-bold tracking-tight text-white">Skill.md</span>
              <span className="rounded bg-cyan-950/80 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-cyan-400 border border-cyan-800/50">
                v3.0.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              By <span className="font-semibold text-slate-200 hover:text-cyan-400 transition-colors">Sparsh Keshwani</span>
            </p>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <a href="#playground" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Flame className="h-3.5 w-3.5 text-amber-400" />
            Live Playground
          </a>
          <a href="#specification" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-blue-400" />
            Specification v3
          </a>
          <a href="#scorecard" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            10/10 Scorecard
          </a>
          <a href="#platforms" className="hover:text-cyan-400 transition-colors">
            1-Click Setup
          </a>
          <a href="#repository" className="hover:text-cyan-400 transition-colors">
            Repo Files
          </a>
          <a href="#author" className="hover:text-cyan-400 transition-colors">
            Author
          </a>
        </nav>

        {/* CTA buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleCopySkill}
            className="flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/40 px-3 py-1.5 text-xs font-semibold text-cyan-300 transition-all hover:bg-cyan-900/50 hover:border-cyan-400 shadow-sm shadow-cyan-500/10"
            title="Copy Version 3 Anti-Repetition Skill to clipboard"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? 'Copied Protocol!' : 'Copy Skill.md'}</span>
          </button>

          <a
            href="https://github.com/sparshkeshwani/skill.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
            <span>GitHub</span>
            <ExternalLink className="h-3 w-3 text-slate-400" />
          </a>
        </div>
      </div>
    </header>
  );
}
