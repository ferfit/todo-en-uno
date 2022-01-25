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

//Formulario

var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');


formulario.addEventListener('submit',function(e){
    e.preventDefault();

    var datos = new FormData(formulario); /* le pasamos el formulario variable */

    fetch('email.php',{
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data === 'error'){
            respuesta.innerHTML = `
            <div class="alert alert-danger mt-3" role="alert" data-aos="fade-opacity" data-aos-offset = "10" data-aos-duration="800">
               Debe llenar todos los campos.
            </div>
            `
            setTimeout(function(){ 
                respuesta.innerHTML=""; 
            }, 5000);
        } else {
            respuesta.innerHTML = `
            <div class="alert alert-success mt-3" role="alert" data-aos="fade-opacity" data-aos-offset = "10" data-aos-duration="800">
                Tu mensaje se ha enviado correctamente.
            </div>
            `
            var nombre = document.getElementById('nombre');
            var email = document.getElementById('email');
            var mensaje = document.getElementById('telefono');
            nombre.value = "";
            email.value = "";
            mensaje.value = "";

            setTimeout(function(){ 
                respuesta.innerHTML=""; 
            }, 5000);
        }
    })
})



