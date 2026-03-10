---
name: Engineering Guidelines
description: Permanent engineering guidelines, architecture decisions, and coding standards for all AI agents generating code in this repository.
---

# 🚀 Project Overview

This repository is a modern, production-grade web application built using **Next.js (App Router)**.
The core architectural philosophy is based on being **scalable, modular, reusable, and maintainable**.
Every piece of code generated must prioritize clean architecture, ensuring long-term maintainability, robust performance, and aesthetic code structure.

# 🛠️ Core Technologies

- **Next.js (App Router)**: Forms the backbone of the application. Used for routing, SSR (Server-Side Rendering), SSG (Static Site Generation), API routes, and Server Components.
- **React**: Core UI library. We use modern React features like Functional Components, Server Components, and Hooks.
- **TypeScript**: Used strictly across the entire application for static typing, ensuring fewer runtime errors, robust refactoring, and better developer/AI tooling experience.
- **TailwindCSS**: The primary CSS framework for styling. Used in combination with utility-first principles to build scalable and responsive designs rapidly without leaving the JSX markup.
- **Shadcn UI**: Utilized for highly customizable, unstyled, and accessible fundamental UI components.
- **State Management**: **Zustand** is utilized for localized client state (like shopping carts or transient UI state), while **Redux Toolkit (RTK) & RTK Query** is heavily utilized for robust server state management and complex API interactions across the system.

# 🎨 CSS & Styling Standards

- **Framework**: TailwindCSS.
- **Conventions**: Use utility classes directly in the `className` prop. Rely on `tailwind-merge` and `clsx` (via `src/lib/utils.ts`) to handle dynamic classes seamlessly and merge overrides correctly (especially important for Shadcn components).
- **Responsive Design**: Follow a mobile-first approach using Tailwind's `sm:`, `md:`, `lg:`, `xl:` breakpoint prefixes.
- **Design Tokens**: Standardized in `tailwind.config.ts` (or equivalent `.css` theme files). Do not use arbitrary custom values (e.g., `text-[#123456]`) unless absolutely necessary. Rely on predefined theme colors, spacing, and typography variables.

# ✍️ Typography & Fonts

- **Font Loading**: Fonts are defined efficiently using Next.js `next/font` (e.g., Google Fonts) which optimizes font loading, prevents layout shift, and scales impeccably without external network requests at runtime.
- **Scale System**: Use Tailwind's predefined text sizes (`text-sm`, `text-base`, `text-lg`, `text-xl`, etc.). Avoid hardcoded pixel values to maintain scalability.

# 📁 Folder Structure

Based on our current repository, adhere STRICTLY to this exact modular, compartmentalized architecture:

```text
src/
├── _components/          # Shared global UI components (including Shadcn UI elements and common blocks)
├── _layout/              # Granular, role-specific layouts and navigation structures (admin, customers, vendor)
├── app/                  # Next.js App Router (pages, layout, API routes)
│   ├── (admin)/          # Admin portal routes and layouts
│   ├── (auth)/           # Authentication pages (login, register)
│   ├── (customer)/       # Main customer-facing ecommerce routes
│   ├── (vendor)/         # Vendor dashboard routes
│   ├── api/              # API Route Handlers
│   ├── layout.tsx        # Root layout for global shells
│   ├── page.tsx          # Main entry route
│   ├── not-found.tsx     # Custom 404 page
│   └── global-error.tsx  # Global error boundary handler
├── hooks/                # Custom React hooks and Zustand client stores (e.g., useCartStore.ts)
├── lib/                  # Shadcn utilities (utils.ts), shared helpers, data formatters, and mock data
├── providers/            # Top-level React context providers (e.g., ReduxProvider.tsx, ThemeProvider)
└── redux/                # Global server state management & API caching logic
    ├── api/              # RTK Query API slice definitions and endpoints
    ├── slices/           # Redux slices if globally needed
    └── store/            # Redux store configuration logic
        └── store.ts      # Main Redux store definition
```

