/*
Q14: What will be the output of the following code?
Mid
*/

var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);


//Como la funciones no están dentro de los valores posiblemente falsos, entonces la condición del if daría verdadero. 
//Al entrar typeof f nos daría undefined ya las condiciones de if se corren en tiempo de ejecución entonces la condición se evalúa en tiempo de ejecución.

//Entonces el output sería "1undefined"



//Venancio Portillo