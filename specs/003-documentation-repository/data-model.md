---
tags: [devguardian, dg/sdd, dg/arquitectura]
---
# Modelo del conocimiento documental

```mermaid
erDiagram
  PROYECTO ||--o{ ESPECIFICACION : define
  ESPECIFICACION ||--o{ PLAN : desarrolla
  PLAN ||--o{ TAREA : organiza
  TAREA ||--o{ EVIDENCIA : verifica
  NOTA ||--o{ RELACION : origina
  NOTA ||--o{ RELACION : recibe
  NOTA }o--o{ CATEGORIA : clasifica
  EVIDENCIA }o--|| FUENTE : identifica
```

Es un modelo conceptual de archivos y enlaces. La bóveda no crea ni necesita una base de datos adicional. El modelo PostgreSQL de la aplicación se documenta por separado.
