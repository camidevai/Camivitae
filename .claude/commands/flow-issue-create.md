# 
# Task: Create New VCS Task for Feature
# This command is now agnostic and reads CLAUDE.md
#

## Input
Feature Plan: $ARGUMENTS (Path to context_session.md)

## Phase 1: Constitution & Setup
1.  **Read the Constitution:** Read `CLAUDE.md`.
2.  **VCS Tool Setup:** Identify `VCS_CLI` (`gh` or `glab`).

## Phase 2: Generate Test Strategy & Acceptance Criteria (AGENT-DRIVEN)

**IMPORTANT:** This phase uses specialized agents to ensure professional-quality issues.

1. **Invoke `@test-strategy-planner`:** Generate `test_cases.md` (Gherkin).
2. **Invoke `@acceptance-validator`:** Refine into `acceptance_criteria.md` (Gherkin).

## Phase 3: Draft GitHub Issue
Create an issue/task body with this **professional structure**:

### User Story
As a [role], I want [feature], So that [benefit].

### Acceptance Criteria (Gherkin)
(Copy from `acceptance_criteria.md`)

### Definition of Done
- [ ] Implementation complete
- [ ] Tests passed (NO EXCEPTIONS)
- [ ] QA Validation passed

## Phase 4: Review
Show Daniel the draft. Wait for approval.

## Phase 5: Create Task
Run `$VCS_CLI issue create --title "$TITLE" --body "$BODY"`.