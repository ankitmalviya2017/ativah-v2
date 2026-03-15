# Project Rules

These rules apply to every task, every file, every suggestion — no exceptions.

---

## Language & Typing

- Always use **TypeScript** — never plain `.js` files
- All props, state, and function signatures must be explicitly typed
- Avoid `any` type — use `unknown` or proper interfaces instead
- Use `interface` for component props, `type` for unions/utility types

---

## Code Comments

- All comments must be written in **English only**
- Write comments for complex logic, not obvious code
- Every exported function/component must have a JSDoc comment

```ts
/**
 * Displays a product card with image, title, and price.
 */
export const XxyzProductCard = () => { ... }
```

---

## Styling Rules

- **Never use inline CSS** — no `style={{ ... }}` on any element
- **Never use external CSS files** — no `.css`, `.scss`, or `.module.css` files
- All styling must be done using **Tailwind CSS utility classes only**
- Always use theme colors defined in `tailwind.config.ts` — never hardcode hex values

---

## 📁 Redux Structure

- `src/redux/api/`: All RTK Query definitions and endpoints.
- `src/redux/slices/`: Global Redux slices for client-side state.
- `src/redux/store/`: Store configuration and combined reducers.

---

## 🪝 Hooks Structure

- `src/hooks/`: All custom React hooks and Zustand stores (e.g., `useCartStore.ts`).

---

## 🛡️ Providers Structure

- `src/providers/`: Global context providers that wrap the application (e.g., `ReduxProvider.tsx`).

---

## 🌐 App Structure (App Router)

- `src/app/`: Directory for Next.js routes, organized using Route Groups:
  - `(admin)/`: Admin-side routes.
  - `(auth)/`: Authentication routes.
  - `(customer)/`: Customer-facing ecommerce routes.
  - `(vendor)/`: Vendor dashboard routes.

---

## 🎰 Next.js 16 Slots (Parallel Routes)

- **Naming Convention**: Slot folders must start with the `@` prefix (e.g., `@sidebar`, `@modal`).
- **Placement**: Slots must reside in the same directory as the `layout.tsx` file that consumes them.
- **Default View**: Every slot must contain a `default.tsx` file. This prevents 404 errors during client-side navigation to routes that don't have an explicit slot override.
- **Typing**:
  - Layout props must explicitly type each slot as `React.ReactNode`.
  - Use descriptive names for slots to improve code readability.
- **Modular Design**: Use slots to isolate complex UI blocks (e.g., sidebars, banners, modals) within a layout, keeping the main layout file clean and focused on structure.

---

## 🧭 Navigation Structure

- `src/navigate/paths.ts`: Centralized object for all application route definitions.
- **Navigation Rule**: Always use the `paths` object from `@/navigate/paths` for internal links, redirects, and programmatic navigation.
- **Prohibition**: Never hardcode route strings directly in components or logic (e.g., `<Link href="/shop">` is forbidden; use `<Link href={paths.shop()}>` instead).

---

## 🏗️ Component Structure

- **Standard Components**: Reusable global UI elements live in `src/_components/`.
- **Page Components**: Components specific to a single page or route live in `src/_components/Pages/[page-name]/`.
- **Folder-based Organization**: Every component must have its own folder.
- **Internal File Naming**: Each component folder should contain:
  - `***.components.tsx`: Main UI and logic.
  - `***.type.ts`: TypeScript definitions and interfaces.
  - `***.config.ts`: (Optional) Static configuration, constants, or layout data.
  - `***.schema.ts`: (Optional) Validation schemas (e.g., Zod) or data structures.

```text
src/
└── _components/
    └── xxyz.product-card/
        ├── xxyz.product-card.components.tsx
        ├── xxyz.product-card.type.ts
        ├── xxyz.product-card.config.ts
        └── xxyz.product-card.schema.ts
```

- Component names and folders should ideally follow the `xxyz.` prefix convention established.
- Props interface must be defined in `***.type.ts` and named `[ComponentName]Props`.
- One component per file — no multiple exports from a single component file.

---

## General Code Quality

- No `console.log` in production code — use a logger utility if needed
- All async functions must handle errors with try/catch
- Avoid magic numbers — use named constants
- Keep components under 150 lines — split if longer
