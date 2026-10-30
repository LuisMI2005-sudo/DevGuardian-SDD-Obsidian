---
tags: [devguardian, dg/verificacion, dg/ia, dg/seguridad]
---
# Acta: habilidad, MCP, hooks y subagentes

**Fecha local:** 29/10/2026, America/La_Paz. Las trazas usan UTC y por eso muestran 30/10/2026. **Resultado del ensayo inicial:** activación real acreditada; recorrido completo de edición de QA-006 pendiente por el runtime Windows. [Criterios](spec.md).

## Actualización del 30/10/2026

La prueba de edición permitida, verificación posterior y rechazo protegido se completó en [la aceptación nativa posterior](../013-native-hook-acceptance/ACTA.md), usando MXC y una corrección autorizada que conserva el código 2 de PowerShell. Los fallos y pendientes narrados abajo corresponden al ensayo inicial del 29/10. La corrección del PR #58 fue integrada en `Dev` el 30/10/2026; el acta posterior registra el merge y distingue la integración Git del commit servido por el hosting.

## Versiones y trazabilidad

- Backend local y desplegado: `15eedc0c11a62535add7efc9fd3ecb038e5c8ad6`.
- Frontend de referencia: `ea8b600e018b008a40ec51a34d02994ffa815579` (sin cambios en este ensayo).
- Codex CLI: `0.162.1`; Node: `v24.19.0`; cliente MCP SDK: `1.32.1`.
- Servidor: `https://proyecto-certificacion-ai-backend.onrender.com/api/mcp`.
- Proyecto de ensayo: `7ac733ad-df76-4fe5-8fb7-542a3f3a024e`.
- Sesión de habilidad y perfil: `01a18a55-708b-7690-b4b3-3e7be26edd8d`.
- Sesión de hooks: `01a18a5a-5bbd-7b71-a8f6-13d5c6ddeac3`.
- Sesión MCP interactiva: `01a18a5b-5dbd-7142-a8f6-ba17e5ef7ce5`.

Los [recibos](evidence.json) identifican las fuentes y sus SHA-256. La [traza nativa](native-events.json) contiene únicamente campos permitidos: fechas, tipos, nombres, IDs y resultados resumidos. El [log nativo](native-hooks.json) conserva eventos emitidos por Codex, con identidades reducidas por el propio adaptador. Los rollouts originales quedan locales: no se publican prompts internos, argumentos cifrados, credenciales, listados de proyectos ni fragmentos fuente.

## 1. Habilidad ejecutada

El asistente anunció y leyó `speckit-analyze`, comprobó los hooks de extensión y analizó especificación, plan, tareas y constitución de `001-sdd-foundation`. No existe `.specify/extensions.yml`; no hubo hooks de extensión Spec Kit que ejecutar.

El script de prerrequisitos falló dentro de la CLI por `helper_unknown_error: setup refresh had errors`. Se completó posteriormente desde el agente principal con `SPECIFY_FEATURE=001-sdd-foundation` y `.specify/scripts/powershell/check-prerequisites.ps1 -Json -RequireTasks -IncludeTasks`: exit 0, directorio esperado y `tasks.md` disponible. Ese éxito corresponde a la comprobación del agente principal, no a la CLI hija.

| Hallazgo | Resultado del análisis |
|---|---|
| Cobertura de requisitos | 5 requisitos, 7 tareas; 3 vínculos directos, 1 indirecto y 1 sin tarea explícita |
| Conservación, FR-001 | Falta una tarea explícita que compruebe conservación de módulos/contratos/archivos |
| Seguridad, FR-004 | Trazabilidad indirecta mediante constitución/T002; falta hacer explícita su verificación |
| Plan y tareas | Los controles `git diff` y `npm run check` del plan no aparecen explícitos en las tareas |
| Escenario negativo HU-SDD-03 | T004 no explicita demostrar el fallo ante divergencia y la recuperación tras sincronizar |
| Revisiones humanas | T006 y T007 continúan pendientes |

Se recomienda precisar las tareas de verificación en una revisión posterior. No se editaron los artefactos bajo la habilidad de solo lectura ni se declaró reparación. Estos son hallazgos documentales, no fallos de pruebas del producto.

## 2. MCP ejecutado

Se realizaron dos pruebas distintas. Un cliente SDK real completó negociación MCP, `tools/list` y llamadas contra el servidor desplegado. Después, el asistente nativo ejecutó sus propias llamadas, aprobadas individualmente mediante el diálogo normal, sin autorizaciones permanentes.

| Operación | Cliente SDK | Asistente nativo |
|---|---|---|
| Catálogo | 19 herramientas descubiertas | Herramientas del servidor descubiertas en la sesión |
| `db_list_projects` | Correcto, 27 registros; contenido excluido del recibo | Correcto, 27 registros |
| `read_file_context`, `src/calculator.ts` | Correcto, 3 líneas, sin truncamiento | Correcto, 3 líneas |
| Solicitud de ruta `.env` | Rechazo del servidor antes de leer el archivo | Cancelada antes de enviar, tras rechazo de la revisión automática de aprobación |

Huella del archivo de ensayo: `93b0ebf4d6b65fcabaa19ccb77b2adbb95ddddd9c32f176490bc39569aa9147c`. No se incluye su contenido. El wrapper del asistente no presentó el `_meta.auditId`; no se inventó un ID para esas llamadas nativas.

