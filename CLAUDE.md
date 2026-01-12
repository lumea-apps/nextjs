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

---

## Tailwind CSS v4 Fonts (CRITICAL)

Tailwind CSS v4 uses a **CSS-first configuration** approach. All font configuration happens in CSS using the `@theme` directive, NOT in `tailwind.config.js`.

### Current Font Setup

This scaffold uses `next/font` with Tailwind v4:

**1. layout.tsx** - Font loading via next/font:
```tsx
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",  // Injects CSS variable
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Variables applied to <body>
<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
```

**2. globals.css** - Tailwind theme integration:
```css
@import "tailwindcss";

@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

### @theme vs @theme inline

| `@theme` | `@theme inline` |
|----------|-----------------|
| Creates global CSS variables | Does NOT create CSS variables |
| Values can be overridden | Values CANNOT be overridden |
| Use for static font values | Use when referencing external variables (e.g., next/font) |

**Rule**: Use `@theme inline` when your fonts come from CSS variables injected by `next/font`. Use `@theme` when defining fonts directly.

### Adding Custom Fonts

#### Method 1: Google Fonts via next/font (Recommended)

**Step 1**: Add font in `layout.tsx`:
```tsx
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

// Apply to <html> or <body>
<html className={`${inter.variable} ${playfair.variable}`}>
```

**Step 2**: Register in `globals.css`:
```css
@import "tailwindcss";

@theme inline {
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  --font-display: var(--font-playfair), ui-serif, Georgia, serif;
  --font-mono: var(--font-geist-mono), ui-monospace, monospace;
}
```

**Step 3**: Use in components:
```tsx
<h1 className="font-display text-4xl">Heading with Playfair</h1>
<p className="font-sans">Body text with Inter</p>
```

#### Method 2: Local Font Files

**Step 1**: Add font files to `public/fonts/`

**Step 2**: Configure in `layout.tsx`:
```tsx
import localFont from 'next/font/local';

const customFont = localFont({
  src: [
    { path: '../public/fonts/CustomFont-Regular.woff2', weight: '400' },
    { path: '../public/fonts/CustomFont-Bold.woff2', weight: '700' },
  ],
  variable: '--font-custom',
  display: 'swap',
});
```

**Step 3**: Register in `globals.css`:
```css
@theme inline {
  --font-custom: var(--font-custom), sans-serif;
}
```

#### Method 3: Pure CSS (Without next/font)

**CRITICAL**: `@import url()` MUST come BEFORE `@import "tailwindcss"`

```css
/* CORRECT ORDER - URL imports FIRST */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap");

/* THEN Tailwind */
@import "tailwindcss";

/* FINALLY theme definition */
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Playfair Display", ui-serif, Georgia, serif;
}
```

#### Method 4: Local @font-face (Pure CSS)

```css
@import "tailwindcss";

/* @font-face AFTER tailwind import, OUTSIDE @layer */
@font-face {
  font-family: "CustomFont";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/CustomFont-Regular.woff2") format("woff2");
}

@font-face {
  font-family: "CustomFont";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("/fonts/CustomFont-Bold.woff2") format("woff2");
}

@theme {
  --font-custom: "CustomFont", sans-serif;
}
```

### Common Errors and Solutions

#### Error 1: Font class not working (e.g., `font-display` does nothing)

**Cause**: Using `@theme` instead of `@theme inline` with next/font variables.

**Wrong**:
```css
@theme {
  --font-sans: var(--font-inter);  /* Variable not resolved! */
}
```

**Correct**:
```css
@theme inline {
  --font-sans: var(--font-inter);  /* Works with external variables */
}
```

#### Error 2: Import order error / CSS parse error

**Cause**: `@import url()` placed AFTER `@import "tailwindcss"`.

**Wrong**:
```css
@import "tailwindcss";
@import url("https://fonts.googleapis.com/...");  /* TOO LATE! */
```

**Correct**:
```css
@import url("https://fonts.googleapis.com/...");  /* URL imports FIRST */
@import "tailwindcss";
```

#### Error 3: Font weight not applying

**Cause**: `@font-face` inside `@layer base` can break font-weight.

**Wrong**:
```css
@layer base {
  @font-face {
    font-family: "MyFont";
    font-weight: 700;  /* May not work! */
    src: url("/fonts/MyFont-Bold.woff2") format("woff2");
  }
}
```

**Correct**:
```css
/* @font-face OUTSIDE @layer */
@font-face {
  font-family: "MyFont";
  font-weight: 700;
  src: url("/fonts/MyFont-Bold.woff2") format("woff2");
}
```

#### Error 4: Missing fallback fonts (FOUC - Flash of Unstyled Content)

**Wrong**:
```css
@theme {
  --font-sans: "Inter";  /* No fallbacks! */
}
```

**Correct**:
```css
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
```

#### Error 5: CSS variable not applied (font-[family-name] not working)

**Cause**: Forgot to add the CSS variable class to `<html>` or `<body>`.

**Check layout.tsx**:
```tsx
// The variable classes MUST be applied
<body className={`${geistSans.variable} ${geistMono.variable}`}>
```

### Quick Reference: Font Variable Naming

| Tailwind Class | CSS Variable | Usage |
|---------------|--------------|-------|
| `font-sans` | `--font-sans` | Default body text |
| `font-serif` | `--font-serif` | Serif text |
| `font-mono` | `--font-mono` | Code, monospace |
| `font-display` | `--font-display` | Custom: headings |
| `font-body` | `--font-body` | Custom: body |
| `font-{name}` | `--font-{name}` | Any custom name |

### Tailwind v3 vs v4 Migration

| Aspect | Tailwind v3 | Tailwind v4 |
|--------|-------------|-------------|
| Config File | `tailwind.config.js` | CSS-first (`globals.css`) |
| Font Definition | `fontFamily: { sans: ['Inter'] }` | `--font-sans: "Inter", sans-serif;` |
| Import | `@tailwind base/components/utilities` | `@import "tailwindcss";` |
| Namespace | `fontFamily` object | `--font-*` CSS variables |
