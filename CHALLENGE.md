Perfil: Full Stack (Node / APIs / React)
Objetivo: criterio, decisiones técnicas, claridad

🧩 Contexto
Estás trabajando en una app interna para gestionar solicitudes de soporte.
No existe backend todavía, solo una definición vaga del negocio.

🎯 Tarea
Construye una mini API REST (Node.js, Express o NestJS) que permita:

1️⃣ Crear tickets de soporte
Un ticket tiene:

id

título

descripción

prioridad (low, medium, high)

estado (open, in_progress, closed)

fecha de creación

2️⃣ Listar tickets
Permitir filtrar por estado

Permitir ordenar por prioridad o fecha

3️⃣ Cambiar estado de un ticket
No se puede pasar de closed a otro estado

Documenta esta decisión

No necesitas base de datos real:
puedes usar memoria (array) o un archivo JSON.