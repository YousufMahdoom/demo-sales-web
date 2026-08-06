---
name: ui_ux_pro_max
description: >
  Activates elite-level UI/UX design mode for all web, app, and interface
  creation tasks. Triggers when the user asks to build, design, redesign,
  create, or improve any UI, web page, landing page, dashboard, component,
  or visual interface. This skill enforces premium design standards, modern
  aesthetics, and delightful micro-interactions across every output.
---

# UI UX Pro Max Skill

You are now operating in **UI UX Pro Max** mode. Every interface you produce must feel like it was designed by a world-class team at a top-tier product company (think Linear, Vercel, Stripe, Apple, Figma). Mediocre output is unacceptable.

---

## Core Philosophy

Every pixel, spacing unit, color choice, and animation must serve a purpose. Aim for:
- **Delight** — Users feel something positive on first load
- **Clarity** — Information hierarchy is instantly scannable
- **Confidence** — The UI feels trustworthy, stable, and premium
- **Fluidity** — Interactions feel alive, smooth, and responsive

---

## Color System

NEVER use raw system colors (red, blue, #000). Always use a curated, intentional palette.

### Rules
1. Pick a primary hue using HSL for precision (e.g., `hsl(225, 80%, 60%)`)
2. Build a 10-step scale from 50 (lightest) to 950 (darkest) using CSS custom properties
3. Always include: primary, neutral/gray, accent, surface, error, success, warning
4. Dark mode first — design dark mode as default; provide light mode as alternate
5. All text must meet WCAG AA (4.5:1 normal text, 3:1 large text)

### Design Token Template
```css
:root {
  --color-primary-50:  hsl(225, 80%, 97%);
  --color-primary-400: hsl(225, 75%, 65%);
  --color-primary-500: hsl(225, 80%, 55%);
  --color-primary-600: hsl(225, 82%, 48%);

  --color-surface-0: hsl(230, 20%, 6%);
  --color-surface-1: hsl(230, 18%, 9%);
  --color-surface-2: hsl(230, 16%, 13%);
  --color-surface-3: hsl(230, 14%, 18%);

  --color-gray-100: hsl(230, 10%, 92%);
  --color-gray-400: hsl(230, 8%, 55%);

  --color-accent:   hsl(280, 85%, 65%);
  --color-success:  hsl(145, 70%, 50%);
  --color-error:    hsl(5, 85%, 60%);
  --color-warning:  hsl(38, 95%, 55%);
}
```

### Gradient Techniques
- **Mesh gradients**: Multiple radial gradients layered with different opacities
- **Glow effects**: `box-shadow` with large blur radii and brand colors
- **Glassmorphism**: `backdrop-filter: blur(20px)` with semi-transparent surfaces
- **Gradient text**: `background-clip: text; color: transparent;`

---

## Typography System

Always import from Google Fonts. Use fluid typography with `clamp()`.

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --text-xs:   clamp(0.64rem, 0.6rem  + 0.2vw,  0.75rem);
  --text-sm:   clamp(0.8rem,  0.75rem + 0.25vw, 0.875rem);
  --text-base: clamp(1rem,    0.95rem + 0.25vw, 1rem);
  --text-lg:   clamp(1.125rem, 1rem   + 0.6vw,  1.25rem);
  --text-xl:   clamp(1.266rem, 1.1rem + 0.8vw,  1.5rem);
  --text-2xl:  clamp(1.424rem, 1.2rem + 1.1vw,  1.875rem);
  --text-3xl:  clamp(1.602rem, 1.3rem + 1.5vw,  2.25rem);
  --text-4xl:  clamp(1.802rem, 1.4rem + 2vw,    3rem);
  --text-5xl:  clamp(2.027rem, 1.5rem + 2.6vw,  3.75rem);
  --text-6xl:  clamp(2.281rem, 1.6rem + 3.4vw,  4.5rem);

  --font-display: 'Outfit', sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', monospace;

  --fw-light:    300;
  --fw-regular:  400;
  --fw-medium:   500;
  --fw-semibold: 600;
  --fw-bold:     700;
  --fw-extrabold: 800;

  --lh-tight:   1.1;
  --lh-snug:    1.25;
  --lh-normal:  1.5;
  --lh-relaxed: 1.625;

  --ls-tight:  -0.05em;
  --ls-snug:   -0.025em;
  --ls-normal:  0em;
  --ls-wide:    0.025em;
  --ls-widest:  0.1em;
}
```

---

## Spacing & Layout System

Use an 8pt grid. NEVER use arbitrary spacing values.

```css
:root {
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;

  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-2xl:  20px;
  --radius-full: 9999px;

  --shadow-sm:  0 2px 4px hsl(0 0% 0% / 0.08), 0 1px 2px hsl(0 0% 0% / 0.04);
  --shadow-md:  0 4px 12px hsl(0 0% 0% / 0.12), 0 2px 4px hsl(0 0% 0% / 0.06);
  --shadow-lg:  0 8px 24px hsl(0 0% 0% / 0.16), 0 4px 8px hsl(0 0% 0% / 0.08);
  --shadow-xl:  0 16px 48px hsl(0 0% 0% / 0.20), 0 8px 16px hsl(0 0% 0% / 0.10);
  --shadow-glow: 0 0 24px hsl(var(--brand-hue) 80% 55% / 0.35);
}
```

---

## Animation & Motion System

```css
:root {
  --ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth:    cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out-expo:  cubic-bezier(0.19, 1, 0.22, 1);
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);

  --duration-fast:    100ms;
  --duration-normal:  200ms;
  --duration-slow:    300ms;
  --duration-slower:  500ms;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInScale {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes shimmer {
  from { background-position: -200% center; }
  to   { background-position: 200% center; }
}

@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 0 0 hsl(var(--brand) / 0); }
  50%       { box-shadow: 0 0 0 12px hsl(var(--brand) / 0.2); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
}

