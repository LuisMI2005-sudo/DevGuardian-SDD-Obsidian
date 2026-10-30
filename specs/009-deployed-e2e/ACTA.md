---
tags: [devguardian, dg/verificacion, dg/direccion]
---
# Acta del recorrido en Render

Ensayo ejecutado el 29 de octubre de 2026, America/La_Paz. Registro del proyecto a las 20:53:22; diagnóstico iniciado a las 20:53:33 y error controlado a las 20:54:47. Recibo HTTP consultado a las 20:55:20; se completaron después recuperación y capturas. Operador y autoverificación técnica: Codex, por solicitud del usuario. No se atribuye revisión humana ni aceptación docente.

## Versiones publicadas identificadas

| Componente | Rama | Commit completo observado en Render | Deploy Live |
|---|---|---|---|
| Backend | Dev | `15eedc0c11a62535add7efc9fd3ecb038e5c8ad6` | `dep-dbhuiuss728c73d6v60g` |
| Frontend | dev | `ea8b600e018b008a40ec51a34d02994ffa815579` | `dep-dbhuhhavcj2c73f8j8pg` |

Se consultaron los servicios `srv-dbbeainf3r2c738j6g9g` y `srv-dbbebtmq1p3s73cacms0` en el panel autenticado de Render. En ambos se observó la etiqueta Live y el enlace Last successfully deployed commit al SHA de la tabla. Son los mismos commits que la versión integrada y que sus CI aprobados. Se observó disparador Auto-Deploy en el historial del hosting; no se provocó un deploy ni se modificó configuración.

Evidencias: [recibo de versiones](deploys.json), [backend en Render](backend-render.png), [frontend en Render](frontend-render.png) y snapshots de lectura `backend-render.txt`/`frontend-render.txt`. El health no incluye SHA: la atribución de versión procede del panel del hosting, no de deducirla a partir de HTTP 200.

## Datos y alcance del ensayo

- Web: https://proyecto-certificacion-ai-frontend.onrender.com.
- API: https://proyecto-certificacion-ai-backend.onrender.com.
- Proyecto creado por esta ejecución: `7ac733ad-df76-4fe5-8fb7-542a3f3a024e`, PruebasDEVGuard.
- Repositorio importado: https://github.com/LuisMI2005-sudo/PruebasDEVGuard, rama main. Es un repositorio de evaluación con defectos intencionales.
- Archivo válido: `src/calculator.ts`.
- Archivo inexistente solicitado: `src/archivo-inexistente-ensayo.ts`.

No se instalaron dependencias ni ejecutaron scripts del repositorio importado. Se crearon un proyecto de ensayo y dos auditorías; no se borraron ni modificaron proyectos previos ni archivos del repositorio. Los checkouts del hosting son efímeros; el historial PostgreSQL no equivale a conservar esos archivos tras un futuro redespliegue.

## Pasos y resultados observados

| Paso | Ejecución | Resultado |
|---|---|---|
| Registro | Mis proyectos → Registrar proyecto → enlace público → Importar y preparar | Importación terminada; navegación automática a revisión y selector con archivos reales |
| Diagnóstico | Seleccionar src/calculator.ts y pulsar Revisar código, con sintaxis, tipos y calidad | UI Análisis terminado; un hallazgo TS2322 en línea 2: el retorno string no corresponde al tipo number |
| Historial inicial | Abrir Resultados e historial | Resultado y registro con prefijo 553526fe visibles |
| Primera recarga | Recargar la página completa | Se recuperan el mismo resultado, el hallazgo y el mismo ID, sin repetir el diagnóstico |
| Error controlado | Opciones avanzadas → archivo inexistente → Revisar código | UI Operación no completada y Análisis no completado; mensaje que indica archivo no encontrado, sin concluir que el código esté libre de errores |
| Persistencia del error | Recargar de nuevo | Permanecen ambos registros: diagnóstico y error, con los mismos IDs |
| Recuperación | Restaurar selección src/calculator.ts; abrir el registro anterior del historial | Vuelve el diagnóstico con TS2322 sin crear una nueva auditoría |

Evidencias: [resultado](resultado.png), [primera recarga](historial-tras-recarga.png), [error controlado](error-controlado.png), [ambos registros tras recargar](ambos-registros-tras-recarga.png), [resultado recuperado](resultado-recuperado.png). Los snapshots UI se guardan junto a las capturas.

## Correlación con persistencia

| Intento | ID completo | Estado de auditoría almacenado | Resultado de diagnóstico |
|---|---|---|---|
| Archivo válido | `553526fe-b1b0-465b-ad92-24511d0b8347` | blocked | completed; outcome diagnosed; TS2322 |
| Archivo inexistente | `0dbec726-fd3a-4e88-86d9-b7ab9849b0a5` | failed | failed; archivo o carpeta no existe |

En modo diagnóstico, blocked significa que no se autorizó parche/commit; no significa que falló el análisis. La UI presenta correctamente Análisis terminado para el primer intento. La razón interna conserva Diagnostic mode does not authorize a patch or commit.

La lectura posterior de `/api/audits?projectId=7ac733ad-df76-4fe5-8fb7-542a3f3a024e` respondió HTTP 200 y devolvió ambas auditorías. El health informó PostgreSQL conectado y cinco tablas. El recibo [http.json](http.json) contiene metadatos seleccionados, sin tokens ni fragmentos de código. Las trazas muestran delegación diagnostic y consumo diagnosis_only del primer intento.

El error de archivo inexistente se almacena como fallo de dominio en una auditoría; no se afirma que la petición del diagnóstico devolviera HTTP 404. El mensaje y el estado persistido son la evidencia del fallo controlado. Una sonda auxiliar a GET /api/projects/{id} encontró una ruta no soportada y se excluyó del recibo del recorrido; no se usó como el error de la demo.

## Resultado y límites

Los siete criterios del protocolo de este recorrido técnico están comprobados. Queda identificado qué commit sirve cada componente y se demostró frontend → API → worker → persistencia → resultado/historial, con recargas y fallo controlado.

No se ejecutó reparación, commit, llamada Anthropic ni pruebas del código importado. El health indicó isolatedTests=false y requiresIsolation=true; el control de reparación para importados aparece deshabilitado. Esta demo no acredita reparación generativa cloud ni despliegue del perfil multitenant/microfrontends, que tiene su ensayo local separado.

La revisión del equipo/docente y la prueba negativa de bloqueo de deploy por CI fallido continúan pendientes. No se alteró una validación ni se rompió producción para comprobarlas. El hosting puede dormir por inactividad; el registro acredita el estado observado durante este ensayo.
