---
tags: [devguardian, dg/seguridad, dg/verificacion]
---
# Aceptación de los hooks nativos de edición

Solicitud del usuario del 30/10/2026: completar QA-006 con edición permitida, verificación posterior y rechazo de una ruta protegida sin la interferencia observada del sandbox Windows legacy. No basta el registro de una decisión si la herramienta falla por otra causa.

## Criterios

- HK-01 Ejecutar una sesión nativa con sandbox operativo y las políticas del proyecto vigentes, sin editar sus controles ni eludir confianza.
- HK-02 Crear mediante `apply_patch` un archivo TypeScript inocuo y temporal en `src/hooks/qa-native-demo.ts`; comprobar que el archivo se creó con el contenido solicitado.
- HK-03 Observar el `PostToolUse` real que ejecuta TypeScript, copia del esquema, ESLint y Jest del módulo afectado, con resultado concreto.
- HK-04 Intentar crear mediante `apply_patch` el marcador ficticio `tests/demo-hook-protected.test.mjs`, que no existía; exigir rechazo del hook antes de crear el archivo. No modificar ninguna prueba existente ni reintentar por otra herramienta.
- HK-05 Conservar traza correlacionada, comprobar la integridad de pruebas y controles y retirar únicamente los archivos inocuos creados por el ensayo.

## Plan de ejecución

Usar Codex CLI 0.162.1 con `windows.sandbox=mxc` solo para la sesión y perfil `workspace-write`; el diagnóstico MXC con requisitos administrados ya ejecutó un comando inocuo correctamente. Los hooks son los previamente revisados y autorizados por el usuario en `/hooks`. No cambiar configuración global, permisos de Windows, registro de hooks o política protegida. Registrar también cualquier fallo real antes de decidir el cierre.
