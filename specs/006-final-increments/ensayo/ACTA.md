# Ensayo de aceptación del 29 de octubre de 2026

Operador técnico: Codex, por solicitud del usuario. Revisión humana del equipo/docente pendiente.

Base backend 163e70be25c39e780661655508620e9662d94073; frontend 3a0eb0705bb27b2490ba576891274a49a65cdf87; protocolo 24782fb537bb695b8c8a9bdb6f16e2aadda1836b. Entorno Windows, Node 24, PostgreSQL local 55433, gateway 4107, Shell 5173; navegador integrado.

## Hallazgo previo al cambio

INC-02-AC03: desde Sandbox MCP en A, Cambiar organización y entrar en B deja la URL /advanced/mcp y el título Sandbox MCP aunque Opciones avanzadas esté desactivado. El proyecto sí se limpia. Reproducido en navegador real. Seguimiento QA-005 / HU-37, responsable de corrección técnica en esta sesión: Codex. Se requiere reiniciar navegación a projects al salir del workspace y probar que al entrar en B se monta projects. Conservar este resultado fallido al repetir.

Plan: extender la prueba existente de cambio de tenant para salir desde review; comprobar que falla antes de corregir; reiniciar navegación al cambiar organización; repetir prueba y ensayo browser. No cambiar seguridad, membresías ni contratos de datos.

Pruebas PostgreSQL nuevas: 15 aprobadas en dos suites, sin omitidas; recibo JSON en Informes/aceptacion-platform.json. Ensayo HTTP complementario en http.json. Todos los usuarios y datos son sintéticos; tokens y contraseñas permanecen fuera de la documentación.

## Resultado registrado

Ensayo técnico: INC-01 6/6 e INC-02 6/6 aprobados en local. Primera fase del 29/10, aproximadamente 17:51–18:01; continuación tras interrupción aproximadamente 20:35–20:40, America/La_Paz. Operador y autoverificación técnica: Codex. No hubo revisor humano independiente ni aprobación del docente.

La versión frontend ensayada es HEAD base más los dos archivos modificados identificados por SHA-256 en versions.json. La corrección no está committeada ni publicada. El recibo frontend completo corresponde a esa corrección: 125 pruebas aprobadas, cero fallidas/omitidas; tres de Shell, incluida la regresión de navegación. PostgreSQL: 15 aprobadas, cero omitidas. No se suman las tres de Shell a las 125 como pruebas únicas.

| Criterio | Resultado observado | Evidencia |
|---|---|---|
| INC-01-AC01 | Login visible; organizaciones permitidas; 401 sin sesión | Ensayo browser, http.json |
| INC-01-AC02 | Viewer solo ve A; lectura A 200 y B 403 | viewer.png, http.json |
| INC-01-AC03 | Proyecto y auditoría en A; proyecto ausente en B; archivos e historial de A consultados desde B reciben 404 | historial-A.png, http.json, historial-http.json |
| INC-01-AC04 | Viewer lee proyecto; controles de importación deshabilitados; POST proyectos/miembros y MCP 403 | viewer.png, http.json |
| INC-01-AC05 | RLS, roles sin bypass, contexto y aislamiento probados en PostgreSQL real | postgres-tests.json |
| INC-01-AC06 | Cambio de organización limpia proyecto y vuelve a projects; cierre visible a formulario; sesión HTTP de ensayo revocada recibe 401 | cambio-B.png, logout.json, shell-tests.json |
| INC-02-AC01 | Manifiesto versión 1; seis rutas hash de JS servidas con 200 | remotes.json |
| INC-02-AC02 | Seis componentes reales montados en navegador; catálogo MCP terminó con 19 herramientas; consultas asociadas a A | navegacion.json, historial-A.png |
| INC-02-AC03 | Falló originalmente conservando vista; corrección local, regresión roja/verde y repetición browser A/B | Hallazgo inicial, cambio-B.png, shell-tests.json |
| INC-02-AC04 | Promesa controlada: no monta después de retirar vista | shell-tests.json; prueba unitaria, no demora browser simulada |
| INC-02-AC05 | Manifiesto ausente genera error; restaurar y Reintentar recupera sin recarga/login. JS qa-retry.js ausente genera fallo de import; crear fixture reexportando el remoto y pulsar Reintentar recupera sin recargar | error-manifiesto.png, observación browser registrada en esta acta |
| INC-02-AC06 | Build individual review conserva otras cinco rutas; origen external.invalid rechazado antes de importar; fixture local version=2 rechazado | remotes.json, version-rechazada.png |

Los fallos se provocaron exclusivamente mediante archivos del build local ignorado, no en hosting: se guardó el manifiesto original, se retiró temporalmente o se cambiaron entradas para fixtures. Al finalizar se restauró y se eliminaron qa-retry.js/qa-version.js. No se importó código de terceros. El servidor de preview aplica fallback HTML al manifiesto ausente: el error observado fue de parseo JSON; el botón permitió recuperación efectiva. Esta limitación de redacción del mensaje se conserva.

La prueba de logout HTTP utilizó su propia sesión privada del mismo usuario de ensayo; no se capturó ni publicó el token de la sesión del navegador. Los dos mecanismos se registran por separado. Los snapshots de navegación incluyen estados de carga transitorios; se esperó el montaje de cada remoto y se verificó posteriormente catálogo MCP con 19 herramientas.

## Límites y entrega

Este cierre comprende ejecución y registro técnicos locales. No cierra automáticamente HU-37 completa (entrega final), las revisiones del equipo ni la aceptación docente, y no acredita deploy en Render ni generación Anthropic. QA-004/QA-005 quedan con ensayo técnico aprobado y revisión humana pendiente. Se conserva el checklist y los recibos para la revisión independiente.


## Publicación posterior del candidato

La corrección ensayada se publicó en 4ece391dde3611463b21a79901ed8cb281b295b7 y se fusionó en ea8b600e018b008a40ec51a34d02994ffa815579. Backend integrado: 15eedc0c11a62535add7efc9fd3ecb038e5c8ad6. Se comprobó igualdad de árboles con los HEAD aprobados. La descripción previa de cambios sin commit corresponde al momento del ensayo; el estado vigente está en [VERSION_FINAL](../../../VERSION_FINAL.md). No implica aprobación docente ni despliegue acreditado.
