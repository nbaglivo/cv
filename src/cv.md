---
theme:
  overrides:
    h1: "text-black text-4xl font-bold tracking-tight mt-0 mb-2"
    h2: "text-black text-2xl font-bold mt-2 mb-3"
    h3: "text-black text-xl font-semibold mt-6 mb-2"
    p: "text-base leading-relaxed mb-4 text-black"
    a: "text-black underline"
    ul: "list-disc pl-8 mb-4"
    ol: "list-decimal pl-8 mb-4"
    li: "text-black mb-2"
    strong: "font-semibold"
    em: "italic"
    blockquote: "text-black italic"
    code: "text-black font-mono text-sm tracking-wide"
    hr: "border-t border-gray-200 mt-8 mb-8"
---

# Nicolás Baglivo

Valencia, Spain  
nicolas.baglivo@gmail.com · +34 610 418 657  
[nbaglivo.dev](https://nbaglivo.dev) · [linkedin.com/in/nbaglivo](https://linkedin.com/in/nbaglivo)  


---

I find where organisations lose energy — and fix it.

After 15 years building systems and teams, I've learned the most important problems aren't always the ones you're assigned. They're the ones nobody owns but everyone feels: duplicated work, inconsistent patterns, growing cognitive load, friction that compounds quietly until it becomes expensive.

I work at the intersection of technical systems and organisational structure. I diagnose what's slowing teams down, build the shared capability that fixes it once instead of twelve times, and create conditions where developers can do their best work — and where that work drives real product outcomes. My measure of success: does the right behavior become the easy behavior, for everyone?

I don't operate from a distance. I go into the problem — understand it properly, ship something real, and stay to see the outcome. Whatever the work is — product, platform, DX — I see it through to a clear result. No half-done handoffs. No decisions made from above that land on someone else to care about.

I write to create alignment. And I use AI to close the gap — not as a shortcut, but as a way to move fast without losing ownership of design and long-term system health.

---

## Selected Contributions

### Order Platform Team Creation

Multiple product teams were solving the same order-related problems independently — diverging implementations, duplicated logic, inconsistent behaviour across products. Nobody owned the problem because everyone owned a piece of it.

I diagnosed the structural gap and proposed the solution: a dedicated platform team whose mandate was to centralise core order domain capabilities and serve the teams depending on them. I led it end-to-end — defined the scope, designed the shared services, hired the team from both inside and outside the organisation, and onboarded them into the mission.

I introduced a platform-as-a-product mindset to how we operated. That meant doing discovery with stream-aligned teams to understand their actual needs, not just building what we assumed was right. What we learned shaped what we built — and we systematically brought those capabilities back to the teams that needed them, creating opportunities rather than just solving problems reactively.

We published SDKs that stream-aligned teams used to integrate with the order management system — so consuming platform capabilities was straightforward and consistent, without each team having to figure it out independently.

Stream-aligned teams moved faster, duplication dropped, and domain expertise had a home.

---

### High-Scale Async Pricing Ingestion Pipeline

A critical performance bottleneck was slowing down the business — processing 1M pricing records took over 24 hours. It wasn't my problem to fix. I kept flagging it anyway until I was given the space to own it.

I scoped the solution end-to-end: interviewed internal stakeholders, mapped adjacent integrations, wrote an RFC, gathered feedback from peers and the future owning team, and made the final architectural decisions where consensus ran out.

Working closely with the infrastructure team, I implemented the pipeline using AWS Lambda, EventBridge, and API Gateway — provisioned entirely through Terraform. Along the way I built reusable Terraform modules that simplified resource creation for other teams across the company.

The result: processing time dropped from 24h to ~30 minutes. Compute costs fell by 10×. The system now can handle ~10M pricing records per day under burst-heavy workloads.

---

### Declarative Validation Framework

Before Zod existed, there was no consistent way to handle API input validation and domain constraints across the codebase. Every team was solving it differently.

I designed and built a declarative, composable validation framework that became the company standard — adopted across the entire organisation and used in production for years. When Zod eventually emerged and matured, we replaced it. Not because the internal library had failed, but because maintaining something in-house couldn't justify competing with a thriving ecosystem.

Building it was the right call. Replacing it was too.

---

### Mocha to Jest Migration Codemod

During a company-wide migration from Mocha to Jest, teams were spending hours on work they hated. The side effect was predictable: shortcuts. Tests getting disabled rather than migrated, just to reduce the time cost. The migration was creating a quiet quality problem alongside the visible productivity one.

I built a codemod targeting our specific way of writing tests — including testing tools I had introduced earlier — to automate the migration. The bulk of the tests moved without any manual effort. The rest needed significantly less intervention than before.

I stopped automating deliberately. When the complexity of a case and its occurrence rate didn't justify the investment in automation, I left it for manual handling. The goal wasn't to automate everything — it was to remove the part that was causing shortcuts and burning time.

This was before AI could have done something like this. It took real effort to build. And it was worth it.

---

### Engineering Standards — Testing Manifesto & Event-Driven Architecture Guide

Two of the more impactful things I wrote at Fashion Cloud weren't code.

The Testing Manifesto emerged from a pattern I kept seeing: tests that were either too brittle, too mocked, or too disconnected from real behaviour to catch anything meaningful. I wrote a company-wide guide that defined what good tests looked like in our context — what to test, what not to test, and why. It became the reference point for code review conversations and onboarding across a ~40-person engineering org. I also built tooling around it — shared utilities and helpers that made following the standard the path of least resistance. Less thinking, less effort, easier to do the right thing by default.

The Event-Driven Architecture Guide came from a different gap: teams were making inconsistent decisions about when to use events versus direct service-to-service calls. I defined shared standards for inter-service communication, clarified the tradeoffs, and gave teams a clear framework to reason from. It reduced architectural drift and gave new engineers a mental model to work with from day one.

Both documents are still in use. That's the kind of impact I care about — not just solving the problem once, but making it easier for everyone else to solve it the right way going forward.

---

### Order Management System

Architected and owned a resilient order management system handling thousands of daily transactions with near-zero tolerance for failure. Designed bounded contexts for order lifecycles, notifications, and inventory management, and exposed APIs to internal teams, third-party integrations, and partner systems.

The first version had no way to resend orders. When integrations failed — APIs going down, services silently losing records — the fix was manual intervention. My manual intervention, on request, every time. I watched colleagues dealing with customers absorb the cost of it. Not my managers, not the PMs — the people actually feeling it.

I built a resend mechanism in a day. Went slightly rogue doing it. Completely worth it.

From there, fault-tolerant retry mechanisms handled transient failures automatically. Operational incidents dropped to near-zero. Nobody had to babysit the system anymore.

---

### Unfold *(prototype)*

Architecture drift is expensive because it's discovered too late — in code review, or worse, after shipping. The knowledge to prevent it usually exists, written in ADRs, but it sits dormant and disconnected from the tools that could use it.

Unfold changes that. When an ADR is pushed to GitHub, a GitHub app triggers an LLM that analyzes the decision and updates a structured architecture JSON committed back to the repo. That file becomes the living model of your system — human-readable, diffable, and reviewable alongside the decision that changed it.

The JSON feeds a visualization tool that shows your architecture as it emerges from your decisions. An AI layer lets you consult it directly — asking questions grounded in the actual history and reasoning of the system, not just the current state of the code.

The result: architecture checking shifts left. Plans get validated against existing decisions before a line is written. Drift gets caught during design, not during review.

*Part of an ongoing series on AI-assisted architectural thinking — [nbaglivo.dev](https://static.nbaglivo.dev/writing/giving-claude-architectural-memory/)*

---

### cvmd.sh — CV as Code Platform *(personal project)*

[cvmd.foreignkey.sh](https://cvmd.foreignkey.sh)

Writing a CV shouldn't require a designer, a PDF tool, or a Word document. I built cvmd.sh to remove that friction entirely — write in Markdown, push to GitHub, get a hosted page and a PDF automatically.

Built solo end-to-end: a monorepo with three apps — marketing site, platform, and a dedicated PDF generation service. Includes real-time deployment monitoring with live log streaming so users can observe and rerun failed deployments.

The interesting part wasn't the technical stack. It was treating a mundane, painful developer task as a product worth solving properly.

---

## Professional Experience

### Fashion Cloud — Hamburg, Germany (2017 – 2025)

Joined when the company was ~13 people and a 4-person engineering team. Left with 130+ employees and ~40 engineers. Eight years of growing with a company — and helping shape how it grew.

**Tech Lead (2024 – 2025)**

Operated at the intersection of technical architecture and organisational structure. The role came with a loose mandate — I shaped it. Defined service boundaries and team domains so that ownership was clear and Conway's Law worked in our favour rather than against us. Set engineering standards at company level. Partnered with product during discovery to catch feasibility problems early, before they became expensive. Stayed hands-on throughout.

**Team Lead (2021 – 2024)**

Led a customer-facing product area end-to-end — technical direction, roadmap, hiring, and the bridge between product goals and engineering execution.

The part I cared most about: making sure everyone knew they had a part to play — not generically, but specifically. What were their particular skills, traits, character that made them well-suited for something real? For senior engineers that meant finding where they could have the most impact and making sure they owned it. For juniors it was more about creating space to find their thing, learn, and absorb as much as possible.

The clearest outcome: grew a senior engineer into a Team Lead role. His progression created the space for mine.

**Software Engineer (2017 – 2021)**

The foundation years — and where the pattern started. Early on I noticed a new product that nobody had really claimed. The existing engineers had attachments to other parts of the system they'd built and shaped over years. This one was open.

I took it. Not because I was assigned it, but because I saw the space and wanted the ownership. Working closely with the CTO to shape it gave me responsibility and proximity to decision-making earlier than I would have had otherwise. That product later became the area I led as Team Lead. The decision I made in year one set the foundation for everything that came after.

Also designed and built scalable APIs, backend services, and frontend applications. Led refactoring and architectural improvements of legacy systems — including some I had built myself.

---

### Devsar — La Plata, Argentina

**Fullstack Software Engineer (2015 – 2017)**

Fullstack engineer building web applications for a San Francisco–based startup. Early lesson in working with a demanding, fast-moving founder — learned to set expectations clearly, articulate constraints, and say no when something wasn't possible. That kind of pressure teaches you to communicate precisely or pay for it.

**Tech:** TypeScript, Node.js, Angular, React, PostgreSQL

---

### LIFIA UNLP — La Plata, Argentina

**Software Engineer (2011 – 2015)**

Developed and maintained web applications using JavaScript, HTML, and Node.js.

---

## Education

**Universidad Nacional de La Plata — Argentina**
Analista Programador Universitario
Graduated 2018

**CoA Academy**
Chief of the Year (1-year leadership program) — 2021

---

## Skills

**How I work**
Systems thinking · Organisational design · Technical writing · AI-assisted development · Context engineering · Cross-functional alignment · Setting expectations under pressure

**Frontend**
React · Next.js · Tailwind · UI Architecture

**Backend**
TypeScript · Node.js · APIs · Async Processing

**Cloud & Infrastructure**
AWS (Lambda, EventBridge, Fargate, S3, API Gateway) · Terraform · Vercel · Docker

**Data**
PostgreSQL · MongoDB · Elasticsearch

**Architecture**
Event-Driven Architecture · Domain-Driven Design · Distributed Systems

**AI**
LLM integration · Context engineering · AI-assisted development workflows · Agent prototyping · GitHub Apps + LLM pipelines

**Languages**
English — Full professional proficiency
Spanish — Native
German — Intermediate (B1)
