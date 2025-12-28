# 
# Task: Propose Constitutional Amendment (v2.1)
# Argument: $ARGUMENT$ (e.g., "Change [stack].framework to React 19")
#

## Metrics Block (START)
# Set START_TIME...

## Phase 1: Setup & Isolation
1.  **Create Branch:** `git checkout -b feature/amendment-XX`.
2.  **Modify Constitution:** Apply change to `CLAUDE.md`.

## Phase 2: Run Compatibility Test
Loop through `[core_team]` agents.
Invoke each agent to REVIEW the new `CLAUDE.md`.
Ask: "Are you compatible? Respond [COMPATIBLE] or [WARNING]."

## Phase 3: Present Impact Report
Show `IMPACT_REPORT` to Daniel.
* "@domain-logic-architect: [COMPATIBLE]"
* "@implementation-test-engineer: [WARNING]"

## Phase 4: Action
* **If Approved:** Merge to main.
* **If Rejected:** Revert branch.

## Metrics Block (END)
Call `python3 .claude/scripts/log_metric.py` silently.