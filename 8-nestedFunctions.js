/*
Q8: Write a "mul" function which will properly when invoked as below syntax
Junior 
Top 179 JavaScript Interview Questions  JavaScript  179  
Problem

console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48
*/

function mul(x){
    return function(y){
        return function(z){
            return x*y*z;
        }
    }
}


//Venancio Portillo