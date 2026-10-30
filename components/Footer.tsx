'use client';

import React from 'react';
import { Terminal, Heart, ArrowUp, Github, FileText, Shield } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-600 text-white font-mono font-bold text-xs">
                S
              </div>
              <span className="font-mono text-base font-bold text-white">Skill.md</span>
              <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-300">
                v3.0.0
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              <strong className="text-slate-300">Skill.md</strong> is the open-source Zero-Tolerance Conciseness Protocol engineered by{' '}
              <strong className="text-cyan-400">Sparsh Keshwani</strong>. Built to eliminate AI conversational filler, sycophancy, and banned buzzwords across all major foundation models.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] mb-3">
              Documentation & Spec
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#playground" className="hover:text-cyan-400 transition-colors">
                  Interactive Simulator
                </a>
              </li>
              <li>
                <a href="#specification" className="hover:text-cyan-400 transition-colors">
                  Specification v3
                </a>
              </li>
              <li>
                <a href="#scorecard" className="hover:text-cyan-400 transition-colors">
                  The Backtest Scorecard
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:text-cyan-400 transition-colors">
                  1-Click Setup Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Repository & Attribution */}
          <div>
            <h4 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] mb-3">
              Open-Source Project
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/sparshkeshwani/skill.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#author" className="hover:text-cyan-400 transition-colors">
                  Author: Sparsh Keshwani
                </a>
              </li>
              <li>
                <a href="#repository" className="hover:text-cyan-400 transition-colors">
                  MIT License (2026)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            Copyright &copy; 2026 <strong className="text-slate-200">Sparsh Keshwani</strong>. Released under the MIT License.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">
              Keywords: <span className="text-slate-400">Skill.md</span> • <span className="text-slate-400">Sparsh Keshwani</span>
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
