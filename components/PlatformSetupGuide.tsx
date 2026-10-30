'use client';

import React, { useState } from 'react';
import { SKILL_MD_RAW } from '@/lib/constants';
import { Copy, Check, Terminal, Cpu, Sparkles, ChevronRight, Laptop, Layers } from 'lucide-react';

interface PlatformTab {
  id: string;
  name: string;
  target: string;
  icon: string;
  steps: string[];
  snippet: string;
}

export default function PlatformSetupGuide() {
  const [activePlatform, setActivePlatform] = useState<string>('claude');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const platforms: PlatformTab[] = [
    {
      id: 'claude',
      name: 'Anthropic Claude',
      target: 'Claude Projects & Custom System Instructions',
      icon: '🟠',
      steps: [
        'Open claude.ai and select your Project or enter Chat Settings.',
        'Navigate to "Set Custom System Instructions" or Project Knowledge.',
        'Paste the raw Skill.md specification into the instructions field.',
        'All completions will immediately execute under the Zero-Tolerance Conciseness Protocol.'
      ],
      snippet: SKILL_MD_RAW
    },
    {
      id: 'chatgpt',
      name: 'OpenAI ChatGPT',
      target: 'Custom Instructions & Custom GPTs',
      icon: '🟢',
      steps: [
        'Click on your profile avatar in ChatGPT and open "Personalization" > "Custom Instructions".',
        'In the "How would you like ChatGPT to respond?" field, paste the Skill.md content.',
        'Save settings. ChatGPT will now bypass conversational preamble and greetings entirely.'
      ],
      snippet: SKILL_MD_RAW
    },
    {
      id: 'gemini',
      name: 'Google Gemini',
      target: 'Gemini Gems & System Instructions',
      icon: '🔵',
      steps: [
        'Navigate to Gemini Gems Manager (gemini.google.com/gems).',
        'Create a new Gem named "Clinical Architect" or "Skill.md Engine".',
        'In the Instructions box, paste the Version 3 Anti-Repetition Protocol.',
        'Gemini will now execute direct payload responses with zero pleasantry bloat.'
      ],
      snippet: SKILL_MD_RAW
    },
    {
      id: 'cursor',
      name: 'Cursor & Windsurf',
      target: '.cursorrules / .windsurfrules file in workspace root',
      icon: '⚡',
      steps: [
        'Create a file named `.cursorrules` in the root of your code repository.',
        'Paste the entire Skill.md specification into the file.',
        'Cursor AI composer will strictly adhere to first-token delivery and omit placeholder comments.'
      ],
      snippet: `# Cursor Rules for Zero-Tolerance Conciseness by Sparsh Keshwani\n` + SKILL_MD_RAW
    },
    {
      id: 'grok',
      name: 'xAI Grok',
      target: 'Grok System Prompts & Custom Personas',
      icon: '⚪',
      steps: [
        'Open Grok on X or x.ai portal.',
        'Configure your custom persona prompt or developer API system parameter.',
        'Inject the Skill.md prompt block as the primary system directive.'
      ],
      snippet: SKILL_MD_RAW
    },
    {
      id: 'ollama',
      name: 'Ollama & vLLM',
      target: 'Modelfile SYSTEM Directive',
      icon: '🦙',
      steps: [
        'Create a `Modelfile` for your local model (e.g., Llama 3, DeepSeek, Qwen).',
        'Add the SYSTEM instruction block containing Skill.md.',
        'Build the model with `ollama create clinical-model -f ./Modelfile`.'
      ],
      snippet: `FROM llama3:8b\n\nSYSTEM """\n${SKILL_MD_RAW}\n"""`
    }
  ];

  const current = platforms.find((p) => p.id === activePlatform) || platforms[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="platforms" className="py-16 lg:py-24 border-b border-slate-900 bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 text-xs font-semibold text-purple-400 mb-3">
            <Layers className="h-3.5 w-3.5" />
            Universal Multi-Platform Integration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            1-Click Multi-Platform Drop-In Setup
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Copy and paste <strong className="text-white">Skill.md by Sparsh Keshwani</strong> into your favorite toolchain in under 10 seconds.
          </p>
        </div>

        {/* Platform Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {platforms.map((plat) => (
            <button
              key={plat.id}
              onClick={() => setActivePlatform(plat.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all border ${
                activePlatform === plat.id
                  ? 'border-cyan-500 bg-cyan-950/50 text-cyan-300 shadow-lg shadow-cyan-500/10'
                  : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <span>{plat.icon}</span>
              <span>{plat.name}</span>
            </button>
          ))}
        </div>

        {/* Platform Card */}
        <div className="mt-8 max-w-4xl mx-auto rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
          <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg">{current.icon}</span>
                <h3 className="text-base font-bold text-white">{current.name}</h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Target: {current.target}</p>
            </div>

            <button
              onClick={() => handleCopy(current.snippet, current.id)}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/40 px-4 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-900/50 transition-colors shrink-0"
            >
              {copiedId === current.id ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              <span>{copiedId === current.id ? 'Copied Configuration!' : 'Copy for ' + current.name}</span>
            </button>
          </div>

          <div className="p-6">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              Step-by-Step Setup:
            </h4>
            <ol className="space-y-2 mb-6">
              {current.steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-[11px] font-bold text-cyan-400 shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 font-mono text-xs text-slate-300 max-h-60 overflow-y-auto whitespace-pre selection:bg-cyan-500 selection:text-black">
              {current.snippet}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
