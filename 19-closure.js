/*
Q19: What is Closure in JavaScript? Provide an example
Senior
*/
//Un closure es una función dentro de otra función que tiene acceso a las variables declaradas en el ambito de la función exterior 
var global = "Variable global";

(function funcionExterna(argFunExt){
    
    var varInternaFunExt = "Variable interna de la función externa.";

    (function funcionInterna(argFunInt){
        var varInternaFunInt = "Variable interna de la funcion interna.";

        console.log(global + "\n" + argFunExt + "\n" + varInternaFunExt + "\n" + argFunInt + "\n" + varInternaFunInt);
    })("Argumento de la funcion interna!");

})("Argumento de la función externa!");


//Como se puede ver en el ejemplo, la función interna accede a todas las variables.
//Pero si intentamos acceder desde afuera, no tenemos acceso a ninguna. Lo único que podemos ver es la variable global, la función externa y el argumento externo.

//console.log(global + "\n" + "Argumento de la función externa!" + "\n" + varInternaFunExt + "\n" + argFunInt + "\n" + varInternaFunInt);



//Venancio Portillo