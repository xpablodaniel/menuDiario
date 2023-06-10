
const almuerzoMenu = [
    "Empanadas Criollas", "Ensalada Capresse", "Ensalada Lucho’s Cheff", "Tortillin de Papa", "Papas Cheddar y Puerro" , "Ensalada del Cheff" , 
    "Tortilla Española con Ensaladilla"
    // "Ensalada de pollo a la parrilla",
    // "Sándwich de atún con ensalada de col",
    // "Pizza vegetariana con champiñones y aceitunas"
];
almuerzoMenu.push("Crunch de Pollo con Ali - Oli");
const cenaMenu = [
    "Muslo Braseado al Limón con Ensalada del Cheff", "Milanesa de Peceto con Puré Marmolado de Espinacas", "Ravioli de Espinaca Mediterráneo",
     "Suprema de Pollo con Arroz Pilaf", "Carne al Horno Braseada a la Criolla con Mix de Hojas Verdes", "Pechugas al Verdeo", "Tallarines Mediterraneo"
    // "Pasta con salsa de tomate y albóndigas",
    // "Pollo a la cordon bleu con puré de papas",
    // "Salmón a la parrilla con espárragos asados"
];
cenaMenu.push("Carne al Horno Braseada con Ensalada");
const postreMenu = [
    "Flan de Naranja con Dulce de Leche", "Ensalada de frutas de Estación", "Helado de Americana con Praline de Frutos Secos",
    " Budín de Pan con Crema Montada", "Bombón Suizo", "Brownie", "Ensalada de Frutas con Crema", 
    // "Pastel de manzana con crema batida",
    // "Helado de vainilla con salsa de chocolate",
    // "Flan casero con caramelo"
];


postreMenu.push("Manzanas Asadas con Crema");

const almuerzoSelect = document.getElementById('almuerzo-select');
const cenaSelect = document.getElementById('cena-select');
const postreSelect = document.getElementById('postre-select');

// función para agregar opciones al menú desplegable
function addToSelect(item, select) {
    let option = document.createElement('option');
    option.textContent = item;
    select.appendChild(option);
}

// agregar opciones a los menús desplegables

almuerzoMenu.forEach(item => addToSelect(item, almuerzoSelect));
cenaMenu.forEach(item => addToSelect(item, cenaSelect));
postreMenu.forEach(item => addToSelect(item, postreSelect));


window.addEventListener('load', function() {
    almuerzoSelect = document.getElementById('almuerzo-select');
    cenaSelect = document.getElementById('cena-select');
    postreSelect = document.getElementById('postre-select');
});

