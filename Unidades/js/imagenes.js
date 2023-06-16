const titulosUnidades = [...document.querySelectorAll('.card h2')]
const imagenes = [...document.querySelectorAll('.card img')]

for (const [i, text] of titulosUnidades.entries()) {
    if (i < imagenes.length) {
        const splittedUrl = text.innerHTML.split(' ')
        const url = splittedUrl.join('_') + '.jpg'
        imagenes[i].setAttribute('src', '../img/' + url)
    }
}