let abrir = document.querySelector("#menu")
document.querySelector("#abrirmenu").addEventListener("click", function(){
    if(abrir.style.display == 'block'){
        abrir.style.display = 'none'
    } else{
        abrir.style.display = 'block'
    }
})