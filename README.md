# Portfolio

Personal portfolio built with [Astro](https://astro.build) + Tailwind CSS, deployed to GitHub Pages.

## Pages

| Page     | URL         | Content file                |
| -------- | ----------- | --------------------------- |
| Home     | `/`         | `src/pages/index.astro`     |
| About    | `/about`    | `src/data/about.json`       |
| Projects | `/projects` | `src/content/projects/*.md` |
| Awards   | `/awards`   | `src/data/awards.json`      |
| Courses  | `/courses`  | `src/data/courses.json`     |
| Blog     | `/blog`     | `src/content/blog/*.md`     |

---

## Adding content

### Blog post

Create `src/content/blog/my-post.md`:

```md
---
title: "Post Title"
date: 2025-06-01
description: "One-line summary shown in the list."
tags: ["topic", "learning"]
---

Write your post content here in Markdown.
```

### Project

Create `src/content/projects/my-project.md`:

```md
---
title: "Project Name"
description: "Short description."
tech: ["Python", "React", "PostgreSQL"]
github: "https://github.com/you/repo"
demo: "https://your-demo.com"
featured: true
date: 2025-06-01
---

## Overview

Write a longer writeup here.
```

### Award

Append to `src/data/awards.json`:

```json
{
  "title": "Award Name",
  "organization": "Organization",
  "year": 2025,
  "description": "What it was for.",
  "link": "https://..."
}
```

### Course

Append to `src/data/courses.json`:

```json
{
  "name": "Course Name",
  "provider": "Platform",
  "status": "planned",
  "date": "2025-S1",
  "link": "https://...",
  "certificate": "https://...",
  "description": "What it covers."
}
```

Status options: `"completed"` | `"in-progress"` | `"planned"`

- **`link`** — syllabus URL, shown as "Syllabus ↗" (optional)
- **`certificate`** — certificate URL, shown as "Certificate ↗" (optional)

---

## Show / hide pages

Edit `src/data/config.json` — set `"enabled": false` to hide a page from the nav:

```json
{ "key": "awards", "enabled": false }
```

---

## Customize

- **Name / tagline**: Edit `src/pages/index.astro` — find `Your Name` and the `roles` array in the `<script>` tag.
- **Bio / skills / contact**: Edit `src/data/about.json`.
- **GitHub link**: Search for `narumedsr-p` and replace with your username.
- **Repo base path**: If your repo is NOT named `narumedsr-p.github.io`, set `base: '/repo-name'` in `astro.config.mjs`.

---

## Deploy to GitHub Pages

1. Push this repo to GitHub as `narumedsr-p.github.io` (or any name).
2. Go to **Settings → Pages → Source** → set to **GitHub Actions**.
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

Every time you push a content change (new `.md`, edited `.json`), the site rebuilds and deploys within ~30 seconds.

---

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build to dist/
```
