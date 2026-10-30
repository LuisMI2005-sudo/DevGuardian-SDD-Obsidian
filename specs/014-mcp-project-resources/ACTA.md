# Recursos MCP por proyecto — HU-24 / QA-015

Fecha: 2026-10-30. Operador: Codex, por solicitud del usuario de completar el catálogo. Estado: implementación y validación local terminadas; revisión e integración pendientes.

Fuente de implementación: backend [8c7b7eb484158dd7236c0484c1bbc4d4e6fa44c7](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/commit/8c7b7eb484158dd7236c0484c1bbc4d4e6fa44c7), rama `feat/mcp-project-resources`, base Dev `5ba0c46ab46bc4b3d2d45d1b0d9d23723ce2d9eb`. HEAD de revisión: `2b78dd52a8b072ce9337c378c6b821bd658e09fa`; únicamente retira la nota añadida al backlog para preservar la huella histórica, sin cambiar código ni pruebas. [PR #59](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/pull/59) hacia Dev. No se cambió frontend ni Render.

## Resultado funcional

El servidor principal `src/mcp/` anuncia resources y sirve listado paginado, plantillas y lectura por HTTP y stdio. Antes solo exponía herramientas; el servidor de compatibilidad tenía el recurso de análisis independiente.

| Recurso | Ámbito y contenido |
|---|---|
| `devguardian://project/{projectId}/configuration` | Cinco campos explícitos: projectId, name, defaultBranch, runnerType, serverVersion |
| `devguardian://project/{projectId}/structure` | Rutas relativas, analyzable y truncated del recorrido protegido existente |
| `devguardian://analysis/{analysisId}?projectId={projectId}` | Resultado previo de analyze_code del mismo proyecto, con projectId obligatorio |

Cada lectura valida UUID, URI completo, registro y raíz canónica. No se acepta una raíz del cliente. Los resultados se recuperan de la caché real del backend entre clientes HTTP, sin volver a analizar. Se mantienen TTL fijo de cinco minutos, capacidad de 100 análisis y presupuesto de 10 MB; reinicio/reclonado invalida la caché. El catálogo enumera configuración y estructura; los análisis se descubren por su plantilla y el ID de analyze_code.

Los errores MCP distinguen URI inválido (-32602), recurso desconocido/inaccesible/expirado/expulsado (-32002) y fallo interno saneado (-32603). Configuración no devuelve ruta local, entorno, comandos, URL remota ni credenciales. Estructura excluye secretos, Git, dependencias y enlaces conforme a sus límites existentes. Las lecturas no crean auditorías ficticias de herramientas.

## Evidencia ejecutada

| Comando o ensayo | Resultado |
|---|---|
| npm run build | Aprobado |
| npm run check | TypeScript y ESLint aprobados |
| Jest server/resources, server/server, mcp-server/server, analyzer/analyzer | 4 suites, 90 pruebas aprobadas, 192.815 s |
| Suite definitiva server/resources, con caso adicional de error interno | 13 pruebas aprobadas, 71.816 s |
| platform/postgres con PostgreSQL local real | 9 pruebas aprobadas, 16.849 s |
| npm run sdd:check | 103 documentos, 44 diagramas y 9 copias comprobados |
| Gitleaks del cambio preparado, reglas oficiales y salida redactada | 28.26 KB examinados; cero hallazgos en este cambio |
| CI del HEAD final 2b78dd52a8b072ce9337c378c6b821bd658e09fa | [41052722408](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/actions/runs/41052722408): ambos jobs aprobados, suite general y reparación real Docker |
| CI documental del acta inicial 146cc981ec70ff96d9ee0e680ca72c9d3eadb6a6 | [41053456585](https://github.com/LuisMI2005-sudo/DevGuardian-SDD-Obsidian/actions/runs/41053456585): aprobado |

Son **100 pruebas distintas** en cinco suites: los 12 casos originales de recursos se repiten en la suite definitiva y no se cuentan dos veces. SDK MCP 1.32.1 y Node 24 en Windows. El ensayo PostgreSQL acredita catálogo/lectura desde gateway, rechazo entre tenants y POST resources/list denegado para viewer. No se debilitó ese permiso.

Las fixtures son repositorios propios con datos ficticios. Durante la preparación se corrigieron commit inicial y presupuesto del runner; no se relajaron contratos del producto. La prueba de expulsión ejecuta 101 análisis reales con tsconfig mínimo para su caso de sintaxis.

- [Contrato de uso y límites](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/8c7b7eb484158dd7236c0484c1bbc4d4e6fa44c7/src/mcp/README.md).
- [13 pruebas SDK HTTP/stdio](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/8c7b7eb484158dd7236c0484c1bbc4d4e6fa44c7/tests/server/resources.test.mjs).
- [Integración multitenant con PostgreSQL](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/8c7b7eb484158dd7236c0484c1bbc4d4e6fa44c7/tests/platform/postgres.test.mjs).
- [Especificación previa y plan](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/tree/8c7b7eb484158dd7236c0484c1bbc4d4e6fa44c7/specs/003-mcp-project-resources).

## Alcance del cierre

QA-015 deja de ser una implementación faltante en esta rama, validada en local y CI. Permanece pendiente su revisión e integración en Dev. El CI del PR está registrado en [github.json](github.json), con ambos jobs aprobados para el HEAD exacto. No se declara esta capacidad desplegada ni se modifica retrospectivamente el inventario del 29/10. La aceptación docente y el cierre de toda HU-24 no se presuponen.

La autenticación configurable del servidor independiente y los hallazgos públicos de autenticación/CORS siguen en [auditoría de seguridad](../012-security-audit/ACTA.md). La caché efímera de análisis no sustituye historial SQL persistente.
