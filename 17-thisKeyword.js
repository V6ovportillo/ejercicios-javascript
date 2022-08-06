/*
Q17: How does the this keyword work? Provide some code examples
*/

//La palabra reservada this se utiliza para obtener el objeto dueño de la función ejecutada. O al objeto del cual la función es un método de él



function foo(){
    console.log(this.bar);
}

var bar = "global";

var obj1 = { bar : "objeto 1", foo : foo}
var obj2 = { bar : "objeto 2"}


foo(); //global
obj1.foo(); //objeto 1
foo.call(obj2) //objeto 2



//Venancio Portillo