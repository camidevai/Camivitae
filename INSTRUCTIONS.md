# GENESIS FACTORY v5 - MANUAL DE OPERACIONES

## 1. Inicialización
1.  Descomprime el ZIP.
2.  Ejecuta: `claude -p .claude/agents/meta-architect.md` para definir tu stack y generar el `CLAUDE.md` real.

## 2. Desarrollo (The Golden Loop)
1.  **Planificar:** `claude plan "Quiero un sistema de login"`
2.  **Contrato:** `claude issue "Implementar Login"`
3.  **Construir:** `claude build <issue-id>`
4.  **Validar:** `claude qa <issue-id>` (Si falla, se arregla solo con `fix`)

## 3. Mantenimiento y Gobierno
* **Bugs:** `claude analyze "Error 500 en..."`
* **Cambios de Stack:** `claude amend "Cambiar a React 19"`
* **Reglas:** `claude enforce` (Periódico)

## 4. Observabilidad
Revisa métricas en `.claude/logs/metrics.jsonl`