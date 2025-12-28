# 
# Task: Implement Feedback Loop
# Argument: $ARGUMENT$ (e.g., Issue or PR number)
#

## Phase 1: Analysis
1.  **Get Feedback:** Read PR comments from `@acceptance-validator` and `@security-architect`.
2.  **Identify Failures:** Create actionable plan.

## Phase 2: Implementation Cycle (NO EXCEPTIONS)
1.  **Write Failing Test:** Invoke `@implementation-test-engineer` to reproduce the reported bug.
2.  **Run Tests (Expect Fail).**
3.  **Write Fix:** Implement code.
4.  **Run Tests (Expect Pass).**

## Phase 3: Finalize
1.  **Commit & Push:** `git commit -m "fix: Address QA feedback"`.
2.  **Handoff:** Notify CI/CD.

## Rules
* Address user as "Daniel".
* NO EXCEPTIONS: A new test for the bug is required.
* Update Metrics using `python3 .claude/scripts/log_metric.py`.