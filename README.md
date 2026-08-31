#  Sistema de Gestión Administrativa

Sistema web de gestión administrativa desarrollado con HTML, CSS y
JavaScript.

La aplicación integra diferentes módulos para administrar usuarios,
inventario, proveedores, operaciones comerciales y reportes.

---

##  Descripción

El proyecto simula un sistema administrativo centralizado para gestionar
las principales operaciones de una empresa.

La aplicación cuenta con una interfaz web con autenticación, diferentes
módulos administrativos y visualización de información mediante tablas,
estadísticas y gráficos.

---

##  Funcionalidades

###  Usuarios

- Inicio de sesión.
- Gestión de usuarios.
- Roles de usuario.
- Estados de usuario.
- Edición de perfiles.
- Cambio de contraseña.
- Control de permisos.

###  Inventario

- Registro de productos.
- Edición de productos.
- Control de stock.
- Categorías.
- Búsqueda de productos.
- Filtros.
- Alertas de stock bajo.
- Identificación de productos agotados.
- Movimientos de inventario.

###  Proveedores

- Registro de proveedores.
- Edición de proveedores.
- Eliminación de proveedores.
- Búsqueda.
- Categorías.
- Estado de proveedores.

###  Operaciones

- Registro de ventas.
- Registro de compras.
- Cálculo automático de totales.
- Actualización del inventario.
- Control de stock disponible.
- Historial de operaciones.

###  Reportes

- Resumen de ventas.
- Resumen de compras.
- Ganancias.
- Estado del inventario.
- Operaciones realizadas.
- Generación de reporte.

###  Dashboard

El sistema incluye un dashboard con información resumida de las diferentes
áreas administrativas.

---

##  Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- SweetAlert2
- Chart.js
- Flatpickr
- NProgress
- Google Fonts

---

##  Arquitectura

Este proyecto funciona como una aplicación web frontend sin un backend
externo.

```text
             Usuario
                │
                ▼
        HTML / CSS / JavaScript
                │
       ┌────────┼────────┐
       ▼        ▼        ▼
   Usuarios  Inventario  Operaciones
       │        │        │
       └────────┼────────┘
                ▼
             Reportes
```
#Imagenes
![Banner de Reporte](https://private-user-images.githubusercontent.com/130525712/643310895-9f3bb264-d9cb-4fc3-b464-833d48d68166.jpeg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODgxNDM3MjcsIm5iZiI6MTc4ODE0MzQyNywicGF0aCI6Ii8xMzA1MjU3MTIvNjQzMzEwODk1LTlmM2JiMjY0LWQ5Y2ItNGZjMy1iNDY0LTgzM2Q0OGQ2ODE2Ni5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDgzMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA4MzFUMDIzMDI3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9N2QwNWRlZTVkYzU0MjQ0YzE5ZDQ1MzgxMmRhOTAzZGIwYWY3NjU1YWZlOGJlMzE1MGQ1YWU3MWVkYmIwN2QxNiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGanBlZyJ9.1MI5X3kOkpEKF1gFDYHHS1BS0iAu1s4-nNYBSQc_VPI)
![Banner de Reporte](https://private-user-images.githubusercontent.com/130525712/643311014-9c9ce214-aa3a-45fa-98af-4377773935d8.jpeg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODgxNDM3NjksIm5iZiI6MTc4ODE0MzQ2OSwicGF0aCI6Ii8xMzA1MjU3MTIvNjQzMzExMDE0LTljOWNlMjE0LWFhM2EtNDVmYS05OGFmLTQzNzc3NzM5MzVkOC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDgzMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA4MzFUMDIzMTA5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZTBkMDhlMTVlYTY5MWI2OTk0N2JmODhhMzYyY2I5YjJkOWY5Yzc4OWIxM2FlYzFhNDgzZTZkNmFkODRhNjdkYiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGanBlZyJ9.5PArlSh2K2hCrByv0mcbtHGDrT_4AiSRX6WY_H1dXXk)
