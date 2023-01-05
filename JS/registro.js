

//PARA abrir EL MODAL 1 y cerrar con la X.

const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const esVisible= "es-visible";
  
for (const el of openEls){
el.addEventListener("click", function(){
const modalId= this.dataset.open;
 document.getElementById(modalId).classList.add(esVisible);
});
 }
    
for (const el of closeEls){
 el.addEventListener("click", function(){
this.parentElement.parentElement.parentElement.classList.remove(esVisible);
});
}
        
       
//PARA abrir EL MODAL2 y cerrar el 1ro
const modal2 = document.getElementById('modal-presentacion2');
const modal1 = document.getElementById('modal-presentacion')
$segundoModal = document.querySelector("#btnAbrir-modal2");
$segundoModal.addEventListener("click", () => {

modal2.classList.add('es-visible2');
modal1.classList.remove('es-visible');
});

//para cerrar el modal 2, desde si mismo
$cerrar2 = document.querySelector("#btncerrar-modal2");
$cerrar2.addEventListener("click", () => {

modal2.classList.remove('es-visible2');
});



//PARA abrir EL MODAL 3 --> esta en registro


//Funcion para agregar usuarios a mi LISTA de usuarios y otras cosas
const modal3 = document.getElementById('modal-presentacion3');
$btnRegistrar  = document.querySelector("#btnAbrir-modal3");
$btnRegistrar.addEventListener("click", () => {
    let usuario = $('#txtUsuario').val();
    let clave = $('#txtClave').val();
    Base.AgregarUsuario(usuario, clave);
    //ABRI MODAL 3 Y CERRAR EL 2, EL MISMO
    modal3.classList.add('es-visible3');
    modal2.classList.remove('es-visible2');
    //LIMPIAR LOS INPUTS
  
    document.getElementById('txtNombre').value = '';
    document.getElementById('txtEmail').value = '';
    document.getElementById('txtUsuario').value = '';
    document.getElementById('txtClave').value = '';

});

//para cerrar el modal 3, desde si mismo

$cerrar3= document.querySelector("#btnAbrir-modal4");
$cerrar3.addEventListener("click", () => {

modal3.classList.remove('es-visible3');
});


//para abrir el inicio de nuevo desde el modal 3

