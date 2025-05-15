# Plan de expansión del sistema de menú - Almuerzo y Cena

Este documento describe los cambios proyectados para adaptar el sistema actual de menú a una nueva modalidad que incluya **dos turnos de comida por día: almuerzo y cena**, conservando la funcionalidad de impresión clara y organizada.

---

## 🎯 Objetivo

Permitir que el usuario seleccione tanto el almuerzo como la cena en una misma interfaz y poder **imprimir ambas selecciones en una única hoja**, con un diseño compacto y legible.

---

## 🧩 Cambios previstos

### 1. Cambios en `indexMenuPers.html`

- Duplicar el conjunto de elementos `<section>` para incluir:
  - Entrada, principal y postre de **almuerzo**
  - Entrada, principal y postre de **cena**

```html
<h2>Almuerzo</h2>
<!-- Selects para almuerzo -->

<h2>Cena</h2>
<!-- Selects para cena -->
```

---

### 2. Cambios en `indexMenu.js`

- Se adaptará la función `llenarSelectConOpciones()` para manejar ambos turnos (almuerzo y cena).
- Cada bloque de selects para almuerzo y cena mantendrá su propia lógica de submenús.
- Se compartirá el mismo archivo `menus.json`.

---

### 3. Cambios en `indexMenuPers.css`

- Se agregará una media query para impresión horizontal (`landscape`) y tamaño de fuente más reducido:

```css
@media print {
    @page {
        size: A4 landscape;
        margin: 10mm;
    }

    body {
        font-size: 20px !important;
    }

    section {
        display: inline-block;
        width: 45%;
        vertical-align: top;
        margin: 1%;
    }

    h2 {
        font-size: 24px;
        text-align: center;
    }

    .print-button {
        display: none;
    }
}
```

---

## 📦 Ventajas

- Diseño más compacto.
- Organización clara de las comidas por turno.
- Listo para impresión en una sola hoja.
- Facilita la logística del comedor para días completos.

---

## 📝 Inspiración

La estructura está basada en experiencias previas de menú impreso como el archivo `menu_Jubis2023.md`, con formato tipo tabla para mostrar almuerzo y cena en conjunto.

---

## ⏳ Próximos pasos

- Diseñar maqueta visual de doble turno.
- Probar el ajuste de fuente e impresión.
- Implementar almacenamiento opcional por día.

---

**Documento generado automáticamente como guía de implementación futura.**
