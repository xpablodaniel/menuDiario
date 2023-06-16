const almuerzoMenu = [
          "Empanadas Criollas", "Ensalada Capresse", "Ensalada Lucho’s Cheff", "Tortillin de Papa", "Papas Cheddar y Puerro", "Tortilla Española con Ensaladilla",
          "Papines Rellenos", "Bruschetta Mediterránea", "Ensalada Caesar", "Crujientes de Muzzarella", "Quesadillas con Pico de Gallo", "Papas Cheddar y Panceta"
        ];
        almuerzoMenu.push("Crunch de Pollo con Ali - Oli");
        
        
        
        const cenaMenu = [
    "Muslo Braseado al Limón", "Milanesa de Peceto", "Ravioli de Espinaca Mediterráneo",
    "Suprema de Pollo", "Pechugas al Verdeo", "Tallarines Mediterráneo",
    "Muslo al Ajillo", "Lasagna de Carne y Verduras", "Suprema Mariland", "Carré de Cerdo a la Riojana"
  ];
  cenaMenu.push("Carne al Horno Braseada");
        
        
        
        const cenaSubMenu = [
          "con Ensalada del Chef", "con Puré de Batatas",
          "con Arroz Pilaf", "a la Suiza"
        ];
        
        cenaSubMenu.push("~.~");
        
        const postreMenu = [
          "Flan de Naranja", "Helado de Americana",
          "Budín de Pan", "Bombón Suizo", "Brownie de Chocolate", "Ensalada de Frutas", "Mousse de Chocolate", "Crepe de Frutas", "Flan Casero"
        ];
        postreMenu.push("Crumble de Manzana");
        
        const postreSubMenu = [
          "con Dulce de Leche", "con Praline de Frutos Secos",
          "con Crema Montada", "con Salsa de Frutos Rojos", "de Chocolate", "Mixto", "con Helado"
        ];
        
        postreSubMenu.push("~.~");
        
        almuerzoMenu.sort();
  	cenaMenu.sort();
  	cenaSubMenu.sort();
  	postreMenu.sort();
  	postreSubMenu.sort();
        
        const almuerzoSelect = document.getElementById('almuerzo-select');
        const cenaSelect = document.getElementById('cena-select');
        const cenaSubMenuSelect = document.getElementById('cena-submenu');
        const postreSelect = document.getElementById('postre-select');
        const postreSubMenuSelect = document.getElementById('postre-submenu');
        
        function addToSelect(item, select) {
          let option = document.createElement('option');
          option.textContent = item;
          select.appendChild(option);
        }
        
        almuerzoMenu.forEach(item => addToSelect(item, almuerzoSelect));
        
        cenaMenu.forEach(item => addToSelect(item, cenaSelect));
        cenaSubMenu.forEach(item => addToSelect(item, cenaSubMenuSelect));
        
        postreMenu.forEach(item => addToSelect(item, postreSelect));
        
        postreSubMenu.forEach(item => addToSelect(item, postreSubMenuSelect));
