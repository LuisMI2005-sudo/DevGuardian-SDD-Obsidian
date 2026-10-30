---
tags: [devguardian, dg/sdd, dg/direccion]
---
# Plan de aceptación de los dos incrementos

## Decisión y alcance

La solicitud del usuario selecciona INC-01 Gestión segura de organizaciones y accesos e INC-02 Espacio de trabajo modular con microfrontends como definición del incremento final. Este plan ordena su aceptación; no representa una implementación nueva ni aceptación del docente.

1. Usar los commits de entrega del 20/10 como base técnica y contrastarlos con los módulos incorporados el 28/10.
2. Evaluar INC-01 con sesiones, membresías, aislamiento A/B, rol viewer, revocación y RLS. Usar PostgreSQL local y las pruebas efímeras de CI; no la base PCAI.
3. Evaluar INC-02 con manifiesto/build de seis remotos, navegación, limpieza por tenant, cancelación de montaje tardío y fallo/reintento.
4. Registrar una demostración manual con versión, fecha, entorno, criterios y evidencia. Un resultado de CI se puede citar; no se marca como una demo nueva.
5. Presentar el antes/después al docente para confirmar los dos módulos del incremento. La selección de nombres no acredita por sí sola su evaluación.
6. Mantener las decisiones de entrega remota y producción como pendientes separados en HU-36/HU-37/HU-38 y HU-50.

## Lista de tareas

- [x] T001 Verificar hashes/fechas de la base y ausencia de platform/microfrontends en ese corte.
- [x] T002 Identificar los commits posteriores que incorporaron los módulos.
- [x] T003 Definir los dos incrementos, sus beneficios y criterios de aceptación con IDs.
- [x] T004 Enlazar HU-44/HU-46 y HU de soporte, diferenciando pruebas reales y pruebas con loader controlado.
- [x] T005 Ejecutar y registrar el ensayo manual completo de INC-01.
- [x] T006 Ejecutar y registrar los seis remotos, fallo/reintento y reconstrucción independiente de INC-02.
- [ ] T007 Revisar esta selección con los tres integrantes y presentar el contraste al docente.
- [ ] T008 Registrar la aceptación del docente, si se obtiene; no marcarla automáticamente.
- [x] T009 Preparar checklist ejecutable de los 12 criterios con estados iniciales No ejecutado y acta por SHA; enlazarlo a QA-004/QA-005 sin cerrar el ensayo.

Las revisiones humanas no se sustituyen por un comprobador. No se asignan expositores sin acuerdo del equipo.


Actualización del ensayo técnico del 29/10/2026: los resultados por criterio y versiones están en [ACTA](ensayo/ACTA.md). Se ejecutaron pruebas PostgreSQL reales, recorrido de Shell, cambios de organización y recuperación/rechazos del loader. La revisión humana y aceptación docente permanecen pendientes. La corrección de navegación del frontend está local, sin commit ni publicación.
