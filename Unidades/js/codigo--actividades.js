const list_left = document.getElementById('items-left');
const list_right = document.getElementById('items-right');
const elementos1 = document.getElementById('elementos1');
const btn_check = document.getElementById('btn-checkd');
const btn_pista = document.getElementById('btn-pistad');

// CODIGO - DRAGGABLE

Sortable.create(list_left,{

    Animation: 150,
    group: 'shared',
    chosenClass: "select",

    store: {
    
        set: (sortable) => {
            this.items_draggable1 = sortable.toArray();
            if(this.items_draggable1.length > 1){
                btn_check.classList.remove("oculto");
                btn_pista.classList.add("oculto");
            }
        }

    },

});

Sortable.create(list_right,{

    Animation: 150,
    group: 'shared',
    chosenClass: "select",

    store: {
    
        set: (sortable) => {
            this.items_draggable2 = sortable.toArray();
            if(this.items_draggable2.length > 1){
                btn_check.classList.remove("oculto");
                btn_pista.classList.add("oculto");
            }
        }

    },
    
});

Sortable.create(elementos1,{

    Animation: 300,
    group: 'shared',
    chosenClass: "select",
    ghostClass: "sortable-ghost",
    pull: false,

});

function check1 (parametro) {

    if(list_left.children.length > 0 && list_right.children.length > 0 && elementos1.children.length < 1){
        return check_drag(parametro);
    }else{
        modal_boton('alerta_campo_vacio')
    }       
}

function check_drag (parametro) {

    switch(parametro){
        case '1':

        let index = 0;
        let coincidencias = 0;

            this.items_draggable1.forEach((e) => {
        
                    if(e == 1 || e == 2 || e == 3 || e == 4){
                        list_left.children[index].classList.add("correct");
                        list_left.children[index].classList.remove("incorrect")
                        coincidencias++;
                    }else{
                        list_left.children[index].classList.add("incorrect","animate__animated","animate__shakeX");
                        list_left.children[index].classList.remove("correct");
                        coincidencias--;
                    }
                index++;
        
            let index2 = 0;
            let coincidencias2 = 0;
        
                this.items_draggable2.forEach((e) => {
                
                        if(e == 5 || e == 6 || e == 7 || e == 8){
                            list_right.children[index2].classList.add("correct");
                            list_right.children[index2].classList.remove("incorrect")
                            coincidencias2++;
                        }else{
                            list_right.children[index2].classList.add("incorrect","animate__animated","animate__shakeX");
                            list_right.children[index2].classList.remove("correct");
                            coincidencias2--;
                        }
                        index2++;
                    })

                    if(coincidencias != 4 && coincidencias2 != 4){
                        btn_check.classList.add('oculto');
                        btn_pista.classList.remove('oculto');
                    }else{
                        btn_check.classList.add('oculto');
                        btn_pista.classList.add('oculto');
                    }
                })
        break;

        let index3 = 0;
        let coincidencias3 = 0;

            this.items_draggable3.forEach((e) => {
        
                if(e == 9 || e == 11 || e == 14){
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
            
                    if(e == 10 || e == 12 || e == 13){
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
