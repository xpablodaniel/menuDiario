# Proyecto: Menú del Día - Selector Interactivo

Este proyecto permite seleccionar un menú del día desde el navegador, ideal para imprimir y exhibir en la entrada del salón comedor.

## ✅ Características principales

- Selección de Entradas, Platos Principales y Postres.
- Visualización de submenús con acompañamientos o salsas.
- Opción para imprimir el menú seleccionado.
- Submenús visibles solo cuando corresponde.
- Opción por defecto ("--") incluida en todos los platos con acompañamientos.

## 🆕 Cambios recientes importantes

### 🔁 Refactorización de `menus.json`
- Se introdujo la clave `submenu_ref` para evitar la repetición de listas de acompañamientos cárnicos.
- Ahora el archivo es más liviano y mantenible.
- Se agregó una entrada única `acompanamientos_carnicos` que puede ser referenciada por múltiples platos.

### 🧠 Lógica adaptada en `indexMenu.js`
- Se modificó el script para detectar y resolver `submenu_ref`.
- Se mantiene compatibilidad con platos que usan `submenu` directamente.

### 🐞 Corrección de errores previos
- Se solucionó un problema de visualización de submenús debido a una mala referencia del contenedor HTML.
- Se eliminó `@top-center` en CSS por ser una regla no soportada por los navegadores.
- Se mejoró la accesibilidad y se organizó el HTML semánticamente.

## 🗃 Archivos clave

- `menus.json`: Base de datos con platos y acompañamientos.
- `indexMenu.js`: Lógica de carga dinámica y visualización.
- `indexMenuPers.html`: Estructura HTML del menú.
- `indexMenuPers.css`: Estilos visuales e impresión.
- `snowflake1.png`: Icono para el botón de impresión.

## 📦 Cómo usar

1. Colocar todos los archivos en un mismo directorio.
2. Servir con una herramienta local (como la extensión PHP Server o Live Server).
3. Abrir `indexMenuPers.html` en el navegador.
4. Elegir las opciones deseadas y presionar el botón con el ícono de copo de nieve para imprimir.

---

Gracias a todos los que participaron en este proyecto, que sintetiza meses de trabajo, mejoras progresivas y atención al detalle.

**¡Buen provecho!**
