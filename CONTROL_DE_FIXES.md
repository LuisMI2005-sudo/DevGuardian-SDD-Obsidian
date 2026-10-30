---
tags: [devguardian, dg/verificacion, dg/direccion]
---
# Lista única de bugs y pendientes

**Corte:** 2026-10-29. [Issue coordinador](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/57). Esta es la lista canónica de trabajo para el cierre; los README y los issues la enlazan, no mantienen listas competidoras.

**Estado observado:** 18 HU de seguimiento y 20 casos, incluidos dos de aceptación de incrementos. Bugs confirmados según este registro: **2**. Generar la lista no ejecuta por sí solo pruebas de producto. Las HU-44/HU-46 siguen con cierre técnico; su ensayo final se coordina dentro de HU-37. Los registros anteriores a Spec Kit son retrospectivos y no modifican fechas o autorías originales.

## Cómo usarla antes de tocar código

1. Buscar primero el problema por ID, HU y síntoma. Si ya existe, actualizar su issue; no crear otro fix para el mismo caso.
2. Acordar un responsable en el issue antes de editar; indicar rama y archivos afectados. Los responsables pendientes se acuerdan con el equipo; las áreas sugeridas no asignan personas y el operador técnico no sustituye a un revisor humano.
3. Reproducir en un entorno de ensayo e identificar versión/condiciones. Si no falla, registrar No reproducido o clasificar como brecha de cobertura/aceptación; no inventar el resultado actual.
4. Para un bug confirmado, añadir una prueba de regresión que falle por el defecto y pase con el arreglo, o una verificación manual reproducible cuando corresponda. No modificar tests para esconder el fallo.
5. Abrir/actualizar PR con ID QA/HU/issue, cambio acotado y evidencia. Coordinar archivos compartidos antes de editar simultáneamente.
6. Un revisor repite el caso. Registrar evidencia de la versión correcta antes de cerrar; un CI verde general no prueba un caso manual que nunca se ejecutó.

No se guarda ningún secreto, token, URL de conexión con credenciales ni contenido de .env en issues, capturas o logs. No se ejecutan repositorios externos sin aislamiento.

## Prioridad y tipo

- **P0:** comprobar o decidir antes de declarar la entrega lista. No implica por sí mismo una vulnerabilidad crítica o fallo de producción.
- **P1:** brecha técnica que debe cerrarse si se incluye en el alcance; no cambiar el estado por falta de tiempo sin documentar la decisión.
- **P2:** decisión de alcance/evolución; no implementar de urgencia sin acuerdo.
- **Bug confirmado:** defecto con reproducción y evidencia actual. Los hallazgos corregidos conservan su reproducción y evidencia en el acta; este conteo no implica que sigan activos.
- **Cobertura pendiente / capacidad incompleta:** falta una prueba o criterio; no se afirma automáticamente que el comportamiento sea incorrecto.
- **Demostración / revisión / entrega:** falta evidencia o decisión; puede no requerir código.

## Índice de trabajo

