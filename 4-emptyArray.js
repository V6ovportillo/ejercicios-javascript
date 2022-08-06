/*
Q4: How to empty an array in JavaScript?
*/

//Si tenemos 
//If we have
var arr = [1,2,3,4]
//Podemos hacer
//We can do
arr = [];
//Esto lo vacía pero no vacía las referncias que pueda tener el Array.
//This, it's going to empty our array but not it's references.

//Ejemplo
//For example
var arr = [1,2,3,4]
var otroArr = arr;
arr = []
console.log(arr) //[]
console.log(otroArr) //[1,2,3,4]

//Si queremos que todas las referencias también se vacíen. Entonces utilizamos:
//If we want all the reference empty, then we use:
arr.length = 0;


//Venancio Portillo