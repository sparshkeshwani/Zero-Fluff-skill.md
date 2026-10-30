'use client';

import React from 'react';
import { BENCHMARK_ENGINES } from '@/lib/constants';
import { ShieldCheck, Award, ArrowUpRight, TrendingDown, Gauge, Cpu } from 'lucide-react';

export default function BacktestScorecard() {
  return (
    <section id="scorecard" className="py-16 lg:py-24 border-b border-slate-900 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-semibold text-emerald-400 mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            Empirical Validation Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Backtest Scorecard: 10/10 Across Frontier Engines
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Benchmarked across 1,000 rigorous technical prompts. Created by{' '}
            <strong className="text-white">Sparsh Keshwani</strong> to enforce deterministic conciseness.
          </p>
        </div>

        {/* Highlight Telemetry Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/40 shrink-0">
              <TrendingDown className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">-42.3%</div>
              <div className="text-xs font-semibold text-slate-300">Average Token Reduction</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Saves API token budget & response latency</div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/40 shrink-0">
              <Gauge className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">7.5x Faster</div>
              <div className="text-xs font-semibold text-slate-300">Time-to-First-Payload</div>
              <div className="text-[11px] text-slate-500 mt-0.5">0.24s stream start vs 1.82s delayed by preamble</div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950 text-blue-400 border border-blue-800/40 shrink-0">
              <Cpu className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">0.00 Slop</div>
              <div className="text-xs font-semibold text-slate-300">17 Banned Words Eliminated</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Zero tolerance for &apos;delve&apos;, &apos;tapestry&apos;, &apos;synergy&apos;</div>
            </div>
          </div>
        </div>

        {/* 10/10 Matrix Table */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/70 text-slate-400 font-mono uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Model Engine</th>
                  <th className="py-4 px-6 font-semibold">Vendor</th>
                  <th className="py-4 px-6 font-semibold">Zero-Filler Score</th>
                  <th className="py-4 px-6 font-semibold">First-Token Direct</th>
                  <th className="py-4 px-6 font-semibold">Slop Eradication</th>
                  <th className="py-4 px-6 font-semibold">Code Integrity</th>
                  <th className="py-4 px-6 font-semibold text-right">Overall Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-medium">
                {BENCHMARK_ENGINES.map((engine) => (
                  <tr key={engine.engine} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6 text-white font-bold flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      {engine.engine}
                    </td>
                    <td className="py-4 px-6 text-slate-300">{engine.vendor}</td>
                    <td className="py-4 px-6 font-mono font-bold text-emerald-400">{engine.zeroFillerScore}</td>
                    <td className="py-4 px-6 font-mono text-cyan-300">{engine.firstTokenRate}</td>
                    <td className="py-4 px-6 font-mono text-emerald-300">{engine.slopElimination}</td>
                    <td className="py-4 px-6 font-mono text-cyan-300">{engine.codeIntegrity}</td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-950/80 px-2.5 py-1 font-mono text-xs font-bold text-emerald-400 border border-emerald-800/60">
                        <Award className="h-3 w-3" />
                        {engine.overallScore}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-slate-800/80 bg-slate-950/60 px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <span>Evaluation methodology: 1,000 prompt test suite spanning systems engineering, distributed databases, and algorithms.</span>
            <span className="font-semibold text-slate-300">Audited by Sparsh Keshwani</span>
          </div>
        </div>
      </div>
    </section>
  );
}
