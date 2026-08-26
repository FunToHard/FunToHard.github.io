# AGENTS.md: AI Agent Contribution & Authoring Guide for funtohard philosophy

Instructions for autonomous AI agents, LLM assistants, and human authors writing philosophy research papers and thought streams for `funtohard.github.io`.

---

## 1. Editorial Policy & Principles
- **Academic Tone**: Rigorous, analytical philosophy, formal logic, and ethical inquiry.
- **Strict Zero-Emoji Policy**: No emojis in titles, abstracts, headings, or metadata tags.
- **Text-First Layout**: Publications lead directly with titles, abstracts, and arguments without decorative cover banners.

---

## 2. Article File Locations
- **Research Papers**: `src/content/research/<slug>.md`
- **Thought Essays**: `src/content/thoughts/<slug>.md`

---

## 3. Frontmatter Schemas

### A. Research Papers (`src/content/research/<slug>.md`)
```yaml
---
title: "The Horizon of Meaning: Epistemological Limits of Definition"
description: "An analytical examination of semantic observer effects, definition regress, and natural language syntax."
pubDate: 2026-08-09
updatedDate: 2026-08-10  # Optional
category: "Epistemology" # Options: Epistemology, Ethics, Logic, Metaphysics, Mind, Philosophy
tags: ["Epistemology", "Philosophy of Language", "Semantics"]
author: "funtohard"      # Default: "funtohard"
featured: true          # Default: false
draft: false            # Default: false
---
```

### B. Thoughts Stream (`src/content/thoughts/<slug>.md`)
```yaml
---
title: "The Epistemology of the Machine: Why 'Undefined Behavior' Supersedes 'Unknown Behavior'"
description: "A philosophical and technical examination of non-determinism in C/C++ systems programming."
pubDate: 2026-08-09
tags: ["Epistemology", "Philosophy of Computer Science", "Systems Programming"]
draft: false            # Default: false
---
```

---

## 4. Formatting Rules
- **Justified Alignment**: Body paragraphs automatically use `text-align: justify`.
- **LaTeX / KaTeX Math**: Use `$...$` for inline logic formulas and `$$...$$` for display math blocks.
- **Right-Side Figures**: Use `<figure class="img-wrap-right"><img src="/images/..." alt="..." /><figcaption>...</figcaption></figure>`.
- **Citations**: Citations can be exported in BibTeX, APA, Chicago, and MLA formats.

---

## 5. Build & Verification
```bash
npm run build
```
