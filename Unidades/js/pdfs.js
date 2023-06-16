const pdfs = [...document.querySelectorAll('.card button')]
let j=0
for ([i, pdf] of pdfs.entries()) {
    if(i < pdfs.length){
        if(pdf.getAttribute('onclick')==="window.open('../pdf/','_blank')"){
            const splittedUrl = titulosUnidades[j].innerHTML.split(' ')
            const url = splittedUrl.join('_') + '.pdf'
            j++
            console.log(url,i);
            pdf.setAttribute('onclick', `window.open('../pdf/${url}','_blank')`)
        }
    } 
}