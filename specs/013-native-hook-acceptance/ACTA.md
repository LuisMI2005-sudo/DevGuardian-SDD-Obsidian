---
tags: [devguardian, dg/seguridad, dg/verificacion]
---
# Edición verificación y rechazo de hooks nativos

**Fecha:** 30/10/2026, America/La_Paz. **Resultado:** los tres comportamientos solicitados se comprobaron en una sesión nativa real. Se encontró y corrigió un defecto del envoltorio Windows; se conservan los intentos rojo y verde. **Integración:** [PR #58](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/pull/58) fusionado en `Dev` el 30/10/2026 como `5ba0c46ab46bc4b3d2d45d1b0d9d23723ce2d9eb`, por autorización expresa del usuario. Se conserva la evidencia previa y el [recibo de integración](integration.json).

## Criterios de aceptación

- [x] HK-01 Sesión con sandbox operativo y hooks autorizados, sin eludir controles.
- [x] HK-02 Edición permitida creada mediante `apply_patch` y contenido comprobado.
- [x] HK-03 `PostToolUse` real con compilación, lint y pruebas aprobados.
- [x] HK-04 Rechazo explícito de `PreToolUse` antes de crear el marcador protegido.
- [x] HK-05 Trazas correlacionadas, integridad comprobada y fixtures retiradas.

Estos resultados cierran AS-06/QA-006 y la corrección ya está integrada en la rama de entrega. La aceptación docente se mantiene separada.

## Entorno y versiones

| Elemento | Versión o identidad |
|---|---|
| Codex CLI | 0.162.1 |
| Node | v24.19.0 |
| Windows | Windows 11, build 26300 |
| Base backend | `15eedc0c11a62535add7efc9fd3ecb038e5c8ad6` |
| Corrección backend | `637fbde2abba69255ed22c326dee5ed3dfb58849` |
| Rama de corrección | `fix/windows-hook-exit-codes` |
| Sandbox de las sesiones | MXC, `workspace-write` |
| Sesión roja | `01a18c7b-c79e-7201-bd85-3a826949081a` |
| Sesión verde | `01a18c85-8fa7-7443-a965-cf00ee573ef7` |

El diagnóstico del sandbox Windows legacy reprodujo `helper_unknown_error: setup refresh had errors`. El diagnóstico oficial de MXC, con `--include-managed-config --permission-profile :workspace`, ejecutó un comando inocuo con exit 0. Se seleccionó `windows.sandbox=mxc` mediante argumento solo para la sesión, sin cambiar la selección global guardada ni permisos de Windows. [Recibo de entorno y autorización](runtime.json). La CLI instalada no se actualizó.

## Fallo real identificado antes de corregir

Con MXC, la primera sesión creó `src/hooks/qa-native-demo.ts` y el hook posterior aprobó compilación, lint y Jest de `tests/hooks`. Así se separó la edición del fallo previo de sandbox legacy.

El intento sobre `tests/demo-hook-protected.test.mjs` produjo una decisión `block` en el log del adaptador, pero la CLI creó el archivo. El marcador contenía exclusivamente el comentario ficticio autorizado; no se modificó ninguna prueba existente. La verificación posterior de ese cambio registró resultado fallido/incompleto. Se conservan esos hechos y la limpieza posterior; no se presenta el primer intento como rechazo exitoso.

La comprobación aislada del shell reprodujo la causa: al invocar `node` con salida 2 desde `PowerShell -Command`, el proceso PowerShell devuelve 1 si no se preserva explícitamente el resultado. En ambos shells instalados, añadir `exit $LASTEXITCODE` conservó 0 y 2. Codex reconoce 2 como bloqueo de hook; el 1 no produjo la interceptación del primer ensayo. [Ocho comprobaciones del shell](shell-exit-proof.json), diferenciadas de los eventos nativos.

## Corrección autorizada y revisión de confianza

Se cambió únicamente `.codex/hooks.json`: siete inserciones y siete eliminaciones, añadiendo `; exit $LASTEXITCODE` al final de cada `commandWindows`. Los matchers, comandos no Windows, rutas protegidas, límites, timeouts y código de política conservaron su semántica. No se modificaron tests para obtener el resultado.

El usuario respondió expresamente **«Autorizo la corrección y la revisión normal de /hooks»** después de recibir la propuesta y sus comprobaciones. Se abrió la revisión nativa, se observó el comando modificado con el `exit` explícito y se aprobaron las siete definiciones mediante el flujo normal de confianza. No se usó un flag de bypass ni se escribió manualmente el almacén de confianza.

## Sesión verde comprobada

Las horas de esta tabla son UTC; los recibos conservan fecha y zona de contexto.

| Hora UTC | Operación real | Resultado |
|---|---|---|
| 11:15:34 | `PreToolUse` de edición permitida | `allow` |
| 11:15:35 | `apply_patch` agrega la fixture TypeScript | Archivo creado; 40 bytes y contenido exacto comprobado |
| 11:16:41 | `PostToolUse`, modo `verify` | `allow`, «Verificacion aprobada»; feedback nativo: compilación, lint y pruebas aprobados para `tests/hooks` |
| 11:16:46 | `PreToolUse` sobre el marcador protegido | `block`, «Protected file: tests/demo-hook-protected.test.mjs» |
| 11:16:46 | Respuesta de Codex al intento protegido | «Command blocked by PreToolUse hook»; no se creó el archivo |
| Después | Consultas locales del asistente y del operador | Fixture permitida presente con hash esperado; marcador protegido ausente |

El verificador del proyecto ejecuta cuatro pasos fijos: TypeScript, copia del esquema de BD, ESLint y Jest dirigido al módulo afectado. El hook real devuelve éxito únicamente después de que los cuatro terminan completos. No se invocó manualmente el adaptador ni se inyectó un checker para esta aceptación. El feedback no expone un conteo de pruebas, por lo que no se inventa uno. Tampoco se atribuye este resultado a toda la suite de la aplicación.

Los [eventos nativos](native-hooks.json) se correlacionan con las [dos sesiones](native-sessions.json), identificadas por ID y SHA-256 de sus recibos originales. El ensayo verde contiene una denegación explícita de la herramienta, además de la decisión del adaptador: la ausencia del archivo no se deduce de un fallo del sandbox.

## Integridad y limpieza

Se inventariaron 29 archivos de pruebas/controles antes del ensayo. **Los 19 archivos de pruebas existentes conservaron sus hashes.** La única diferencia entre los 29 es el cambio autorizado de `.codex/hooks.json`; el adaptador, política, launcher y perfiles se conservaron. La comparación semántica verifica que al retirar únicamente el sufijo autorizado de los siete comandos Windows se recupera exactamente la configuración anterior. [Recibo de integridad](integrity.json).

La fixture permitida tuvo SHA-256 `1c1928f4a624fc3257aa3455b457539cdb2a7648e055d6430c0f728785e17355`. Tras registrar la evidencia, el operador retiró únicamente las dos fixtures autorizadas del intento rojo y, tras el verde, la permitida y sus cuatro archivos compilados. Se validó su contenido antes de retirar cada archivo. Los recibos demuestran la ausencia final de ambas rutas; no se borró ni reescribió una prueba existente. [Prueba de fixtures y limpieza](fixture-proof.json).

Se publican metadatos y mensajes de resultado sanitizados. Los rollouts completos permanecen locales en `Informes/hook-acceptance-2026-10-30/`; no se publican prompts internos, secretos ni código de negocio.

## Estado de entrega

QA-006 queda **cerrado** tras el ensayo nativo y la integración autorizada del PR #58 en `Dev`. El defecto reproducido quedó clasificado como bug confirmado; el conteo del registro incluye casos históricos y no equivale a bugs activos en producción. AS-06 de la demostración anterior está completado mediante este seguimiento; los fallos anteriores conservan su contexto histórico. La copia local de `Dev` se actualizó por fast-forward y conserva un árbol limpio. El árbol del merge coincide exactamente con el HEAD aprobado del PR. Esta integración no acredita por sí sola qué commit sirve Render; el hosting no se modificó manualmente.

El CI del PR aprobó los trabajos de TypeScript/ESLint/Jest/pytest y de reparación real en Docker sobre `637fbde`. Los verificadores documentales también pasaron: 156 Markdown, 3 Canvas, 69 Mermaid y 20 grupos. [Recibo de validación](validation.json). El CI no sustituye la prueba nativa Windows descrita arriba; ambas evidencias se identifican por separado.

Referencias de comportamiento: [hooks oficiales](https://learn.chatgpt.com/docs/hooks) y [sandbox Windows/MXC](https://learn.chatgpt.com/docs/windows/windows-sandbox). La prueba de exit codes y las sesiones locales sustentan los resultados de esta acta; la documentación de producto no sustituye esas ejecuciones.

## CI posterior a la integración

El pipeline de `Dev` sobre `5ba0c46` terminó aprobado en el segundo intento. El primero pasó Docker y 18 suites generales, pero nueve casos PostgreSQL fallaron en la preparación por `EADDRINUSE` en un puerto local ocupado. Se repitió exclusivamente el job fallido, con el mismo commit y sin cambiar u omitir casos. La repetición aprobó el job general; se conserva el fallo y no se afirma haber corregido la selección de puertos de la fixture. [Recibo de repetición](merge-ci-retry.json) y [resultado final](post-merge-ci.json).
