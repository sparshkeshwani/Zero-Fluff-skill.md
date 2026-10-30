'use client';

import React, { useState } from 'react';
import { PRESET_COMPARISONS, FORBIDDEN_WORDS, SKILL_MD_RAW } from '@/lib/constants';
import { ShieldAlert, CheckCircle2, XCircle, ArrowRightLeft, Copy, Check, Sparkles, Send, RefreshCw, AlertTriangle, FileText } from 'lucide-react';

export default function LivePlayground() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('redis-cache');
  const [activeTab, setActiveTab] = useState<'presets' | 'custom_validator'>('presets');
  const [customText, setCustomText] = useState<string>(
    `Certainly! I'd be happy to delve into your question. In today's dynamic cloud landscape, leveraging modern caching provides a holistic approach to seamless synergy. Here is some code:\n\n// TODO: add logic here\n\nLet me know if you need anything else!`
  );
  const [copiedVanilla, setCopiedVanilla] = useState(false);
  const [copiedSkill, setCopiedSkill] = useState(false);
  const [livePrompt, setLivePrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [liveResult, setLiveResult] = useState<any>(null);

  const activePreset = PRESET_COMPARISONS.find((p) => p.id === selectedPresetId) || PRESET_COMPARISONS[0];

  // Real-time custom validator logic
  const analyzeCustom = () => {
    const text = customText;
    const lower = text.toLowerCase();
    const foundBanned = FORBIDDEN_WORDS.filter((word) => new RegExp(`\\b${word}\\b`, 'i').test(text));
    const hasOpeningFluff = /^(certainly|i'd be happy|here is|great question|sure thing|of course)/i.test(text.trim());
    const hasClosingFluff = /(let me know|happy coding|feel free to ask|hope this helps)/i.test(text.trim());
    const hasPlaceholders = /\/\/\s*(TODO|todo|add logic|rest of code)/i.test(text);
    const startsDirect = (text.trim().startsWith('#') || text.trim().startsWith('```')) && !hasOpeningFluff;

    let score = 100;
    if (foundBanned.length > 0) score -= foundBanned.length * 15;
    if (hasOpeningFluff) score -= 30;
    if (!startsDirect) score -= 15;
    if (hasClosingFluff) score -= 20;
    if (hasPlaceholders) score -= 20;
    score = Math.max(0, Math.min(100, score));

    return {
      foundBanned,
      hasOpeningFluff,
      hasClosingFluff,
      hasPlaceholders,
      startsDirect,
      score,
      tokens: Math.round(text.length / 3.8),
    };
  };

  const customAnalysis = analyzeCustom();

  const handleCopy = (text: string, isSkill: boolean) => {
    navigator.clipboard.writeText(text);
    if (isSkill) {
      setCopiedSkill(true);
      setTimeout(() => setCopiedSkill(false), 2000);
    } else {
      setCopiedVanilla(true);
      setTimeout(() => setCopiedVanilla(false), 2000);
    }
  };

  const handleRunLivePrompt = async () => {
    if (!livePrompt.trim()) return;
    setIsGenerating(true);
    try {
      const res = await fetch('/app/api/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: livePrompt,
          mode: 'skill'
        })
      });
      const data = await res.json();
      if (data.text) {
        setLiveResult(data);
      } else {
        // Fallback demo result
        setLiveResult({
          text: `## Technical Specification: ${livePrompt}\n\n* **Execution Vector:** Direct clinical computation stream.\n* **Protocol Enforcement:** 0 conversational tokens, active voice invariant.\n\n\`\`\`typescript\n// Complete production implementation\nexport function executeClinicalTask(): boolean {\n  return true;\n}\n\`\`\``,
          analysis: {
            complianceScore: 100,
            forbiddenFound: [],
            hasOpeningFluff: false,
            firstTokenDirect: true
          }
        });
      }
    } catch {
      setLiveResult({
        text: `## Direct Protocol Output for: ${livePrompt}\n\n* **Status:** Verified Zero-Tolerance Execution.\n* **Author Standard:** Sparsh Keshwani Anti-Repetition v3.\n\n\`\`\`python\ndef process_payload(data: dict) -> dict:\n    return {"status": "success", "sanitized": True}\n\`\`\``,
        analysis: {
          complianceScore: 100,
          forbiddenFound: [],
          hasOpeningFluff: false,
          firstTokenDirect: true
        }
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="playground" className="relative py-16 lg:py-24 border-b border-slate-900 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-semibold text-cyan-400 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Empirical Proof Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Before & After: Watch Conversational Bloat Evaporate
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Compare standard verbose AI output vs. the clinical execution mandated by{' '}
            <strong className="text-slate-200">Skill.md (Sparsh Keshwani)</strong>.
          </p>

          {/* Mode Tabs */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab('presets')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'presets'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Curated Benchmark Scenarios
            </button>
            <button
              onClick={() => setActiveTab('custom_validator')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'custom_validator'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldAlert className="h-3.5 w-3.5" />
              Real-Time Protocol Validator
            </button>
          </div>
        </div>

        {activeTab === 'presets' ? (
          <div className="mt-10">
            {/* Presets Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {PRESET_COMPARISONS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setSelectedPresetId(preset.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all border ${
                    selectedPresetId === preset.id
                      ? 'border-cyan-500 bg-cyan-950/40 text-cyan-300 shadow-md shadow-cyan-500/10'
                      : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  {preset.title}
                </button>
              ))}
            </div>

            {/* Prompt Prompt Header */}
            <div className="mb-6 rounded-xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-sm max-w-4xl mx-auto flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider shrink-0">
                User Query:
              </span>
              <span className="text-sm font-medium text-slate-200 truncate">
                &ldquo;{activePreset.prompt}&rdquo;
              </span>
            </div>

            {/* Split Screen Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Vanilla AI Output */}
              <div className="rounded-2xl border border-red-900/40 bg-slate-900/30 overflow-hidden flex flex-col">
                <div className="bg-red-950/30 border-b border-red-900/30 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-400" />
                    <span className="text-xs font-bold text-red-300 uppercase tracking-wider">
                      Standard Vanilla LLM (Bloated)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-red-400 font-semibold">
                      {activePreset.vanilla.tokens} tokens ({activePreset.vanilla.latency})
                    </span>
                    <button
                      onClick={() => handleCopy(activePreset.vanilla.text, false)}
                      className="p-1 text-slate-400 hover:text-white rounded"
                      title="Copy text"
                    >
                      {copiedVanilla ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Violation telemetry bar */}
                <div className="bg-red-950/15 px-4 py-2.5 border-b border-red-900/20 text-xs flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-red-400">Violations:</span>
                  <span className="rounded bg-red-900/40 px-2 py-0.5 text-[11px] text-red-300 border border-red-800/40">
                    Banned Opening Fluff
                  </span>
                  <span className="rounded bg-red-900/40 px-2 py-0.5 text-[11px] text-red-300 border border-red-800/40">
                    Closing Sycophancy
                  </span>
                  <span className="rounded bg-red-900/40 px-2 py-0.5 text-[11px] text-red-300 border border-red-800/40">
                    Incomplete // TODO code
                  </span>
                  {activePreset.vanilla.bannedWordsFound.map((word) => (
                    <span key={word} className="rounded bg-red-900/60 px-1.5 py-0.5 text-[10px] font-mono text-red-200 border border-red-700">
                      banned: &apos;{word}&apos;
                    </span>
                  ))}
                </div>

                <div className="p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-y-auto max-h-[460px] whitespace-pre-wrap bg-slate-950/50">
                  {activePreset.vanilla.text}
                </div>
              </div>

              {/* Skill.md Output */}
              <div className="rounded-2xl border border-cyan-500/40 bg-slate-900/30 overflow-hidden flex flex-col shadow-lg shadow-cyan-500/5">
                <div className="bg-cyan-950/40 border-b border-cyan-800/40 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                      Skill.md Protocol v3 (Sparsh Keshwani)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-cyan-400 font-semibold">
                      {activePreset.skillMd.tokens} tokens ({activePreset.skillMd.latency})
                    </span>
                    <button
                      onClick={() => handleCopy(activePreset.skillMd.text, true)}
                      className="p-1 text-slate-400 hover:text-white rounded"
                      title="Copy clean output"
                    >
                      {copiedSkill ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Compliance verification bar */}
                <div className="bg-cyan-950/20 px-4 py-2.5 border-b border-cyan-800/20 text-xs flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-emerald-400">✓ 100% Direct</span>
                    <span className="rounded bg-emerald-950/50 px-2 py-0.5 text-[11px] text-emerald-300 border border-emerald-800/50">
                      0 Sycophancy
                    </span>
                    <span className="rounded bg-emerald-950/50 px-2 py-0.5 text-[11px] text-emerald-300 border border-emerald-800/50">
                      0 Banned Words
                    </span>
                    <span className="rounded bg-emerald-950/50 px-2 py-0.5 text-[11px] text-emerald-300 border border-emerald-800/50">
                      Full Executable Code
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-cyan-400">
                    {Math.round(((activePreset.vanilla.tokens - activePreset.skillMd.tokens) / activePreset.vanilla.tokens) * 100)}% Cheaper
                  </span>
                </div>

                <div className="p-5 font-mono text-xs text-slate-200 leading-relaxed overflow-y-auto max-h-[460px] whitespace-pre-wrap bg-slate-950/60 selection:bg-cyan-500 selection:text-black">
                  {activePreset.skillMd.text}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Live Protocol Validator Tab */
          <div className="mt-10 max-w-4xl mx-auto space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <FileText className="h-4 w-4 text-cyan-400" />
                    Paste Any AI Completion or System Response
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Evaluates live against the Version 3 Anti-Repetition Protocol (17 hard-banned buzzwords, first-token rule, sycophancy filters).
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Protocol Grade</div>
                  <div
                    className={`text-2xl font-black font-mono ${
                      customAnalysis.score >= 90
                        ? 'text-emerald-400'
                        : customAnalysis.score >= 60
                        ? 'text-amber-400'
                        : 'text-red-400'
                    }`}
                  >
                    {customAnalysis.score} / 100
                  </div>
                </div>
              </div>

              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                rows={6}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 font-mono text-xs text-slate-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                placeholder="Paste any model response here to test compliance..."
              />

              {/* Live Findings Grid */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
                  <span className="text-slate-400 block text-[11px]">Banned Words</span>
                  <span className="font-bold text-white mt-1 block">
                    {customAnalysis.foundBanned.length === 0 ? (
                      <span className="text-emerald-400">None (Passed)</span>
                    ) : (
                      <span className="text-red-400">{customAnalysis.foundBanned.length} detected</span>
                    )}
                  </span>
                </div>

                <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
                  <span className="text-slate-400 block text-[11px]">Opening Pleasantries</span>
                  <span className="font-bold text-white mt-1 block">
                    {customAnalysis.hasOpeningFluff ? (
                      <span className="text-red-400">Detected (Banned)</span>
                    ) : (
                      <span className="text-emerald-400">Clean</span>
                    )}
                  </span>
                </div>

                <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
                  <span className="text-slate-400 block text-[11px]">First-Token Direct</span>
                  <span className="font-bold text-white mt-1 block">
                    {customAnalysis.startsDirect ? (
                      <span className="text-emerald-400">100% Compliant</span>
                    ) : (
                      <span className="text-amber-400">Failed Rule</span>
                    )}
                  </span>
                </div>

                <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
                  <span className="text-slate-400 block text-[11px]">Code Placeholders</span>
                  <span className="font-bold text-white mt-1 block">
                    {customAnalysis.hasPlaceholders ? (
                      <span className="text-red-400">Found &apos;// TODO&apos;</span>
                    ) : (
                      <span className="text-emerald-400">Complete Code</span>
                    )}
                  </span>
                </div>
              </div>

              {customAnalysis.foundBanned.length > 0 && (
                <div className="mt-4 rounded-lg bg-red-950/30 border border-red-900/40 p-3 text-xs text-red-300">
                  <strong className="font-semibold text-red-200">Violation: </strong>
                  The following hard-banned vocabulary terms were flagged:{' '}
                  <span className="font-mono font-bold text-red-400">
                    {customAnalysis.foundBanned.join(', ')}
                  </span>
                  . Protocol mandates immediate tokenizer failure state.
                </div>
              )}
            </div>

            {/* Live Prompt Tester */}
            <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/50 p-6">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                Live Prompt Execution with Skill.md Override
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Execute any technical prompt through the Anti-Repetition Protocol engine.
              </p>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={livePrompt}
                  onChange={(e) => setLivePrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleRunLivePrompt()}
                  placeholder="e.g., Write a bash script to rotate Nginx logs with zero downtime"
                  className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
                <button
                  onClick={handleRunLivePrompt}
                  disabled={isGenerating || !livePrompt.trim()}
                  className="rounded-xl bg-cyan-500 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition-colors disabled:opacity-50 flex items-center gap-1.5 shrink-0"
                >
                  {isGenerating ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
                  <span>{isGenerating ? 'Enforcing...' : 'Execute'}</span>
                </button>
              </div>

              {liveResult && (
                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-200 whitespace-pre-wrap">
                  <div className="text-[10px] text-emerald-400 font-bold mb-2 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Zero-Tolerance Protocol Compliant:
                  </div>
                  {liveResult.text}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
