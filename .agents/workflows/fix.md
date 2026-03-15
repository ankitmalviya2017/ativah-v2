# Workflow: /fix

Trigger this when you want bugs found and fixed automatically.

---

## What this does

Scans the file or error message for bugs, rule violations, and broken logic — then fixes them.

---

## Steps

1. **Understand the problem:**
   - If user shared an error message → read it carefully, identify the root cause
   - If no error given → scan the open file for common issues

2. **Look for these issues (in order of priority):**

   **Runtime Bugs**
   - Undefined/null access without checks
   - Missing `await` on async calls
   - Wrong dependency arrays in `useEffect`/`useMemo`/`useCallback`
   - Unhandled promise rejections

   **Next.js Specific**
   - `use client` missing when using hooks in server components
   - Incorrect use of `getServerSideProps` vs `getStaticProps` vs Server Components
   - Image component missing `alt`, `width`, or `height`
   - Missing `key` prop in lists

   **TypeScript Issues**
   - Type mismatches
   - Missing return types
   - Incorrect prop types

   **Rule Violations (auto-fix these)**
   - Inline CSS → convert to Tailwind classes
   - Hardcoded colors → replace with theme colors
   - Wrong file/component naming → flag and suggest rename
   - `console.log` → remove

3. **Apply the fixes** directly in the file

4. **Report what was changed:**

```
## Fixes Applied

### Bug Fixes
- [what was wrong] → [what was changed]

### Rule Violations Fixed
- [violation] → [fix applied]

### Could Not Auto-Fix (needs your input)
- [issue]: [why it needs manual attention]
```

---

## Notes

- Fix one file at a time unless the bug spans multiple files
- If the fix requires changing a component's interface/props, confirm with user first
- Never change business logic without explaining the change
