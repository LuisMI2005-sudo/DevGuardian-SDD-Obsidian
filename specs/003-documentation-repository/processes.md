---
tags: [devguardian, dg/sdd, dg/verificacion]
---
# Revisión y actualización documental

```mermaid
sequenceDiagram
  participant E as Equipo
  participant D as Repositorio documental
  participant C as GitHub Actions
  participant P as Docente
  E->>D: Especificación, plan, tarea y procedencia
  D->>C: Push o pull request
  C->>C: Comprobar copias, enlaces y diagramas
  C-->>E: Resultado documental
  P->>D: Leer recorrido docente
  P->>D: Clonar y abrir como bóveda
  D-->>P: Notas, grupos, Canvas y Mermaid
```

Antes de actualizar una evidencia, registrar qué commit y ejecución la produjeron. Una aprobación documental no reemplaza las pruebas del código ni acredita un despliegue.
