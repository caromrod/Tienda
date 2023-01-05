/*Cargar pantalla */
CargarListaProducto('Index');

let arrayCarrito = [];
/*------------------------------------------------------------------*/
//                      EVENTO ABRIR MODAL
/*------------------------------------------------------------------*/

const openEls = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');
const visible = "es-visible";

for(const el of openEls)
{
    el.addEventListener('click', function(){
        const contenidoId = this.dataset.open;
        document.getElementById(contenidoId).classList.add(visible);
        CargarModal(this.id);
    });
}

for(const el of closeEls)
{
    el.addEventListener('click', function(){
        this.parentElement.parentElement.parentElement.classList.remove(visible);
    });
}

/*------------------------------------------------------------------*/


/*------------------------------------------------------------------*/
//                          FUNCIONES
/*------------------------------------------------------------------*/

/**
 * funcion que carga todos los productos de la categoria seleccionada
 */
 function CargarListaProducto(ev)
 {
    let CategoriaActual = document.getElementById('ancla').value;
    let arrayactual = []
    let lienzoActual;
    
    if(CategoriaActual == "Bufandas")
    {
        lienzoActual =  $('#lienzo-bufandas');
        arrayactual= Bufandas;
    }
    else if(CategoriaActual == "Camisas")
    {
        lienzoActual = $('#lienzo-camisas');
        arrayactual= Camisas;
    }
    else
    {
        lienzoActual = $('#lienzo-faldas');
        arrayactual= Faldas;
    }
     
     $.each(arrayactual,function(ind,valor,arr){
         lienzoActual.append(
             ` <div class="producto col-lg-3 col-md-6 col-sm-6">
                 <div class="contenedor-img">
                     <img src="${valor.UrlImg1}" alt="">
              </div>
 
                 <div class="contenedor-boton">
                     <button id="${valor.Id}" type="button" data-open="modal-producto">Ver más</button>
                 </div>
             </div>
              ` 
         )
     });
 }
 

/**
 * Funcion que carga el modal cuando hacen click en "ver mas"
 */
function CargarModal(id)
{
    let total=0;
    let cantidadTotal=0;

    let elemento= $('#lienzo-modal');
    elemento.html('');
    let CategoriaActual = document.getElementById('ancla').value;
    let arrayactual = []
    
    if(CategoriaActual == "Bufandas")
    {
        arrayactual = Bufandas;
    }
    else if(CategoriaActual == "Camisas")
    {
        arrayactual = Camisas;
    }
    else
    {
        arrayactual = Faldas;
    }

    $.each(arrayactual,function(ind,valor,arr){
        
        if(id == valor.Id)
        {
            elemento.append(` 
            <div class="container contenido-modal">
                <div class="row">
                <div class="imagen-modal col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <img src="${valor.UrlImg1}" class="img-modal" alt="">
                </div>

            <div class="col-sm-8 col-md-8 col-lg-8 col-xl-8 ">
                <div class="info-prod">
                    <h4>${valor.Nombre}</h4>

                    <input type="hidden" id="idProduc" value="${valor.id}"></input>

                    <p>${valor.Descripcion}</p>

                    <h4>Precio: $${valor.Precio}</h4>
                </div>


                <div class="section-select">
                    <form>
                        <div class="form d-flex">
                        
                            <div class="select-talle form-group col-md-6 col-sm-6 col-lg-6 col-xl-6">
                                <label for="inputEmail4" id="talle">Talle</label>
                                <select name="talle" id="talle">
                                <option value="talle" selected>M</option>
                                <option value="talle">S</option>
                            </select>
                            </div>
            
                           
                        </div>
                    </form>
                </div>

                <div class="cantidad-prod">
                    <p>Cantidad:<input type="number" id="cantidad" name="cantidad" value="0" min="1"> </p>                
                        <div class="d-flex">
                        <p class="muestraTotal"> Subtotal $ <small class="text-muted"> 
                        <div id="total"></div>
                </div>
            </div>

            <div class="contenedor-alerta">
                <output id="productoAgregado-alerta"></output>
            </div>

            <div class="contenedor-boton-modal">
                <button type="button" class="boton-modal" id="btn-agregar-producto"> 
                    <i>Agregar</i>
                </button>

                <form action="Carrito.html">
                    <button class="boton-modal" type="submit">Ver carrito</button>
                </form>
            </div>
                
            </div>
            </div>

            </div>
            </div>
     ` )
     
    
              /*------------------------------  calcularCostoDinamicamente mediante la cantidad  -------------------------------------*/ 
              let cantidad = $('#cantidad');
              let totalE =$('#total')
              //keyup evento permite capturar lo que haga el usuario por medio del teclado
              cantidad.on('keyup', function(ev){
                cantidadTotal =cantidad.val();
                 total=valor.Precio*cantidadTotal;
                 totalE.html(total);
                 return cantidadTotal,total;
                 })
              //click evento permite capturar lo que haga el usuario al hacer click
              cantidad.on('click', function(ev){
                 cantidadTotal =cantidad.val();
                 total=valor.Precio*cantidadTotal;
                 totalE.html(total);
                 return cantidadTotal,total;
                 })
                 
    }
    })    
        //evento que agrega al carrito
            let BtnAgregarP = document.getElementById('btn-agregar-producto');
            BtnAgregarP.addEventListener('click', function(){
                AgregarAlCarrito(id, cantidadTotal,total);

              
                document.getElementById("productoAgregado-alerta").innerText = "Producto agregado con éxito!";

                setTimeout(function(){
                    document.getElementById("productoAgregado-alerta").innerText = "";
                }, 2000);
            })
}


