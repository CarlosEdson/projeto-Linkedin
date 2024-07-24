const alterarusuario = document.querySelector('#menu')

function trocadeusuario(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

document.addEventListener('click', (Event) => {
    console.log(Event.target)
    if(menu.contains(Event.target) && menu.querySelector('#menu')){
        trocadeusuario()
    }
})