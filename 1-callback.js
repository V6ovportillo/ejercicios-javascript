/*
Q1: Explain what a callback function is and provide a simple example
Junior
*/

//Una callback function es una función que se le pasa por argumentos a otra función y se ejecuta luego de realizar algunas operaciones.
// A callback function it's a function that is passed as an argument to another function and is executed after some operations has been complete.

function addTenToArray(arr,callback){
    //Operacion
    arr.push(10);
    //Se ejecuta función callback
    callback();
}

var arry = [2,3,4,5]
addTenToArray(arry, function(){ console.log("La modificación fue exitosa!", arry)})


//Venancio Portillo