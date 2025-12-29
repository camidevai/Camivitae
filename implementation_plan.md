# Plan de Implementación - Feature #3: Layout Consistente

## Objetivo
Crear un layout consistente con header y footer para toda la aplicación Camivitae.

## User Story
As a user, I want a consistent header and footer so that I can navigate the application easily.

## Acceptance Criteria (Gherkin)
```gherkin
Scenario: View Layout
  Given I am on any page
  Then I should see the "Camivitae" logo in the header
  And I should see copyright info in the footer
```

## Estándares (CLAUDE.md)
- **Framework**: Next.js (App Router)
- **Estilo**: Tailwind CSS (Rich Aesthetics - vibrant, premium, dynamic)
- **Lenguaje**: TypeScript Strict Mode
- **Arquitectura**: Component-based

## Análisis del Estado Actual
- ✅ Proyecto inicializado con Next.js + TypeScript + Tailwind
- ✅ Design system configurado (colores Indigo/Pink, glassmorphism)
- ✅ `src/app/layout.tsx` existe como RootLayout
- ❌ No existe componente MainLayout
- ❌ No existe componente Header/Navbar
- ❌ No existe componente Footer

## Cambios Propuestos

### 1. Crear Estructura de Componentes
```
src/
  components/
    layout/
      MainLayout.tsx      # Componente principal que envuelve Header + children + Footer
      Header.tsx          # Navbar con logo "Camivitae"
      Footer.tsx          # Footer con copyright
```

### 2. Implementar Header Component
**Características:**
- Logo "Camivitae" (texto estilizado con gradiente Indigo→Pink)
- Responsive navbar
- Glassmorphism effect (usando clase `.glass` del design system)
- Sticky positioning para mejor UX

**Tecnologías:**
- TypeScript
- Tailwind CSS con custom colors del design system
- Next.js Link para navegación futura

### 3. Implementar Footer Component
**Características:**
- Copyright info: "© 2024 Camivitae. All rights reserved."
- Glassmorphism effect
- Centrado y responsive

### 4. Implementar MainLayout Component
**Características:**
- Wrapper que combina Header + children + Footer
- Flex layout para sticky footer
- Min-height 100vh

### 5. Integrar en RootLayout
Modificar `src/app/layout.tsx` para usar MainLayout:
```tsx
import MainLayout from '@/components/layout/MainLayout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
```

## Plan de Verificación
1. ✅ Ejecutar `npm run dev`
2. ✅ Visitar `localhost:3000`
3. ✅ Verificar que el logo "Camivitae" aparece en el header
4. ✅ Verificar que el copyright aparece en el footer
5. ✅ Verificar que el layout es responsive (mobile/desktop)
6. ✅ Verificar que el glassmorphism effect se aplica correctamente
7. ✅ Verificar que no hay errores de TypeScript
8. ✅ Verificar que no hay errores de consola

## Definition of Done
- [ ] Implementation complete
- [ ] Tests passed (NO EXCEPTIONS)
- [ ] QA Validation passed
- [ ] `MainLayout` component created
- [ ] Responsive Navbar implemented
- [ ] Footer implemented

