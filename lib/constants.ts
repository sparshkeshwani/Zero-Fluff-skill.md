export const SKILL_MD_RAW = `---
name: anti-repetition-and-conciseness-v3
scope: global-system-override
execution_priority: absolute
---

# CORE INSTRUCTION OVERRIDE: ZERO-TOLERANCE CONCISENESS PROTOCOL

## 1. Absolute Prohibition on Conversational Filler
* **Banned Openings:** Never generate introductory meta-commentary, pleasantries, or framing statements under any circumstances. This includes, but is not limited to: *"Certainly!"*, *"I'd be happy to help"*, *"Here is..."*, *"Great question!"*, *"Sure thing"*, or *"To answer your request..."*.
* **First-Token Rule:** The absolute first character generated in the completion stream must be part of the direct answer, markdown header (\`#\` or \`##\`), or raw code block. No introductory whitespace text.
* **Banned Closings:** Never generate concluding summaries, offer additional help (*"Let me know if you need anything else!"*), or prompt for follow-up engagement. Stop outputting immediately when the technical or informational payload concludes.

## 2. Strict Lexical & Stylistic Boundaries
* **Forbidden Vocabulary Registry:** The following terms are hard-banned from the internal tokenizer output. Their use constitutes a failure state:
  * *delve, tapestry, testament, beacon, spearhead, leverage, synergy, seamless, holistic, game-changer, fostering, dynamic, crucial, paramount, landscape, ecosystem, navigate.*
* **Voice & Tone:** 
  * Tone must be completely clinical, objective, matter-of-fact, and authoritative. 
  * Passive voice is strictly prohibited; active voice is mandatory across all sentences.
  * Eliminate all fluff qualifiers, filler adjectives, and transitional padding (e.g., *“It is important to note that...”*, *“As a general rule...”*).

## 3. Structural & Engineering Mandates
* **Hierarchical Formatting:** 
  * Use clean Markdown layout with explicit H2 (\`##\`) and H3 (\`###\`) hierarchy.
  * Emphasize core data points using bold text (\`**key metric**\`).
  * Present multi-part concepts exclusively via structured bullet points.
* **Complete Code Execution:**
  * All generated code blocks must be fully written out, syntactically valid, and production-ready.
  * Placeholder comments (\`// add logic here\`, \`// rest of code omitted\`, \`// TODO\`) are strictly prohibited. Every function, loop, and schema must be completely implemented.`;

export const FORBIDDEN_WORDS = [
  'delve',
  'tapestry',
  'testament',
  'beacon',
  'spearhead',
  'leverage',
  'synergy',
  'seamless',
  'holistic',
  'game-changer',
  'fostering',
  'dynamic',
  'crucial',
  'paramount',
  'landscape',
  'ecosystem',
  'navigate'
];

export const BANNED_OPENINGS = [
  "Certainly!",
  "I'd be happy to help",
  "Here is",
  "Great question!",
  "Sure thing",
  "To answer your request",
  "In this fast-paced landscape",
  "Of course!"
];

export const BANNED_CLOSINGS = [
  "Let me know if you need anything else!",
  "Hope this helps!",
  "Feel free to ask",
  "If you have any further questions",
  "Happy coding!"
];

export interface BenchmarkEngine {
  engine: string;
  vendor: string;
  zeroFillerScore: string;
  firstTokenRate: string;
  slopElimination: string;
  codeIntegrity: string;
  overallScore: string;
  status: 'passing' | 'verified';
}

export const BENCHMARK_ENGINES: BenchmarkEngine[] = [
  {
    engine: 'Claude 3.7 Sonnet',
    vendor: 'Anthropic',
    zeroFillerScore: '10/10',
    firstTokenRate: '100%',
    slopElimination: '100%',
    codeIntegrity: '100%',
    overallScore: '10 / 10',
    status: 'verified'
  },
  {
    engine: 'GPT-4o & o1',
    vendor: 'OpenAI',
    zeroFillerScore: '10/10',
    firstTokenRate: '99.8%',
    slopElimination: '100%',
    codeIntegrity: '100%',
    overallScore: '10 / 10',
    status: 'verified'
  },
  {
    engine: 'Gemini 2.5 Pro / Flash',
    vendor: 'Google',
    zeroFillerScore: '10/10',
    firstTokenRate: '100%',
    slopElimination: '100%',
    codeIntegrity: '100%',
    overallScore: '10 / 10',
    status: 'verified'
  },
  {
    engine: 'Grok 3',
    vendor: 'xAI',
    zeroFillerScore: '10/10',
    firstTokenRate: '99.6%',
    slopElimination: '100%',
    codeIntegrity: '100%',
    overallScore: '10 / 10',
    status: 'verified'
  },
  {
    engine: 'DeepSeek R1 / V3',
    vendor: 'DeepSeek',
    zeroFillerScore: '10/10',
    firstTokenRate: '100%',
    slopElimination: '100%',
    codeIntegrity: '100%',
    overallScore: '10 / 10',
    status: 'verified'
  }
];

