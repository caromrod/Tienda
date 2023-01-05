
const Base = {
    /**
     * Permite almacenar un registro en LocalStorage
     * @param {Key} llave 
     * @param {Value} valor 
     */
    GuardarRepositorio: function (llave, valor)
    {
        window.localStorage.setItem(llave, JSON.stringify(valor));
    },

    /**
     * Permite recuperar un registro del LocalStorage
     * @param {Key} llave 
     */
    ObtenerRepositorio:function (llave)
    {
        return JSON.parse(window.localStorage.getItem(llave)); 
    },

    /**
     * Permite eliminar un registro del LocalStorage
     * @param {key} llave 
     */
    BorrarRepositorio:function(llave){
        window.localStorage.removeItem(llave)
    },

    /**
     * Permite validar si existe una llave almacenada en el LocalStorage
     * @param {key} llave 
     * @returns 
     */
    ValidarLlave:function(llave){
        return window.localStorage.getItem(llave) != undefined;
    },

    /**
     * Registra cuando un usuario presento datos validos
     * @param {key} llave 
     * @param {password} clave
     * @param {username} usuario 
     */
    Logueo:function(usuario, clave)
    {
        let Admin = {usuario:'caro', clave: '1234'};
        if(Admin.usuario == usuario && Admin.clave == clave){
            let hora = new Date();
            let registro = {
                usuario: usuario,
                fecha: hora,
                vigen: hora.setMinutes(15)
            }
            alert("bienvenida/o"+ " " + Admin.usuario)
            this.GuardarRepositorio('Log_KeyWeb2022', registro);
        }
        
    
        else  if(Admin.usuario != usuario && Admin.clave != clave){
        
          

                let Lista_usuario = this.ObtenerRepositorio('ListaUsuariosRegistrados');
                if(Lista_usuario.find(x => x.usuario == usuario && x.clave == clave) ){
                    let hora = new Date();
                    let registro = {
                        usuario: usuario,
                        fecha: hora,
                        vigen: hora.setMinutes(15)
                    }
                    this.GuardarRepositorio('Log_KeyWeb2022', registro);
                    alert("bienvenida/o"+ " " + usuario)
                }           
            }
        else{
            alert('ERROR, usuario no registrado o contraseña incorrecta')
        }   
    },
  

/**
 * 
 * @param {username} usuario 
 * @param {password} clave 
 */
AgregarUsuario: function(usuario,clave){
    
    if(this.ValidarLlave('ListaUsuariosRegistrados'))
    {
        let usuarios = this.ObtenerRepositorio('ListaUsuariosRegistrados');
        usuarios.push({  usuario: usuario, clave: clave, });
        this.GuardarRepositorio('ListaUsuariosRegistrados', usuarios);
    } 
    else 
    {
        let usuarios = [];
        usuarios.push({  
            usuario: usuario,
            clave: clave, });
        this.GuardarRepositorio('ListaUsuariosRegistrados', usuarios);
    }
},

  /**
     * Elimina el registro de logueo exitoso
     * @param {username} usuario 
     */
   Deslogueo: function(usuario){
    this.BorrarRepositorio('Log_KeyWeb2022');
    this.ValidarLogin();
},
/**
 * Valida si se inicio session
 */
ValidarLogin:function(){
    if(!this.ValidarLlave('Log_KeyWeb2022'))
    {
        
        window.location = 'Index.html';
        alert('Su sesion a finalizado.');
    }
},



};


        






        





