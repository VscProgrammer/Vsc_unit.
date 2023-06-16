const list_left3 = document.getElementById('items-left3');
const list_right3 = document.getElementById('items-right3');
const elementos3 = document.getElementById('elementos3');
const btn_check3 = document.getElementById('btn-check3');
const btn_pista3 = document.getElementById('btn-pista3');

// CODIGO - DRAGGABLE

Sortable.create(elementos3,{

    Animation: 300,
    group: 'shared',
    chosenClass: "select",
    ghostClass: "sortable-ghost",
    pull: false,

});

Sortable.create(list_left3,{

    Animation: 300,
    group: 'shared',
    chosenClass: "select",
    ghostClass: "sortable-ghost",
    store: {
    
        set: (sortable) => {
            this.items_draggable5 = sortable.toArray();
            if(this.items_draggable5.length > 1){
                btn_check3.classList.remove("oculto");
                btn_pista3.classList.add("oculto");
            }
        }

    },

});

Sortable.create(list_right3,{

    Animation: 300,
    group: 'shared',
    chosenClass: "select",
    ghostClass: "sortable-ghost",

    store: {
    
        set: (sortable) => {
            this.items_draggable6 = sortable.toArray();
            if(this.items_draggable6.length > 1){
                btn_check3.classList.remove("oculto");
                btn_pista3.classList.add("oculto");
            }
        }

    },
    
});

function check3 (parametro) {

    if(list_left3.children.length > 0 && list_right3.children.length > 0 && elementos3.children.length < 1){
        return check_drag(parametro);        
    }else{
        modal_boton('alerta_campo_vacio')
    }      
}

function check_drag (parametro) {

    switch(parametro){
        case '3':

        let index3 = 0;
        let coincidencias3 = 0;

            this.items_draggable5.forEach((e) => {
        
                if(e == 15 || e == 16 || e == 17 || e == 18 || e == 19){
                    list_left3.children[index3].classList.add("correct");
                    list_left3.children[index3].classList.remove("incorrect");
                    coincidencias3++;
                }else{
                    list_left3.children[index3].classList.add("incorrect","animate__animated","animate__shakeX");
                    list_left3.children[index3].classList.remove("correct");
                    coincidencias3--;
                }
            index3++;
    
        let index4 = 0;
        let coincidencias4 = 0;
    
            this.items_draggable6.forEach((e) => {
            
                    if(e == 20 || e == 21 || e == 22 || e == 23 || e == 24){
                        list_right3.children[index4].classList.add("correct");
                        list_right3.children[index4].classList.remove("incorrect");
                        coincidencias4++;
                    }else{
                        list_right3.children[index4].classList.add("incorrect","animate__animated","animate__shakeX");
                        list_right3.children[index4].classList.remove("correct");
                        coincidencias4--;
                    }
                    index4++;
                })

                if(coincidencias3 != 5 && coincidencias4 != 5){
                    btn_check3.classList.add('oculto');
                    btn_pista3.classList.remove('oculto');
                }else{
                    btn_check3.classList.add('oculto');
                    btn_pista3.classList.add('oculto');
                }
            })
        break;
    }

}
