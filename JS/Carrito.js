
/*------------------------------------------------------------------*/
//                      EVENTO ABRIR MODAL
/*------------------------------------------------------------------*/

const btnComprar = document.getElementById('btn-comprar');
const closeEls = document.querySelectorAll('[data-close]');
const visible = "es-visible";



    btnComprar.addEventListener('click', function(){
        const contenidoId = this.dataset.open;
        document.getElementById(contenidoId).classList.add(visible);
        cargarLienzoModalCheckout();
    });


for(const el of closeEls)
{
    el.addEventListener('click', function(){
        this.parentElement.parentElement.parentElement.classList.remove(visible);
    });
}


/*---------------------------------- */
//           LOCAL STORAGE
/*---------------------------------- */

function MostrarenPc()
{
        if(window.localStorage.getItem('wCarritoCompra') == null){
            window.localStorage.setItem('wCarritoCompra', JSON.stringify(arrayCarrito));
        }
        if(window.localStorage.key('wCarritoCompra'))
        {
            arrayCarrito = JSON.parse(window.localStorage.getItem('wCarritoCompra'));
        }
}

MostrarenPc();



/*---------------------------------- */
//           CARGAR LIENZO
/*---------------------------------- */


function CargarLienzo(arrayCarrito)
{
    let lienzo = $('#lienzo-carrito');
    let lienzoTotal = $('#out-total');
    let TotalAMostrar=0;
    
     lienzo.html('');
     


     $.each(arrayCarrito,function(ind,valor,arr){

        let Total = valor.Total;

         lienzo.append(
             ` <tr class="trProducto">
                <td class="prod-descrip">
                 <div class="cont-img-carrito">
                     <img src="${valor.UrlImg}" alt="">
                 </div>
                 <div class="txt-descrip">
                    
                        <h6>${valor.Nombre}</h6>

                        <p>${valor.Descrip}</p>
    
                 </div>
             </td>

             <td>
                 <div class="txt-precio">
                     <h6>${valor.Precio}</h6>
                 </div>
             </td>

             <td>
                 <div class="txt-cant">
                 ${valor.Cantidad}
                 </div>
             </td>

             <td>
                 <div class="txt-precio">
                     <h6>${valor.Total}</h6>
                 </div>
             </td>

             <td>
                 <div class="div-btn">
                     <button id="btn-borrar" onclick="funcion(${valor.Id})" class="btn-borrar">
                         <img src="img/trash-svgrepo-com.svg" alt="">
                     </button>
                 </div>
                 
             </td>
         </tr> ` )

         
         
         if(arrayCarrito.length >= 1)
         {
            TotalAMostrar += Total;
         }
        
         lienzoTotal.html('');
         lienzoTotal.append(
            `<h6> Total a pagar: $ ${TotalAMostrar} </h6>`
            )
         
     });
     if(arrayCarrito.length <1)
         {
            TotalAMostrar= 0;
            lienzoTotal.html('');
             lienzoTotal.append(
            `<h6> Total a pagar: $ ${TotalAMostrar} </h6>`
            )
         }
}

CargarLienzo(arrayCarrito);

function funcion(Id){
    arrayCarrito.splice(Id,1);
    window.localStorage.setItem('wCarritoCompra', JSON.stringify(arrayCarrito));
    console.log(arrayCarrito);
    CargarLienzo(arrayCarrito);
}

/************************** modal-checkout *********************/

function cargarLienzoModalCheckout(){
    let lienzoModal= $('#lienzo-modal-check');
    lienzoModal.html('')
        lienzoModal.append(
            ` <div class="wrapper">
            <div class="container-fluid">
                <form>
                    <h1>
                        <i class="fas fa-shipping-fast"></i>
                        Detalles de envío
                    </h1> 
                    <div class="name">
                        <div>
                            <label for="f-name">Nombre</label>
                            <input type="text" id="nombre" name="f-name">
                        </div>
                        <div>
                            <label for="l-name">Apellido</label>
                            <input type="text" id="apellido" name="l-name">
                        </div>
                    </div>
                    <div class="street">
                        <label for="name">Direccion</label>
                        <input type="text" id="direccion" name="address">
                    </div>
                    <div class="address-info">
                        <div>
                            <label for="city">Ciudad</label>
                            <input type="text" id="ciudad" name="city">
                        </div>
                        <div>
                            <label for="state">Pais</label>
                            <input type="text" id="pais" name="state">
                        </div>
                        <div>
                            <label for="zip">Codigo postal</label>
                            <input type="text" id="codigoPostal" name="zip">
                        </div>
                    </div>

                    <label class="d-flex" id="retiro">
                     Retiro en el local
                     <input type="checkbox" id="CHretiro" onclick="validar()">
                    </label>
                 

                    <h1 class="mb-3>
                        <i class="far fa-credit-card"></i> Información del pago
                    </h1>
                    <div class="cc-num">
                        <label for="card-num">Numero de tarjeta de credito</label>
                        <input type="text" name="card-num">
                    </div>
                    <div class="cc-info">
                        <div>
                            <label for="card-num">Vencimiento</label>
                            <input type="text" name="expire">
                        </div>
                        <div>
                            <label for="card-num">CCV</label>
                            <input type="text" name="security">
                        </div>
                    </div>
                    <div class="btns d-flex">
                        <button   onclick="btnPagar()">Pagar</button>
                        <button>volver al carrito</button>
                    </div>
                </form>
            </div>
        </div> ` )
    
}

/************************** invalidar input si elige retiro en el local *********************/

function validar(){
    let ischeckbox=document.getElementById('CHretiro');
    let nombre=document.getElementById('nombre');
    let apellido=document.getElementById('apellido');
    let direccion=document.getElementById('direccion');
    let ciudad=document.getElementById('ciudad');
    let pais=document.getElementById('pais');
    let codigoPostal=document.getElementById('codigoPostal');


    if(ischeckbox.checked){
         nombre.disabled=true;
         apellido.disabled=true;
         direccion.disabled=true;
         ciudad.disabled=true;
         pais.disabled=true;
         codigoPostal.disabled=true;
    }else{
        nombre.disabled=false;
        apellido.disabled=false;
        direccion.disabled=false;
        ciudad.disabled=false;
        pais.disabled=false;
        codigoPostal.disabled=false;
    }
}


/************************** modal-pago-realizado *********************/


function btnPagar(){
    let lienzoModal= $('#lienzo-modal-check');
    lienzoModal.html('')
    lienzoModal.append(
     `
        <div id="pagoConfirmado" class="container-fluid d-block">
        <span> <i id="icon-verificacion" class="fa-solid fa-check"></i> </span>
                <h1 class="h2 mt-3">       
                   Pago realizado con exito!
                </h1> 
                <button class="mt-5" onclick="btnInicio()" id="btnInicio"> Volver al inicio </button>
                </div>
                ` )
}

/************************** boton volver al  inicio *********************/



function btnInicio(){
    window.location="../Index.html"
}


/*
function validarLogin(bool)
{
    if(bool == false)
    {
        alert("debe ingresar antes de realizar la compra")
    }
    else
    {
        
    }
}
*/