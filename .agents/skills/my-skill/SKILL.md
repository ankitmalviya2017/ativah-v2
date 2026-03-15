---
name: Engineering Guidelines
description: Comprehensive engineering guidelines and architectural standards for the Ativah-v2 ecommerce platform. Use this as the primary source of truth for folder structure, component organization, and coding standards.
---

# 🚀 Project Overview

This repository is a modern, production-grade ecommerce platform built using **Next.js (App Router)** and **React 19**. It follows a strictly modular, typed, and scalable architecture.

# 📦 Project Packages

The application relies on the following core technologies and libraries:

- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router)
- **UI & Styling**: [React 19](https://react.dev/), [TailwindCSS 4](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/), [Lucide React](https://lucide.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/), [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- **Animations & Carousels**: [Swiper](https://swiperjs.com/), [Embla Carousel](https://www.embla-carousel.com/), [tw-animate-css](https://github.com/ecklf/tw-animate-css)
- **Utilities**: [class-variance-authority](https://cva.style/), [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- **Development**: [TypeScript](https://www.typescriptlang.org/), [ESLint](https://eslint.org/)

# 📁 Folder Structure

Adhere STRICTLY to this modular architecture. Do not create new top-level directories.

```text
src/
├── _components/          # Shared UI components and page-specific blocks
├── _layout/              # Role-specific layouts (admin, customers, vendor)
├── app/                  # Next.js App Router (routes, pages, server components)
├── hooks/                # Custom React hooks and Zustand stores
├── lib/                  # Shadcn utilities, shared helpers, and formatters
├── navigate/             # Centralized route definitions and navigation utilities
├── providers/            # React context providers (Redux, Theme, etc.)
├── redux/                # Global state & API caching (RTK Query)
├── services/             # External API services and business logic classes
├── styles/               # Global CSS and Tailwind theme configurations
├── types/                # Global TypeScript interfaces and types
└── utils/                # Pure utility functions and constants
```

# 🏗️ Component Architecture

- **Default to Server Components**. Use `"use client"` only for interactivity or browser APIs.
- **Component Placement**:
  - `src/_components/ui/`: Atomic components (buttons, inputs) - mostly from Shadcn.
  - `src/_components/cards/`: Reusable card components.
  - `src/_components/slider/`: Carousel and slider wrappers.
  - `src/_components/Pages/`: Page-specific components organized by route (e.g., `Pages/home/`, `Pages/product/`).
- **Standard Structure**:
  ```tsx
  import { cn } from "@/lib/utils";
  
  interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "outline";
  }

  export const MyComponent = ({ variant = "default", className, ...props }: ComponentProps) => {
    return (
      <div className={cn("base-styles", variant === "outline" && "border", className)} {...props}>
        {/* Content */}
      </div>
    );
  };
  ```

# 🎨 CSS & Styling Standards

- **TailwindCSS**: Use utility classes directly.
- **Dynamic Classes**: Always use the `cn()` helper from `@/lib/utils`.
- **Responsive**: Mobile-first using `sm:`, `md:`, `lg:`, `xl:`.

# 📦 State Management Strategy

- **Zustand**: For transient client state (UI toggles, local carts).
- **RTK Query**: For ALL server data fetching and synchronization. Put endpoints in `src/redux/api/`.

# 🤖 Best Practices for AI Agents

1. **Source of Truth**: Treat this `SKILL.md` as the absolute architectural guide.
2. **Reuse First**: Check `src/_components/` and `src/hooks/` before creating new logic.
3. **Strict Typing**: Use TypeScript for all components and logic. No `any`.
4. **File Placement**: Follow the defined `src/` structure accurately.
