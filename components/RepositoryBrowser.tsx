'use client';

import React, { useState } from 'react';
import { FolderGit2, FileCode, Copy, Check, Download, ExternalLink, Terminal } from 'lucide-react';
import { SKILL_MD_RAW } from '@/lib/constants';

const README_CONTENT = `# Skill.md (Version 3 Anti-Repetition Protocol)
### The Global-System-Override Standard for Zero-Fluff, High-Velocity AI Agents

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Author](https://img.shields.io/badge/Author-Sparsh%20Keshwani-9cf?style=for-the-badge&logo=github)](https://github.com/sparshkeshwani)
[![Version](https://img.shields.io/badge/Version-3.0.0--Universal-success?style=for-the-badge)](https://github.com/sparshkeshwani/skill.md)

**Engineered and maintained by Sparsh Keshwani**

## The Hook: Why AI Chatbots Suffer From Conversational Bloat
Modern LLMs waste tokens on greetings ("Certainly! I'd be happy to help"), recycled buzzwords ("delve", "tapestry", "synergy"), and incomplete code. Skill.md permanently fixes this by enforcing immediate first-token delivery and clinical active-voice execution.

## Specification v3:
See skills/anti-repetition-v3.md for the pristine specification.

## Author & Citation
Conceptualized and engineered by Sparsh Keshwani (2026). MIT License.`;

const LICENSE_CONTENT = `MIT License

Copyright (c) 2026 Sparsh Keshwani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

const WORKFLOW_CONTENT = `name: Validate Skill.md Specification

on:
  push:
    branches: [ "main", "master" ]
    paths:
      - "skills/**"
      - "*.md"
  pull_request:
    branches: [ "main", "master" ]

jobs:
  validate-spec:
    name: Lint Frontmatter & Markdown Syntax
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install Linting Tooling
        run: npm install -g js-yaml markdownlint-cli

      - name: Validate YAML Frontmatter in Skill Files
        run: |
          node -e '
            const fs = require("fs");
            const yaml = require("js-yaml");
            const content = fs.readFileSync("skills/anti-repetition-v3.md", "utf8");
            const match = content.match(/^---\\r?\\n([\\s\\S]*?)\\r?\\n---/);
            if (!match) throw new Error("Missing YAML frontmatter");
            const parsed = yaml.load(match[1]);
            if (!parsed.name || !parsed.scope || !parsed.execution_priority) {
              throw new Error("Frontmatter schema incomplete");
            }
            console.log("YAML frontmatter validated successfully.");
          '`;

export default function RepositoryBrowser() {
  const [selectedFile, setSelectedFile] = useState<string>('skill');
  const [copied, setCopied] = useState(false);

  const filesMap: Record<string, { name: string; path: string; content: string; lang: string }> = {
    skill: {
      name: 'anti-repetition-v3.md',
      path: 'skills/anti-repetition-v3.md',
      content: SKILL_MD_RAW,
      lang: 'markdown'
    },
    readme: {
      name: 'README.md',
      path: 'README.md',
      content: README_CONTENT,
      lang: 'markdown'
    },
    license: {
      name: 'LICENSE',
      path: 'LICENSE',
      content: LICENSE_CONTENT,
      lang: 'text'
    },
    workflow: {
      name: 'validate-skill.yml',
      path: '.github/workflows/validate-skill.yml',
      content: WORKFLOW_CONTENT,
      lang: 'yaml'
    }
  };

  const active = filesMap[selectedFile];

  const handleCopy = () => {
    navigator.clipboard.writeText(active.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([active.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = active.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="repository" className="py-16 lg:py-24 border-b border-slate-900 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-semibold text-cyan-400 mb-3">
            <FolderGit2 className="h-3.5 w-3.5" />
            Complete Open-Source Repository Tree
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Repository Source Explorer
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Inspect all production files in the <strong className="text-white">Skill.md</strong> project by{' '}
            <strong className="text-cyan-400">Sparsh Keshwani</strong>.
          </p>
        </div>

        {/* Tree Container */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-4">
          {/* File sidebar list */}
          <div className="border-b md:border-b-0 md:border-r border-slate-800 bg-slate-950/80 p-4">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">
              Repository Files (4)
            </div>
            <div className="space-y-1">
              {Object.entries(filesMap).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setSelectedFile(key)}
                  className={`w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium transition-all text-left ${
                    selectedFile === key
                      ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 font-semibold'
                      : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                  }`}
                >
                  <FileCode className={`h-4 w-4 shrink-0 ${selectedFile === key ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span className="truncate">{item.path}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 px-2">
              <div className="text-[11px] text-slate-400 font-medium">Quick Clone:</div>
              <div className="mt-1.5 rounded-lg bg-black/60 p-2 font-mono text-[10px] text-slate-300 border border-slate-800 truncate">
                git clone https://github.com/sparshkeshwani/skill.md
              </div>
            </div>
          </div>

          {/* File view panel */}
          <div className="md:col-span-3 flex flex-col bg-slate-950">
            <div className="bg-slate-900/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCode className="h-4 w-4 text-cyan-400" />
                <span className="font-mono text-xs font-bold text-slate-200">{active.path}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-700 transition-colors"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/40 px-3 py-1.5 text-xs font-medium text-cyan-300 hover:bg-cyan-900/50 transition-colors"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>

            <div className="p-5 font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto max-h-[480px] overflow-y-auto whitespace-pre selection:bg-cyan-500 selection:text-black">
              {active.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
