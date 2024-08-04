const abrir = document.querySelector('#menu')

function abrirmenu(){
    if(abrir.style.display == 'block'){
        abrir.style.display = 'none'
    } else {
        abrir.style.display = 'block'
    }
}
function fecharmenu(){
    if(abrir.style.display == 'block'){
        abrir.style.display = 'none'
    }
}