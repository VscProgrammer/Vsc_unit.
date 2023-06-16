(function() {
    const cards = [...document.querySelectorAll('.card')];
    const btn_anterior = document.getElementById('anterior');
    const btn_siguiente = document.getElementById('siguiente');
    const titulo = document.querySelector('.instruciones--telefonos');
    let mediaqueryList = window.matchMedia("(max-width: 750px)");
    let value = 0;
    

    titulo.innerHTML = 
        `
        <h2 id="unidad-header" class="titulo_unidades">UNIDAD: 1   -  ${cards.length}</h2>
        `

    //  Detecta los cambios de pantalla y agrega la clase oculto a los elementos.
    mediaqueryList.addListener(function(evento){
        
        // Si agrandamos la pantalla
        if(!evento.matches){
            cards.forEach((e) => {
                e.classList.remove('oculto')
                e.classList.remove('card--muestra')
            })
        }

        // Si volvemos a encoger la pantalla
        if(evento.matches) {
            cards.forEach((e) => {
                if(e.dataset.id > 1){
                    e.classList.add('oculto');
                    titulo.innerHTML = 
                    `
                    <h2 id="unidad-header" class="titulo_unidades">UNIDAD: 1 - ${cards.length}</h2>
                    `
                }else{
                    e.classList.add('card--muestra');
                }
            })
        }

    })

    //  Si la pagina carga en el telefono, oculta los otros elementos.
    if(mediaqueryList.matches) {
        cards.forEach((e) => {
            if(e.dataset.id > 1){
                e.classList.add('oculto')
            }
        })
    }

    btn_siguiente.addEventListener('click', ()=> cambiarPosition(1,1));
    btn_anterior.addEventListener('click', ()=> cambiarPosition(-1,-1));
    
    function cambiarPosition(cambiar,animacion) {
        

        const ElementoActual = Number(document.querySelector('.card--muestra').dataset.id);
        
        value = ElementoActual;
        value+= cambiar;

        if(value === 0  || value == cards.length+1) {
            value = value === 0 ? cards.length : 1;
        }

        cards[0].classList.add('oculto')
        cards[ElementoActual-1].classList.toggle('card--muestra');
        cards[value-1].classList.toggle('card--muestra');

        if(animacion < 1){
            cards[ElementoActual-1].classList.toggle('animaIzq');
            cards[value-1].classList.toggle('animaIzq');
        }

        titulo.innerHTML = 
        `
        <h2 id="unidad-header" class="titulo_unidades">UNIDAD: <span class="prueba">${value}</span> &nbsp&nbsp - ${cards.length}</h2>
        
        `
    }


})()