const BotonFiltrar = document.getElementById('btn-filtrar');

let ArticulosFiltrados = [];


/**
 * Evento al apretar el boton filtrar
 */
BotonFiltrar.addEventListener('click', function(){
let CategoriaActual = document.getElementById('ancla').value;
let lienzoActual;
let arrayactual = []

    if(CategoriaActual == "Bufandas")
    {
        lienzoActual =  $('#lienzo-bufandas');
        arrayactual= Bufandas;
    }
    else if(CategoriaActual == "Camisas")
    {
        lienzoActual = $('#lienzo-camisas');
        arrayactual= Camisas;
    }
    else
    {
        lienzoActual = $('#lienzo-faldas');
        arrayactual= Faldas;
    }
    
    lienzoActual.innerHTML = "";
    ArticulosFiltrados = [];

    let valorSelect = document.getElementById('Select-filtrar').value;

    arrayactual.forEach(function(valor,ind){
        if(valor.Genero == valorSelect)
        {
                ArticulosFiltrados.push({Url: valor.UrlImg1, Id: valor.Id})
        }

        if(valorSelect == "todos")
            {
                ArticulosFiltrados.push({Url: valor.UrlImg1, Id: valor.Id})
            }
    });

    CargarArticulosFiltrados(lienzoActual, arrayactual);
});
       

/**
 * Funcion que carga en la pantalla los elementos segun el filtro
 */
 function CargarArticulosFiltrados(_lienzoActual, _arrayActual)
 {

     _lienzoActual[0].innerHTML = "";
     
     $.each(ArticulosFiltrados,function(ind,valor,arr){
         _lienzoActual.append(
             ` <div class="producto col-lg-3 col-md-6 col-sm-6">
             <div class="contenedor-img">
             <img src="${valor.Url}" alt="">
             </div>
 
             <div class="contenedor-boton">
                 <button id="${valor.Id}" type="button" data-open="modal-producto">Ver más</button>
             </div>
         </div>
         ` )
     
         
         const openEls = document.querySelectorAll('[data-open]');
         const closeEls = document.querySelectorAll('[data-close]');
         const visible = "es-visible";
         
         
         for(const el of openEls)
         {
             el.addEventListener('click', function(){
                 const contenidoId = this.dataset.open;
                 document.getElementById(contenidoId).classList.add(visible);
                 CargarModal(this.id);
             });
         }
         
         for(const el of closeEls)
         {
             el.addEventListener('click', function(){
                 this.parentElement.parentElement.parentElement.classList.remove(visible);
             });
         }
     })
 }
 

/*------------------------------------------------------------------*/
/**
 * 
 *Busca el producto por la ID y lo agrega al array del carrito
 */
function AgregarAlCarrito(id, cantidad, total)
{

    let CategoriaActual = document.getElementById('ancla').value;
    let arrayactual = [];
    let Output_Total = $('#out-total').val;
    console.log(total);

    if(CategoriaActual == "Bufandas")
    {
        arrayactual= Bufandas;
    }
    else if(CategoriaActual == "Camisas")
    {
        arrayactual= Camisas;
    }
    else
    {
        arrayactual= Faldas;  
    }

    $.each(arrayactual,function(ind,valor,arr){
        if(valor.Id == id)
        {
        arrayCarrito.push({Nombre:valor.Nombre, Descrip:valor.Descripcion, UrlImg:valor.UrlImg1, Precio:valor.Precio, Cantidad:cantidad, Total:total}) 
    }
   });

   GuardarenPc(arrayCarrito);
}


/*------------------------------------------------------------------*/
//                      GUARDAR EN LOCALSTORAGE
/*------------------------------------------------------------------*/

function GuardarenPc(arrayCarrito)
{
    if(!window.localStorage.key('wCarritoCompra'))
    {
        window.localStorage.setItem('wCarritoCompra', JSON.stringify(arrayCarrito));
    }
    else
    {
        window.localStorage.setItem('wCarritoCompra', JSON.stringify(arrayCarrito));
    }
}

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




/*
*    trae un elemento filtrado segun el nombre del articulo y muestra el detalle
*    llama a toast para mostrar msj por pantalla
*/
/*
const btnBuscar= $('#buscar');

btnBuscar.on('click',function(){
    let contenidoBuscar=$('#contenido-buscar').val();
    let producto=  Inventario.find(x => x.nombre === contenidoBuscar); // trae elemento por nombre
    var myAlert1 =document.getElementById('toastNotice');  //select id of toast 1
    var myAlert2 =document.getElementById('toastNotice2');   //select id of toast 2
    if(contenidoBuscar == "" || contenidoBuscar==undefined || contenidoBuscar==null){
        var bsAlert = new bootstrap.Toast(myAlert1);//inizialize it
        bsAlert.show();//show it
    }else if(producto ===null || producto ===undefined || producto=="" ){
        var bsAlert = new bootstrap.Toast(myAlert2);//inizialize it
        bsAlert.show();//show it
    }else if(producto !==null || producto !==undefined || producto!==""){
      document.getElementById('modal-producto').classList.add('es-visible');
      MostrarDetalleProducto(producto.id);
    }
    $('#contenido-buscar').val('');
})
*/