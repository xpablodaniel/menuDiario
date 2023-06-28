const almuerzoMenu = [
            "Empanadas Criollas", "Ensalada Capresse", "Ensalada Lucho’s Cheff", "Tortillin de Papa", "Papas Cheddar", "Tortilla Española", "Papines Rellenos", "Bruschetta Mediterránea", "Ensalada Caesar", "Crujientes de Muzzarella", "Quesadillas con Pico de Gallo", "Quiché de Calabaza y Muzzarella", "Tacos de Pollo", "Muzzarellitas"
        ];
        almuerzoMenu.push("Crunch de Pollo con Ali - Oli");
        
        const almuerzoSubMenu = [
            " y Puerro", "con Ensaladilla", "con Panceta y Verdeo", " y Panceta", "con Ensalada Verde", "con Salsa Alexander"
        ];
        almuerzoSubMenu.push("~.~");
        
        almuerzoMenu.sort();
        almuerzoSubMenu.sort();
        
        const almuerzoSelect = document.getElementById('almuerzo-select');
        const almuerzoSubMenuSelect = document.getElementById('almuerzo-submenu');
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
        almuerzoSubMenu.forEach(item => addToSelect(item, almuerzoSubMenuSelect));
        
        const cenaMenu = [
            "Muslo Braseado al Limón", "Milanesa de Peceto a la Suiza", "Ravioli de Espinaca Mediterráneo", "Lasagna de Berenjenas",
            "Suprema de Pollo", "Pechugas al Verdeo", "Tallarines Mediterráneo", "Tallarines a la Parisienne","Ñoquis a la Parisienne",
            "Muslo al Ajillo", "Lasagna de Carne y Verduras", "Suprema Mariland", "Carré de Cerdo a la Riojana" , "Pastel de Papa y Carne", "Vacío al Horno", "Pechugas al Puerro y Queso Azul", "Escalopines de Ternera", "Tallarines al Pesto de Albahaca", "Bondiola Grillada", "Canelones de Verdura y Salsa Bechamel"
        ];
        cenaMenu.push("Carne al Horno Braseada");
        
        const cenaSubMenu = [
            "con Ensalada del Chef", "con Puré de Batatas", "con Puré de Papas", "con Arroz Pilaf", "a la Suiza", "con Queso Gratinado", "con Panceta y Verdeo", "con Papas a la Provenzal", "con Ensaladilla", "con Ensalada", "con Papas al Natural", "con Salsa Pomodoro"
        ];
        
        cenaSubMenu.push("~.~");
        
        const postreMenu = [
            "Flan de Naranja", "Helado de Americana","Helado de Chocolate", "Almendrado", "Crepe de Manzanas y Canela",
            "Budín de Pan", "Bombón Suizo", "Brownie de Chocolate", "Ensalada de Frutas", "Mousse de Chocolate", "Crepe de Frutas", "Flan con Crema"
            , "Manzanas Asadas", "Duraznos en Almibar", "Compota de Manzanas", "Helado Tricolor"
        ];
        postreMenu.push("Crumble de Manzana");
        
        const postreSubMenu = [
            "con Dulce de Leche", "con Praline de Frutos Secos", "con Nueces Tostadas", "con Salsa de Chocolate",
            "con Crema Chantilly", "con Salsa de Frutos Rojos", "de Chocolate", "Mixto", "con Helado", "y Crema de Limón", "con Crema y Canela"
        ];
        
        postreSubMenu.push("~.~");
        
        cenaMenu.sort();
        cenaSubMenu.sort();
        postreMenu.sort();
        postreSubMenu.sort();
        
        cenaMenu.forEach(item => addToSelect(item, cenaSelect));
        cenaSubMenu.forEach(item => addToSelect(item, cenaSubMenuSelect));
        
        postreMenu.forEach(item => addToSelect(item, postreSelect));
        postreSubMenu.forEach(item => addToSelect(item, postreSubMenuSelect));
