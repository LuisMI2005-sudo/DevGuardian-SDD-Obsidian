---
tags: [devguardian, dg/sdd, dg/verificacion]
---
# Evidencia de actualización del backlog

Fecha: 29/10/2026. Se inspeccionaron el backlog anterior, interfaz actual, contratos y pruebas, y se contrastaron PRs/CI remotos antes de editar. Los PRs backend #5 y frontend #1 estaban abiertos, sin fusionar y con CI aprobado. No se ejecutaron pruebas de negocio nuevas para cambios exclusivamente documentales ni se modificó Render.

## Resultado del registro

- Se preservaron HU-01 a HU-43 y se añadieron HU-44 a HU-51 para capacidades posteriores.
- 51 issues registrados, identificados por HU: 33 cerrados como evidencia técnica y 18 abiertos (12 parciales y 6 pendientes). [Listado GitHub](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues?q=is%3Aissue).
- Los registros anteriores a Spec Kit se identificaron como reconstrucción retrospectiva, con fecha real de creación, sin asignar responsables ni revisiones inventadas.
- HU-36/HU-37/HU-38 se reabrieron en el estado documental de entrega final: CI, despliegue histórico y PR abierto no acreditan versión final publicada. Los issues nuevos registran ese estado; no alteran el historial de commits.
- Se reemplazaron pasos de demos retiradas por importación, selector real, revisión, resultados, recuperación y paneles avanzados. Se retiró la fórmula 60/40 y el tope automático que no constan en la planilla final.
- Se añadieron listas retrospectivas de tareas de migración y sandbox. Las tareas humanas y productivas permanecen abiertas.

## Comprobaciones

`npm run check` incluye SDD, bóveda y la nueva comprobación de trazabilidad. Se validan cantidad/identidad de HU, estados y conteos, IDs y URLs únicas de issues, enlaces de evidencia por SHA, huellas de documentos y correspondencia con el backlog canónico cuando el backend hermano está disponible. `issues.json` es la instantánea verificada en GitHub durante la actualización; el comprobador offline no consulta cambios remotos posteriores.

Resultado local: comprobación documental aprobada con 137 Markdown, tres Canvas, 65 Mermaid y 20 grupos; 51 HU e issues sin duplicados y conteos coherentes. En backend aprobaron `npm run sdd:check` y la revisión de destinos locales de README/backlog/matriz. Se revisa además `git diff --check` antes de guardar los cambios. Los cambios son documentales y del verificador documental; no alteran el runtime de la aplicación.

Los scripts de registro reutilizan el ID de HU para no duplicar issues; una segunda pasada comprobó los registros y corrigió únicamente el enlace de evidencia de Obsidian. Los cierres no simulan sprints anteriores ni acreditan aceptación del docente.

Las métricas se fijan al CI de código integrado: backend 39cb46a, 19 suites y 375 aprobadas/5 omitidas en el job general; Docker 7 aprobadas (dos de configuración duplicadas en el general); frontend 3b06f56, 125 aprobadas en 14 archivos. No se suman como pruebas únicas ni se atribuyen automáticamente a producción.

## Límites

Quedan pendientes revisión humana del backlog/constitución, asignación de responsables, definición del incremento final con el docente, defensa individual, ensayo de Obsidian, auditoría integral de secretos y entrega final autorizada. Este trabajo cierra el registro documental y el seguimiento; no implementa los criterios todavía abiertos.
