
# 📋 Menú del Día – Proyecto Web Interactivo

Este proyecto es una aplicación web simple que permite visualizar y seleccionar opciones de menú diarias (Entrada, Plato Principal y Postre) con submenús correspondientes. Está pensado para comedores escolares, comedores sindicales u organizaciones que necesitan mostrar menús dinámicos de manera visual, clara y funcional.

## 🧩 Estructura de Archivos

- `indexMenuPers.html`  
  Archivo principal HTML que estructura la interfaz visual del menú. Incluye secciones para cada categoría de comida, botones y recursos externos.

- `indexMenu.js`  
  Script en JavaScript que carga dinámicamente las opciones de menú y submenú en los desplegables (`<select>`). Contiene los arrays de platos ya predefinidos, que son ordenados alfabéticamente e insertados en el DOM.

- `indexMenuPers.css`  
  Hoja de estilos que define el diseño general, la estética para impresión y el comportamiento visual de botones, listas y tipografía.

## 🖥️ Tecnologías Utilizadas

- **HTML5** – Estructura semántica y accesible.
- **CSS3** – Diseño responsivo y soporte de impresión.
- **JavaScript Vanilla** – Manejo dinámico del contenido del menú.
- **Google Fonts (Material Symbols Outlined)** – Íconos vectoriales externos.
- **Imágenes externas** – Para logotipos e íconos (`sol.png`, `logoSuteba.png`, `snowflake1.png`).

## 📌 Funcionalidad

- ✅ Carga automática de menú del día desde arrays de JavaScript.
- ✅ Submenús personalizados para cada plato.
- ✅ Botón de impresión con ícono flotante.
- ✅ Diseño adaptado para impresión en papel.
- ✅ Estilo moderno y accesible, con tipografía clara y bloques de contenido bien definidos.

## ✨ Mejoras Recientes: Carga de Menú Dinámica (v1.1)

En esta versión se ha migrado la fuente de datos de los menús desde arrays definidos directamente en el archivo JavaScript (`indexMenu.js`) a un archivo JSON externo (`menus.json`).

### Beneficios Clave:

- **Separación de Datos y Lógica:** Los datos del menú ahora están completamente separados del código que los procesa, facilitando futuras actualizaciones.
- **Mayor Flexibilidad:** Permite modificar el menú diario simplemente editando el archivo `menus.json`, sin necesidad de alterar el código JavaScript o redeployar la aplicación si solo cambian los platos.
- **Preparación para Futuras Funcionalidades:** Establece las bases para cargar menús desde otras fuentes (como una API o una base de datos) con cambios mínimos en el front-end.

### Archivos Modificados:

- `menus.json`: Nuevo archivo que contiene la estructura completa del menú (Entrada, Plato Principal, Postre y submenús) en formato JSON.
- `indexMenu.js`: Modificado para:
    - Eliminar los arrays de menús hardcodeados.
    - Implementar la carga asíncrona del archivo `menus.json` utilizando la API `Workspace`.
    - Procesar los datos JSON para poblar dinálogos selectores de menú correspondientes.
    - Incluir manejo básico de errores durante la carga del archivo.

Este cambio mejora significativamente la agilidad para gestionar y actualizar el contenido del menú.

## 🖨️ Vista de Impresión

Incluye una hoja de estilos optimizada para impresión (márgenes, ocultamiento de elementos no necesarios, ajuste de fuentes y campos de selección).

## 🚀 Cómo usar

1. Clona o descarga el repositorio.
2. Asegúrate de tener los siguientes archivos en el mismo directorio:
   - `indexMenuPers.html`
   - `indexMenu.js`
   - `indexMenuPers.css`
   - `sol.png`, `logoSuteba.png`, `snowflake1.png`
3. Abre `indexMenuPers.html` en un navegador moderno.
4. Selecciona las opciones de menú que desees.
5. Haz clic en el ícono de copo de nieve (❄️) para imprimir el menú.

## 🔧 Recomendaciones de Mejora

- [ ] Permitir cargar menús desde un archivo JSON externo o una API.
- [ ] Agregar validaciones o filtros por día o tipo de menú.
- [ ] Incorporar almacenamiento local para guardar selecciones.
- [ ] Mejorar accesibilidad con etiquetas `label` para cada `select`.
- [ ] Agregar multilenguaje (internacionalización con `lang` dinámico).
- [ ] Adaptar a móviles mejorando `select` para pantallas táctiles.

## 🧑‍💻 Autor

Desarrollado como un recurso visual para mostrar menús diarios de forma profesional, imprimible y amigable.
