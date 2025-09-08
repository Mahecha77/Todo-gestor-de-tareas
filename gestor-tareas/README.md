DOCUMENTACIÓN DEL PROYECTO TODO LIST CON REACT

Descripción del Proyecto

Este proyecto es una aplicación web de gestión de tareas (Todo List) desarrollada con React y Vite. Permite a los usuarios agregar, 
marcar como completadas y eliminar tareas, además de visualizar estadísticas en tiempo real de las tareas totales, pendientes y completadas.

El proyecto utiliza componentes funcionales, hooks de React como useState, props para la comunicación entre componentes, PropTypes para validación de propiedades, y la librería Bootstrap para un diseño responsivo, moderno y limpio.


Objetivo

- Implementar una aplicación de lista de tareas funcional.
- Aplicar conceptos fundamentales de React: componentes, hooks y props.
- Usar programación funcional y arquitectura modular.
- Mejorar la experiencia de usuario con un diseño atractivo e interactivo.
- Integrar buenas prácticas de control de versiones con commits semánticos.

Tecnologías Utilizadas

- React (con Vite como bundler)
- Bootstrap (estilos y componentes responsivos)
- PropTypes (validación de props)
- JavaScript (ES6+)
- HTML5 / CSS3

Requisitos Previos

- Node.js 
- NPM 
- Git 

Instalación y Ejecución

Clonar el repositorio o copiar la carpeta del proyecto:

git clone https://github.com/usuario/todo-list-react.git


Instalar las ependencias:

npm install


Ejecutar en modo desarrollo:

npm run dev


Generar build para producción(Opcional):

npm run build


Previsualizar la build(Opcional):

npm run preview


Funcionalidades

Agregar tareas.
Marcar tareas como completadas.
Eliminar tareas.
Estadísticas en tiempo real:
- Total de tareas.
- Pendientes.
- Completadas.
Validación para no permitir tareas vacías.
Confirmación antes de eliminar.
Diseño atractivo con Bootstrap.
Responsive design (adaptable a dispositivos móviles).

Componentes y Lógica

- App.jsx
  - Estado principal de la lista de tareas.
  - Funciones para agregar, alternar completado y eliminar.
  - Cálculo de estadísticas.

- TodoForm.jsx
  - Formulario con input controlado.
  - Envía nuevas tareas a App.jsx.

- TodoList.jsx
  - Renderiza la lista de tareas.
  - Muestra mensaje si no hay tareas.

- TodoItem.jsx
  - Ítem individual.
  - Checkbox para marcar completadas.
  - Botón para eliminar.

Control de Versiones (Commits Sugeridos)

- feat: configuración inicial del proyecto
- feat: estructura de carpetas y archivos base
- feat: componente App con estado y lógica CRUD
- feat: componente TodoForm
- feat: componente TodoList
- feat: componente TodoItem
- feat: estadísticas básicas
- style: mejoras visuales y refinamiento final

Capturas de Pantalla

(Agregar aquí capturas de la aplicación corriendo, 
mostrando las tareas, los contadores y la interfaz 
en general.)

Notas Finales

- El proyecto está diseñado para fines educativos y de 
  práctica con React.
- Se recomienda seguir buenas prácticas de desarrollo, 
  incluyendo la modularidad, validación de props, 
  manejo de estados claros y commits semánticos.

