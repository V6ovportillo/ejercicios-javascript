/*
Q9: Write a function that would allow you to do this?
Junior

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
*/
//Creamos una función que reciba por argumento la base que se quiere sumar. Luego la función de adentro podrá utilizar esa base para sumarla al siguiente número que se pase
//por argumento
//We create a function that recives by argument the base that we want to add. Then, the function inside is going to use that base to add it to the next number passed 
//by argument.
function createBase(base){
    return function(n){
        return n + base;
    }
}

var addSix = createBase(6);
addSix(11); // 17
addSix(15); // 21
addSix(21); // 27



//Venancio Portillo