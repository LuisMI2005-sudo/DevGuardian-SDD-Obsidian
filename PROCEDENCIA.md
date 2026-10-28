# Procedencia y alcance de la entrega

Separación documental realizada el **2026-10-28**, por solicitud del usuario para cumplir la revisión docente de SDD y Obsidian en un repositorio independiente.

| Origen | Commit de la copia | Destino documental |
|---|---|---|
| [Backend](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/commit/d6af0f7c0d67a5d7a0d9eb453ba77a3df82f10f6) | `d6af0f7c0d67a5d7a0d9eb453ba77a3df82f10f6` | `.specify/`, `.agents/`, `specs/`, verificador SDD |
| [Frontend](https://github.com/SebhastianCampero-Collab/Frontend/commit/22d4b2d82c5dca9ca798cc6647ba9f2feca69965) | `22d4b2d82c5dca9ca798cc6647ba9f2feca69965` | `frontend/` |

La extracción utiliza `git archive` de esos commits: no copia `.env`, credenciales, bases locales, dependencias ni configuración personal de Obsidian. Las habilidades y plantillas provienen de la inicialización existente de Spec Kit 0.8.9; no se afirma una segunda inicialización ejecutada aquí.

## Interpretación de las evidencias

Los logs y recibos importados son históricos. Los conteos de pruebas, fallos o bloqueos describen las ejecuciones citadas en sus documentos. Este repositorio no vuelve a ejecutar el backend ni el frontend y su CI documental no acredita que toda la aplicación esté en verde.

La arquitectura objetivo, la implementación local y el despliegue productivo son estados diferentes. La separación documental no migra datos a producción, no modifica Render y no completa los pendientes técnicos registrados.

## Cambios respecto de las copias originales

Se añadieron portada y recorrido docente, esta procedencia, una especificación de separación, validación de la bóveda, workflow documental y configuración compartida del grafo. Los índices de apertura identifican esta bóveda independiente; los documentos históricos conservan su contexto temporal.
