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

Valencia, Spain & Buenos Aires, Argentina  
Remote-first — open to international teams and flexible across time zones  
nicolas.baglivo@gmail.com · +34 610 418 657  
[nbaglivo.dev](https://nbaglivo.dev) *(built with Next.js)* · [linkedin.com/in/nbaglivo](https://linkedin.com/in/nbaglivo)

---

## Senior Product Engineer  

`TypeScript · Node.js · React · AWS`

Product engineer with 15+ years of experience building for the web. I work end-to-end — from understanding problems to shipping thoughtful, well-crafted experiences — with deep expertise in TypeScript and Node.js backends, and a strong personal focus on React and frontend craft.

I care about speed, iteration, and making thoughtful tradeoffs to deliver real impact.

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

### Search Platform Ownership & Strategic Reset

- Identified systemic ownership gaps in the core Search service powering critical product flows.
- Surfaced architectural drift: duplicated solutions, ad-hoc workarounds, data inconsistencies, and increasing latency.
- Highlighted operational and product risks caused by unclear ownership and limited Elasticsearch expertise.
- Identified domain boundaries between search and adjacent domains.
- Advocated for consolidation of efforts and elevation of Search as a strategic platform concern.
- Established clear ownership boundaries and initiated a product-oriented long-term vision between senior engineers and PMs.

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

- Designed and implemented a declarative, composable validation framework for API input and domain constraints before mature TypeScript validation libraries were widely available.
- Built a strongly typed API leveraging advanced TypeScript generics and functional composition patterns.
- Adopted across multiple backend services and maintained in production for several years.
- Later migrated to ecosystem-standard tooling once it became the better long-term fit.

### Engineering Quality Standards

- Authored and introduced a Testing Manifesto to standardize testing vocabulary, tooling, and expectations across engineering.
- Elevated shared quality standards by defining guiding principles, documenting practical guidelines, and partnering closely with teams to drive adoption.

---

## Professional Experience

### Fashion Cloud — Hamburg, Germany

2017 – 2025 (8+ years)

**Tech Lead** (2024 – 2025)

- Led architectural decisions for complex distributed systems.
- Partnered closely with product during discovery to validate feasibility and shape technically sound solutions.
- Defined service and team boundaries and domains, driving alignment between technical structure and team ownership.
- Defined engineering standards improving scalability, reliability, and maintainability.
- Contributed to company-wide technical strategy while remaining hands-on in critical initiatives.

**Tech:** TypeScript, Node.js, AWS (Lambda, Event Bridge, Fargate, S3), MongoDB, React, Terraform, Elasticsearch


**Team Lead** (2021 – 2024)

- Owned technical direction for a customer-facing product area.
- Drove alignment between product goals and engineering execution.
- Maintained active hands-on contribution across backend and frontend.
- Mentored engineers and strengthened engineering review culture.
- Played a key role in hiring decisions by conducting technical interviews and contributing to the final evaluation of candidates.

**Software Engineer** (2017 – 2021)

- Designed and implemented scalable APIs and backend services.
- Contributed to frontend applications and internal tooling (Angular & React).
- Led refactoring and architectural improvements of legacy systems.


### Devsar — La Plata, Argentina

**Fullstack Software Engineer** (2015 – 2017)

Fullstack engineer building web applications for a San Francisco–based startup.

**Tech:** TypeScript, Node.js, Angular, React, PostgreSQL, Python, Django  

### LIFIA UNLP — La Plata, Argentina

**Software Engineer** (2011 – 2015)

Developed and maintained web applications using JavaScript, HTML, Lua, Node.js and C++.

---

## Education

**Universidad Nacional de La Plata — Argentina**  
Analista Programador Universitario  
(Computer Science degree equivalent to Bachelor level)  
Graduated 2018

**CoA Academy**  
Chief of the Year (1-year leadership program) — 2021

---

## Technical Skills

**Frontend**  
React, Next.js, Tailwind, UI Architecture, Interaction & Motion

**Backend**  
TypeScript, Node.js, APIs, Async Processing

**Cloud & Infrastructure**  
AWS (Lambda, Event Bridge, Fargate, S3, API Gateway), Terraform, Vercel, Docker

**Data**  
MongoDB, PostgreSQL, Elasticsearch

**Architecture**  
Event-Driven Architecture, Service-Based Systems, Domain Driven Design, Systems Thinking, Distributed Systems

**Tools**  
Cursor, Github, Linear, Notion

---

## Languages

- English — Full professional proficiency
- Spanish — Native
- German — Intermediate (B1 TELC)
