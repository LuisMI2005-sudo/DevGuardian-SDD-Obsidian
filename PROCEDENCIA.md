# Procedencia y alcance de la entrega

Actualización 2026-10-30: [recursos MCP por proyecto](specs/014-mcp-project-resources/ACTA.md), implementación backend `8c7b7eb484158dd7236c0484c1bbc4d4e6fa44c7` y HEAD de revisión `2b78dd52a8b072ce9337c378c6b821bd658e09fa` sobre Dev `5ba0c46ab46bc4b3d2d45d1b0d9d23723ce2d9eb`, PR #59 pendiente de revisión/integración. Se incorpora acta nueva y recibo de CI, sin código de negocio ni sustitución del inventario histórico o de VERSION_FINAL.md. El segundo commit restaura exactamente el backlog histórico; código y pruebas coinciden con el primero.

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


## Recorrido de la aplicación desplegada

El 29/10/2026 se consultó el panel de Render en modo de lectura: backend 15eedc0c11a62535add7efc9fd3ecb038e5c8ad6 y frontend ea8b600e018b008a40ec51a34d02994ffa815579 figuraron Live. Se ejecutó desde la web pública un registro de proyecto sintético, diagnóstico TS2322, recarga/historial y error por archivo inexistente; el detalle está en [specs/009-deployed-e2e/ACTA.md](specs/009-deployed-e2e/ACTA.md). Los recibos HTTP se redujeron a metadatos de este ensayo, sin credenciales ni código de negocio. No se modificó configuración de hosting ni fuentes del producto. Los cortes anteriores conservan su carácter histórico.

## Demostración real del asistente (29/10/2026)

`specs/010-assistant-demo/` registra ejecuciones nuevas sobre backend `15eedc0c11a62535add7efc9fd3ecb038e5c8ad6`, Codex CLI 0.162.1 y Node v24.19.0: habilidad speckit-analyze, MCP desplegado, confianza nativa autorizada por el usuario y eventos reales de hooks/perfil verificador. Los recibos son sanitizados por lista de campos; los rollouts completos permanecen locales. No se copió código de negocio ni contenido de secretos. Se preserva el fallo de escrituras del sandbox Windows y la cancelación de la solicitud nativa de ruta secreta tras rechazo de aprobación automática; QA-006 no se declara cerrado. Frontend de referencia `ea8b600e018b008a40ec51a34d02994ffa815579`.

## Revisión de equipo (29/10/2026)

`specs/011-team-review/` conserva las huellas de constituciones 1.1.0, inventario de 69 diagramas y evidencia del recorrido parcial de Codex en Obsidian 1.14.5. El usuario confirmó expresamente ambas revisiones de Eduardo Quinteros, Sebhastian Campero y Luis Miguel Gonzales; se registra como declaración del usuario, sin identidad inferida, firmas individuales ni aceptación docente. Se completan T006/T007 de las copias documentales y se cierran QA-008/QA-009 con esa procedencia. Las fuentes de aplicación conservan su corte histórico; esta acta acredita la revisión posterior. Se corrigió la guía del grafo para la bóveda independiente y el preset compartido. Los fallos del controlador visual y el rechazo de acceso a una captura con contenido ajeno permanecen explícitos.

## Auditoría de seguridad (30/10/2026)

`specs/012-security-audit/` registra un escaneo nuevo local de Gitleaks 8.30.1 sobre backend `15eedc0c11a62535add7efc9fd3ecb038e5c8ad6`, frontend `ea8b600e018b008a40ec51a34d02994ffa815579` y documentación base `929efc8add49d12722458a1ddb3a873ea9d01f58`: 736 archivos de HEAD y 97 commits alcanzables incluidos merges, más artefactos seleccionados. La única fixture señalada se clasifica sin copiar su literal. Los reportes públicos usan campos permitidos, sin secretos ni código de negocio. Se ejecutaron 19 controles locales y solicitudes HTTP acotadas sobre el registro sintético propio: SEC-001 (acceso anónimo) y SEC-002 (CORS wildcard) permanecen abiertos. No se alteraron hosting, credenciales ni permisos productivos. La auditoría de la versión base y el escaneo posterior de esta documentación son alcances separados.

## Aceptación nativa de edición y rechazo (30/10/2026)

`specs/013-native-hook-acceptance/` acredita la repetición con Codex CLI 0.162.1 y MXC, conservando el sandbox y las políticas. El ensayo rojo reveló que PowerShell convertía 2 en 1; el usuario autorizó la corrección explícita de los siete commandWindows y su revisión normal de confianza. La sesión verde creó una fixture permitida, recibió verificación posterior aprobada y rechazó el marcador protegido antes de crearlo. Se retiraron las fixtures y se compararon las huellas de controles y pruebas. La corrección mínima está en backend `637fbde2abba69255ed22c326dee5ed3dfb58849`, PR #58 hacia Dev; no se fusionó ni cambió el despliegue. Se publican únicamente eventos y metadatos sanitizados, sin rollouts internos ni código de negocio.

## Integración del PR de hooks (30/10/2026)

Por instrucción expresa del usuario se sacó de borrador y fusionó el PR backend #58 hacia Dev, preservando commits y autoría. Merge `5ba0c46ab46bc4b3d2d45d1b0d9d23723ce2d9eb`, con árbol idéntico al HEAD aprobado `637fbde2abba69255ed22c326dee5ed3dfb58849`; diff limitado a siete comandos Windows de .codex/hooks.json. La copia local se actualizó por fast-forward, QA-006 quedó cerrado y el recibo está en specs/013-native-hook-acceptance/integration.json. No se afirma un nuevo estado Live del hosting por el hecho de fusionar ni se modifican las evidencias históricas de Render.
