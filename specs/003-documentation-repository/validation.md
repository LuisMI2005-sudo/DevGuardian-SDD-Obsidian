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
