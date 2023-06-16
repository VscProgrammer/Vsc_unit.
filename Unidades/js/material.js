const material = [...document.querySelectorAll('.card button')].filter((elem) => elem.innerText === '')
const unidades = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
j=0
for ([i, materia] of material.entries()) {
    if(i < material.length){
        if(unidades[i]){
            const splittedUrl = titulosUnidades[j].innerHTML.split(' ')
            console.log(splittedUrl[1]);
            materia.setAttribute('onclick', `window.open('./actividades_U${splittedUrl[1]}.html','_blank')`)
            materia.classList.remove('material')
        }
    } 
    j++
}