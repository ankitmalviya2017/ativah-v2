# Workflow: /docs

Trigger this when you want documentation written for a component, function, or module.

---

## What this does

Generates clean, useful documentation — JSDoc comments, README, or usage examples.

---

## Steps

1. **Identify what needs documenting** — current file, a specific function, or full component

2. **Add JSDoc to every exported item:**

```ts
/**
 * Displays a product card for the ecommerce listing page.
 *
 * @param props.product - The product object containing title, price, image
 * @param props.onAddToCart - Callback fired when "Add to Cart" is clicked
 * @param props.isLoading - Shows skeleton state when true
 *
 * @example
 * <XxyzProductCard
 *   product={product}
 *   onAddToCart={(id) => handleAdd(id)}
 * />
 */
```

3. **For complex components**, also create a `README.md` inside the component folder:

```
src/_components/xxyz.product-card/
├── xxyz.product-card.component.tsx
└── README.md   ← generate this
```

README format:
```md
# XxyzProductCard

Brief description of what this component does.

## Props
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| product | Product | ✅ | ... |

## Usage
\`\`\`tsx
<XxyzProductCard product={...} />
\`\`\`

## Notes
- Any gotchas or important details
```

4. **Report what was added:**
```
## Docs Added
- JSDoc added to: [list of functions/components]
- README created at: [path] (if applicable)
```

---

## Notes

- Keep descriptions concise — not a novel
- Always include a real `@example` with realistic props
- Don't document obvious things like `// increment counter`
