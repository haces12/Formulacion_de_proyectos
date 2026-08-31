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
