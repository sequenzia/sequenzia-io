# Sequenzia

Personal portfolio website for Stephen Sequenzia, ML/AI Engineer.

## Tech Stack

- **Framework**: Next.js 15 (App Router, static export)
- **Styling**: TailwindCSS + DaisyUI
- **Content**: MDX/Markdown with YAML front-matter
- **Language**: TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (static export) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Content

Blog posts and store items are stored as markdown files in `src/content/`:

```
src/content/
├── blog/      # Blog posts
└── store/     # Store items
```

Each file uses YAML front-matter for metadata:

```yaml
---
title: "Post Title"
description: "Description"
pubDate: "Sep 10 2024"
heroImage: "/image.webp"
tags: ["tag1", "tag2"]
---

Your content here...
```

## Project Structure

```
src/
├── app/           # Next.js pages and routes
├── components/    # React components
├── content/       # MDX/Markdown content
├── lib/           # Utilities and types
└── config.ts      # Site configuration
```

## Themes

Two themes available via DaisyUI:
- `night` (dark) - default
- `winter` (light)

Toggle via the theme switcher in the header.

## License

MIT
