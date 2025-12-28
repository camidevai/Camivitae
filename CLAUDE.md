# CLAUDE.md

## [project_metadata]
- **Name**: Camivitae
- **Description**: Web application to transform CVs into ATS-friendly formats.
- **Type**: Web Application
- **Objective**: Create a tool that parses user resumes and reformats them for optimal ATS compatibility.

## [stack]
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm
- **PDF Engines**: pdf-parse, jspdf, react-pdf

## [core_team]
- **meta-architect**
- **security-architect**
- **acceptance-validator**

## [technical_context]
- **Root**: `./`
- **Src Dir**: `src/`
- **Env**: `.env.local`

### Commands
- **Dev**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`

## [global_rules]
1.  **Workflow**:
    - Always create an `implementation_plan.md` before coding.
    - Follow the "Rich Aesthetics" design principle: vibrant, premium, dynamic.
2.  **Code Standards**:
    - TypeScript Strict Mode.
    - Component-based architecture.
    - Tailwind for all styling.
3.  **Testing**:
    - Manual verification provided in walkthroughs.