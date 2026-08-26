# AGENTS.md: AI Agent Contribution & Authoring Guide

> Instructions for autonomous AI agents, LLM assistants, and human contributors publishing philosophy research publications and thought streams on `funtohard.github.io`.

---

## 1. Editorial Policy & Core Principles

- **Rigorous Academic Tone**: Maintain formal philosophical, logical, and analytical rigor (modeled on the *Stanford Encyclopedia of Philosophy*, *Oxford Academic*, and *Mind Journal*).
- **Strict Zero-Emoji Policy**: Emojis are strictly prohibited across all article titles, abstracts, headings, lists, metadata tags, and UI elements. Use classical typographic symbols (e.g., `§`, `¶`, `•`, `-`, `→`) or plain text where demarcation is necessary.
- **Text-First Presentation**: Publications do not use decorative cover banners. Focus is placed directly on titles, abstracts, logical formalisms, citations, and taxonomies.

---

## 2. Content Directories & Collections

All publications are stored as file-based Markdown collections in `src/content/`:

1. **Philosophy Research Papers**: [`src/content/research/<slug>.md`](./src/content/research/)
   - Long-form analytical philosophy, formal logic proofs, epistemology, ethics, and metaphysics publications.
2. **Thoughts Stream & Micro-Essays**: [`src/content/thoughts/<slug>.md`](./src/content/thoughts/)
   - Short reflections, philosophical commentary on computation and ontology, conceptual notes, and aphorisms.

---

## 3. Frontmatter Schemas

Every Markdown document **must** include valid YAML frontmatter strictly adhering to the Zod schemas in [`src/content/config.ts`](./src/content/config.ts).

### A. Research Paper Schema (`src/content/research/<slug>.md`)

```yaml
---
title: "The Horizon of Meaning: Epistemological Limits of Definition and the Syntax-Normalization Conflict"
description: "An epistemological investigation into the paradox of linguistic definition, the semantic observer effect, and the tension between prescriptivist syntactical logic and descriptivist normalized usage."
pubDate: 2026-08-09
updatedDate: 2026-08-10  # Optional
author: "funtohard"      # Default: "funtohard"
category: "Epistemology" # Allowed: Epistemology, Ethics, Logic, Metaphysics, Mind, Philosophy
tags: ["Epistemology", "Philosophy of Language", "Semantics", "Linguistics"]
featured: true          # Default: false
draft: false            # Default: false
---
```

### B. Thought Essay Schema (`src/content/thoughts/<slug>.md`)

```yaml
---
title: "The Epistemology of the Machine: Why 'Undefined Behavior' Supersedes 'Unknown Behavior' in Systems Programming"
description: "A philosophical and technical examination of non-determinism in C/C++ systems programming, comparing the cognitive limits of human programmers against the formal semantic contracts of compilers."
pubDate: 2026-08-09
tags: ["Epistemology", "Philosophy of Computer Science", "Systems Programming", "Logic"]
draft: false            # Default: false
---
```

---

## 4. Content Formatting & Typography Rules

### A. Symbolic Logic & LaTeX Equations
KaTeX compiles mathematical formulas and symbolic logic proofs into zero-JS static HTML during the build process:
- **Inline Formulas**: Enclose in single dollar signs:
  ```markdown
  The epistemic closure principle asserts that $\mathcal{K}_a(p) \wedge \mathcal{K}_a(p \rightarrow q) \rightarrow \mathcal{K}_a(q)$.
  ```
- **Display Math Blocks**: Enclose in double dollar signs:
  ```latex
  $$\forall x \, (\text{Defined}(x) \rightarrow \exists y \, (\text{Grounds}(y, x) \wedge y \prec x))$$
  ```

### B. Right-Aligned Images with Automatic Word Wrapping & Captions
Body paragraphs automatically format with **justified alignment** (`text-align: justify; text-justify: inter-word;`).

To anchor an illustrative diagram or historical figure on the right side of the text:
```html
<figure class="img-wrap-right">
  <img src="/images/xanthippe.png" alt="Xanthippe pouring water on Socrates" />
  <figcaption>Xanthippe pouring water on Socrates. Source: Historical Archive</figcaption>
</figure>
```
*Note: The image and caption float together on the right; text wraps cleanly around the container, and the element gracefully collapses into a stacked column on mobile viewports.*

### C. Academic Citations & Footnotes
- Use numbered superscript markers or standard Markdown list footnotes at the bottom of research publications.
- Readers can export citations with 1 click via the built-in Citation Modal supporting **BibTeX**, **APA 7th**, **Chicago 17th**, and **MLA 9th**.

---

## 5. Built-in Scholarly Reading Suite

All published articles automatically inherit the following capabilities via `ArticleLayout.astro`:
- **Reading Comfort Dock**: Real-time Serif (*Newsreader*), Sans (*Inter*), and Mono (*JetBrains Mono*) switcher with font size scaling and persistent `localStorage` memory.
- **Distraction-Free Focus Mode**: Reduces ambient header, footer, and sidebar contrast for deep study.
- **Floating Highlight Toolbar**: Allows readers to select text to generate formatted Markdown blockquotes or search the repository.
- **Active Scrollspy ToC**: Dynamic Table of Contents sidebar tracking scroll progress.
- **Search Indexing**: Pagefind automatically indexes article content marked with `data-pagefind-body`.

---

## 6. Verification & Build Commands

Before committing any content or code changes, verify that the project passes schema validation and builds cleanly:

```bash
# Validate TypeScript schemas, build static pages, and generate Pagefind search indexes
npm run build
```
