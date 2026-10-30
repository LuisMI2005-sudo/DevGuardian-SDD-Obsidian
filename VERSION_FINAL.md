# Versión integrada de DevGuardian para la entrega final

Consolidación autorizada por el usuario el 29/10/2026. Identificador documental: entrega-final-2026-10-29. No es una publicación de GitHub Releases ni una aceptación docente.

| Componente | Rama de entrega | Commit integrado | PR |
|---|---|---|---|
| Backend | Dev | 15eedc0c11a62535add7efc9fd3ecb038e5c8ad6 | [#5](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/pull/5) |
| Frontend | dev | ea8b600e018b008a40ec51a34d02994ffa815579 | [#1](https://github.com/SebhastianCampero-Collab/Frontend/pull/1) |
| SDD y evidencia | main del repositorio documental | Commit que contiene este archivo y el acta; consultar el historial de esta entrega | Bóveda independiente |

Ambos PRs fueron fusionados mediante merge, preservando commits y autorías. Las copias locales se actualizaron con fast-forward. Se comprobó igualdad de árboles entre el HEAD aprobado del PR y el merge resultante en ambos repositorios. Los documentos anteriores que describen PRs abiertos son cortes históricos; este archivo identifica la versión integrada vigente.

## Cambio de comportamiento y revisión técnica

La entrega combina recuperación de repositorios con reparación verificada en Docker. Recuperar un checkout no habilita ejecución de código externo sin sandbox operativo. La interfaz aplica las capacidades del servidor y los guardrails siguen en el backend. La Shell ahora vuelve a Mis proyectos y limpia la selección al cambiar de organización.

La revisión técnica del asistente contrastó diffs, contratos, límites de aislamiento, regresión de navegación y CI de los HEAD exactos. No se atribuye una aprobación humana en GitHub. El historial conserva el fallo reproducido, su regresión roja/verde y la repetición browser.

## Validación anterior a la fusión

- Backend: [CI 40958143603](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/actions/runs/40958143603), sobre 163e70be25c39e780661655508620e9662d94073; jobs general y Docker aprobados.
- Frontend: [CI 40981452560](https://github.com/SebhastianCampero-Collab/Frontend/actions/runs/40981452560), sobre 4ece391dde3611463b21a79901ed8cb281b295b7; tipos, lint, 125 pruebas y builds normal/plataforma. El commit 4ece391dde3611463b21a79901ed8cb281b295b7 contiene la corrección ya ensayada.
- Ensayo local: 15 pruebas PostgreSQL y 125 frontend aprobadas; [12 criterios registrados](CHECKLIST_ACEPTACION_INCREMENTOS.md) y [acta](specs/006-final-increments/ensayo/ACTA.md). Las tres pruebas Shell están dentro de las 125.
- [Recibo de merges](specs/008-final-release/merge-receipt.json). Los checks posteriores de las ramas se consultan por los commits integrados, sin confundirlos con los checks anteriores del PR.

## Reproducibilidad

Clonar backend/frontend y seleccionar los commits exactos de la tabla. Usar Node 24, npm ci y los comandos del README de cada repositorio. Para la Shell: build:platform y preview:platform; para backend local: entorno PostgreSQL de ensayo existente o preparación única según specs/002-platform-migration/local-development.md. Nunca copiar credenciales del entorno de ensayo a Git.

## Alcance pendiente

La integración Git está realizada. El commit servido por cada componente y el recorrido diagnóstico desplegado quedaron acreditados en [el acta de Render](specs/009-deployed-e2e/ACTA.md), con recargas y error controlado. La revisión de constituciones y el recorrido visual de SDD/Obsidian de los tres integrantes quedaron [confirmados expresamente por el usuario](specs/011-team-review/ACTA.md); el acta distingue esa declaración del recorrido parcial ejecutado por el asistente. Continúan pendientes la aceptación docente, defensa y los criterios restantes de las HU. HU-38 menciona main: las bases efectivas de estos PRs son Dev/dev; no se movió main ni se cambia esa condición académica silenciosamente. La decisión sobre main o estas ramas como entrega debe quedar explícita al presentar.

Render mostró ambos commits integrados como Live, con disparador Auto-Deploy. Se consultó el hosting en modo de lectura y no se modificó su configuración. El sandbox cloud y la generación Anthropic real conservan sus límites documentados.