| Caso | Prioridad | Tipo | HU de seguimiento | Responsable |
|---|---|---|---|---|
| [QA-001 Cerrar una versión candidata coherente](#qa-001) | P0 | Entrega | [HU-38](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/43) | Codex (integración autorizada por el usuario) |
| [QA-002 Relacionar despliegue y commit validado](#qa-002) | P0 | Entrega | [HU-36](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/41) | Codex (operador técnico autorizado) |
| [QA-003 Repetir el recorrido punta a punta de la entrega](#qa-003) | P0 | Demostración | [HU-37](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/42) | Codex (operador técnico autorizado) |
| [QA-004 Aceptar INC-01 organizaciones y accesos](#qa-004) | P0 | Aceptación de incremento | [HU-37](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/42) | Codex (operador técnico de esta sesión) |
| [QA-005 Aceptar INC-02 Shell y seis remotos](#qa-005) | P0 | Aceptación de incremento | [HU-37](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/42) | Codex (operador técnico de esta sesión) |
| [QA-006 Acreditar activación de hooks del asistente](#qa-006) | P0 | Bug confirmado | [HU-51](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/56) | Codex (ensayo nativo autorizado por el usuario) |
| [QA-007 Auditar secretos y permisos de la entrega](#qa-007) | P0 | Revisión de seguridad | [HU-40](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/45) | Codex (auditoría autorizada por el usuario) |
| [QA-008 Revisar constitución y estados SDD con el equipo](#qa-008) | P0 | Revisión humana | [HU-47](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/52) | Equipo Six seven; acta preparada por Codex |
| [QA-009 Ensayar Obsidian como segundo cerebro](#qa-009) | P0 | Revisión humana | [HU-48](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/53) | Equipo Six seven; acta preparada por Codex |
| [QA-010 Acreditar acceso y aportes reales](#qa-010) | P0 | Revisión de colaboración | [HU-22](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/27) | Por asignar |
| [QA-011 Preparar defensa individual y pitch](#qa-011) | P0 | Revisión humana | [HU-39](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/44) | Por asignar |
| [QA-012 Completar rollback real conservando trabajo ajeno](#qa-012) | P1 | Cobertura pendiente | [HU-18](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/23) | Por asignar |
| [QA-013 Completar escenarios negativos de pytest real](#qa-013) | P1 | Cobertura pendiente | [HU-19](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/24) | Por asignar |
| [QA-014 Cerrar aceptación integral del Test Runner](#qa-014) | P1 | Capacidad incompleta | [HU-12](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/17) | Por asignar |
| [QA-015 Completar recursos MCP por proyecto](#qa-015) | P1 | Capacidad incompleta | [HU-24](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/29) | Codex (implementación y ensayo solicitados por el usuario) |
| [QA-016 Definir o implementar worker remoto autorizado](#qa-016) | P2 | Decisión de alcance | [HU-32](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/37) | Por asignar |
| [QA-017 Verificar estado y configuración durante el run](#qa-017) | P1 | Cobertura pendiente | [HU-41](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/46) | Por asignar |
| [QA-018 Comprobar presupuesto global y protección de evidencia](#qa-018) | P1 | Cobertura pendiente | [HU-42](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/47) | Por asignar |
| [QA-019 Cubrir terminación de descendientes y fallbacks](#qa-019) | P1 | Cobertura pendiente | [HU-43](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/48) | Por asignar |
| [QA-020 Decidir dónde demostrar reparación segura](#qa-020) | P0 | Decisión de alcance | [HU-50](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/55) | Por asignar |

## Orden para coordinar el cierre

Primero acordar alcance/entorno de reparación (QA-020) y responsables, y comprobar los dos incrementos. Se puede ensayar en el candidato sin fusionar. Preparar revisión de seguridad, SDD/Obsidian y defensa en paralelo. Después integrar solo cuando se autorice, fijar el candidato y repetir versión/despliegue/punta a punta. No hace falta desplegar una funcionalidad no comprometida para marcar una demo local como válida; sí hay que informar su entorno.

Los trabajos de Jest/pytest, recursos MCP y robustez no se ocultan ni se cierran por tener otro job aprobado. El worker remoto se decide por alcance. Si una prueba de aceptación descubre un fallo, registrar el síntoma real y el fix en el mismo issue de seguimiento o un issue hijo explícitamente relacionado, sin perder este ID.

## Fichas de ejecución

### QA-001

**Cerrar una versión candidata coherente**

- **Tipo / prioridad:** Entrega / P0.
- **Estado registrado:** Integración técnica realizada; aceptación de entrega pendiente; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-38](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/43).
- **Área sugerida:** QA / integración. **Responsable:** Codex (integración autorizada por el usuario). **Revisor:** Por asignar.
- **Entorno:** Repositorios locales y PRs abiertos.
- **Condición conocida:** PR backend #5 y frontend #1 fusionados en Dev/dev con CI previo de sus HEAD aprobado. Árboles finales iguales a los HEAD verificados. Revisión humana, versión desplegada y decisión de main según HU-38 permanecen separadas.

**Pasos de reproducción o comprobación**

1. Identificar los HEAD de backend/frontend y comprobar árbol limpio.
2. Consultar los PRs backend #5 y frontend #1, su base y CI del HEAD exacto.
3. Comparar la versión candidata con las ramas remotas de entrega y registrar qué falta publicar.

**Resultado esperado:** Una pareja de versiones identificada, revisada y fusionada solo cuando se autorice; autorías conservadas y CI aprobado.

**Prueba o verificación de cierre:** Verificar ancestros Git, SHA de PR/CI y comandos de instalación/arranque. Registrar autorización/fusión si ocurre; no usar un commit antiguo como prueba del nuevo.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/README.md). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** VERSION_FINAL.md y specs/008-final-release/merge-receipt.json. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-002

**Relacionar despliegue y commit validado**

- **Tipo / prioridad:** Entrega / P0.
- **Estado registrado:** Commits Live acreditados; prueba negativa de CI pendiente; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-36](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/41).
- **Área sugerida:** QA / DevOps. **Responsable:** Codex (operador técnico autorizado). **Revisor:** Por asignar.
- **Entorno:** Web pública de Render; backend Dev 15eedc0 y frontend dev ea8b600; proyecto sintético propio.
- **Condición conocida:** Render confirma Live backend 15eedc0c11a62535add7efc9fd3ecb038e5c8ad6 y frontend ea8b600e018b008a40ec51a34d02994ffa815579; coinciden con la entrega y CI aprobados. No se provocó un pipeline fallido ni se alteró producción.

**Pasos de reproducción o comprobación**

1. Registrar SHA candidato y run de CI aprobado.
2. Consultar la configuración de rama y el commit del deploy en el hosting sin mostrar variables sensibles.
3. Comparar el commit servido con el candidato y probar el bloqueo por CI fallido en una validación controlada, sin romper la producción.

**Resultado esperado:** Se demuestra qué commit está desplegado y que el flujo de entrega respeta las validaciones.

**Prueba o verificación de cierre:** Smoke tests HTTP más recibo del hosting con SHA/run. Una respuesta health 200 sin SHA no prueba la versión. No desplegar ni provocar fallos productivos sin autorización.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/.github/workflows/ci.yml). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** specs/009-deployed-e2e/ACTA.md, deploys.json, http.json y capturas. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-003

**Repetir el recorrido punta a punta de la entrega**

- **Tipo / prioridad:** Demostración / P0.
- **Estado registrado:** Recorrido diagnóstico desplegado aprobado; revisión humana pendiente; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-37](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/42).
- **Área sugerida:** QA. **Responsable:** Codex (operador técnico autorizado). **Revisor:** Por asignar.
- **Entorno:** Web pública de Render; backend Dev 15eedc0 y frontend dev ea8b600; proyecto sintético propio.
- **Condición conocida:** Proyecto 7ac733ad-df76-4fe5-8fb7-542a3f3a024e importado desde UI; diagnóstico 553526fe-b1b0-465b-ad92-24511d0b8347 con TS2322; recarga recupera resultado. Archivo inexistente genera auditoría 0dbec726-fd3a-4e88-86d9-b7ab9849b0a5 con error comprensible. Ambos intentos persisten y el resultado anterior se recupera sin repetir diagnóstico. No acredita reparación generativa cloud.

**Pasos de reproducción o comprobación**

1. Registrar SHA, entorno y un proyecto de prueba autorizado.
2. Desde la UI elegir archivo, ejecutar diagnóstico y guardar el ID de auditoría.
3. Consultar resultado e historial, recargar y comprobar que persiste; repetir un caso de error controlado.

**Resultado esperado:** La misma operación se correlaciona entre frontend, API y persistencia, con resultado y error comprensibles.

**Prueba o verificación de cierre:** Acta de ensayo con IDs no sensibles, captura o video y consulta de historial. Las pruebas audit-state/client/server ayudan, pero no sustituyen el recorrido real del candidato.

**Referencia existente:** [código/prueba/documentación](https://github.com/SebhastianCampero-Collab/Frontend/blob/3b06f56e3bf2a213155865760649218c8d3b16d6/tests/audit-state.test.tsx). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** specs/009-deployed-e2e/ACTA.md, deploys.json, http.json y capturas. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-004

**Aceptar INC-01 organizaciones y accesos**

- **Tipo / prioridad:** Aceptación de incremento / P0.
- **Estado registrado:** Ensayo técnico aprobado; revisión humana pendiente; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-37](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/42); [HU-44 de implementación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/49).
- **Área sugerida:** QA / backend. **Responsable:** Codex (operador técnico de esta sesión). **Revisor:** Por asignar.
- **Entorno:** Perfil local platform y PostgreSQL de ensayo.
- **Condición conocida:** HU-44 tiene cierre técnico local/CI; el ensayo técnico final está registrado y la aceptación docente sigue pendiente. Este caso se coordina dentro de HU-37, sin reabrir automáticamente HU-44. Ensayo técnico ejecutado y documentado; seis criterios aprobados, revisión humana pendiente.

**Pasos de reproducción o comprobación**

1. Iniciar sesión y comprobar 401 sin sesión y 403 al seleccionar una organización no autorizada mediante las pruebas HTTP reales.
2. Crear/consultar proyecto e historial en A y comprobar que no aparecen ni son accesibles en B.
3. Comprobar viewer sin escritura, RLS sin bypass, cambio de contexto y revocación al cerrar sesión.

**Resultado esperado:** Se cumplen INC-01-AC01 a AC06; el aislamiento lo aplica el servidor/BD y no solo el filtro de la UI.

**Prueba o verificación de cierre:** tests/platform/postgres.test.mjs y security.test.mjs con PostgreSQL efímero activo; acta manual de los seis criterios. Sin DEVGUARDIAN_TEST_ADMIN_URL los casos SQL omitidos no acreditan RLS. Registrar los seis criterios y sus evidencias en el [checklist de aceptación](https://github.com/LuisMI2005-sudo/DevGuardian-SDD-Obsidian/blob/main/CHECKLIST_ACEPTACION_INCREMENTOS.md#inc-01-organizaciones-y-accesos).

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/tests/platform/postgres.test.mjs). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** specs/006-final-increments/ensayo/ACTA.md. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-005

**Aceptar INC-02 Shell y seis remotos**

- **Tipo / prioridad:** Aceptación de incremento / P0.
- **Estado registrado:** Ensayo técnico aprobado; revisión humana pendiente; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-37](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/42); [HU-46 de implementación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/51).
- **Área sugerida:** QA / frontend. **Responsable:** Codex (operador técnico de esta sesión). **Revisor:** Por asignar.
- **Entorno:** Perfil local platform, build:platform y preview:platform.
- **Condición conocida:** Hay implementación y build local/CI; el ensayo técnico completo quedó registrado en ACTA.md. Se coordina dentro de HU-37. Ensayo técnico ejecutado y documentado; seis criterios aprobados, revisión humana pendiente. Se reprodujo navegación conservada entre tenants; corregida localmente con regresión roja/verde y repetición browser.

**Pasos de reproducción o comprobación**

1. Abrir la Shell, iniciar sesión y recorrer proyectos, revisión, resultados, seguridad, subagentes y sandbox MCP.
2. Mostrar manifiesto y cargas JS de los remotos; cambiar organización y comprobar limpieza de proyecto/vista.
3. Provocar un fallo de carga local controlado, comprobar error/reintento y reconstruir solo review comparando las otras cinco entradas del manifiesto.

**Resultado esperado:** Se cumplen INC-02-AC01 a AC06 y se distingue un build modular de una simple navegación entre componentes.

**Prueba o verificación de cierre:** tests/platform.test.tsx cubre ciclo/contexto con loader simulado; añadir evidencia real de navegador, recuperación y build:remote -- review. Si el import fallido queda cacheado, registrar la recarga necesaria; no declarar recuperación inexistente. Registrar los seis criterios y sus evidencias en el [checklist de aceptación](https://github.com/LuisMI2005-sudo/DevGuardian-SDD-Obsidian/blob/main/CHECKLIST_ACEPTACION_INCREMENTOS.md#inc-02-shell-y-microfrontends).

**Referencia existente:** [código/prueba/documentación](https://github.com/SebhastianCampero-Collab/Frontend/blob/3b06f56e3bf2a213155865760649218c8d3b16d6/tests/platform.test.tsx). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** specs/006-final-increments/ensayo/ACTA.md. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-006

**Acreditar activación de hooks del asistente**

- **Tipo / prioridad:** Bug confirmado / P0.
- **Estado registrado:** Cerrado; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-51](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/56).
- **Área sugerida:** QA / entorno de desarrollo. **Responsable:** Codex (ensayo nativo autorizado por el usuario). **Revisor:** Codex (diff, CI y trazas nativas); integración autorizada por el usuario.
- **Entorno:** Asistente compatible en workspace de ensayo.
- **Condición conocida:** Ensayo nativo completo con MXC: edición permitida, PostToolUse con compilación/lint/Jest aprobados y rechazo explícito antes de crear el marcador protegido. Defecto PowerShell 2→1 corregido mediante exit $LASTEXITCODE en siete comandos Windows, autorizado y revisado mediante /hooks. PR #58 fusionado en Dev como 5ba0c46ab46bc4b3d2d45d1b0d9d23723ce2d9eb; árbol idéntico al HEAD aprobado. Fixtures retiradas; 19 archivos de pruebas existentes intactos.

**Pasos de reproducción o comprobación**

1. Leer src/ide-integration/README.md y revisar el registro de hooks desde la interfaz del asistente.
2. En un workspace propio de ensayo activar mediante el flujo autorizado y realizar una edición permitida.
3. Intentar una edición protegida con datos ficticios y comprobar rechazo, motivo y log sin secretos.

**Resultado esperado:** La sesión real demuestra la interceptación y el especialista presentado; una configuración en disco no se usa como sustituto de activación.

**Prueba o verificación de cierre:** tests/ide-integration/ide-hooks.test.mjs más evidencia de sesión/evento real y rol. No desactivar políticas ni tocar un .env real para obtener la captura.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/tests/ide-integration/ide-hooks.test.mjs). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** https://github.com/LuisMI2005-sudo/DevGuardian-SDD-Obsidian/blob/main/specs/013-native-hook-acceptance/ACTA.md. **Rama:** Dev. **PR:** https://github.com/LuisMI2005-sudo/ProyectoCertiIA/pull/58. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-007

**Auditar secretos y permisos de la entrega**

- **Tipo / prioridad:** Revisión de seguridad / P0.
- **Estado registrado:** Auditoría ejecutada; SEC-001 y SEC-002 de despliegue abiertos; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-40](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/45).
- **Área sugerida:** QA / DevOps. **Responsable:** Codex (auditoría autorizada por el usuario). **Revisor:** Por asignar.
- **Entorno:** Repositorios, historial y artefactos autorizados.
- **Condición conocida:** Gitleaks 8.30.1: 736 archivos HEAD y 97 commits incluidos merges; solo fixture ficticia clasificada, sin credencial real identificada. 19 pruebas locales aprobadas y rol/RLS local comprobado. Producción: auditoría propia accesible sin bearer y con bearer inválido; CORS permite origen ajeno con wildcard. Sin remediación de hosting ni cierre de HU-40.

**Pasos de reproducción o comprobación**

1. Inventariar archivos versionados, historial y artefactos sin imprimir valores sensibles.
2. Ejecutar una herramienta de escaneo acordada con salida redactada y revisar permisos/CORS/autenticación del entorno de entrega.
3. Clasificar hallazgos y falsos positivos; si aparece una credencial real, gestionar revocación/rotación antes de publicar.

**Resultado esperado:** Un informe verificable cubre el alcance del escaneo y la disposición de cada hallazgo; no se confunde .gitignore con ausencia de exposición histórica.

**Prueba o verificación de cierre:** Informe redactado con herramienta, versión, commit, alcance y resultado. Las pruebas de guardrails no sustituyen una auditoría del historial.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/.gitignore). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** https://github.com/LuisMI2005-sudo/DevGuardian-SDD-Obsidian/blob/main/specs/012-security-audit/ACTA.md. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-008

**Revisar constitución y estados SDD con el equipo**

- **Tipo / prioridad:** Revisión humana / P0.
- **Estado registrado:** Cerrado; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-47](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/52).
- **Área sugerida:** Equipo / QA. **Responsable:** Equipo Six seven; acta preparada por Codex. **Revisor:** Eduardo Quinteros, Sebhastian Campero y Luis Miguel Gonzales (confirmación de ambas revisiones aportada por el usuario el 29/10/2026).
- **Entorno:** Bóveda documental y versión candidata.
- **Condición conocida:** Constituciones 1.1.0 contrastadas y fuentes coincidentes. El usuario confirmó expresamente que los tres integrantes revisaron y aprobaron ambas constituciones. Declaración identificada en el acta, sin firmas independientes ni aceptación docente.

**Pasos de reproducción o comprobación**

1. Ejecutar npm run check del repositorio documental.
2. Revisar constitución, estados de HU, alcance final y registros retrospectivos con los tres integrantes.
3. Anotar desacuerdos, decisiones y revisores reales; no marcar aceptación del docente sin su confirmación.

**Resultado esperado:** Documento coherente con el código/alcance y revisión humana registrada, manteniendo visibles los criterios no implementados.

**Prueba o verificación de cierre:** Checks SDD/trazabilidad y acta breve con fecha/versión/revisores; tests automáticos no acreditan esta revisión.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/scripts/spec-kit-docs.mjs). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** https://github.com/LuisMI2005-sudo/DevGuardian-SDD-Obsidian/blob/main/specs/011-team-review/ACTA.md. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-009

**Ensayar Obsidian como segundo cerebro**

- **Tipo / prioridad:** Revisión humana / P0.
- **Estado registrado:** Cerrado; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-48](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/53).
- **Área sugerida:** Equipo / QA. **Responsable:** Equipo Six seven; acta preparada por Codex. **Revisor:** Eduardo Quinteros, Sebhastian Campero y Luis Miguel Gonzales (confirmación de ambas revisiones aportada por el usuario el 29/10/2026).
- **Entorno:** Bóveda DevGuardian-SDD-Obsidian.
- **Condición conocida:** Bóveda independiente y enlace README a constitución comprobados por Codex; el controlador impidió completar su render/grafo. El usuario confirmó el recorrido visual por Obsidian, diagramas, enlaces y grafos de los tres integrantes. Se corrigió la guía de bóveda/preset; la confirmación humana se distingue del recorrido parcial del asistente.

**Pasos de reproducción o comprobación**

1. Abrir la raíz documental como bóveda y seguir README hacia requisito, arquitectura, datos, módulo y evidencia.
2. Revisar visualmente Mermaid, Canvas, enlaces y grupos de colores.
3. Registrar enlaces rotos o problemas de render con nombre de nota y pasos; separar ajustes personales de documentos compartidos.

**Resultado esperado:** El recorrido es navegable y legible en el equipo de defensa, sin depender de plugins comunitarios.

**Prueba o verificación de cierre:** npm run check y evidencia visual de navegación. Si aparece un defecto, registrar una reproducción concreta antes de editar.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/DevGuardian-SDD-Obsidian/blob/b1e1a41865058aea1f41440a53b32268ae053555/scripts/check-vault.mjs). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** https://github.com/LuisMI2005-sudo/DevGuardian-SDD-Obsidian/blob/main/specs/011-team-review/ACTA.md. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-010

**Acreditar acceso y aportes reales**

- **Tipo / prioridad:** Revisión de colaboración / P0.
- **Estado registrado:** Por validar; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-22](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/27).
- **Área sugerida:** Equipo / QA. **Responsable:** Por asignar. **Revisor:** Por asignar.
- **Entorno:** GitHub y repositorios de entrega.
- **Condición conocida:** Autorías disponibles; acceso/revisión/matriz individual pendientes.

**Pasos de reproducción o comprobación**

1. Comprobar acceso del docente a los enlaces de entrega.
2. Cada integrante identifica archivo, commit/PR y prueba que expliquen su aporte.
3. Revisar alias de autor y registrar responsables de las tareas activas sin inventar atribuciones.

**Resultado esperado:** Las contribuciones y revisiones son trazables y el docente accede a los repositorios correctos.

**Prueba o verificación de cierre:** Git shortlog/log, PRs y matriz de aportes revisada por el equipo; cantidad de commits no sustituye calidad ni comprensión.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/README.md). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** Sin registrar. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-011

**Preparar defensa individual y pitch**

- **Tipo / prioridad:** Revisión humana / P0.
- **Estado registrado:** Por validar; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-39](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/44).
- **Área sugerida:** Equipo. **Responsable:** Por asignar. **Revisor:** Por asignar.
- **Entorno:** Ensayo de presentación.
- **Condición conocida:** Defensa aún no realizada; la propuesta comercial ya está documentada.

**Pasos de reproducción o comprobación**

1. Distribuir exposición entre integrantes con sus aportes reales.
2. Ensayar incremento, decisión técnica, caso de error y prueba de cada aporte.
3. Practicar propuesta de producto/venta y preguntas sobre límites locales/productivos sin inventar clientes o métricas.

**Resultado esperado:** Cada integrante puede explicar su contribución y el flujo general; el pitch coincide con el alcance real.

**Prueba o verificación de cierre:** Acta de ensayo, enlaces a archivos/PRs/pruebas y material de presentación. No es una prueba automatizada de negocio.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/README.md). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** Sin registrar. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-012

**Completar rollback real conservando trabajo ajeno**

- **Tipo / prioridad:** Cobertura pendiente / P1.
- **Estado registrado:** Por validar; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-18](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/23).
- **Área sugerida:** Backend / QA. **Responsable:** Por asignar. **Revisor:** Por asignar.
- **Entorno:** Repositorio Git temporal y Jest real.
- **Condición conocida:** Rollback real y preservación tienen pruebas separadas; falta cubrir su combinación. No se confirma aquí pérdida de datos.

**Pasos de reproducción o comprobación**

1. Preparar baseline fallido y una propuesta candidata incorrecta sobre un archivo controlado.
2. Introducir trabajo ajeno no perteneciente al intento durante ese flujo de integración.
3. Verificar que se rechaza el commit, se revierte solo el intento y se conservan los archivos/staging ajenos.

**Resultado esperado:** La integración real prueba conservación de trabajo ajeno, además del rollback del archivo del intento.

**Prueba o verificación de cierre:** Extender tests/subagents/subagents.test.mjs o sandbox.test.mjs con un caso permanente, no FAKE_MODE; verificar contenido/HEAD/staging y repetir la prueba.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/tests/subagents/subagents.test.mjs). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** Sin registrar. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-013

**Completar escenarios negativos de pytest real**

- **Tipo / prioridad:** Cobertura pendiente / P1.
- **Estado registrado:** Por validar; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-19](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/24).
- **Área sugerida:** Backend / QA. **Responsable:** Por asignar. **Revisor:** Por asignar.
- **Entorno:** Python/pytest-json-report en entorno aislado de prueba.
- **Condición conocida:** Pytest real aprobado en smoke test; falta la cobertura negativa completa.

**Pasos de reproducción o comprobación**

1. Crear fixtures Python propios: prueba fallida, error de colección y ejecución bloqueada.
2. Ejecutarlos con pytest real a través del adaptador, incluyendo timeout y cancelación.
3. Comprobar reporte, complete/status, límites y terminación antes de aceptar evidencia.

**Resultado esperado:** Fallo/colección/timeout/cancelación no producen evidencia aprobada ni procesos vivos fuera del control previsto.

**Prueba o verificación de cierre:** Ampliar tests/test-runner/runner.test.mjs y/o sandbox.test.mjs; exigir ejecución real en CI. Los casos con fake-pytest.mjs no cierran este criterio.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/tests/test-runner/runner.test.mjs). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** Sin registrar. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-014