El [recibo MCP](mcp.json) conserva los IDs reales de las llamadas SDK: lectura permitida `87d44fc3-649d-4da6-90af-70fb9ccd6080` y rechazo `ea60bb35-c75f-4b68-99d1-45179ff38ddd`. `hooks_get_logs` recuperó cuatro registros persistidos del rechazo; entre ellos `mcp-context-policy`, `pre:tool_call`, decisión `block`, error `VERIFICATION_FAILED`, motivo «Secret configuration files cannot be read through MCP». El éxito de lectura no implica autorización para reparar o ejecutar código importado.

La revisión automática rechazó aprobar la solicitud nativa `.env` porque una ruta de secretos no debe autorizarse suponiendo que el guard seguirá funcionando. Se canceló ese diálogo y no se reintentó. Su cancelación no acredita un rechazo del servidor; este último sí consta en la prueba SDK anterior.

## 3. Hooks nativos ejecutados

Antes del ensayo, `/hooks` mostraba 7 handlers pendientes y 0 activos. Se revisó el comando Windows y el adaptador local. El usuario autorizó expresamente y se aprobó mediante la opción normal de confianza de Codex. No se usaron flags de bypass ni cambios manuales al almacén de confianza.

La sesión siguiente produjo eventos reales en `.devguardian/ide-audit.jsonl`:

| Hora UTC | Evento | Evidencia |
|---|---|---|
| 01:09:04 | `SessionStart` | Entorno listo y especialistas presentados; `allow` |
| 01:09:09 | `PreToolUse` / `apply_patch` | Política permite el archivo Markdown de ensayo |
| 01:09:15 | `PreToolUse` / `apply_patch` | Política emite `block`: `tests/demo-hook-protected.test.mjs` protegido |
| 01:09:25 | `PostToolUse` | Delegación nativa registrada |
| 01:09:27 | `SubagentStart` | Perfil `verificador`, identidad de agente correlacionable |
| 01:09:35 | `PreToolUse` / `Bash` | Comando de lectura del especialista permitido |
| 01:09:45 | `SubagentStop` | Termina el mismo especialista |
| 01:09:46 | `PostToolUse` | Espera del resultado registrada |
| 01:11:14 y 01:11:52 | `PostToolUse` | Llamadas MCP nativas registradas |

El registro acredita que Codex invocó los handlers; no se alimentó el adaptador manualmente con eventos ficticios. Los hooks internos del servidor MCP se acreditan en la sección anterior y son un mecanismo diferente.

**Límite de causalidad:** ambos `apply_patch` fallaron con `Failed to write file` y el runtime registró `windows_sandbox/failed_to_write_file`. El hook permitió uno y emitió `block` para el otro, pero no puede atribuirse la ausencia del segundo archivo exclusivamente al hook. Se verificó que no existen ni `artifacts/assistant-demo/permitido.md` ni `tests/demo-hook-protected.test.mjs`. No hubo edición positiva exitosa ni evento de verificación posterior a una edición. QA-006 sigue abierto para ese recorrido.

## 4. Subagentes ejecutados

La CLI llamó al mecanismo nativo con `agent_type: verificador`; la sesión posterior registra `SubagentStart` y `SubagentStop` del mismo perfil. El especialista devolvió el límite real: su proceso local no inició por `helper_unknown_error`. No se convirtió ese error en una verificación aprobada.

Además se delegó en este chat a `/root/verificar_demostracion`, quien leyó el perfil, ejecutó `npm run sdd:check` y devolvió exit 0: **97 documentos, 42 diagramas y 9 copias comprobados**. Confirmó árbol limpio, T006/T007 pendientes y la semántica `diagnosis_only` / `No patch was requested`. Una segunda verificación contrastó los eventos nativos y la ausencia de ambos archivos. Este subagente real del chat se identifica por separado: no prueba selección automática de un perfil de proyecto.

Los workers deterministas del backend no se presentan como subagentes nativos ni se volvieron a ejecutar reparaciones para esta demostración.

## Pendiente concreto y repetición

Para cerrar AS-06/QA-006: resolver el fallo de inicialización del sandbox Windows por el procedimiento soportado del entorno; abrir una sesión nueva conservando políticas; repetir únicamente el archivo Markdown permitido y el intento ficticio protegido. Exigir escritura positiva, verificación posterior y evidencia aislada de rechazo antes de cerrar. No basta con que el archivo protegido no exista.

La aprobación de confianza no habilita por sí sola MCP en sesiones futuras: en este ensayo el servidor se agregó únicamente como configuración de sesión. Para repetir, abrir Codex en el backend, comprobar `/hooks`, proporcionar el mismo endpoint MCP y aprobar individualmente las lecturas necesarias. La confianza y las aprobaciones deben respetar el flujo normal descrito en la [documentación oficial de hooks](https://learn.chatgpt.com/docs/hooks).

## Verificación de la entrega documental

`npm run qa:render`, `git diff --check` y `npm run check` finalizaron correctamente. El comprobador registró 150 Markdown, 3 Canvas, 69 bloques Mermaid y 20 grupos; 51 HU/51 issues y 20 fichas QA consistentes. Son controles estructurales de esta entrega. Backend y frontend conservaron árbol limpio; no se cambió código de aplicación ni se desplegó una versión nueva. La verificación estructural no sustituye revisión visual o aceptación humana.
