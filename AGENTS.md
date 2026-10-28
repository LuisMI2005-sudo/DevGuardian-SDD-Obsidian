# DevGuardian: repositorio documental

Este repositorio contiene SDD, Spec Kit y la bóveda de Obsidian de DevGuardian. No contiene ni ejecuta la aplicación. GameZone es otro proyecto.

Leer README.md, PROCEDENCIA.md, specs/constitution.md y specs/003-documentation-repository/plan.md antes de editar. Mantener la distinción entre arquitectura objetivo, perfil local implementado y despliegue productivo pendiente. La documentación importada conserva evidencia histórica y no acredita una nueva ejecución de pruebas.

Todas las arquitecturas, modelos y flujos nuevos deben utilizar bloques Mermaid nativos en Markdown. Mantener enlaces relativos dentro de la bóveda. No instalar plugins comunitarios ni copiar configuraciones personales de Obsidian. Se versionan únicamente los ajustes compartidos de esta bóveda nueva, incluidos los grupos del grafo.

Fuentes operativas: .specify/ del backend documental y frontend/.specify/ para frontend. Sincronizar sus copias visibles con npm run sdd:sync y verificar con npm run check. Las habilidades exportadas de Spec Kit están en .agents/skills/; no ejecutar comandos que sobrescriban planes terminados.

Nunca incluir .env, bases locales, credenciales, tokens, node_modules ni código de negocio. Una actualización desde los repositorios de aplicación debe registrar los commits de origen en PROCEDENCIA.md y conservar los límites de la evidencia.