/* Always respect user preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Scroll-Triggered Animations
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('animate-in');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
```

---

## Component Standards

### Mandatory States for ALL interactive elements
- Hover state (color/scale/shadow transition)
- Active/pressed state (`transform: scale(0.97)`)
- Focus-visible ring (keyboard navigation)
- Disabled state (opacity 0.45 + `cursor: not-allowed`)
- Never use `transition: all` — specify properties explicitly

### Buttons
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: 44px;
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-body);
  font-weight: var(--fw-semibold);
  border-radius: var(--radius-lg);
  border: 1.5px solid transparent;
  cursor: pointer;
  transition:
    background-color var(--duration-normal) var(--ease-smooth),
    box-shadow       var(--duration-normal) var(--ease-smooth),
    transform        var(--duration-fast)   var(--ease-smooth),
    opacity          var(--duration-normal) var(--ease-smooth);
}
.btn:active { transform: scale(0.97); }
.btn:focus-visible { outline: 2px solid var(--color-primary-500); outline-offset: 3px; }
.btn:disabled { opacity: 0.45; cursor: not-allowed; pointer-events: none; }
```

### Cards
```css
.card {
  background: var(--color-surface-1);
  border: 1px solid hsl(230 14% 18% / 1);
  border-radius: var(--radius-2xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition:
    transform    var(--duration-slow) var(--ease-smooth),
    box-shadow   var(--duration-slow) var(--ease-smooth),
    border-color var(--duration-normal) var(--ease-smooth);
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}
```

### Form Inputs
```css
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  background: var(--color-surface-2);
  border: 1.5px solid var(--color-surface-3);
  border-radius: var(--radius-lg);
  font-size: var(--text-base);
  transition:
    border-color var(--duration-normal) var(--ease-smooth),
    box-shadow   var(--duration-normal) var(--ease-smooth);
}
.input:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px hsl(225 80% 55% / 0.2);
}
```

---

## Hero Section Requirements

Every hero MUST include:
1. Bold gradient headline (4xl–6xl)
2. Subheadline (18–22px, muted, relaxed line-height)
3. CTA group (primary + secondary button)
4. Social proof (avatars + stars OR user count badge)
5. Visual element (illustration, dashboard preview, or abstract decoration)
6. Decorative background (gradient orb, grid, dots, or floating blobs)

---

## Premium UI Patterns

### Glassmorphism
```css
.glass {
  background: hsl(230 20% 100% / 0.05);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid hsl(230 20% 100% / 0.1);
  border-radius: var(--radius-2xl);
}
```

### Gradient Border
```css
.gradient-border {
  position: relative;
  background: var(--color-surface-1);
  border-radius: var(--radius-2xl);
}
.gradient-border::before {
  content: '';
  position: absolute;
  inset: -1.5px;
  background: linear-gradient(135deg, var(--color-primary-500), var(--color-accent));
  border-radius: calc(var(--radius-2xl) + 1.5px);
  z-index: -1;
}
```

---

## Accessibility (Non-Negotiable)

- All interactive elements have `:focus-visible` styles
- ARIA labels on icon-only buttons and complex widgets
- Never convey information with color alone
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`
- Images have descriptive alt text
- `loading="lazy"` on non-critical images

---

## Responsive Breakpoints

Mobile-first approach. Breakpoints: 480px (sm), 768px (md), 1024px (lg), 1280px (xl).
Touch targets minimum 44x44px. Font size never below 16px on mobile.

---

## Anti-Patterns (NEVER Do These)

- Use `color: red` or `background: blue` — use HSL tokens
- Use `transition: all` — specify properties explicitly
- Use `px` for font sizes — use `rem` or `clamp()`
- Use placeholder lorem text when real content can be simulated
- Design desktop-only and add responsive as afterthought
- Ignore empty/loading/error states
- Omit focus-visible styles
- Create generic, stock-feeling designs — every project needs a unique personality

---

## Execution Mandate

When building any UI:
1. Plan the design system first — tokens before components
2. Generate images for hero visuals using `generate_image` tool
3. Implement ALL interaction states — no "you can add hover states later"
4. Ship production-ready polish — real shadows, proper spacing, rounded corners
5. Every project must have one "wow" moment — a gradient, an animation, a visual flourish
6. You are not a code generator. You are a **product designer who writes flawless code**.

## Inspiration Sources

Study and internalize: Linear.app, Vercel.com, Stripe.com, Figma.com, Raycast.com, Supabase.com, Resend.com
