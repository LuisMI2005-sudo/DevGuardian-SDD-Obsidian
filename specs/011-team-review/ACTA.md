---
tags: [devguardian, dg/sdd, dg/verificacion, dg/direccion]
---
# Revisión de constitución y Obsidian

**Fecha:** 29/10/2026, America/La_Paz. **Revisor técnico:** Codex. **Equipo:** Six seven. **Base documental:** `d2425e3220dab8870a7566921329d9b9672172bc`. Backend de entrega `15eedc0c11a62535add7efc9fd3ecb038e5c8ad6`; frontend `ea8b600e018b008a40ec51a34d02994ffa815579`.

**Resultado:** revisión de ambas constituciones y recorrido visual del equipo **completados según confirmación expresa del usuario en este chat**. La ejecución visual del asistente fue parcial y conserva sus límites. La confirmación del equipo no se sustituye por verificadores ni se presenta como aceptación docente. [Alcance y criterios](spec.md).

## Constitución revisada

Se leyeron las constituciones [backend](../constitution.md) y [frontend](../../frontend/specs/constitution.md), ambas 1.1.0, y se contrastaron con fuentes operativas, planes de adopción, versión final, trazabilidad, límites del despliegue y pruebas registradas. Las [huellas y comparaciones](constituciones.json) permiten identificar los textos exactos revisados.

| Principio | Revisión y conclusión técnica |
|---|---|
| I. Especificar antes de implementar | Exige requisitos, tareas y evidencia para trabajo nuevo; declara expresamente que la adopción no acredita SDD previo al código. La trazabilidad retrospectiva está identificada como tal. Conforme para someter a revisión del equipo. |
| II. Contratos y modularidad | Backend separa sus módulos y herramientas MCP; frontend consume contratos y evidencia sin acceso directo a PostgreSQL. La constitución exige conservar estas fronteras; no afirma que el diseño distribuido objetivo esté desplegado. |
| III. Seguridad y evidencia | Mantiene secretos fuera de Git, controles de rutas y aislamiento para código importado. La evidencia desplegada de diagnóstico no se transforma en reparación pública autorizada. |
| IV. Calidad verificable | Existen los comandos `check`, `build` y `sdd:check` en ambos repositorios de aplicación. Las pruebas históricas se atribuyen a su versión; los checks de esta revisión documental tienen alcance propio. |
| V. Documentación portable | Requiere Markdown relativo y Mermaid nativo. Los verificadores controlan estructura; el render debe comprobarse en Obsidian. No se requiere instalar plugins comunitarios. |
| Gobernanza | Las constituciones tienen versión y fuente operativa; modificar principios exige registrar motivo e impacto. Esta revisión no modifica principios, versión ni fecha de adopción. |

No se encontró una contradicción que exija cambiar los principios para este corte. El usuario confirmó después la revisión y aprobación de ambas constituciones por los tres integrantes. Los textos 1.1.0 conservan sus principios y fecha de adopción; el estado posterior de revisión se acredita mediante esta acta.

## Decisiones sometidas a revisión

1. Mantener constituciones 1.1.0 y sus cinco principios, o registrar observaciones concretas antes de aprobarlas.
2. Reconocer la adopción SDD local del 28/10 y la regularización retrospectiva del backlog, sin atribuir especificaciones previas inexistentes.
3. Mantener visibles arquitectura objetivo, perfil local implementado y diagnóstico desplegado como alcances distintos.
4. Confirmar la entrega efectiva desde `Dev`/`dev`: HU-38 menciona `main` y esa diferencia sigue explícita en [VERSION_FINAL](../../VERSION_FINAL.md). No se cambia esa condición académica mediante esta acta.
5. Conservar los estados del corte de trazabilidad: 33 HU completadas técnicamente, 12 parciales y 6 pendientes. Ningún conteo equivale a aceptación docente; las nuevas evidencias están en fichas QA y actas posteriores.

## Recorrido visual ejecutado por el asistente

Obsidian instalado: **1.14.5**. Se abrió mediante su selector normal la carpeta `DevGuardian-SDD-Obsidian`, distinta de la bóveda del código.

