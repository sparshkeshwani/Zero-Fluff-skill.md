import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { FORBIDDEN_WORDS, BANNED_OPENINGS, BANNED_CLOSINGS, SKILL_MD_RAW } from '@/lib/constants';

function analyzeText(text: string) {
  const trimmed = text.trim();
  const lower = text.toLowerCase();

  // 1. Check forbidden words
  const forbiddenFound: string[] = [];
  for (const word of FORBIDDEN_WORDS) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    if (regex.test(text)) {
      forbiddenFound.push(word);
    }
  }

  // 2. Check banned opening pleasantries
  const hasOpeningFluff = BANNED_OPENINGS.some((phrase) => {
    return lower.startsWith(phrase.toLowerCase()) || lower.slice(0, 120).includes(phrase.toLowerCase());
  });

  // 3. Check first-token directness
  const firstTokenDirect = !hasOpeningFluff && (trimmed.startsWith('#') || trimmed.startsWith('```') || /^[A-Z0-9]/.test(trimmed));

  // 4. Check banned closing pleasantries
  const hasClosingFluff = BANNED_CLOSINGS.some((phrase) => {
    return lower.endsWith(phrase.toLowerCase()) || lower.slice(-150).includes(phrase.toLowerCase());
  });

  // 5. Check placeholder comments
  const hasPlaceholders = /\/\/\s*(TODO|todo|add logic|rest of code|placeholder)/i.test(text);

  // Approximate tokens (~4 characters per token)
  const tokenCount = Math.round(text.length / 3.8);

  // Compute protocol grade (0 - 100)
  let score = 100;
  if (forbiddenFound.length > 0) score -= forbiddenFound.length * 15;
  if (hasOpeningFluff) score -= 30;
  if (!firstTokenDirect) score -= 20;
  if (hasClosingFluff) score -= 20;
  if (hasPlaceholders) score -= 15;
  score = Math.max(0, Math.min(100, score));

  return {
    forbiddenFound,
    hasOpeningFluff,
    firstTokenDirect,
    hasClosingFluff,
    hasPlaceholders,
    tokenCount,
    complianceScore: score,
    isCompliant: score >= 90 && forbiddenFound.length === 0,
  };
}

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ status: 'Skill.md evaluate API active' });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, text, prompt, mode } = body;

    // Direct text evaluation against protocol
    if (action === 'validate_text') {
      const analysis = analyzeText(text || '');
      return NextResponse.json({ success: true, analysis });
    }

    // AI Generation with or without Skill.md
    if (prompt) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey) {
        try {
          const ai = new GoogleGenAI({ apiKey });
          const systemInstruction = mode === 'skill'
            ? SKILL_MD_RAW
            : 'You are a helpful and conversational AI assistant.';

          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
              systemInstruction: systemInstruction,
              temperature: mode === 'skill' ? 0.1 : 0.7,
            }
          });

          const generatedText = response.text || '';
          const analysis = analyzeText(generatedText);
          return NextResponse.json({
            success: true,
            mode,
            text: generatedText,
            analysis
          });
        } catch (apiError: any) {
          console.warn('Gemini API call failed, falling back to local protocol engine:', apiError?.message);
        }
      }

      // Fallback response generator if API key is absent
      const analysis = analyzeText(text || '');
      return NextResponse.json({
        success: true,
        fallback: true,
        analysis
      });
    }

    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
  }
}
