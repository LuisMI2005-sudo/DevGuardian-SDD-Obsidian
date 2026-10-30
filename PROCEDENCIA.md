# Procedencia y alcance de la entrega

Separación documental realizada el **2026-10-28**, por solicitud del usuario para cumplir la revisión docente de SDD y Obsidian en un repositorio independiente.

| Origen | Commit de la copia | Destino documental |
|---|---|---|
| [Backend](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/commit/d6af0f7c0d67a5d7a0d9eb453ba77a3df82f10f6) | `d6af0f7c0d67a5d7a0d9eb453ba77a3df82f10f6` | `.specify/`, `.agents/`, `specs/`, verificador SDD |
| [Frontend](https://github.com/SebhastianCampero-Collab/Frontend/commit/22d4b2d82c5dca9ca798cc6647ba9f2feca69965) | `22d4b2d82c5dca9ca798cc6647ba9f2feca69965` | `frontend/` |

La extracción utiliza `git archive` de esos commits: no copia `.env`, credenciales, bases locales, dependencias ni configuración personal de Obsidian. Las habilidades y plantillas provienen de la inicialización existente de Spec Kit 0.8.9; no se afirma una segunda inicialización ejecutada aquí.

## Interpretación de las evidencias

Los logs y recibos importados son históricos. Los conteos de pruebas, fallos o bloqueos describen las ejecuciones citadas en sus documentos. Este repositorio no vuelve a ejecutar el backend ni el frontend y su CI documental no acredita que toda la aplicación esté en verde.

La arquitectura objetivo, la implementación local y el despliegue productivo son estados diferentes. La separación documental no migra datos a producción, no modifica Render y no completa los pendientes técnicos registrados.

## Cambios respecto de las copias originales

Se añadieron portada y recorrido docente, esta procedencia, una especificación de separación, validación de la bóveda, workflow documental y configuración compartida del grafo. Los índices de apertura identifican esta bóveda independiente; los documentos históricos conservan su contexto temporal.

## Actualización de reparación aislada (2026-10-28)

La especificación `004-safe-repair-deployment` incorpora evidencia nueva de la rama `validate-isolated-repair`: backend `0f6ced284a323d539a21e83d783f3de413bf5827` y frontend `da32b57d32bd5487567ac2ecd23fbe16443987be`. Se redactó a partir del código y ejecuciones comprobadas, sin reemplazar las copias históricas de otras especificaciones ni copiar código de negocio. El alcance posterior autorizado es validar en local y CI antes de desplegar; no acredita cambios en Render ni generación real con Anthropic.

La consolidación del 2026-10-29 incorpora evidencia de los merges backend `39cb46a93b3c750100e09aab93950607aff357da` y frontend `3b06f56e3bf2a213155865760649218c8d3b16d6`, preparados en PRs hacia las ramas de entrega. Consultar `specs/004-safe-repair-deployment/consolidation.md`; no se reemplazaron las evidencias históricas ni se copiaron secretos o código de negocio.

## Regularización del backlog y trazabilidad

`specs/005-final-traceability/` registra el corte del 29/10/2026 sobre esos mismos SHAs de código: 51 HU con issues reales y una copia del backlog canónico de backend. La documentación corregida se genera después de esos commits: no se afirma que los nuevos archivos existieran en los SHAs base. Los enlaces de código/pruebas son inmutables; la copia documental se identifica mediante huellas en inventory.json. Los registros de GitHub son retrospectivos para HU-01 a HU-43. La evidencia de Obsidian enlaza la configuración y verificador documental de `b1e1a41865058aea1f41440a53b32268ae053555`.

El backlog, README y matriz del backend se publicaron en el commit documental `e1019d1b10a2ae7f0ec285e7371d577a4df854e3`, dentro del PR #5 sin fusionarlo. No se cambió código de aplicación ni la rama remota Dev. Las huellas documentales normalizan LF/CRLF para permitir la comprobación tanto en Windows como en Linux.

La ampliación de relaciones HU/issues/PRs del mismo corte inspeccionó archivos y estados de los PRs backend #1–#5 y frontend #1. La instantánea está en `specs/005-final-traceability/pull-requests.json`; las referencias gestionadas se añadieron a los 51 issues existentes y solo a los dos PRs abiertos. No se crearon issues adicionales, no se modificaron autores/fechas originales y no se cambiaron estados ni PRs históricos integrados.

## Definición de dos incrementos finales

`specs/006-final-increments/` define INC-01 (HU-44) e INC-02 (HU-46) a partir de código ya existente; no introduce una nueva implementación. Se verificó como base técnica backend `f9438efecb32df9175819fd6f0667b91b1529c42` y frontend `f83d9286b2d1c5ccdfb51056a6a345b62449c611`, ambos del 20/10/2026. La primera aparición de identidad/platform y Shell/remotos comprobada en Git corresponde a `d6af0f7c0d67a5d7a0d9eb453ba77a3df82f10f6` y `22d4b2d82c5dca9ca798cc6647ba9f2feca69965`, del 28/10. Los documentos y la selección son posteriores al código; la base y la propuesta no se presentan como aceptadas por el docente. Los criterios manuales y el guion siguen pendientes de ejecución final.

## Coordinación de fixes y validaciones

CONTROL_DE_FIXES.md y specs/007-release-qa/cases.json se construyeron a partir del inventario de HU vigente y una consulta de los 18 issues abiertos del backend el 29/10/2026. Se creó el issue #57 como índice, no como HU ni bug adicional. Se preservaron los estados de los 18 issues y no se inventaron responsables. Las 20 fichas incluyen dos aceptaciones de incrementos dentro de HU-37. Los archivos/pruebas enlazados proceden del inventario anterior; las nuevas fichas no acreditan una reproducción ni un resultado nuevo de producto.

## Checklist ejecutable de los incrementos

CHECKLIST_ACEPTACION_INCREMENTOS.md traduce los 12 criterios ya definidos en specs/006-final-increments/ a pasos, resultados esperados y un acta por versión. Se contrastaron con gateway, Shell/loader y pruebas PostgreSQL existentes; la preparación no ejecutó ensayos nuevos ni marcó casillas de aceptación. QA-004/QA-005 y los issues #42/#57 enlazan el mismo protocolo. La comprobación documental valida que los IDs cubran exactamente los seis criterios de cada incremento; no acredita resultados manuales ni sustituye al revisor.


Actualización del ensayo técnico del 29/10/2026: los resultados por criterio y versiones están en [ACTA](specs/006-final-increments/ensayo/ACTA.md). Se ejecutaron pruebas PostgreSQL reales, recorrido de Shell, cambios de organización y recuperación/rechazos del loader. La revisión humana y aceptación docente permanecen pendientes. La corrección de navegación del frontend está local, sin commit ni publicación.