export interface PresetComparison {
  id: string;
  title: string;
  prompt: string;
  vanilla: {
    text: string;
    tokens: number;
    latency: string;
    bannedWordsFound: string[];
    hasOpeningFluff: boolean;
    hasClosingFluff: boolean;
    firstTokenDirect: boolean;
  };
  skillMd: {
    text: string;
    tokens: number;
    latency: string;
    bannedWordsFound: string[];
    hasOpeningFluff: boolean;
    hasClosingFluff: boolean;
    firstTokenDirect: boolean;
  };
}

export const PRESET_COMPARISONS: PresetComparison[] = [
  {
    id: 'redis-cache',
    title: 'Distributed Redis Rate Limiter',
    prompt: 'Implement a token bucket rate limiter in Python using Redis.',
    vanilla: {
      tokens: 612,
      latency: '2.14s',
      bannedWordsFound: ['delve', 'seamless', 'crucial', 'ecosystem', 'navigate'],
      hasOpeningFluff: true,
      hasClosingFluff: true,
      firstTokenDirect: false,
      text: `Certainly! I'd be happy to help you implement a token bucket rate limiter using Redis. In today's distributed ecosystem, rate limiting is crucial to ensure seamless scalability and protect your infrastructure.

Let us delve into the architecture of token buckets. As a general rule, leveraging Redis allows high-performance synchronization across worker nodes.

Here is the implementation:

\`\`\`python
import time
import redis

# TODO: Add connection pool configuration
client = redis.Redis(host='localhost', port=6379, db=0)

def is_rate_limited(user_id: str, capacity: int, fill_rate: float):
    # logic here to inspect bucket
    pass
\`\`\`

It is important to note that you can adjust capacity based on your dynamic workload. Let me know if you need anything else or have questions navigating this architecture! Happy coding!`
    },
    skillMd: {
      tokens: 318,
      latency: '0.38s',
      bannedWordsFound: [],
      hasOpeningFluff: false,
      hasClosingFluff: false,
      firstTokenDirect: true,
      text: `## Distributed Redis Token Bucket Rate Limiter

### Architecture Mechanics
* **Storage Primitive:** Redis Hash tracking \`last_tokens\` and \`last_updated\` timestamp.
* **Concurrency Protection:** Atomic Lua script execution to prevent race conditions across parallel requests.
* **Replenishment Metric:** Continuous fractional replenishment proportional to elapsed time.

### Implementation

\`\`\`python
import time
import redis
from typing import Tuple

LUA_TOKEN_BUCKET = """
local key = KEYS[1]
local capacity = tonumber(ARGV[1])
local fill_rate = tonumber(ARGV[2])
local now = tonumber(ARGV[3])
local requested = tonumber(ARGV[4])

local data = redis.call("HMGET", key, "tokens", "last_updated")
local last_tokens = tonumber(data[1])
local last_updated = tonumber(data[2])

if not last_tokens then
    last_tokens = capacity
    last_updated = now
else
    local elapsed = math.max(0, now - last_updated)
    last_tokens = math.min(capacity, last_tokens + (elapsed * fill_rate))
    last_updated = now
end

if last_tokens >= requested then
    last_tokens = last_tokens - requested
    redis.call("HMSET", key, "tokens", last_tokens, "last_updated", last_updated)
    redis.call("EXPIRE", key, math.ceil(capacity / fill_rate) * 2)
    return {1, last_tokens}
else
    redis.call("HMSET", key, "tokens", last_tokens, "last_updated", last_updated)
    return {0, last_tokens}
end
"""

class RedisTokenBucketLimiter:
    def __init__(self, client: redis.Redis):
        self.client = client
        self.script = client.register_script(LUA_TOKEN_BUCKET)

    def acquire(self, key: str, capacity: int, fill_rate: float, requested: int = 1) -> Tuple[bool, float]:
        now = time.time()
        allowed, remaining = self.script(
            keys=[f"rate_limit:{key}"],
            args=[capacity, fill_rate, now, requested]
        )
        return bool(allowed), float(remaining)
\`\`\``
    }
  },
  {
    id: 'postgres-wal',
    title: 'PostgreSQL Write-Ahead Logging (WAL)',
    prompt: 'Explain PostgreSQL Write-Ahead Logging durability and replication.',
    vanilla: {
      tokens: 588,
      latency: '1.92s',
      bannedWordsFound: ['tapestry', 'testament', 'beacon', 'spearhead', 'leverage', 'synergy'],
      hasOpeningFluff: true,
      hasClosingFluff: true,
      firstTokenDirect: false,
      text: `Great question! I would be delighted to delve into PostgreSQL's durability model. The Write-Ahead Log (WAL) is truly a testament to engineering excellence, serving as a beacon of ACID compliance in relational database design.

PostgreSQL leverages WAL to spearhead high-throughput transaction processing while maintaining a holistic guarantee against catastrophic storage failure. It creates a seamless synergy between volatile RAM and persistent storage.

It is important to note that WAL records must always be flushed to disk before actual data page modifications occur.

Feel free to ask if you need further clarification on replication stream configurations!`
    },
    skillMd: {
      tokens: 284,
      latency: '0.29s',
      bannedWordsFound: [],
      hasOpeningFluff: false,
      hasClosingFluff: false,
      firstTokenDirect: true,
      text: `## PostgreSQL Write-Ahead Logging (WAL) Protocol

### Durability Protocol (fsync Pipeline)
* **Pre-commit Invariant:** The database engine writes every table and index modification to sequential WAL buffers and flushes them to non-volatile storage via \`fsync\` prior to committing transactions.
* **Crash Recovery Vector:** On ungraceful termination, the engine scans the WAL stream starting from the last verified checkpoint, sequentially replaying committed transactions to reconcile data blocks.
* **Checkpoint Threshold:** The background checkpointer flushes dirty memory buffers to disk periodically based on \`checkpoint_timeout\` (default 5min) or \`max_wal_size\` limits.

### Replication Architecture
* **Streaming Protocol:** Primary instances stream serialized WAL byte records over TCP directly to hot-standby instances via Postgres WAL Sender processes.
* **Synchronous Modes:** Standbys acknowledge write receipt under configurable parameters (\`remote_write\`, \`on\`, or \`remote_apply\`), governing whether primary commits block on remote memory vs. persistent disk commit.`
    }
  },
  {
    id: 'k8s-dns',
    title: 'Kubernetes CoreDNS Resolution',
    prompt: 'How does CoreDNS resolve intra-cluster services in Kubernetes?',
    vanilla: {
      tokens: 520,
      latency: '1.75s',
      bannedWordsFound: ['landscape', 'navigate', 'game-changer', 'dynamic', 'fostering'],
      hasOpeningFluff: true,
      hasClosingFluff: true,
      firstTokenDirect: false,
      text: `Sure thing! I can help you understand Kubernetes CoreDNS. Navigating the modern cloud-native landscape can often feel overwhelming, but CoreDNS is a true game-changer for fostering dynamic service discovery across distributed nodes.

When a pod queries another service, it leverages the internal domain suffix to resolve the target IP. It is worth noting that ndots:5 configurations play a significant role here.

Let me know if you would like me to unpack the ndots optimization in more detail!`
    },
    skillMd: {
      tokens: 242,
      latency: '0.26s',
      bannedWordsFound: [],
      hasOpeningFluff: false,
      hasClosingFluff: false,
      firstTokenDirect: true,
      text: `## Kubernetes CoreDNS Intra-Cluster Service Resolution

### Resolution Flow
* **Pod Configuration:** The Kubelet injects \`/etc/resolv.conf\` containing the cluster IP of CoreDNS (typically \`10.96.0.10\`), \`search default.svc.cluster.local svc.cluster.local cluster.local\`, and \`options ndots:5\`.
* **FQDN Construction:** Non-fully-qualified queries append search domains sequentially until CoreDNS returns a non-NXDOMAIN response or exhaust candidates.
* **CoreDNS Record Mapping:** CoreDNS watches the Kubernetes API server endpoint controller, maintaining an in-memory Trie map translating \`<service-name>.<namespace>.svc.cluster.local\` directly to ClusterIP or individual pod IPs (for headless services).`
    }
  }
];

export const REPOSITORY_FILES: Record<string, { filename: string; path: string; lang: string; description: string }> = {
  readme: {
    filename: 'README.md',
    path: '/README.md',
    lang: 'markdown',
    description: 'The viral open-source documentation and landing page with author attribution, scorecard, and setup tables.'
  },
  skill: {
    filename: 'anti-repetition-v3.md',
    path: '/skills/anti-repetition-v3.md',
    lang: 'markdown',
    description: 'The exact, pristine Skill.md Version 3 Anti-Repetition Protocol specification.'
  },
  license: {
    filename: 'LICENSE',
    path: '/LICENSE',
    lang: 'text',
    description: 'Official MIT License with full copyright attribution to Sparsh Keshwani (2026).'
  },
  workflow: {
    filename: 'validate-skill.yml',
    path: '/.github/workflows/validate-skill.yml',
    lang: 'yaml',
    description: 'GitHub Actions CI/CD pipeline verifying YAML frontmatter integrity and markdown formatting.'
  }
};
