/*
Q23: When would you use the bind function?
Senior
*/

//El método bind() crea una nueva función que establece al objeto pasado por parametro como la plabra reservada this. Las propiedades del objeto serán
//los argumentos de esa función creada. 


function saludo(){
    return "Hola " + this.name + " " + this.lastname + " !";
}

console.log(saludo()); //"Hola undefined undefined !"


var persona = {
    name : "Roberto",
    lastname : "Carlos"
};


console.log(saludo.bind(persona)()); //"Hola Roberto Carlos !"



//Venancio Portillo