---
tags: [devguardian, dg/verificacion, dg/sdd]
---
# Evidencia de diferencia y preparación

Fecha del registro: 29/10/2026. La definición es posterior al desarrollo; no se afirma que fuera una especificación previa de esos commits.

## Base técnica verificada con Git

```powershell
# Backend: commit de entrega fechado 20/10, sin src/platform/
git show -s --format='%H | %ad | %s' --date=iso-strict f9438ef
git ls-tree --name-only f9438ef src/platform
git log --all --reverse --format='%H | %ad | %s' --date=short -- src/platform/identity.ts

# Frontend: commit de entrega fechado 20/10, sin ambas carpetas
git show -s --format='%H | %ad | %s' --date=iso-strict f83d928
git ls-tree --name-only f83d928 src/platform src/microfrontends
git log --all --reverse --format='%H | %ad | %s' --date=short -- src/platform/Shell.tsx
```

Los ls-tree de la base no devolvieron esas carpetas. El primer commit encontrado para identidad fue d6af0f7 del 28/10 y para Shell fue 22d4b2d del 28/10. Esto acredita una diferencia técnica; no acredita qué versión aprobó formalmente el docente.

## Código y pruebas de INC-01

- [Identidad y sesiones](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/src/platform/identity.ts).
- [Gateway y validación de contexto](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/src/platform/gateway.ts).
- [Roles, contexto y claves](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/src/platform/security.ts).
- [Pruebas PostgreSQL reales](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/tests/platform/postgres.test.mjs): sesión obligatoria/membresías, rol runtime, RLS, repositorio tenantizado, proyecto/diagnóstico/historial, viewer y revocación.
- [Pruebas criptográficas y de permisos](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/blob/39cb46a93b3c750100e09aab93950607aff357da/tests/platform/security.test.mjs).

## Código y pruebas de INC-02

- [Shell](https://github.com/SebhastianCampero-Collab/Frontend/blob/3b06f56e3bf2a213155865760649218c8d3b16d6/src/platform/Shell.tsx), [contratos](https://github.com/SebhastianCampero-Collab/Frontend/blob/3b06f56e3bf2a213155865760649218c8d3b16d6/src/microfrontends/contracts.ts), [loader](https://github.com/SebhastianCampero-Collab/Frontend/blob/3b06f56e3bf2a213155865760649218c8d3b16d6/src/microfrontends/loader.ts) y [ciclo de vida](https://github.com/SebhastianCampero-Collab/Frontend/blob/3b06f56e3bf2a213155865760649218c8d3b16d6/src/microfrontends/RemoteView.tsx).
- [Construcción de Shell/remotos](https://github.com/SebhastianCampero-Collab/Frontend/blob/3b06f56e3bf2a213155865760649218c8d3b16d6/scripts/build-platform.mjs).
- [Pruebas Shell/ciclo de vida](https://github.com/SebhastianCampero-Collab/Frontend/blob/3b06f56e3bf2a213155865760649218c8d3b16d6/tests/platform.test.tsx): contexto/rol por organización, token fuera de localStorage y cancelación de montaje tardío. El loader está simulado en esta suite; no se describe como carga browser real de los seis bundles.

## Evidencia CI citada y lo que no se vuelve a ejecutar

- [CI backend de integración](https://github.com/LuisMI2005-sudo/ProyectoCertiIA/actions/runs/40942257149): incluye servicio PostgreSQL efímero y la variable que activa las pruebas RLS reales.
- [CI frontend](https://github.com/SebhastianCampero-Collab/Frontend/actions/runs/40942339109): pruebas y builds legacy/plataforma.
- En esta definición se inspeccionó el manifiesto local existente: versión 1 y seis rutas de remotos con hash. No se generó una nueva ejecución del build ni una sesión browser completa por leer ese archivo.

Los PRs backend #5 y frontend #1 integran sandbox/controles y documentación; no son los PRs originales de implementación de estos dos incrementos. Para HU-44/HU-46 se conservan los commits y las relaciones documentales ya identificadas, sin inventar un PR histórico propio. El backlog y las [relaciones verificadas](../005-final-traceability/traceability.md) mantienen esa distinción.

## Estado de aceptación

La implementación y las pruebas citadas están disponibles. El ensayo de defensa, los casos manuales todavía no registrados y la aceptación del docente permanecen pendientes. Usar [el guion](demo.md) para generar esa evidencia y conservar un resultado por cada criterio, incluyendo los fallos.

La definición documental se verificó con `npm run check`: 141 Markdown, tres Canvas, 66 Mermaid y 20 grupos; se conservaron las 51 HU con sus estados y se comprobaron exactamente dos incrementos con seis IDs de aceptación cada uno. Los chequeos SDD de backend y frontend y `git diff --check` también aprobaron. Se enlazó la selección en los issues #49/#51 y el soporte en #50, conservando sus estados técnicos; no se registró aprobación del docente ni una nueva demo.
