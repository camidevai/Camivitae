# 
# Task: Analyze Bug (v2.1 with Metrics)
# Argument: $ARGUMENT$ (e.g., Bug description)
#

## Metrics Block (START)
# Set START_TIME...

## Phase 1: Setup
Create `.claude/sessions/context_session_bug_{ID}.md`.

## Phase 2: Team Selection (Auto-Healing)
1.  Analyze keywords (e.g., "performance").
2.  **Check for Specialist:**
    * If specialist exists: Add to team.
    * Else: Invoke `claude @agent-librarian "scout: $specialist"`. (Halt task if new agent needed).

## Phase 3: Diagnosis
Use agents to investigate.
Synthesize findings into `.claude/doc/bug_{ID}/bug_diagnosis_report.md`.
* Root Cause
* Evidence
* Recommendation

## Phase 4: Recommendation
Present report to Daniel. Ask to create a fix issue.

## Metrics Block (END)
Call `python3 .claude/scripts/log_metric.py` silently.