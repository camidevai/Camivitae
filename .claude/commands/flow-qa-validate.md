# 
# Task: Dynamic QA Validator (v2.1 with Metrics)
# Argument: $ARGUMENT$ (e.g., Issue number or PR number)
#

## Metrics Block (START)
# Set START_TIME...

## Phase 1: Setup
Read `CLAUDE.md`. Get PR details.

## Phase 2: Orchestrate Validation (Parallel)
1.  **Invoke Acceptance Validator:** Run `@acceptance-validator` on the task/PR.
2.  **Invoke Security Validator:** Run `@security-architect` on the task/PR.

## Phase 3: Review & Decision
1.  **Analyze Feedback:** Read comments from agents.
2.  **Make Decision:**
    * If comments contain `[FAIL]` or `[NEEDS WORK]`: `FINAL_STATUS = "NEEDS_WORK"`.
    * Else: `FINAL_STATUS = "READY"`.

## Phase 4: Action
# CASE 1: Ready
if `FINAL_STATUS == "READY"`:
    Post "ISSUE READY TO MERGE".
    Set `TASK_STATUS = "success"`.

# CASE 2: Needs Work
else if `FINAL_STATUS == "NEEDS_WORK"`:
    Post "Validation failed, triggering feedback loop."
    Invoke `claude -p .claude/commands/flow-feedback-fix.md` (The Fix command).

## Metrics Block (END)
Call `python3 .claude/scripts/log_metric.py` silently.