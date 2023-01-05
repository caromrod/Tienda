let logout =document.getElementById('btnSalir');
let login=document.getElementById('primerModal');


$btnSignIn  = document.querySelector("#btnSignIn");
$btnSignIn.addEventListener("click", () => {
    let usuario = $('#floatingInput').val();
    let clave = $('#floatingPassword').val();
    Base.Logueo(usuario, clave);     
  /* agregue esto porque no me cerraba el modal al ingresar, capaz se pueda mejorar*/
  const modal1 = document.getElementById('modal-presentacion');
  modal1.classList.remove('es-visible');

/* comente esto porque cuando ingreso me tira error
que no reconoce Admin.usuario,hay que ver como poder solucionarlo
/
    //limpiar los campos
    if((Admin.usuario == usuario && Admin.clave == clave) || 
    (Admin.usuario != usuario && Admin.clave != clave)) 
    {
        document.getElementById('floatingInput').value = '';
        document.getElementById('floatingPassword').value = '';
        
    }

    */
    cambiarEstado();
 
});

/*   agrega la clase mostrar a logout y en el localStorage 
** para que el estado no cambie al recargar la pagina
**matches permite validar si contiene esa clase y devuelve boolean*/
function cambiarEstado() {
  logout.classList.add("mostrar");
       if(logout.matches('.mostrar')){
         window.localStorage.setItem("logout", "mostrar");
         login.classList.add('ocultar')
       }
   }
   
   /* funcion que me permite que el estado de ingreso quede fijo al 
   /recargar la pagina y con window.onload() permite 
   /ejecutar una funcion (validar) casi en el momento cuando se recarga la pagina*/
     function validar(){
     if(logout.className !== "mostrar"){
     if( window.localStorage.getItem('logout') == "mostrar"){
       cambiarEstado();
      }
     }
   }

   /* esta funcion me permite modificar y volver al estado de ingreso*/
   const btnSalir = $('#btnSalir');
   btnSalir.on('click', function(ev){
       ev.preventDefault();
       if( window.localStorage.getItem('logout') == "mostrar"){
           if(login.matches('.ocultar')){
               window.localStorage.setItem("logout", "ocultar");
               logout.classList.remove('mostrar');
               login.classList.add('mostrar');            
           }
          }
       Base.ValidarLogin();
       Base.Deslogueo(null);
   });



   window.onload=validar();
 
  

