/*
Q4: How to empty an array in JavaScript?
*/

//Si tenemos 
var arr = [1,2,3,4]
//Podemos hacer
arr = [];
//Esto lo vacía pero no vacía las referncias que pueda tener el Array.
//Ejemplo
var arr = [1,2,3,4]
var otroArr = arr;
arr = []
console.log(arr) //[]
console.log(otroArr) //[1,2,3,4]

//Si queremos que todas las referencias también se vacíen. Entonces utilizamos
arr.length = 0;