**Cerrar aceptación integral del Test Runner**

- **Tipo / prioridad:** Capacidad incompleta / P1.
- **Estado registrado:** Por validar; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-12](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/17).
- **Área sugerida:** Backend / QA. **Responsable:** Por asignar. **Revisor:** Por asignar.
- **Entorno:** Jest/pytest y contratos actuales.
- **Condición conocida:** Ejecución, parsers y controles implementados; aceptación agregada todavía parcial.

**Pasos de reproducción o comprobación**

1. Revisar los criterios abiertos de HU-18/HU-19 y robustez de evidencia/terminación.
2. Ejecutar los casos reales y sus regresiones bajo los límites configurados.
3. Relacionar cada criterio con una prueba antes de cambiar el estado de la HU agregadora.

**Resultado esperado:** HU-12 se cierra solo al cubrir su alcance completo; el simple éxito de una prueba no se presenta como aislamiento universal.

**Prueba o verificación de cierre:** Suite runner y sandbox, más las verificaciones faltantes de HU-18/HU-19/HU-41/HU-42/HU-43 según aceptación. Este item coordina esas brechas, no duplica sus fixes.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/tests/test-runner/runner.test.mjs). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** Sin registrar. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-015

**Completar recursos MCP por proyecto**

- **Tipo / prioridad:** Capacidad incompleta / P1.
- **Estado registrado:** Implementado y validado localmente; revisión e integración pendientes; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-24](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/29).
- **Área sugerida:** Backend / MCP. **Responsable:** Codex (implementación y ensayo solicitados por el usuario). **Revisor:** Codex (SDK, controles y pruebas); revisión de equipo pendiente.
- **Entorno:** Cliente oficial MCP y workspace de ensayo.
- **Condición conocida:** Catálogo principal, tres plantillas y lectura de configuración, estructura y análisis por proyecto implementados en 8c7b7eb484158dd7236c0484c1bbc4d4e6fa44c7. Cien pruebas distintas aprobadas en cinco suites locales; trece casos SDK de recursos y nueve PostgreSQL. PR #59 abierto hacia Dev; revisión e integración pendientes. No se cambió el despliegue público.

