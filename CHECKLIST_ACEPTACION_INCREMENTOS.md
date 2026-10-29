---
tags: [devguardian, dg/verificacion, dg/direccion]
---
# Checklist de aceptación de los dos incrementos

**Preparado el 29/10/2026. Estado inicial: NO EJECUTADO.** Este documento es el protocolo de QA; sus casillas no acreditan un ensayo realizado. Los criterios vienen de la [especificación](specs/006-final-increments/spec.md). Seguimiento en [QA-004 y QA-005](CONTROL_DE_FIXES.md#qa-004), dentro de [HU-37 / issue #42](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/42); coordinación en [#57](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/57).

## Acta de la ejecución

Completar antes de marcar resultados. No incluir contraseñas, tokens, cadenas de conexión ni HAR sin depurar.

| Dato | Registro |
|---|---|
| Fecha y hora del ensayo | Sin registrar |
| Persona que ejecuta / persona que revisa | Sin registrar / sin registrar |
| Backend: rama y SHA | Sin registrar; consultar git rev-parse HEAD |
| Frontend: rama y SHA | Sin registrar; consultar git rev-parse HEAD |
| Bóveda/protocolo: SHA | Sin registrar |
| Entorno y URLs | Perfil local platform: gateway 4107 y Shell 5173; confirmar antes de ejecutar |
| Navegador y sistema operativo | Sin registrar |
| Organización A / organización B / proyecto de ensayo | IDs no sensibles por registrar |
| Cuenta owner / cuenta viewer | Identificadores de ensayo por registrar, sin credenciales |
| CI/test utilizado como evidencia complementaria | Enlace y SHA por registrar |

Usar una sola versión candidata por ensayo. Si cambia código/configuración durante la prueba, registrar el cambio y repetir los criterios afectados; no mezclar resultados de versiones distintas.

## Preparación y condiciones de entrada

- [ ] Seguí la [guía de arranque local](specs/002-platform-migration/local-development.md), con Node 24, Git y PostgreSQL de ensayo. No usé la base de datos productiva PCAI.
- [ ] El entorno ya está aprovisionado. No repetí platform:init sobre un entorno existente ni mostré el archivo privado de login.
- [ ] Backend en ejecución con `npm run platform:start`; `npm run platform:status` confirma los servicios necesarios.
- [ ] `GET http://127.0.0.1:4107/api/platform` responde con mode multitenant y authentication session. Un health de la API legacy no sustituye este control.
- [ ] Frontend construido con `npm run build:platform` y servido con `npm run preview:platform`. Abrí http://127.0.0.1:5173/. `npm run dev` no es esta Shell.
- [ ] Tengo una cuenta owner autorizada en dos organizaciones de ensayo y un proyecto propio/importado de prueba en A. Anoté sus IDs.
- [ ] Tengo una cuenta viewer asociada solo a A. La preparación de ese usuario se hace mediante el endpoint autorizado `POST /api/organizations/members` con sesión owner, tenant A y cuerpo con email/password/role viewer; no hay una pantalla de administración de miembros en esta Shell. Si falta esa preparación, el criterio viewer queda BLOQUEADO, no aprobado.
- [ ] Para denegaciones HTTP y revocación dispongo de un cliente local de pruebas que conserva tokens solo de forma privada. Las capturas muestran URL/estado/respuesta depurada, nunca Authorization.
- [ ] No ejecuto builds completos e individuales simultáneamente, ni pruebas con acceso a datos de producción.

Si faltan condiciones, anotar BLOQUEADO y resolverlas. No convertir una falta de entorno en un bug del producto sin analizarla.

## Cómo registrar cada resultado

En cada casilla elegir **No ejecutado, Aprobado, Falló o Bloqueado** y añadir evidencia, SHA, operador y revisor. Marcar `[x]` únicamente para Aprobado con evidencia de todos los pasos del criterio. Un fallo no se marca como aprobado por tener CI verde.

Para comprobaciones técnicas se puede ejecutar el test correspondiente o citar un run existente con el SHA correcto; indicar cuál de las dos cosas se hizo. Un run anterior es evidencia complementaria y no sustituye los pasos visibles de una demo nueva. No repetir un test destructivo ni modificar producción para obtener un fallo.

## INC-01 Organizaciones y accesos

Implementación principal: [HU-44 / #49](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/49). Aceptación final: [QA-004](CONTROL_DE_FIXES.md#qa-004). Los seis criterios deben revisarse, incluidos los negativos.

- [ ] **INC-01-AC01 — Login y sesión obligatoria.**
  1. Desde la Shell sin sesión, iniciar sesión con la cuenta de ensayo válida.
  2. Comprobar que aparece la selección de organizaciones autorizadas.
  3. En el cliente HTTP sin Authorization, enviar `GET /api/projects` al gateway.
  **Esperado:** login válido y selección visible; la consulta protegida sin sesión devuelve 401, sin datos de proyectos.
  **Evidencia:** captura depurada del acceso y respuesta 401; prueba backend «requires a session, validates membership and rejects forged tenant selection».
  **Resultado / evidencia / SHA / operador / revisor:** No ejecutado / sin registrar / sin registrar / sin registrar / sin registrar.

- [ ] **INC-01-AC02 — Membresía y selección no autorizada.**
  1. Iniciar sesión como viewer de A y comprobar que su selección solo ofrece organizaciones permitidas.
  2. Mediante el cliente HTTP de ensayo, intentar `GET /api/projects` con la sesión viewer y X-Tenant-Id igual al ID real de B, de la que no es miembro.
  3. Comparar con la misma consulta válida en A.
  **Esperado:** A permite la consulta de lectura; B devuelve 403 y no expone datos. Ocultar B en el menú no es suficiente para aprobar.
  **Evidencia:** estados y respuestas depuradas con los IDs de tenant utilizados; test de membresía/selección falsificada como complemento.
  **Resultado / evidencia / SHA / operador / revisor:** No ejecutado / sin registrar / sin registrar / sin registrar / sin registrar.

- [ ] **INC-01-AC03 — Separación real A/B de proyecto e historial.**
  1. Como owner, entrar en A, registrar/importar el repositorio de ensayo y ejecutar un diagnóstico. Guardar projectId y auditId no sensibles.
  2. Cambiar a B: consultar proyectos e historial y comprobar que no aparece la operación de A.
  3. Solicitar desde B los archivos del proyecto A mediante `GET /api/projects/{projectId}/files`. No basta modificar un filtro visual.
  **Esperado:** el proyecto y la auditoría de A no se listan en B; el acceso directo se rechaza con un error 4xx controlado conforme al contrato, sin devolver contenido de A ni producir un 500. Registrar el código concreto observado.
  **Evidencia:** listas/IDs depurados y denegación HTTP; pruebas backend «registers a real Git repository, diagnoses a type error and isolates history» y repositorio tenantizado.
  **Resultado / evidencia / SHA / operador / revisor:** No ejecutado / sin registrar / sin registrar / sin registrar / sin registrar.

- [ ] **INC-01-AC04 — Viewer lee, pero no escribe.**
  1. Iniciar sesión como viewer de A y comprobar su aviso de consulta y acceso a proyectos.
  2. Con esa misma sesión en el cliente HTTP, verificar lectura `GET /api/projects` y rechazo de `POST /api/projects` en A.
  3. Comprobar rechazo de `POST /api/organizations/members` y del acceso MCP que la política actual no autoriza a viewer.
  **Esperado:** lectura 200 y escrituras 403; no se crea proyecto/miembro ni se modifica un archivo. En la política actual el gateway bloquea MCP para viewer, incluso tools/list: no prometer permisos por herramienta que no existen.
  **Evidencia:** test «viewer membership can read and cannot mutate or call arbitrary MCP tools» y respuestas del ensayo, sin tokens. Que un botón esté deshabilitado no demuestra por sí solo el bloqueo del servidor.
  **Resultado / evidencia / SHA / operador / revisor:** No ejecutado / sin registrar / sin registrar / sin registrar / sin registrar.

- [ ] **INC-01-AC05 — RLS y rol runtime sin bypass.**
  1. Preparar PostgreSQL local efímero de pruebas según la guía; la variable DEVGUARDIAN_TEST_ADMIN_URL debe apuntar a ese entorno y nunca publicarse.
  2. Ejecutar `npm run test:platform` desde backend, o identificar explícitamente un run CI del SHA candidato que haya ejecutado PostgreSQL real.
  3. Revisar los casos de privilegios runtime, escrituras sin contexto, ocultación de B, contexto cruzado y limpieza tras transacción.
  **Esperado:** esos casos aprueban sobre PostgreSQL real; no están omitidos. El rol runtime no tiene superuser/bypassRLS y el contexto no filtra filas entre tenants.
  **Evidencia:** salida depurada de tests con SHA/run y nombres de casos. La cuenta administrativa de preparación no se presenta como el rol runtime. Un screenshot de dos listas vacías no acredita RLS.
  **Resultado / evidencia / SHA / operador / revisor:** No ejecutado / sin registrar / sin registrar / sin registrar / sin registrar.

- [ ] **INC-01-AC06 — Cambio de contexto y logout con revocación.**
  1. Como owner en A, seleccionar su proyecto, cambiar a B y comprobar que no se conserva el proyecto/vista anterior.
  2. Guardar la sesión únicamente en la memoria privada del cliente de ensayo y pulsar Cerrar sesión en la Shell.
  3. Comprobar formulario de acceso y enviar una consulta protegida usando la sesión anterior en el cliente HTTP.
  **Esperado:** la Shell limpia el contexto y vuelve al acceso; la sesión revocada recibe 401. No basta ver que desapareció el menú.
  **Evidencia:** recorrido visible, respuesta 401 y test «revokes sessions and rejects disallowed origins»; prueba frontend de limpieza al cambiar tenant como complemento. No guardar el token en el acta.
  **Resultado / evidencia / SHA / operador / revisor:** No ejecutado / sin registrar / sin registrar / sin registrar / sin registrar.

## INC-02 Shell y microfrontends

Implementación principal: [HU-46 / #51](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/issues/51). Aceptación final: [QA-005](CONTROL_DE_FIXES.md#qa-005). Cambiar de pantalla no acredita por sí solo artefactos o despliegues independientes.

- [ ] **INC-02-AC01 — Manifiesto y seis artefactos reales.**
  1. Desde frontend ejecutar `npm run build:platform` y arrancar `npm run preview:platform`.
  2. Abrir dist-platform/remotes/manifest.json y comprobar version 1 y seis claves: projects, review, results, security, subagents y mcp.
  3. Verificar que las seis rutas apuntan a archivos JS existentes con hash y que la Shell y los recursos se sirven desde el origen autorizado.
  **Esperado:** Shell, manifiesto y seis artefactos válidos; no entradas ficticias ni módulos tomados de URLs aportadas por un usuario.
  **Evidencia:** salida del build, manifiesto sin secretos y recursos de Network. El build completo de CI ayuda, pero no acredita que el navegador haya cargado los seis.
  **Resultado / evidencia / SHA / operador / revisor:** No ejecutado / sin registrar / sin registrar / sin registrar / sin registrar.

- [ ] **INC-02-AC02 — Seis módulos navegables con sesión coherente.**
  1. Iniciar sesión, elegir A y recorrer Mis proyectos, Revisar código, Resultados e historial, Seguridad, Subagentes y Sandbox MCP.
  2. En Network observar las entradas de /remotes/manifest.json y /remotes/.../remote-<hash>.js. Los módulos ya importados pueden reutilizarse sin otra descarga.
  3. Verificar que consultas reales usan la organización seleccionada y que cada vista muestra datos autorizados o un estado vacío/error comprensible. No ejecutar tools con escritura solo para llenar la pantalla.
  **Esperado:** los seis módulos montan bajo el contrato común, sin datos de otra organización ni pantallas de ejemplo presentadas como resultados reales.
  **Evidencia:** recorrido/capturas y solicitudes depuradas. La suite frontend platform usa loader simulado; no reemplaza esta navegación real.
  **Resultado / evidencia / SHA / operador / revisor:** No ejecutado / sin registrar / sin registrar / sin registrar / sin registrar.

- [ ] **INC-02-AC03 — Cambio de organización limpia el módulo.**
  1. En A, seleccionar proyecto y abrir revisión/resultados.
  2. Pulsar Cambiar organización y elegir B.
  3. Comprobar que no queda proyecto seleccionado de A, que se desmonta la vista anterior y que las nuevas consultas pertenecen a B; regresar a A para comprobar consistencia.
  **Esperado:** contexto limpio en la transición, sin renderizar resultados tardíos de A en B. No basta cambiar el título de la organización.
  **Evidencia:** video o capturas correlacionadas; prueba «holds credentials in memory and resets the workspace when changing tenant» como complemento.
  **Resultado / evidencia / SHA / operador / revisor:** No ejecutado / sin registrar / sin registrar / sin registrar / sin registrar.

- [ ] **INC-02-AC04 — Montaje tardío cancelado.**
  1. Ejecutar desde frontend `npm test -- --maxWorkers 1 tests/platform.test.tsx` sobre el SHA candidato.
  2. Localizar «does not mount a remote that finished loading after its view was removed» y comprobar que no esté omitido.
  3. Registrar que se trata de una promesa/loader controlados y que mount no se invoca después de retirar la vista; complementar con navegación bajo demora si se ensaya manualmente.
  **Esperado:** la carga tardía no monta contenido en una vista retirada. No afirmar carga browser real por una prueba con mock.
  **Evidencia:** salida de la prueba y SHA; registro separado si se realizó además el ensayo de demora en navegador.
  **Resultado / evidencia / SHA / operador / revisor:** No ejecutado / sin registrar / sin registrar / sin registrar / sin registrar.

- [ ] **INC-02-AC05 — Error visible y reintento efectivo.**
  1. En esta sesión local de DevTools, bloquear /remotes/manifest.json, abrir una vista aún no montada y comprobar el mensaje de error y Reintentar módulo. No alterar el manifiesto publicado ni el backend productivo.
  2. Desbloquear esa petición y pulsar Reintentar módulo; comprobar que se carga la vista sin inventar datos ni necesitar un nuevo login para este caso.
  3. Registrar también el comportamiento si el fallo fue del JS del remoto, en lugar del manifiesto. Quitar al terminar todas las reglas locales de Request blocking.
  **Esperado:** error comprensible y recuperación por el botón cuando el recurso vuelve a estar disponible. Si un import JS fallido queda cacheado y solo funciona tras recargar, registrar Falló/Bloqueado para el subcaso correspondiente y abrir seguimiento del hallazgo en QA-005; la recarga no demuestra que funcionó el botón.
  **Evidencia:** captura de error, solicitudes/reintento y recuperación, indicando exactamente cuál recurso se bloqueó. No aprobar toda la recuperación si falta comprobar un subcaso incluido en la prueba.
  **Resultado / evidencia / SHA / operador / revisor:** No ejecutado / sin registrar / sin registrar / sin registrar / sin registrar.

- [ ] **INC-02-AC06 — Reconstrucción independiente y restricciones del loader.**
  1. Guardar en memoria una instantánea del manifiesto completo; ejecutar solo `npm run build:remote -- review`.
  2. Comprobar que siguen presentes las seis entradas y que projects/results/security/subagents/mcp conservan exactamente su ruta. La ruta de review puede quedar igual si no cambió su contenido.
  3. Comprobar mediante pruebas o ensayo controlado del loader el rechazo de origen externo y versión distinta de 1, sin contactar servicios externos ni cargar código no confiable. Usar una respuesta interceptada/fixture local y restaurarla, no publicar un manifiesto alterado.
  **Esperado:** los otros cinco remotos no se reconstruyen/referencian de nuevo y el loader rechaza módulos fuera del contrato/origen. El build completo aprobado no sustituye esta comprobación individual ni los rechazos.
  **Evidencia:** comparación de manifiestos, salida de build y prueba/protocolo de los rechazos. Si esos rechazos aún no tienen ensayo o test ejecutado, registrar Bloqueado/No ejecutado, no Aprobado por leer el código.
  **Resultado / evidencia / SHA / operador / revisor:** No ejecutado / sin registrar / sin registrar / sin registrar / sin registrar.

### Comprobación local de las cinco entradas conservadas

Este bloque se ejecuta desde el frontend después de un build de plataforma completo. No se ejecutó por escribir el checklist. No ejecutarlo junto a otro build.

```powershell
$qaManifestBefore = Get-Content -Raw .\dist-platform\remotes\manifest.json | ConvertFrom-Json
npm.cmd run build:remote -- review
if ($LASTEXITCODE -ne 0) { throw 'Falló el build independiente de review.' }
$qaManifestAfter = Get-Content -Raw .\dist-platform\remotes\manifest.json | ConvertFrom-Json
foreach ($qaRemote in @('projects', 'results', 'security', 'subagents', 'mcp')) {
    if (-not $qaManifestBefore.remotes.$qaRemote -or
        $qaManifestBefore.remotes.$qaRemote -ne $qaManifestAfter.remotes.$qaRemote) {
        throw "Cambió o desapareció la entrada de $qaRemote."
    }
}
if (-not $qaManifestAfter.remotes.review) { throw 'Falta la entrada de review.' }
'Cinco entradas preservadas; continuar con las demás comprobaciones de INC-02-AC06.'
```

## Resultado final de aceptación

| Incremento | Criterios revisados | Resultado global | Evidencia / revisor |
|---|---|---|---|
| INC-01 | 0/6 en este registro | NO EJECUTADO | Sin registrar |
| INC-02 | 0/6 en este registro | NO EJECUTADO | Sin registrar |

- [ ] Todos los criterios del incremento tienen resultado individual, versión y evidencia identificable.
- [ ] Cada Falló tiene un hallazgo relacionado con QA-004 o QA-005, pasos y resultado observado real. No se borró el fallo al repetir.
- [ ] El revisor repitió o verificó la evidencia de los criterios; no se atribuye una revisión que no ocurrió.
- [ ] Solo se declara Aceptado cuando los seis criterios están aprobados, sin subcasos obligatorios pendientes. Una excepción requiere decisión explícita y alcance modificado visible, no una casilla silenciosa.
- [ ] La decisión del equipo está registrada separadamente de la aceptación del docente, que sigue pendiente hasta obtenerla.

Este checklist no autoriza fusionar PRs, desplegar, contratar infraestructura ni cambiar el estado de HU-37/HU-44/HU-46 automáticamente. Las casillas están vacías porque se preparó el protocolo, no porque se ejecutó la aceptación.