| Paso | Resultado observado | Evidencia / límite |
|---|---|---|
| Abrir la bóveda independiente | Realizado; nombre correcto en barra de bóveda | Observación de la interfaz |
| Abrir README en vista de lectura | Realizado; portada, integrantes y tabla legibles | Observación de la interfaz |
| Seguir README → Constitución del backend | Realizado; abrió `specs/constitution.md`, principios legibles | [Captura](evidencia/01-constitucion-backend.png) e [índice](evidencia/indice.json) |
| Mostrar diagrama constitucional | Obsidian presentó «Display Mermaid diagrams in this vault?» | El código del diagrama se vio, pero no se acreditó render |
| Reanudar después de la confirmación del usuario | El controlador siguió reportando `window is minimized` para la ventana de entrega | Se reinició el controlador y se recuperó su identificador; el error persistió |
| Render de flujo, secuencia y datos | Pendiente | La existencia de bloques válidos no demuestra render visual |
| Navegar a requisitos, arquitectura, módulos y evidencia | Pendiente en interfaz | Los destinos se verifican estructuralmente, no como clics ejecutados |
| Canvas y grafo nativo de esta bóveda | Pendiente | La vista de grafo del repositorio de código no se usa como evidencia de la bóveda independiente |

El usuario pidió aceptar el aviso y después confirmó que la ventana era visible. No se consiguió una captura posterior que acreditara Mermaid habilitado. No se afirma aceptación efectiva del permiso ni se modifica su estado por archivos o por una vía alternativa.

Una captura de recuperación de la otra ventana mostró aplicaciones ajenas superpuestas. La revisión automática rechazó continuar sobre ella por riesgo de acceso fuera del alcance. Se detuvo esa vía; no se guardó ni publicó esa captura. La revisión estructural y la preparación del acta continuaron.

## Correcciones concretas

La [guía del grafo](../segundo-cerebro/Guia-Grafo-Nativo.md) indicaba seleccionar `ProyectoCertiIA` y decía que `.obsidian/graph.json` estaba ignorado por Git. Se corrigió para la entrega independiente: seleccionar `DevGuardian-SDD-Obsidian`, preset compartido versionado con 20 grupos y estado personal de ventanas ignorado. Se conserva el contexto histórico del 28/10. No se alteró la configuración de seguridad ni se instalaron plugins.

## Recorrido confirmado por el usuario para los integrantes

En la bóveda de entrega, el protocolo comprende README, ambas constituciones, adopción SDD y tareas, mapa de módulos, perfil local, arquitectura futura, modelo de datos y acta desplegada; una muestra de flujo, secuencia y modelo relacional; Canvas y grafo con navegación entre notas. El usuario confirmó el recorrido visual por Obsidian, diagramas, enlaces y grafos de los tres integrantes. No aportó un registro individual por nota o captura adicional: no se atribuye esa ejecución al asistente ni se afirma una comprobación individual de cada uno de los 69 diagramas del [inventario](diagramas.json).

## Registro de aprobación del equipo

Los nombres proceden del README. El 29/10/2026 se preguntó al usuario si confirmaba que Eduardo Quinteros, Sebhastian Campero y Luis Miguel Gonzales habían revisado y aprobado ambas constituciones 1.1.0 y completado el recorrido visual de Obsidian, diagramas, enlaces y grafos. Su respuesta textual fue: **«Sí, confirmo ambas revisiones de los tres integrantes»**. Se registra como declaración del usuario, sin atribuirle una identidad no indicada ni inventar firmas o intervenciones independientes de los integrantes.

| Integrante | Constitución backend/frontend 1.1.0 | Recorrido visual de entrega | Observaciones / fecha |
|---|---|---|---|
| Eduardo Quinteros | Aprobadas según confirmación del usuario | Completado según confirmación del usuario | 29/10/2026; sin observaciones comunicadas |
| Sebhastian Campero | Aprobadas según confirmación del usuario | Completado según confirmación del usuario | 29/10/2026; sin observaciones comunicadas |
| Luis Miguel Gonzales | Aprobadas según confirmación del usuario | Completado según confirmación del usuario | 29/10/2026; sin observaciones comunicadas |

T006 y T007 de las copias documentales de ambos planes se completan con referencia a esta declaración. QA-008 y QA-009 se cierran por la confirmación del equipo aportada por el usuario, conservando el alcance parcial de la ejecución del asistente. Las fuentes de los repositorios de aplicación conservan su corte histórico; la revisión posterior se acredita aquí. No se cambia el estado de las HU completas ni se afirma aceptación del docente.

## Validación documental

El resultado de los verificadores de esta revisión se registra en [validacion.json](validacion.json). La validación estructural de enlaces, Canvas y diagramas no sustituye los pasos visuales pendientes ni confirma aprobaciones personales.