**Pasos de reproducción o comprobación**

1. Conectar cliente al servidor principal src/mcp/ y consultar su catálogo de recursos conforme al protocolo.
2. Comparar configuración, estructura y análisis por ID con la aceptación de HU-24 y el servidor de compatibilidad.
3. Comprobar análisis desconocido/expirado, límites y rechazo de raíz/proyecto no autorizado en pruebas.

**Resultado esperado:** Recursos definidos con ámbito de proyecto y errores tipados; no se expone una raíz externa ni secretos.

**Prueba o verificación de cierre:** Integración SDK en tests/server/resources.test.mjs, regresión tests/server/server.test.mjs y tests/mcp-server/server.test.mjs; controles entre tenants en tests/platform/postgres.test.mjs. Discovery de tools no sustituye resources. Evidencia: specs/014-mcp-project-resources/ACTA.md.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/tests/mcp-server/server.test.mjs). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** https://github.com/LuisMI2005-sudo/DevGuardian-SDD-Obsidian/blob/main/specs/014-mcp-project-resources/ACTA.md. **Rama:** feat/mcp-project-resources. **PR:** https://github.com/LuisMI2005-sudo/ProyectoCertiIA/pull/59. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-016

**Definir o implementar worker remoto autorizado**

- **Tipo / prioridad:** Decisión de alcance / P2.
- **Estado registrado:** Por validar; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-32](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/37).
- **Área sugerida:** Arquitectura / backend. **Responsable:** Por asignar. **Revisor:** Por asignar.
- **Entorno:** Cliente y servidor en máquinas distintas.
- **Condición conocida:** Worker remoto no implementado. No es un fallo de importación que el servidor no vea el disco de otra máquina.

