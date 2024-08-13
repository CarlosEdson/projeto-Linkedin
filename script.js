const abrir = document.querySelector('#menu')
const corpo = document.querySelector('#corpo')

function abrirmenu(){
    if(abrir.style.display == 'block'){
        abrir.style.display = 'none'
    } else {
        abrir.style.display = 'block'
    }
}