# Workflow: /review

Trigger this workflow when you want a thorough code review of the current file or selected code.

---

## What this does

Reviews the code against our project standards and gives actionable feedback.

---

## Steps

1. **Read the file(s)** the user is referring to or currently has open
2. **Check against project rules:**
   - Is TypeScript used correctly? No `any` types?
   - Are all comments in English?
   - Is there any inline CSS or external CSS? Flag immediately
   - Are theme colors used — no hardcoded hex values?
   - Is the component inside `src/_components/` with correct folder + naming?
   - Is the file named `xxyz.[name].component.tsx`?
   - Are props typed with a proper interface?
   - Are there any `console.log` statements?
   - Are async functions wrapped in try/catch?
   - Is the component under 150 lines?

3. **Format the review** as:

```
## Code Review

### ✅ Good
- [things done correctly]

### ⚠️ Issues Found
- [issue]: [exact location] → [how to fix]

### 🔴 Rule Violations (must fix)
- [violation]: [exact location] → [fix]

### Summary
[1-2 line overall summary]
```

4. Ask the user: "Want me to auto-fix any of these issues?"

---

## Notes

- Be specific — mention line numbers or function names
- Don't rewrite the whole file unless asked
- Prioritize rule violations over style suggestions
