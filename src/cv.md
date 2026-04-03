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
    hr: "border-t border-gray-200 mt-10 mb-10"
---

# Nicolás Baglivo

Valencia, Spain & Buenos Aires, Argentina · Remote-first  
nicolas.baglivo@gmail.com · +34 610 418 657  
[nbaglivo.dev](https://nbaglivo.dev) *(built with Next.js)* · [linkedin.com/in/nbaglivo](https://linkedin.com/in/nbaglivo)

---

## Senior Product Engineer  

`TypeScript · Node.js · React · AWS`

Product engineer with 15+ years of experience building for the web.  
I work end-to-end — from system architecture to shipped product — with deep expertise in TypeScript and Node.js backends and a strong personal focus on React and frontend craft.

I work with a heavily AI-assisted workflow, am actively experimenting with agents and LLMs, and care about speed, iteration, and making thoughtful tradeoffs to deliver real impact.

---

## Selected Contributions

### High-Scale Async Pricing Ingestion Platform

- Reduced processing time for **1M pricing records from >24h to ~30 minutes** and lowered compute costs by **~10×** by redesigning the pricing ingestion pipeline.
- Led discovery and requirements definition, establishing processing SLAs, consistency guarantees, and operational constraints for large partner price list imports.
- Designed a distributed ingestion architecture handling **~10M pricing records/day** under burst-heavy workloads.
- Implemented a serverless processing pipeline using **AWS Lambda, Event Bridge and API Gateway** to dynamically scale with ingestion bursts.


### Order Platform Team Creation & Shared Services Architecture

- Identified growing architectural fragmentation and duplicated implementations across multiple order-related product teams.
- Proposed and led the creation of a dedicated Order Platform team to centralize core order domain capabilities.
- Designed shared services and platform components used by multiple stream-aligned teams, reducing duplication and ensuring consistent behavior across products.
- Consolidated domain expertise and enabled teams to reuse common functionality, improving development speed and long-term maintainability.
- Staffed the team by hiring and onboarding engineers both internally and externally.

### cvmd.sh — CV as Code Platform *(personal project)*

[cvmd.foreignkey.sh](https://cvmd.foreignkey.sh)

- Built a full-stack platform that treats CVs as code — write in 
  Markdown, push to GitHub, get a hosted page and PDF automatically.
- Designed a monorepo with three apps: marketing site, platform, and 
  a dedicated PDF generation service (Hono on Railway).
- Built real-time deployment monitoring with live log streaming so 
  users can observe and rerun failed deployments.
- Stack: Next.js, Hono, Neon, Vercel Storage, Railway, Vercel.

### Event-Driven Subsystem Communication Standards

- Defined shared standards for inter-service communication across subsystems.
- Introduced event-driven patterns using AWS EventBridge.
- Clarified when to prefer events over direct service-to-service communication.
- Improved decoupling, scalability, and long-term system evolution.

### Order Management System Architecture

- Architected and owned a resilient Order Management system handling thousands of daily transactions with near-zero tolerance for failure.
- Designed bounded contexts for order lifecycles, notifications, and inventory management.
- Exposed APIs to internal platform, third-party integrations, and partner systems.
- Designed fault-tolerant retry mechanisms ensuring EDI transactions completed despite transient integration failures (APIs, FTP, email).
- Reduced operational incidents to near-zero downtime, eliminating manual intervention at scale.

### Declarative Validation Framework (Pre-Ecosystem Maturity)

- Designed and implemented a declarative, composable validation framework for API input and domain constraints.
- Built a strongly typed API leveraging advanced TypeScript generics and functional composition patterns.

---

## Professional Experience

### Fashion Cloud — Hamburg, Germany (2017 – 2025)


**Tech Lead (2024 – 2025)**

- Led architectural decisions for complex distributed systems.
- Partnered closely with product during discovery to validate feasibility and shape technically sound solutions.
- Defined service and team boundaries and domains, driving alignment between technical structure and team ownership.
- Defined engineering standards improving scalability, reliability, and maintainability.
- Contributed to company-wide technical strategy while remaining hands-on in critical initiatives.


**Team Lead (2021 – 2024)**

- Led technical direction for a customer-facing product area, 
  bridging product goals and engineering execution.
- Stayed hands-on across backend and frontend while managing 
  the team's technical roadmap.
- Contributed to hiring decisions and strengthened code review culture.
- Mentored engineers at multiple levels, including growing a senior 
  engineer into a Team Lead role — enabling both his progression 
  and my own transition.

**Software Engineer (2017 – 2021)**

- Designed and implemented scalable APIs and backend services.
- Contributed to frontend applications and internal tooling (Angular & React).
- Led refactoring and architectural improvements of legacy systems.


### Devsar — La Plata, Argentina

**Fullstack Software Engineer (2015 – 2017)**

Fullstack engineer building web applications for a San Francisco–based startup.

**Tech:** TypeScript, Node.js, Angular, React, PostgreSQL

### LIFIA UNLP — La Plata, Argentina

**Software Engineer (2011 – 2015)**

Developed and maintained web applications using JavaScript, HTML, Node.js and C++.

---

## Education

**Universidad Nacional de La Plata — Argentina**  
Analista Programador Universitario
Graduated 2018

**CoA Academy**  
Chief of the Year (1-year leadership program) — 2021

---

## Skills

**Frontend**
React, Next.js, Tailwind, UI Architecture

**Backend**
TypeScript, Node.js, APIs, Async Processing

**Cloud & Infrastructure**
AWS (Lambda, EventBridge, Fargate, S3, API Gateway), 
Terraform, Vercel, Docker

**Data**
MongoDB, PostgreSQL, Elasticsearch

**Architecture**
Event-Driven Architecture, Domain Driven Design, 
Distributed Systems, Systems Thinking

**AI**
LLM integration, Agent prototyping, AI-assisted development 
(Cursor, Claude)

**Languages**
English — Full professional proficiency
Spanish — Native
German — Intermediate (B1 TELC)
