const list_left2 = document.getElementById('items-left2');
const list_right2 = document.getElementById('items-right2');
const elementos2 = document.getElementById('elementos22');
const btn_check2 = document.getElementById('btn-check2');
const btn_pista2 = document.getElementById('btn-pista2');

// CODIGO - DRAGGABLE

Sortable.create(elementos2,{

    Animation: 300,
    group: 'shared',
    chosenClass: "select",
    ghostClass: "sortable-ghost",
    pull: false,

});

Sortable.create(list_left2,{

    Animation: 300,
    group: 'shared',
    chosenClass: "select",
    ghostClass: "sortable-ghost",
    store: {
    
        set: (sortable) => {
            this.items_draggable3 = sortable.toArray();
            if(this.items_draggable3.length > 1){
                btn_check2.classList.remove("oculto");
                btn_pista2.classList.add("oculto");
            }
        }

    },

});

Sortable.create(list_right2,{

    Animation: 300,
    group: 'shared',
    chosenClass: "select",
    ghostClass: "sortable-ghost",

    store: {
    
        set: (sortable) => {
            this.items_draggable4 = sortable.toArray();
            if(this.items_draggable4.length > 1){
                btn_check2.classList.remove("oculto");
                btn_pista2.classList.add("oculto");
            }
        }

    },
    
});

function check2 (parametro) {

    if(list_left2.children.length > 0 && list_right2.children.length > 0 && elementos2.children.length < 1){
        return check_drag(parametro);        
    }else{
        modal_boton('alerta_campo_vacio')
    }      
}

function check_drag (parametro) {

    switch(parametro){
        case '2':

        let index3 = 0;
        let coincidencias3 = 0;

            this.items_draggable3.forEach((e) => {
        
                if(e == 9 || e == 12 || e == 14){
                    list_left2.children[index3].classList.add("correct");
                    list_left2.children[index3].classList.remove("incorrect");
                    coincidencias3++;
                }else{
                    list_left2.children[index3].classList.add("incorrect","animate__animated","animate__shakeX");
                    list_left2.children[index3].classList.remove("correct");
                    coincidencias3--;
                }
            index3++;
    
        let index4 = 0;
        let coincidencias4 = 0;
    
            this.items_draggable4.forEach((e) => {
            
                    if(e == 10 || e == 11 || e == 13){
                        list_right2.children[index4].classList.add("correct");
                        list_right2.children[index4].classList.remove("incorrect");
                        coincidencias4++;
                    }else{
                        list_right2.children[index4].classList.add("incorrect","animate__animated","animate__shakeX");
                        list_right2.children[index4].classList.remove("correct");
                        coincidencias4--;
                    }
                    index4++;
                })

                if(coincidencias3 != 3 && coincidencias4 != 3){
                    btn_check2.classList.add('oculto');
                    btn_pista2.classList.remove('oculto');
                }else{
                    btn_check2.classList.add('oculto');
                    btn_pista2.classList.add('oculto');
                }
            })
        break;
    }

}
