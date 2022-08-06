/*
Q18: How would you create a private variable in JavaScript?
*/

//Creando una funcion con el nombre de la variable y un closure para tener acceso desde fuera a esa variable.

function codigoSecreto(){
    var _codigoSecreto = "Este es el código secreto!"

    return function() {
        return _codigoSecreto;
    }
}

var verCodigo = codigoSecreto();
console.log(verCodigo());



//Venancio Portillo