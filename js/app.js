// variable 
var whatsapp = document.querySelector('.whatsapp');
var consulta = document.querySelector('.consulta');

// creamos un evento que escuche el scroll y al detectarlo se ejecute una funcion,
document.addEventListener('scroll',function(){   
    var posicion = window.scrollY;
    if(posicion>1000){
        whatsapp.classList.add('mostrarWhatsapp');
    } else{
        whatsapp.classList.remove('mostrarWhatsapp');
    }

});

//Asigna numero
var telefono1 = "1166053843";
var telefono2 = "1166053858";

var num = Math.floor((Math.random() * 2) + 1); 

if(num == 1) {
    whatsapp.href= `https://api.whatsapp.com/send?phone=549${telefono1}`;
    
} else {
    whatsapp.href= `https://api.whatsapp.com/send?phone=549${telefono2}`;
}




