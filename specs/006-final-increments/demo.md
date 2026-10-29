---
tags: [devguardian, dg/verificacion, dg/direccion]
---
# Guion de demostración de los dos incrementos

Este documento prepara el ensayo; no registra una ejecución nueva. Usar el perfil local platform, no la web legacy publicada, para demostrar autenticación multitenant y microfrontends. Presentación sugerida: aproximadamente diez minutos, ajustables al tiempo del docente.

Para registrar resultados y no limitarse al guion, ejecutar el [checklist de aceptación](../../CHECKLIST_ACEPTACION_INCREMENTOS.md). Los casos de manifiesto y JS fallidos se distinguen: recuperar tras una recarga no acredita que el botón de reintento haya recuperado por sí mismo el remoto.

## Preparación antes de exponer

1. Seguir [la puesta en marcha local](../002-platform-migration/local-development.md). PostgreSQL y las bases de platform deben estar disponibles. `platform:init` se usa una sola vez; no reinicializar un entorno ya preparado.
2. Backend: `npm run platform:start`. En otra terminal, `npm run platform:status`. La API gateway local utiliza 4107.
3. Frontend: `npm run build:platform` y `npm run preview:platform`; abrir http://127.0.0.1:5173/. `npm run dev` abre el modo anterior, no esta Shell.
4. Usar la cuenta local aprovisionada y consultar su contraseña únicamente en el archivo ignorado indicado en la guía. No mostrar ese archivo ni copiar tokens a diapositivas, Markdown o capturas.
5. Tener dos organizaciones de ensayo, por ejemplo Aula A y Aula B. Pueden crearse desde la selección de organización. Crear un proyecto autorizado en A usando un repositorio público de prueba propio; no instalar scripts externos.
6. Abrir el CI de integración y la matriz de criterios como respaldo para los controles que requieren prueba HTTP/SQL. No presentar un run anterior como una ejecución nueva.

## INC-01 Gestión segura de organizaciones y accesos

**Qué explicar:** «Antes teníamos el motor y el dashboard; ahora una sesión y una membresía determinan qué información puede ver y modificar cada organización».

1. Iniciar sesión. Mostrar las organizaciones permitidas, sin exhibir la contraseña.
2. Entrar en Aula A y mostrar su proyecto y una revisión de código registrada. Anotar en el acta únicamente IDs no sensibles.
3. Pulsar **Cambiar organización**, elegir Aula B y mostrar que no aparecen el proyecto ni el resultado de A. No es necesario duplicar el proyecto en B para demostrar la separación.
4. Para demostrar la barrera del servidor, abrir la evidencia de CI de «requires a session, validates membership and rejects forged tenant selection», «RLS rejects unscoped writes...» y «viewer membership can read and cannot mutate...». Si se ejecutan en vivo, usar únicamente las pruebas locales efímeras y registrar su resultado real. Cambiar una selección visual no prueba por sí solo una denegación HTTP ni RLS.
5. Cerrar sesión y mostrar el formulario de acceso. La prueba de integración acredita que el token revocado deja de autorizar solicitudes; no publicar el token para enseñarlo.

La UI tiene creación de organizaciones. No se promete una pantalla de administración de usuarios/viewers que no existe en esta Shell. La administración de membresías y las denegaciones se pueden mostrar mediante las pruebas HTTP reales existentes o un cliente técnico autorizado, sin incluir credenciales en el acta.

## INC-02 Espacio de trabajo modular con microfrontends

**Qué explicar:** «El menú coordina módulos con contratos y artefactos separados; ya no demostramos microfrontends solo porque haya varios componentes React».

1. Iniciar sesión y entrar en una organización. Recorrer **Mis proyectos**, **Revisar código**, **Resultados e historial**, **Seguridad**, **Subagentes** y **Sandbox MCP**. Las vistas sin datos deben explicar que no existen registros; no poblarlas con eventos inventados.
2. En DevTools → Network, mostrar `/remotes/manifest.json` y las solicitudes a `/remotes/.../remote-<hash>.js`. El navegador puede reutilizar módulos ya cargados; una vista recargada no garantiza otra descarga.
3. Abrir `dist-platform/remotes/manifest.json` para mostrar las seis entradas. Su contenido no tiene credenciales. Un build separado y un contrato de carga son la evidencia arquitectónica; cambiar una ruta del menú por sí solo no lo sería.
4. Para el caso de recuperación, utilizar Request blocking de DevTools solo en esta sesión local: bloquear la URL JS del remoto review antes de cargarlo, recargar si el navegador ya lo importó y entrar en Revisión. Debe aparecer error y **Reintentar módulo**. Desbloquear la URL y reintentar; si el navegador mantiene en caché el import fallido, recargar la página y autenticarse de nuevo. Registrar lo ocurrido, incluido cualquier límite; no afirmar recuperación sin recarga si no se observa.
5. Para reconstrucción independiente, guardar una copia temporal del manifiesto fuera de Git, ejecutar `npm run build:remote -- review` desde el frontend y comparar las entradas. Las otras cinco deben conservarse. Sin cambios de fuente, el hash de review puede permanecer igual: no inventar un cambio de hash como condición de éxito. El build completo limpia su salida; no ejecutarlo en paralelo con la reconstrucción individual.
6. Cambiar de organización para mostrar que la Shell limpia proyecto/vista y mantiene el contexto autorizado. La prueba de montaje tardío es un caso unitario controlado; mostrar su run como tal.

## Evidencia mínima por guardar

| Campo | Registro de ensayo |
|---|---|
| Fecha, operador y versión backend/frontend | Pendiente de completar al ejecutar |
| Entorno y estado de servicios | Local platform; comprobar antes del ensayo |
| INC-01-AC01 a AC06 | Resultado individual observado, test citado y límite, sin marcar todo aprobado por un solo screenshot |
| INC-02-AC01 a AC06 | Resultado individual observado, rutas/manifiesto y caso de fallo/reconstrucción |
| Evidencia no sensible | IDs de organizaciones/proyecto/auditoría, capturas sin credenciales, URL del run |
| Revisión del equipo y del docente | Pendiente; registrar solo si ocurre |

## Cómo presentar el alcance

«Estos son nuestros dos incrementos finales: gestión segura de organizaciones y espacio de trabajo modular. Están implementados y validados localmente/en CI. El despliegue productivo distribuido y la migración de datos son una etapa distinta. No presentamos la web legacy de Render como si ya ejecutara este perfil».
