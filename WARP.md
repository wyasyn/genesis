# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

### Development
```bash
pnpm dev              # Start development server on localhost:3000
pnpm build            # Build production bundle
pnpm start            # Start production server
pnpm lint             # Run ESLint for code quality checks
```

### Package Manager
This project uses **pnpm** as its package manager. Always use `pnpm` instead of `npm` or `yarn`.

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 16 (App Router) with React 19
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: shadcn/ui (New York style) + custom component registries (@reui, @tailark, @kokonutui)
- **Animation**: Motion (Framer Motion successor) + OGL for WebGL effects
- **Theming**: next-themes with dark mode support
- **Icons**: Lucide React + Tabler Icons

### Performance Optimizations
- React Compiler enabled (`babel-plugin-react-compiler`)
- Component caching enabled
- Turbopack file system cache for dev mode
- Image optimization for Cloudinary and Unsplash

### Directory Structure

#### `/app`
Uses Next.js App Router with route groups:
- `(front)/` - Main public-facing pages
- `layout.tsx` - Root layout with theme provider and font configuration
- `globals.css` - Tailwind v4 config with custom design tokens (OKLCH color system)

#### `/components`
- `ui/` - Base shadcn/ui components (button, card, input, etc.)
- `sections/` - Page section components (hero, blog-section, projects)
- `kokonutui/` - Custom components from kokonutui registry
- Root level: Reusable components (nav-bar, footer, theme-toggle, etc.)

#### `/data`
Static mock data exports:
- `blog.ts` - Blog post data with metadata (tags, dates, views)
- `projects.ts` - Project showcase data with tech stacks
- `nav-data.tsx` - Navigation menu structure
- `social-data.tsx` - Social media links
- `testimonials.ts` - Testimonial content

#### `/lib`
- `utils.ts` - Contains `cn()` utility for merging Tailwind classes (clsx + tailwind-merge)

#### `/hooks`
- `index.tsx` - Custom React hooks

### Path Aliases
Configured in `tsconfig.json`:
- `@/*` - Root directory alias (e.g., `@/components`, `@/lib/utils`)

### Design System

#### Fonts
Three font families configured via next/font:
- **Sans**: Inter (`--font-sans`)
- **Serif**: Playfair Display (`--font-serif`)
- **Mono**: Geist Mono (`--font-mono`)

#### Color System
Uses OKLCH color space for better perceptual uniformity. Custom theme variables are defined in `globals.css` with automatic dark mode variants.

#### Component Styling
- Use the `cn()` utility from `@/lib/utils` for conditional class merging
- Follow shadcn/ui patterns for component variants (class-variance-authority)
- Leverage Tailwind v4's inline `@theme` directive for design tokens

### Component Registries
The project is configured to use external component registries:
- **@reui**: https://reui.io
- **@tailark**: https://tailark.com
- **@kokonutui**: https://kokonutui.com

Install components from these registries using their documented CLI commands.

### State Management & Data Flow
- Currently uses mock data from `/data` directory
- Components import data directly (no API layer yet)
- Theme state managed by next-themes context

### Key Patterns

#### Server Components by Default
All components are Server Components unless marked with `"use client"`. Use client components only when needed for:
- Interactive state (useState, useReducer)
- Browser APIs
- Event handlers
- Theme provider and theme toggles

#### Route Groups
The `(front)` route group organizes public pages without affecting URL structure.

#### Image Optimization
Remote image patterns configured for:
- `res.cloudinary.com`
- `images.unsplash.com`

Always use Next.js `<Image>` component for external images.

### Adding New Features

#### New UI Components
Use shadcn/ui CLI for base components or component registries:
```bash
npx shadcn@latest add <component-name>
# or from registries
npx shadcn@latest add @reui/<component-name>
```

#### New Pages
Create routes in `app/(front)/` to maintain the public site structure.

#### New Mock Data
Add data files to `/data` directory following existing patterns with TypeScript types.

#### Custom Animations
- Use Motion library for React animations
- OGL library available for WebGL effects (see existing light-ray components)
