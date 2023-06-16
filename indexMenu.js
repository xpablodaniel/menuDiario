const almuerzoMenu = [
    "Empanadas Criollas", "Ensalada Capresse", "Ensalada Lucho’s Cheff", "Tortillin de Papa", "Papas Cheddar y Puerro", "Tortilla Española con Ensaladilla",
    "Papines Rellenos", "Bruschetta Mediterránea", "Ensalada Caesar", "Crujientes de Muzzarella", "Quesadillas con Pico de Gallo", "Papas Cheddar y Panceta"
  ];
  almuerzoMenu.push("Crunch de Pollo con Ali - Oli");
  
  const cenaMenu = [
    "Muslo Braseado al Limón con Ensalada del Cheff", "Milanesa de Peceto a la Suiza", "Ravioli de Espinaca Mediterráneo",
    "Suprema de Pollo con Arroz Pilaf", "Pechugas al Verdeo", "Tallarines Mediterráneo",
    "Muslo al Ajillo con Puré de Batatas", "Lasagna de Carne y Verduras", "Suprema Mariland", "Carré de Cerdo a la Riojana"
  ];
  cenaMenu.push("Carne al Horno Braseada");
  
  const postreMenu = [
    "Flan de Naranja con Dulce de Leche", "Helado de Americana con Praline de Frutos Secos",
    " Budín de Pan con Crema Montada", "Bombón con Salsa de Frutos Rojos", "Brownie de Chocolate", "Ensalada de Frutas con Crema", "Mousse de Chocolate", "Crepe de Frutas con Crema", "Flan Casero Mixto",
    "Crumble de Manzana y Helado"
  ];
  postreMenu.push("Manzanas Asadas con Crema");
  
  // Ordenar los menús alfabéticamente
  almuerzoMenu.sort();
  cenaMenu.sort();
  postreMenu.sort();
  
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
  
  window.addEventListener('load', function () {
    almuerzoSelect = document.getElementById('almuerzo-select');
    cenaSelect = document.getElementById('cena-select');
    postreSelect = document.getElementById('postre-select');
  });
