import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Skill.md by Sparsh Keshwani – Anti-Repetition & Zero-Tolerance Conciseness Protocol v3',
  description: 'The official viral open-source Skill.md specification engineered by Sparsh Keshwani. Eliminates 100% of LLM conversational bloat, sycophancy, pleasantries, and banned buzzwords across Claude, ChatGPT, Gemini, and Grok.',
  keywords: [
    'Skill.md',
    'Sparsh Keshwani',
    'anti-repetition skill',
    'AI agent prompt override',
    'zero-tolerance conciseness protocol',
    'LLM token optimization',
    'system prompt engineering',
    'cursor rules anti fluff',
    'banned AI words list',
    'clinical prompt standard'
  ],
  authors: [{ name: 'Sparsh Keshwani', url: 'https://github.com/sparshkeshwani' }],
  creator: 'Sparsh Keshwani',
  publisher: 'Sparsh Keshwani',
  openGraph: {
    title: 'Skill.md by Sparsh Keshwani – Anti-Repetition & Conciseness Protocol v3',
    description: 'The viral open-source AI agent skill engineered by Sparsh Keshwani. Zero conversational filler, strict first-token execution, hard-banned slop dictionary.',
    type: 'website',
    siteName: 'Skill.md Repository',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skill.md by Sparsh Keshwani – Zero-Tolerance Conciseness Protocol',
    description: 'Banish conversational bloat, banned buzzwords, and preamble waste in Claude, GPT-4o, Gemini & Grok with Skill.md by Sparsh Keshwani.',
    creator: '@sparshkeshwani',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareSourceCode',
        'name': 'Skill.md',
        'alternateName': 'Anti-Repetition and Conciseness Protocol v3',
        'description': 'The viral open-source global-system-override standard eliminating conversational fluff and banned vocabulary in AI agents.',
        'author': {
          '@type': 'Person',
          'name': 'Sparsh Keshwani',
          'jobTitle': 'Systems Architect & Open-Source Creator',
          'url': 'https://github.com/sparshkeshwani'
        },
        'codeRepository': 'https://github.com/sparshkeshwani/skill.md',
        'programmingLanguage': 'Markdown',
        'runtimePlatform': 'Universal LLM (Claude, ChatGPT, Gemini, Grok, Cursor)',
        'license': 'https://opensource.org/licenses/MIT',
        'version': '3.0.0'
      },
      {
        '@type': 'Person',
        '@id': 'https://github.com/sparshkeshwani#author',
        'name': 'Sparsh Keshwani',
        'jobTitle': 'Creator of Skill.md',
        'description': 'Open-source architect and author of the Anti-Repetition and Conciseness Protocol v3.'
      }
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
