# CLAUDE.md

## TODO: Rename Package

> **This is the official Lumea Next.js template.** After cloning, rename the package in `package.json` from `"nextjs"` to your project name and remove this section.
>
> ```bash
> # Example: rename to "my-awesome-app"
> # 1. Edit package.json: "name": "my-awesome-app"
> # 2. Delete this TODO section from CLAUDE.md
> ```

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
bun dev          # Start development server (localhost:3000)
bun build        # Production build
bun start        # Start production server
bun lint         # Run ESLint
```

## Architecture

This is a Next.js 16 scaffold with App Router, React 19, and a complete shadcn/ui component library.

### Tech Stack
- **Next.js 16** with App Router (RSC enabled)
- **React 19** with TypeScript
- **Tailwind CSS v4** with `tw-animate-css` for animations
- **shadcn/ui** (new-york style) with Radix UI primitives
- **lucide-react** for icons
- **Bun** as package manager

### Path Aliases
Use `@/*` for imports from project root (configured in tsconfig.json).

### Key Directories
- `app/` - Next.js App Router pages and layouts
- `components/ui/` - shadcn/ui components (50+ pre-installed)
- `lib/utils.ts` - `cn()` utility for class merging (clsx + tailwind-merge)
- `hooks/` - Custom React hooks (includes `use-mobile.ts`)

### Styling
- CSS variables defined in `app/globals.css` using OKLCH color space
- Dark mode via `.dark` class with `@custom-variant dark (&:is(.dark *))`
- Theme colors: background, foreground, primary, secondary, muted, accent, destructive, etc.

### Forms & Validation
- `react-hook-form` with `@hookform/resolvers`
- `zod` for schema validation

### Additional Libraries
- `recharts` for charts
- `sonner` for toasts
- `vaul` for drawers
- `cmdk` for command palette
- `date-fns` + `react-day-picker` for dates
- `embla-carousel-react` for carousels
- `react-resizable-panels` for resizable layouts
