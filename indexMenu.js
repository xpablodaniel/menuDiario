const almuerzoMenu = [
            "Empanadas Criollas", "Ensalada Capresse", "Ensalada Lucho’s Cheff", "Tortillin de Papa", "Papas Cheddar", "Tortilla Española", "Papines Rellenos",
             "Bruschetta Mediterránea", "Ensalada Caesar", "Bastones de Muzzarella Rebozados", "Quesadillas con Pico de Gallo", "Quiché de Calabaza y Muzzarella", "Tacos de Pollo",
              "Muzzarellitas", "Empanadas Capresse", "Fatay", "Mayonesa de Ave", "Croquetas de Espinaca y Queso Azul", "Jamón con Ensalada Rusa", "Tarta de Jamón y Queso", "Quesadillas",
              "Mil Hojas de Papa Gratinada"
        ];
        almuerzoMenu.push("Crunch de Pollo con Ali - Oli");
        
        const almuerzoSubMenu = [
            " y Puerro", "con Ensaladilla", "con Panceta y Verdeo", " y Panceta", "con Ensalada Verde", "con Salsa Alexander", "con Ensaladilla Verde", " con Queso y Panceta"
        ];
        almuerzoSubMenu.push(" ");
        
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
            "Muslo Braseado al Limón", "Milanesa de Peceto", "Ravioli de Espinaca Mediterráneo", "Lasagna de Berenjenas",
            "Suprema de Pollo", "Pechugas al Verdeo", "Tallarines Mediterráneo", "Tallarines a la Parisienne","Tallarines con Salsa Alfredo",
            "Ñoquis a la Parisienne",
            "Ravioli de Verdura", "Tallarines al Pesto","Raviolon de Espinaca y Ricota",
            "Muslo al Ajillo", "Lasagna de Carne y Verduras", "Suprema Mariland", "Carré de Cerdo a la Riojana" , "Pastel de Papa y Carne",
             "Vacío al Horno", "Pechugas al Puerro y Queso Azul", "Escalopines de Ternera", "Tallarines al Pesto de Albahaca", "Bondiola Grillada",
              "Canelones de Verdura y Salsa Bechamel", "Pechugas Rellenas", "Caneloni a la Rossini", "Carne al Horno"
        ];
        cenaMenu.push("Tapa de Asado Braseada");
        
        const cenaSubMenu = [
            "con Ensalada del Chef", "con Puré de Batatas", "con Puré de Papas", "con Arroz Pilaf", "a la Suiza", "con Queso Gratinado",
             "con Panceta y Verdeo", "con Papas a la Provenzal", "con Ensaladilla", "con Ensalada", "con Papas al Natural", "con Salsa Pomodoro",
             "(Champignon, Crema y Blanco de Ave)", "con Puré Mixto", "con Estofado", "con Filetto y Crema",
             "con Papas Bravas y Criolla", "con Tomates Asados", "con Salsa de Puerros", "con Risotto de Verduras", "con Papas a la Crema de Verdeo",
        ];
        
        cenaSubMenu.push(" ");
        
        const postreMenu = [
            "Flan de Naranja", "Helado de Americana","Helado de Chocolate", "Helado Almendrado", "Crepe de Manzanas y Canela",
            "Budín de Pan", "Bombón Suizo", "Brownie de Chocolate", "Ensalada de Frutas", "Mousse de Chocolate", "Crepe de Frutas", "Flan con Crema"
            , "Manzanas Asadas", "Duraznos en Almibar", "Compota de Manzanas", "Helado Tricolor", "Copa Helada Suteba", "Queso y Dulce Par", "Tiramisú"
        ];
        postreMenu.push("Crumble de Manzana");
        
        const postreSubMenu = [
            "con Dulce de Leche", "con Praline de Frutos Secos", "con Nueces Tostadas", "con Salsa de Chocolate", "con Helado y Nueces Garrapiñadas",
            "con Crema Chantilly", "con Salsa de Frutos Rojos", "de Chocolate", "Mixto", "con Helado", "y Crema de Limón", "con Crema y Canela",
             "y Crema de Caramelo","(Queso, Batata y Membrillo)", "y Crema de Arándanos"
        ];
        
        postreSubMenu.push(" ");
        
        cenaMenu.sort();
        cenaSubMenu.sort();
        postreMenu.sort();
        postreSubMenu.sort();
        
        cenaMenu.forEach(item => addToSelect(item, cenaSelect));
        cenaSubMenu.forEach(item => addToSelect(item, cenaSubMenuSelect));
        
        postreMenu.forEach(item => addToSelect(item, postreSelect));
        postreSubMenu.forEach(item => addToSelect(item, postreSubMenuSelect));
