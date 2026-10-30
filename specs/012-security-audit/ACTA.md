---
tags: [devguardian, dg/seguridad, dg/verificacion]
---
# Auditoría de secretos autenticación permisos y CORS

**Fecha:** 30/10/2026, America/La_Paz. **Operador:** Codex, por solicitud del usuario. **Resultado:** auditoría ejecutada, con dos hallazgos de configuración del despliegue abiertos. No se identificaron credenciales reales entre las coincidencias del escáner en el alcance revisado. Este resultado no declara el servicio apto para datos privados ni certifica ausencia absoluta de vulnerabilidades.

## Versiones y alcance

| Repositorio | HEAD revisado | Archivos versionados | Commits alcanzables y escaneados |
|---|---|---:|---:|
| Backend | `15eedc0c11a62535add7efc9fd3ecb038e5c8ad6` | 292 | 53 |
| Frontend | `ea8b600e018b008a40ec51a34d02994ffa815579` | 157 | 27 |
| Documentación | `929efc8add49d12722458a1ddb3a873ea9d01f58` | 287 | 17 |

Se consultaron los remotos mediante `git fetch --all`; los tres clones son completos, no superficiales. Se inventariaron y exportaron **736 archivos de HEAD**, se ejecutó su escaneo textual y se revisaron **97 commits alcanzables**, incluyendo diffs de merges. También se escanearon `dist` del backend, `dist` y `dist-platform` del frontend, y el bundle JavaScript inicial servido por el frontend público. Backend se compiló en esta ejecución; los otros builds locales eran los existentes. No se atribuye identidad entre un build local y el archivo servido: se registra la huella de este último en [frontend-live.json](frontend-live.json).

**Herramienta:** Gitleaks 8.30.1, obtenida de su publicación oficial; SHA-256 del ZIP cotejado con el archivo de checksums del mismo release. [Procedencia](tool.json). Configuración independiente que extiende las reglas embebidas, sin baseline ni ignore del repositorio y sin aceptar comentarios `gitleaks:allow`; redacción del 100 %. No se eliminaron reglas para ocultar el test señalado.

El historial se recorrió con `--log-opts="--all --full-history -m --no-textconv --no-ext-diff"`. Una primera ampliación a merges encontró errores de un conversor Git externo de Windows aunque el escáner devolvió exit 0; se descartó como incompleta. La repetición con conversores externos deshabilitados terminó sin esos errores y cubrió 53/27/17 commits. No se modificó la configuración global de Git. [Recibos del escaneo](secret-scan.json).

Quedan fuera objetos Git no alcanzables, forks/cachés externos, salidas CI históricas no descargadas, secretos configurados en Render/GitHub, archivos privados no versionados, bases locales completas, `node_modules`, imágenes/OCR y todos los chunks dinámicos o source maps del frontend. Los PDFs/binarios no se consideran revisados semánticamente por un escaneo textual. No se ejecutó una auditoría de CVE de dependencias ni una prueba de carga.

## Secretos encontrados por el escáner

| Origen | Coincidencias | Clasificación |
|---|---:|---|
| Backend HEAD | 1 | Cadena ficticia de un test de detección de secretos |
| Backend historial | 2 | La misma fixture, en su commit y en un merge |
| Frontend HEAD e historial | 0 | Sin coincidencias bajo las reglas utilizadas |
| Documentación HEAD e historial | 0 | Sin coincidencias bajo las reglas utilizadas |
| Builds locales y bundle inicial público | 0 | Sin coincidencias bajo las reglas utilizadas |

La coincidencia `generic-api-key` corresponde a `tests/hooks/hooks.test.mjs:68`: una tabla `test.each` de entradas ficticias, con marcador de ejemplo, usada para exigir el rechazo de secretos por el hook. Las apariciones históricas se identifican por commit en el recibo; no se publica el literal. Se clasifica como **falso positivo de una credencial operativa**, conservando el resultado original del escáner (exit 1 en backend), no como cero detecciones. No se utilizó la cadena para autenticarse contra ningún proveedor.

El inventario de nombres sensibles solo identificó `.env.example` en backend/frontend, tanto en HEAD como en los nombres históricos. No se encontró un `.env` real ni archivos de claves privadas con los nombres revisados en Git. Esto no sustituye la detección de secretos en archivos con otros nombres. Las credenciales desechables de CI son de fixtures locales documentadas, no se atribuyen a producción.

## Hallazgos confirmados del despliegue

### SEC-001 Alta Acceso anónimo a auditorías persistidas

La auditoría sintética propia `553526fe-b1b0-465b-ad92-24511d0b8347` respondió **HTTP 200** sin `Authorization` y con un bearer ficticio inválido. Se comprobó exclusivamente ese registro propio; no se enumeraron auditorías ajenas ni se guardó el contenido del diagnóstico. El catálogo MCP también respondió 200 sin bearer y presentó 19 herramientas; no se invocaron herramientas de negocio.

El código permite acceso cuando `DEVGUARDIAN_API_TOKEN` no está configurado (`authenticated` en `src/server/http.ts`). Las pruebas locales demuestran que, con token configurado, la ausencia o invalidez recibe 401. El resultado productivo es compatible con el acceso opcional desactivado; no se inspeccionaron los secretos del panel para afirmar su valor. El perfil público observado es el servidor HTTP de workspace, no el gateway multitenant: `/api/platform` devolvió 404.

