---
tags: [devguardian, dg/seguridad, dg/verificacion]
---
# Despliegue y reparación real y segura

Alcance confirmado por el usuario: solo despliegue y reparación real y segura. Se excluyen en este trabajo nuevas políticas por organización, migración histórica de datos y mejoras generales de telemetría.

**Ajuste posterior de alcance:** el usuario confirmó «Solo validar primero en local y CI». Esta entrega no modifica Render ni publica en las ramas de despliegue. La infraestructura cloud para ejecutar código externo queda pendiente.

## Aceptación

- Preparar una entrega desplegable sin desactivar autenticación ni guardrails.
- Ejecutar pruebas de código importado únicamente dentro de un entorno aislado del host, sin credenciales, red, socket Docker, privilegios ni acceso de escritura al checkout original.
- Comparar baseline y candidato usando los contratos existentes y confirmar un parche únicamente con evidencia completa sin regresiones.
- Distinguir pruebas con propuesta controlada y una reparación generativa con proveedor real. La segunda requiere una clave configurada; no se simula el resultado.
- Si falta la infraestructura o el proveedor, bloquear la reparación y explicar el motivo.
- Inspeccionar el despliegue existente sin modificarlo; validar los cambios en una rama independiente y en CI antes de decidir una publicación futura.

## Condiciones observadas

El backend de Render utiliza la rama Dev y el sitio estático está publicado. El perfil multitenant actual está limitado a loopback y no es todavía un arranque distribuido para Render. No se encontró ANTHROPIC_API_KEY configurada. Docker Desktop está instalado, pero su motor no respondía al comenzar esta tarea.

El usuario abrió Docker Desktop manualmente y se verificó el motor Linux. Consultar la [evidencia de validación](validation.md) para distinguir pruebas reales, propuestas controladas y capacidades aún pendientes.