**Pasos de reproducción o comprobación**

1. Precisar si la entrega promete operar sobre la laptop de un usuario desde la web publicada.
2. Revisar el canal, autenticación y registro de workspaces del worker, si se implementa.
3. En entorno de ensayo autorizado comprobar desconexión/reintento sin duplicar commits; no enviar una ruta local esperando que Render la vea.

**Resultado esperado:** Si se incluye en alcance, existe worker autenticado y probado. Si no se incluye, se informa que la importación clona en el backend y no accede a la laptop.

**Prueba o verificación de cierre:** Diseño y pruebas de integración del worker por añadir. Los contratos MCP existentes son referencia; no constituyen un worker terminado.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/src/server/README.md). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** Sin registrar. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-017

**Verificar estado y configuración durante el run**

- **Tipo / prioridad:** Cobertura pendiente / P1.
- **Estado registrado:** Por validar; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-41](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/46).
- **Área sugerida:** Backend / QA. **Responsable:** Por asignar. **Revisor:** Por asignar.
- **Entorno:** Repositorio temporal y runner controlado.
- **Condición conocida:** Existen hashes y fingerprint de imagen; falta cubrir/documentar todas las invariantes de la HU.

**Pasos de reproducción o comprobación**

1. Capturar estado/configuración y arrancar una ejecución de prueba con punto de sincronización.
2. Modificar controladamente el workspace o una opción relevante mientras se ejecuta.
3. Intentar comparar/verificar con la evidencia y comprobar que no se acepta como actual si cambió el estado efectivo.

