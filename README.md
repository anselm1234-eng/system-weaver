# system-weaver-skills

<p align="center">
  <a href="docs/hero.mp4"><img src="docs/hero.webp" alt="System Weaver — transcend memorized diagrams. A reasoning loop that composes 20 architectural primitives into hyper-scale systems." width="100%"></a>
</p>
<p align="center"><sub>Crafted in code with Remotion — the exact scenes power the <a href="https://anselm1234-eng.com/system-weaver-skills/">site</a>'s hero (<code>site/src/motion/</code>).</sub></p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude_Code-Plugin-blueviolet)](https://code.claude.com/docs/en/plugins)
[![Skills](https://img.shields.io/badge/Cognitive_Blocks-22_Skills-brightgreen)](#architectural-primitives)
[![Self-contained](https://img.shields.io/badge/Runtime_deps-none-success)](#core-philosophy)
[![Providers](https://img.shields.io/badge/Providers-AWS%20%C2%B7%20Azure%20%C2%B7%20GCP%20%C2%B7%20Temporal-blue)](#provider-modularity)

**Stop memorizing dead diagrams. Start engineering living architectures.** 

Traditional system design resources teach you to pattern-match static solutions. The moment a real-world constraint shifts, those memorized blueprints shatter. **System Weaver** is an AI-native toolkit for Claude Code and autonomous agents. It provides 22 composable cognitive primitives that force your AI to reason through the problem: scoping requirements, calculating hard numbers, weighing trade-offs, and stress-testing failure modes—then scoring and persisting the final design.

---

## System Architecture

```mermaid
flowchart TB
    U["🧑 'design X' · system weaver interview"]
    U --> ENTRY["/design command&nbsp;&nbsp;·&nbsp;&nbsp;system-weaver-orchestrator agent"]
    ENTRY --> LOOP

    subgraph LOOP["Reasoning loop — GUIDE-driven, iterative (reason, don't memorize)"]
      direction LR
      C["1· Clarify"] --> E["2· Estimate"] --> H["3· Design"] --> T["4· Trade-offs"] --> F["5· Failure modes"] --> I["6· Iterate"]
      I -.-> C
    end

    LOOP -->|"invoke the owning skill (Skill tool)"| BB

    subgraph BB["Architectural Primitives — bottom-up catalog · compose, justify every choice"]
      direction TB
      L0["L0 Frame &nbsp;· requirements-scoping · back-of-the-envelope"]
      L1["L1 Edge &nbsp;&nbsp;· dns · load-balancing · content-delivery"]
      L2["L2 Services · api-design · service-decomposition"]
      L3["L3 State &nbsp;· data-storage · caching · blob-store · sequencer · sharded-counters · distributed-search"]
      L4["L4 Async &nbsp;· messaging-streaming · task-scheduling"]
      L5["L5 Correctness · consistency-coordination"]
      L6["L6 Ops &nbsp;&nbsp;&nbsp;· resilience-failure · observability · distributed-logging"]
      L7["L7 Growth · scaling-evolution"]
      L0 --- L1 --- L2 --- L3 --- L4 --- L5 --- L6 --- L7
    end

    BB -->|"each carries: options · trade-offs · stress · provider variants"| DIAG["architecture-diagram&nbsp;· self-contained HTML+SVG"]
    LOOP --> OUT["📄 Scored design doc → docs/design/  +  diagram"]
    DIAG --> OUT

    style U fill:#0b1220,stroke:#8aa8ff,color:#fff
    style ENTRY fill:#0b1220,stroke:#a78bfa,color:#fff
    style LOOP fill:#0b1220,stroke:#22d3ee,color:#fff
    style BB fill:#0b1220,stroke:#34d399,color:#fff
    style DIAG fill:#0b1220,stroke:#fbbf24,color:#fff
    style OUT fill:#0b1220,stroke:#4caf50,color:#fff