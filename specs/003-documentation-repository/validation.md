---
tags: [devguardian, dg/sdd, dg/verificacion]
---
# Evidencia de separación documental — 2026-10-28

- Exportación realizada con `git archive` desde los commits citados en [PROCEDENCIA](../../PROCEDENCIA.md).
- `npm run check` pasó antes de publicar: SDD backend y frontend sincronizados, enlaces locales válidos, tres Canvas con referencias existentes y veinte grupos del grafo.
- La primera comprobación contabilizó 124 archivos Markdown y 61 bloques Mermaid; este documento se añadió después de ese conteo.
- Se corrigió el verificador importado para aceptar saltos de línea LF y CRLF sin alterar el contenido de los diagramas.
- La revisión de patrones de credenciales no encontró tokens ni claves privadas en el contenido exportado.
- Se creó el repositorio público con la cuenta y visibilidad confirmadas por el usuario.

La CI propia está en `.github/workflows/docs.yml`. El resultado remoto se registra después de publicar y observar su ejecución. La comprobación es estructural; queda a cargo del usuario aceptar la confianza de Mermaid al abrir una nueva bóveda y revisar visualmente los diagramas que necesite presentar.

## Publicación comprobada

- Repositorio público: [DevGuardian-SDD-Obsidian](https://github.com/LuisMI2005-sudo/DevGuardian-SDD-Obsidian).
- [Workflow inicial 40768640229](https://github.com/LuisMI2005-sudo/DevGuardian-SDD-Obsidian/actions/runs/40768640229): `completed / success`, sobre el commit `c87563f6817580dc8a6cff54736d18432d6fed63`.
- Verificación completa tras añadir esta evidencia: 125 Markdown, 3 Canvas, 61 bloques Mermaid y 20 grupos; validación estructural correcta.
- Enlace publicado en el backend mediante `defd6abba548bc6db821ccbc45788df8caddf1fa` y en el frontend mediante `796dcac7e3c96c3293380002d7d472309e36fbab`.