**Resultado esperado:** Las invariantes de comparabilidad y frescura contemplan el estado efectivo antes/después, sin filtrar variables sensibles.

**Prueba o verificación de cierre:** Regresiones en tests/test-runner/runner.test.mjs coordinadas con Git Controller; documentar qué entra en configurationHash. No se afirma aquí una aceptación incorrecta ya reproducida.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/tests/test-runner/runner.test.mjs). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** Sin registrar. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-018

**Comprobar presupuesto global y protección de evidencia**

- **Tipo / prioridad:** Cobertura pendiente / P1.
- **Estado registrado:** Por validar; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-42](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/47).
- **Área sugerida:** Backend / QA. **Responsable:** Por asignar. **Revisor:** Por asignar.
- **Entorno:** Almacenes de ejecuciones/evidencia con límites pequeños.
- **Condición conocida:** Hay límites parciales; falta acreditar todos los criterios. No se registra una fuga reproducida en esta revisión.

**Pasos de reproducción o comprobación**

1. Generar suficientes runs y verificaciones para exceder el presupuesto configurado.
2. Comprobar TTL/expulsión incluyendo copias de evidencia y mutar una respuesta devuelta por verify.
3. Consultar getEvidence y ensayar reportes/errores para comprobar límite de lectura y limpieza.

