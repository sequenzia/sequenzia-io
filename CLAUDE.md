# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Stephen Sequenzia (ML/AI Engineer) built with Next.js 15, TypeScript, TailwindCSS, and MDX content support. Configured for static site export.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (static export to out/)
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Technology Stack
- **Next.js 15** with App Router and static export (`output: 'export'`)
- **TailwindCSS + DaisyUI** for styling (themes: `night` dark, `winter` light)
- **MDX/Markdown** content with gray-matter front-matter parsing
- **TypeScript** with path aliases (`@/` → `src/`, `@components/` → `src/components/`)

### Content System
Blog posts and store items live in `src/content/` as markdown files with YAML front-matter:

```yaml
---
title: "Post Title"
description: "Description"
pubDate: "Sep 10 2024"
heroImage: "/image.webp"
tags: ["tag1", "tag2"]
---
```

Content loading functions in `src/lib/content.ts`:
- `getBlogPosts()`, `getBlogPostBySlug(slug)`
- `getStoreItems()`, `getStoreItemBySlug(slug)`
- `getAllTags()`, `getPostsByTag(tag)`

### Key Directories
- `src/app/` - Next.js App Router pages
- `src/components/layout/` - Header, Footer, SideBar components
- `src/components/ui/` - Reusable Card components
- `src/content/blog/` - Blog post markdown files
- `src/content/store/` - Store item markdown files
- `src/lib/` - Utilities and TypeScript types
- `src/config.ts` - Site-wide settings (title, description, slug generation)

### Layout Pattern
Two-column layout with responsive drawer navigation:
- Sidebar with navigation and social links (always visible on desktop, toggleable drawer on mobile)
- Main content area with header containing hamburger toggle

### Theme System
ThemeProvider (client component) uses React Context + localStorage. DaisyUI handles theme switching between `night` and `winter` themes.

### Static Generation
- `generateStaticParams()` pre-renders dynamic routes (`[slug]` pages)
- RSS feed auto-generated at `/rss.xml`
- Sitemap auto-generated at `/sitemap.xml`
