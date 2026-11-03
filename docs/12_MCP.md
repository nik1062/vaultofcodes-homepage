# 12. MCP.md — Model Context Protocol & AI Tooling Guidelines

**Project:** VaultofCodes Main Homepage  
**Purpose:** AI tool usage standards, workspace execution parameters, context boundaries, and command conventions.

---

## 1. Operating Environment & System Architecture

When executing tasks via AI agent workflows (Antigravity CLI, Cursor, Claude, or Copilot), the AI operates within the following environment parameters:

- **Host OS:** Windows (PowerShell 7 / 5.1).
- **Shell Conventions:** Use PowerShell-compatible syntax (e.g. `Get-ChildItem`, `Test-Path`, semicolon `;` or backtick `` ` `` instead of Unix `&&` or `\`).
- **Path Semantics:** Always support standard Windows paths with backslashes or forward slashes (`/`). In Next.js modules, always use `@/` path aliasing.
- **Node Environment:** Node.js LTS with npm.

---

## 2. Tool Execution Protocols

### 2.1 File Reading & Inspection (`read_file`)
- **Inspect Before Mutating:** AI agents must read existing file contents before issuing edits or replacements to prevent regressions.
- **Source of Truth Priority:** `data/content.js` and `docs/` are absolute sources of truth. Never overwrite or invent alternative field keys without cross-referencing `docs/04_DATABASE.md`.

### 2.2 File Writing & Editing (`write_file`, `edit_file`)
- **Atomic Operations:** When creating components, write complete, syntactically valid React code. Avoid placeholder stubs like `// TODO: rest of code here`.
- **Target Precision:** In patch operations, ensure whitespace and indentation match the target file exactly to prevent diff failures.

### 2.3 Command Execution (`run_command`)
- **Non-Daemon Process Handling:** Run development checks (`npm run build`, `npm run lint`) synchronously with appropriate timeouts.
- **Long-Running Dev Servers:** If launching `npm run dev`, mark as daemon or background process. Do not lock the agent execution thread waiting on server output.
- **Safe PowerShell Syntax:**
  ```powershell
  # Correct Windows syntax
  npm install framer-motion gsap lucide-react; npm run build
  ```

---

## 3. Context Management & Prompt Flow

To prevent context drift and hallucinations:

```
[Prompt N] 
    |
    v
1. Read relevant `docs/` file (e.g., `04_DATABASE.md` or `10_FEATURES.md`)
    |
    v
2. Verify local file state (`read_file`)
    |
    v
3. Execute targeted write/edit (`write_file` / `edit_file`)
    |
    v
4. Run compiler verification (`npm run build`)
    |
    v
5. Confirm output matches PRD acceptance criteria
```

---

## 4. Prohibited AI Behaviors

1. **Never Execute Destructive Shell Commands:** Commands such as `rm -rf *`, `git reset --hard`, or deleting directories without user authorization are strictly prohibited.
2. **Never Introduce Secret Keys in Client Code:** Do not embed environment API keys or sensitive credentials in frontend source files.
3. **Never Bypass Type / Build Errors:** Do not suppress build errors using `@ts-ignore` or disabling ESLint rules globally unless explicitly required for external canvas library compatibility.