**Resultado esperado:** El presupuesto incluye todos los almacenes y las copias retornadas no alteran la evidencia confiable; errores no dejan temporales indebidos.

**Prueba o verificación de cierre:** Regresiones en tests/test-runner/runner.test.mjs sobre memoria/TTL/inmutabilidad y rutas de error. Un límite de tamaño de reporte no cubre por sí solo todo el presupuesto.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/tests/test-runner/runner.test.mjs). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** Sin registrar. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-019

**Cubrir terminación de descendientes y fallbacks**

- **Tipo / prioridad:** Cobertura pendiente / P1.
- **Estado registrado:** Por validar; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-43](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/48).
- **Área sugerida:** Backend / QA. **Responsable:** Por asignar. **Revisor:** Por asignar.
- **Entorno:** Windows/POSIX y fixtures propios aislados.
- **Condición conocida:** Timeout Docker probado; cobertura completa del host/descendientes pendiente.

**Pasos de reproducción o comprobación**

1. Arrancar una fixture de prueba con descendiente bloqueado y registrar sus identificadores.
2. Aplicar timeout/cancelación y ensayar un fallo controlado del mecanismo primario de cierre.
3. Verificar terminación, resolución de la promesa y recuperación de cola sin tocar procesos ajenos.

**Resultado esperado:** Cierre acotado y estado timeout/cancelled correcto, aun ante el fallback; no quedan descendientes de la fixture.

