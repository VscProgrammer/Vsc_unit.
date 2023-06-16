function seleccionar(answer,a){

    const cuerpo_actividad = document.getElementById(a);
    // Para saber cual es el ultimo elemento en el arreglo
    this.last_child = cuerpo_actividad.children.length;
    let respuestas_actividad = answer.children[0].textContent;

    if(respuestas_actividad === correctas[a].correcta){

        answer.classList.add("correct","animate__animated","animate__shakeY");
        answer.children[1].classList.remove("oculto");
        answer.children[1].children[0].classList.remove("oculto");
        bloquear(a);

    }else{

        answer.classList.add("incorrect","animate__animated","animate__shakeX");
        answer.children[2].classList.remove("oculto");
        answer.children[2].children[0].classList.remove("oculto");
        cuerpo_actividad.children[last_child-1].children[1].classList.remove("oculto")
        bloquear(a);
        reiniciar(a);

    }
    
}

function mostrar(e){
    
    if(e === respuestas[e].html_num){
        const cuerpo_actividad = document.getElementById(e);
        cuerpo_actividad.innerHTML = respuestas[e].html;
    }
}

function bloquear(a){
    const cuerpo_actividad = document.getElementById(a);
    let opciones = cuerpo_actividad.children.length -1;
    for(i=0; i < opciones; i++){
        cuerpo_actividad.children[i].classList.add("disable");
    };
}

// function salir(num){

//     const cuerpo_actividad = document.getElementById(num);
//     Verifica cuantos elemenos tiene el arreglo, evita errores al momento de salir
//     const last_child_salir = cuerpo_actividad.children.length;
//     let opciones = cuerpo_actividad.children.length -1;

//     const btn_verificar = document.createElement('button');
//     // declaramos el boton
//     btn_verificar.classList.add("btn--actividad","btn---verificar");
//     btn_verificar.innerText = "Realizar actividad";
//     cuerpo_actividad.appendChild(btn_verificar);
//     btn_verificar.onclick = () => mostrar(num);

//     for(i=0; i < opciones; i++){
//         cuerpo_actividad.children[i].classList.add("oculto");
//     };
//     cuerpo_actividad.children[last_child_salir-1].classList.add("oculto");

// }

function reiniciar(num){

        const cuerpo_actividad = document.getElementById(num);
        const btn_reset = document.createElement('button');
        btn_reset.classList.add("btn--actividad","btn---reset");
        btn_reset.innerText = "Reiniciar";
        cuerpo_actividad.children[this.last_child-1].children[0].appendChild(btn_reset);
        btn_reset.classList.remove("oculto");

        btn_reset.onclick = () => {

            const cuerpo_actividad = document.getElementById(num);
            cuerpo_actividad.children[this.last_child-1].children[1].classList.add("oculto");
            let opciones = cuerpo_actividad.children.length -1;
    
            for(i=0; i < opciones; i++){
            cuerpo_actividad.children[i].classList.remove("disable");
            cuerpo_actividad.children[i].classList.remove("incorrect");
            cuerpo_actividad.children[i].classList.remove("correct");
            cuerpo_actividad.children[i].children[2].classList.add("oculto");
        };

        btn_reset.classList.add("oculto");

        }
}