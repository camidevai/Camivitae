# 
# Task: Strategic Planner (v2.2 with Metrics AND Librarian)
# Argument: $ARGUMENTS (feature_name / task_id)
#

## Metrics Block (START)
# 1. Set START_TIME = current_timestamp
# 2. Set TASK_STATUS = "fail"

<user_request>
#$ARGUMENTS
</user_request>

## Phase 1: Session Setup
Create `.claude/sessions/context_session_{FEATURE_NAME}.md`.

## Phase 2: Constitution
Read and parse the project's "Constitution" file: `CLAUDE.md`.

## Phase 3: Team Selection (REFACTORED v2.2 - Hybrid Model)

1.  **Start with the Core:** Read `[core_team]` list from `CLAUDE.md`.
2.  **Analyze for Specialists:** Check request for keywords (e.g., "database", "performance").
3.  **Recruit Specialists (Auto-Healing):**
    * `if specialist_file_exists:` add to team.
    * `else:`
        * Invoke `claude @agent-librarian "scout: $specialist"`
        * "Halting task. Please review the agent draft from @agent-librarian."
        * `Set TASK_STATUS = "fail"`
        * **EXIT**

## Phase 4: Plan
Think hard and write up a detailed *initial* implementation plan to `context_session.md`.

## Phase 5: Advice
Use the sub-agents (from `AGENTS_USED_LIST`) *in parallel* to get knowledge and advice.
**CRITICAL:** Provide each agent with `context_session.md` and `CLAUDE.md`.

## Phase 6: Update & Synthesize
Synthesize all advice into one "master plan" in the `context_session.md` file.

## Phase 7: Clarification
Ask me (Daniel) questions about anything unclear.

## Metrics Block (END)
Call `python3 .claude/scripts/log_metric.py` silently.