**Prueba o verificación de cierre:** Pruebas del proceso host por plataforma, límites/resultado de taskkill y grupos POSIX. El test Docker existente prueba otro camino; no acredita todos los fallbacks del host.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/tests/test-runner/runner.test.mjs). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** Sin registrar. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

### QA-020

**Decidir dónde demostrar reparación segura**

- **Tipo / prioridad:** Decisión de alcance / P0.
- **Estado registrado:** Por validar; consultar la evidencia antes de declararlo comprobado.
- **HU / issue de seguimiento:** [HU-50](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/55).
- **Área sugerida:** Equipo / DevOps. **Responsable:** Por asignar. **Revisor:** Por asignar.
- **Entorno:** Local/CI o cloud autorizado.
- **Condición conocida:** Sandbox local/CI probado; ejecutor cloud y ensayo generativo real sin acreditar. No se contratan servicios por incluirlos en la lista.

**Pasos de reproducción o comprobación**

1. Acordar si la demostración de reparación será local/CI o desde la web pública.
2. Comprobar imagen por ID, disponibilidad real y ausencia de acceso al host/credenciales en el entorno elegido.
3. Ejecutar baseline/candidato/commit y rollback de prueba; si se promete generación IA, realizar un ensayo real con proveedor configurado.

**Resultado esperado:** La demo y el mensaje de producto coinciden con la capacidad real. En cloud sin ejecutor se conserva el bloqueo; no se omite para aparentar funcionamiento.

**Prueba o verificación de cierre:** tests/test-runner/sandbox.test.mjs con Docker real y acta del entorno. El caso generativo real requiere evidencia propia; no se sustituye con un parche controlado.

**Referencia existente:** [código/prueba/documentación](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/tests/test-runner/sandbox.test.mjs). Es referencia del criterio, no constancia de que la nueva comprobación ya pasó.

**Evidencia nueva:** Sin registrar. **Rama:** Sin registrar. **PR:** Sin registrar. Anotar comando o recorrido exacto, resultado, fecha y SHA; responsable y revisor reales. Registrar fallo/No reproducido si corresponde.

## Formato para entregar cualquier fix

Copiar al issue o al PR y completar con hechos observados. No completar fechas, nombres o resultados que no existan.

- **Caso QA / HU / issue:** identificar el caso existente.
- **Clasificación:** bug confirmado, cobertura, capacidad, demostración o revisión.
- **Entorno y versión:** sistema, runner, SHA backend/frontend y precondiciones.
- **Pasos exactos y datos de prueba:** sin credenciales ni información privada.
- **Resultado observado antes:** mensaje, estado, archivo/rango o comportamiento; incluir No reproducido cuando aplique.
- **Resultado esperado:** criterio verificable.
- **Cambio y archivos:** explicar la corrección y sus límites.
- **Prueba de regresión o protocolo manual:** ruta/nombre, comando/recorrido, resultado antes/después y run de CI si existe.
- **Rama y PR:** enlace trazable; no usar palabras de cierre automático en HU parcialmente resueltas.
- **QA y revisión:** quién repitió el caso, cuándo, sobre qué SHA y qué observó.
- **Pendientes restantes:** no cerrar la HU completa si quedan criterios.

## Condición de cierre

No basta cambiar un estado de UI, subir un commit, mostrar un archivo de configuración ni tener CI verde. El caso se cierra cuando su resultado esperado se comprueba y queda evidencia revisada de la versión correcta. Para falta de cobertura, demostrar el nuevo escenario; para demo/revisión, registrar el recorrido/acta; para un bug, comprobar la reproducción y el arreglo. La fusión, el deploy y cualquier costo cloud requieren su autorización propia.

Para nuevo hallazgo: buscar duplicados, registrar información con el formato anterior y relacionarlo con este índice; después añadir el caso con ID estable en cases.json y regenerar este documento. No renumerar casos existentes.