**Impacto:** el despliegue actual no impone identidad para acceder al registro probado. No debe recibir datos privados suponiendo autenticación o aislamiento por usuario. Las rutas de mutación comparten la misma puerta opcional según revisión estática; no se realizaron mutaciones anónimas ni pruebas de abuso en producción. El aislamiento de ejecución del sandbox es otro control y no sustituye el acceso a datos.

**Acción:** definir si el servicio es una demo anónima con datos exclusivamente ficticios y asumir ese alcance expresamente, o activar acceso antes de usar datos privados. Para un workspace privado de equipo, configurar un bearer fuera del bundle y verificar 401/401/200 para ausente/inválido/válido; el frontend ya admite token en memoria. Un bearer compartido no aporta aislamiento entre usuarios/organizaciones: para ese alcance corresponde desplegar el gateway de identidad con su autorización efectiva o una solución equivalente revisada. **Estado: abierto; no se cambió Render ni se emitió un token.**

### SEC-002 Media CORS permite cualquier origen

La solicitud con `Origin: https://audit-untrusted.example` sobre el mismo registro propio respondió 200 y `Access-Control-Allow-Origin: *`. El preflight para importación desde ese origen también respondió 204 con `*`. No apareció `Access-Control-Allow-Credentials`; el hallazgo no se presenta como una combinación inválida de wildcard con cookies.

**Impacto:** el origen de una página externa no limita la lectura de esa respuesta accesible anónimamente. El wildcard puede ser intencional para una API pública, pero no constituye un límite apropiado para el workspace privado que se quiera proteger. CORS no es autenticación y restringirlo por sí solo no resuelve SEC-001.

**Acción:** restringir `ALLOWED_ORIGIN` al frontend autorizado, revisar la alternativa `CORS_ORIGIN` y repetir GET/OPTIONS: origen permitido correcto; origen ajeno 403 sin ACAO que lo autorice. El código y la prueba local ya soportan esta política. **Estado: abierto; no se alteró la política del despliegue.**

Las solicitudes y cabeceras permitidas están en [http-probe.json](http-probe.json). El listado de archivos del proyecto propio devolvió 409 por checkout no disponible, tanto sin bearer como con bearer inválido; ese 409 no acredita acceso al código ni una defensa de autenticación. La prueba de exposición usa el 200 del registro persistido, no ese error.

## Controles comprobados y límites

| Control | Resultado |
|---|---|
| HTTP con bearer configurado | Sin bearer/inválido: 401; bearer correcto: acceso. Health público y logs sin el valor de prueba |
| HTTP con CORS restringido | Origen permitido y preflight correctos; origen ajeno rechazado |
| Cuerpos y query HTTP | Límites, tipos y parámetros duplicados/desconocidos rechazados |
| Identidad entre servicios | Firma Ed25519, audiencia e issuer autorizados; modificación de tenant/firma e identidad suplantada rechazadas |
| Roles | Viewer no puede escribir; hash de contraseña con sal y comparación de credenciales comprobados |
| PostgreSQL local | Nueve casos de sesión, membresía, tenant falso, RLS, lectura/escritura separada, revocación y origen no permitido aprobados |
| Metadatos de la BD local existente | Rol runtime sin superusuario, bypassRLS, creación de BD o roles; tres tablas de proyectos con RLS y FORCE RLS y propietario distinto |
| CI versionado | Tres workflows con `contents: read`; checkout sin persistencia de credenciales. Se revisó la configuración, no los permisos actuales de todas las cuentas del proveedor |
| Frontend | Token en memoria; almacenamiento revisado conserva IDs/rutas/preferencias, sin una persistencia de bearer encontrada en las rutas examinadas. Builds escaneados sin coincidencias |
| Cabeceras públicas observadas | HTTPS, `Cache-Control: no-store` y `X-Content-Type-Options: nosniff` en API. El recibo registra las restantes cabeceras sin convertir su presencia en una auditoría TLS completa |

**Pruebas de esta ejecución:** build backend aprobado; 10 pruebas seleccionadas de HTTP y seguridad de plataforma aprobadas (27 omitidas por el filtro, no contabilizadas como aprobadas); nueve pruebas PostgreSQL aprobadas. **Total ejecutado: 19 aprobadas.** La primera repetición SQL falló por usar un rol de administración inexistente; se identificó el rol real mediante metadatos del entorno y se repitió sin cambiar privilegios ni políticas. No se atribuye ese fallo de preparación al producto. [Resultados](tests.json) y [permisos locales](permissions.json).

Estos controles del perfil local no prueban RLS, roles mínimos o multitenancy en la base de producción. No se leyeron sus credenciales ni se consultaron cuentas ajenas. No se alteraron código de aplicación, permisos de nube, datos productivos ni claves.

## Cierre y seguimiento

QA-007 pasa de «Por validar» a **«Auditoría ejecutada; SEC-001/SEC-002 abiertos»**. La auditoría está registrada; la entrega privada permanece pendiente de remediación o aceptación explícita del alcance de demo pública. No se cierra HU-40 ni se afirma que los hallazgos estén corregidos. Tras cualquier cambio de configuración deben repetirse las pruebas productivas acotadas y conservar el resultado correspondiente a esa versión.

Referencias de método: [Gitleaks oficial](https://github.com/gitleaks/gitleaks) y [OWASP REST Security](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html). Los hallazgos de esta acta proceden de las pruebas y fuentes del proyecto; las referencias explican el método y los límites de CORS/control de acceso.
