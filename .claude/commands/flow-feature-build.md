# 
# Task: Dynamic Task Executor (v2.1 with Metrics)
# Argument: $ARGUMENT$ (e.g., Issue number)
#

## Metrics Block (START)
# Set START_TIME...

## Phase 1: Constitution & Setup
1.  **Read Constitution:** `CLAUDE.md`.
2.  **Worktree:** `git worktree add ./.trees/feature-$ARG -b feature-$ARG`.
3.  **Analyze Task:** Read issue details and docs.

## Phase 2: Dynamic Implementation Cycle
# Check `[methodology].workflow`

# CASE 1: TDD
if `WORKFLOW == "TDD"`:
    1.  Invoke `@implementation-test-engineer` (Write Fail Test).
    2.  Run tests (confirm fail).
    3.  Invoke architects to implement code.
    4.  Run tests (confirm pass).

# CASE 2: RAD
else if `WORKFLOW == "RAD"`:
    1.  Implement prototype.
    2.  Invoke `@experience-analyzer`.
    3.  Iterate.
    4.  Invoke `@implementation-test-engineer` to write tests last.

# CASE 3: Standard
else:
    1.  Implement feature.
    2.  Write tests.

## Phase 3: Validation Loop
1.  **Create PR:** Use `$VCS_CLI`.
2.  **CI/CD:** Monitor pipeline.
3.  **QA Validation:** Invoke `dynamic-qa-validator` (`qa` command).
4.  **Feedback:** If validation fails, invoke `implement-feedback` (`fix` command).

## Metrics Block (END)
Call `python3 .claude/scripts/log_metric.py` silently.