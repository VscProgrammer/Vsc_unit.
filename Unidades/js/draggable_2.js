const item = document.getElementById('items');
const btn_chec = document.getElementById('btn-check');
const btn_pist = document.getElementById('btn-pista');

// CODIGO - DRAGGABLE

Sortable.create(item,{

    Animation: 150,
    chosenClass: "select",
    dragClass: "drag",
    swap: true,

    store: {

        set: (sortable) => {
            this.items_draggable = sortable.toArray();
            if(this.items_draggable.length > 1){
                btn_chec.classList.remove("oculto");
                btn_pist.classList.add("oculto");
            }
        }

    },

});

    btn_chec.addEventListener('click', () => {

        let coincidencias = 0;

        this.items_draggable.forEach((item,index) =>{
            index++;
            if(item == index){
                coincidencias++;
                items.children[index-1].classList.add("correct");
                items.children[index-1].classList.remove("incorrect");
            }else{
                items.children[index-1].classList.add("incorrect");
            }
        })    
    
        if(coincidencias === this.items_draggable.length){
        // Correcto
        btn_chec.classList.add('oculto');
        btn_pist.classList.add('oculto');
        }else{
        // Incorrecto
        btn_pist.classList.remove('oculto');
        btn_chec.classList.add('oculto');
        }

    });