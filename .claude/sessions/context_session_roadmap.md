# Context Session: Project Roadmap (Camivitae)

## Objective
Plan the complete development lifecycle of Camivitae: from initialization to final verification of the ATS-friendly CV transformer.

## Initial Roadmap Draft

### Phase 1: Foundation (The Setup)
- **Goal**: Functional Next.js + Tailwind environment.
- **Tasks**:
    1.  Initialize project (as per previous setup plan).
    2.  Configure Theme (Fonts, Colors - "Rich Aesthetics").
    3.  Setup Git flow (dev branch).

### Phase 2: Core Components (The Look)
- **Goal**: Build the visual shell.
- **Components**:
    - `Layout`: Header (Logo), Footer.
    - `Hero`: Impactful copy + "Get Started" call to action.
    - `DragDropZone`: Area to upload files.
    - `PreviewConsole`: Interactive split-pane (Input vs. Output).

### Phase 3: The Brain (The Logic)
- **Goal**: Parse PDF/DOCX and extracting text.
- **Logic**:
    - API Route `/api/parse`: Receives file, returns structured JSON.
    - **Parsing Strategy**: Use `pdf-parse` for text extraction.
    - **Cleaning Strategy**: Regex patterns to remove header/footers/graphics.

### Phase 4: The Transformation (The Output)
- **Goal**: Generate ATS-compliant PDF.
- **Logic**:
    - Use `react-pdf` to render a clean, single-column document.
    - Feature: "Download PDF" button.

### Phase 5: Polish & Verify
- **Goal**: Quality Assurance.
- **Tasks**:
    - End-to-End tests (Playwright).
    - UI Polish (Animations, Hover states).
    - Deployment Check (Vercel).

## Agent Advice
- **@ui-component-architect**:
    - **Strategy**: Use Tailwind CSS for rapid development.
    - **Key Components**:
        - `FileUpload`: A drag-and-drop zone using `react-dropzone` with visual feedback.
        - `CVPreview`: A split-screen layout (Left: Input Form/Raw Text, Right: ATS Preview).
        - **Rich Aesthetics**: Use gradients (purple/pink) for the hero section to match brand. Glassmorphism for the upload card.
- **@domain-logic-architect**:
    - **Architecture**: Next.js API Routes (`/api/parse-cv`).
    - **Pattern**: Service Layer Pattern. Create `services/CVParser.ts` to handle `pdf-parse` logic, separating it from the API controller.
    - **Data Flow**: Upload -> API (Parse) -> JSON Response -> Frontend State -> Rendering -> PDF Generation.
- **@security-architect**:
    - **Validation**: Strict file type validation (PDF/DOCX only) on CLIENT and SERVER side.
    - **Sanitization**: Limit file size to 5MB to prevent DoS.

## Master Plan (Execution Roadmap)

### Phase 1: Setup & config (Current)
1.  **Init**: Next.js + Tailwind + TS (Approved).
2.  **Lint/Format**: Prettier + ESLint config.
3.  **UI Base**: Define `colors` in `tailwind.config.ts` (Primary: Indigo-600, Secondary: Pink-500).

### Phase 2: Core UI Implementation
4.  **Layout**: Create `MainLayout` with extensive use of "Rich Aesthetics".
5.  **Hero**: Implement Landing Page.
6.  **Components**: Build `FileUpload` (react-dropzone) and `Button` (premium style).

### Phase 3: Domain Logic (The Brain)
7.  **Backend**: Install `pdf-parse`.
8.  **API**: Create `POST /api/parse` endpoint.
9.  **Service**: Implement `CVParser` service to extract text.

### Phase 4: Integration & Generation
10. **State**: Manage parsed data in React Context/State.
11. **Preview**: Display extracted text in a clean format.
12. **Export**: Implement PDF generation using `react-pdf` or browser print styles.

### Phase 5: Verification
13. **Manual**: Test with 3 different CV formats (Simple, Columns, Graphic-heavy).
14. **Audit**: Run `npm audit` and `lighthouse` check.

## Next Step
- Execute Phase 1 (Initialization).