**Responsibilities**:

- `app/`: Purely for defining routes, fetching initial server data, and mapping layouts. Minimize complex business logic here.
- `_components/`: Reusable, primarily presentational components. Avoid deep API fetching here if it can be hoisted.
- `_layout/`: Specific to encapsulating heavy multi-layer nested navigation flows (dashboards).
- `redux/` & `hooks/`: The source of truth for global API caching, complex global state, and persistent client stores.

# 🏗️ Component Architecture

- **Server vs Client Components**: Default to **Server Components**. Only use Client Components (via `"use client"`) when interactivity, hooks (`useState`, `useEffect`), browser APIs, or third-party client components (like Swiper/Embla Carousels) are required. Use it as far down the layout tree as possible.
- **Smart vs Dumb Components**:
  - _Dumb (UI) Components_: Accept props, emit events via callbacks. Reside generally in `_components/`.
  - _Smart (Feature) Components_: Can connect to `Zustand` stores or RTK Query hooks to fetch data or handle side effects autonomously.
- **Props Definition**: Always strictly type props using TypeScript `interfaces` or `types`.

**Example Structure**:

```tsx
import React from "react";
import { cn } from "@/lib/utils"; // Utilizing tailwind-merge and clsx helper

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  ...props
}) => {
  const baseStyle = "px-4 py-2 rounded-md font-semibold transition-colors";
  const variantStyle =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button className={cn(baseStyle, variantStyle, className)} {...props} />
  );
};
```

# 📦 State Management Strategy

- **Client Transient & Storage State (Zustand)**: Used heavily for local client phenomena that persist globally on the frontend but don't require immediate heavy backend sync protocols (e.g., UI toggles, shopping cart `useCartStore.ts`).
- **Server State & Data Fetching (RTK Query)**: ALL primary data fetching, mutation APIs, caching, and synchronization with backend data models should be handled by Redux Toolkit Query inside `src/redux/api/`. NEVER use raw `useEffect` + `fetch` for robust data tasks.

# 🛣️ Navigation & Routing

- **Next.js App Router**: Utilize nested directories correctly.
- **Dynamic Routes**: Use bracket syntax for slugs (`app/products/[slug]/page.tsx`).
- **Route Groups**: Parentheses directories `(shop)` prevent affecting URL structure while allowing differing root layouts per business domain.
- Whenever navigating programmatically, use Next.js `useRouter` or `<Link>` from `next/link`.

# 🖼️ Layout System

- **Global Shell**: `app/layout.tsx` is responsible for registering the providers established inside `src/providers/` safely enclosing Global tags. Providers MUST be `"use client"`.
- **Domain Layouts**: Extract macroscopic repetitive shell structures (Admin headers, sidebars) and define them dynamically within `src/_layout/`.

# ⚡ Performance & Reusability Rules

- **Image Optimization**: Always utilize `next/image`.
- **Lazy Loading/Code Splitting**: Heavy localized modules like Swiper, carousels, modals etc., should leverage Next.js dynamic routing when deemed necessary.
- **DRY Principle**: If an interactive sequence or data aggregation repeats twice, hoist it into a custom hook in `src/hooks/` or a shared component in `src/_components/`. Do not duplicate definitions.

# 🤖 Best Practices for AI Agents

1. **Adherence Checklist**: ALWAYS read and reference this `SKILL.md` before architecture ideation. Treat it as the absolute source of truth.
2. **File Placement Validation**: Evaluate folder hierarchy strictly (e.g., RTK logic is _always_ under `redux/`, simple utils always under `lib/`, layouts under `_layout/`). Do not spontaneously invent new top-level directories!
3. **Scan Before Create**: Ensure you've verified whether a component or hook already exists before creating a clone duplicate. Look across `hooks/`, `lib/`, and `_components/`.
4. **Imports Hierarchy**: Always leverage defined path aliases where possible and `cn` for component composition over manual template strings.
