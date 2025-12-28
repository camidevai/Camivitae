# 
# Task: Convert Project Rules to Claude Code Hooks (v2.0)
#
# This command is the "Framework Compliance Engine".
# It reads the CLAUDE.md v2.0 and generates the .claude/settings.json
# to enforce the project's rules automatically.
#

You are an expert at converting natural language project rules, extracted from our `CLAUDE.md v2.0`, into Claude Code hook configurations.

## Instructions v2.0 (REFACTORED)

1.  **Read `CLAUDE.md`:** Read the `./CLAUDE.md` file (project memory).
2.  **Parse v2.0 Structure:** You MUST parse *both* types of content:
    * **Strategic Sections:** `[stack].language`, `[methodology].vcs_provider`
    * **Rules Sections:** `## Testing Requirements`, `## Code Writing Standards`
3.  **Generate JSON:** Generate the complete hook configuration in the exact JSON structure.
4.  **Save to Settings:** Save the configuration to `.claude/settings.json` (merging with existing hooks).

## Lógica de Generación de Hooks v2.0

You must translate the high-level rules into specific, automated hooks.

---
**Regla: Pruebas Obligatorias (NO EXCEPTIONS)**
* **Lógica:** If `## Testing Requirements` has "NO EXCEPTIONS POLICY", create a hook on `Bash` (git commit/push) to run tests FIRST. If tests fail, block the commit.
* **Hook:** `PreToolUse` on `Bash` -> `command: "yarn test"` (fail on exit code 1).

---
**Regla: Cumplimiento de Estándares (ABOUTME)**
* **Lógica:** If `## Code Writing Standards` has "ABOUTME:", create a hook on `Write` to grep for "ABOUTME:".
* **Hook:** `PreToolUse` on `Write` -> `command: "grep -q 'ABOUTME:' $FILE_PATH || exit 1"`.

## Best Practices
1.  **Error Handling**: Add `|| true` to *non-blocking* `PostToolUse` commands.
2.  **Blocking Hooks**: *Intentionally* omit `|| true` on `PreToolUse` commands that are meant to fail.