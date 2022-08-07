/*
Given an array of integers, find the largest product yielded from three of the integers

Note: Greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)
*/

function greatestProduct(array){
    //Ordenar el array
    var sortedArray = array.sort(function(a,b){return a - b}); 
    var product1 = 1;
    var product2 = 1;
    var countOfNumbers = sortedArray.length - 1
    
    //Obtener primer producto (multiplicar los top 3 de maximos)
    for(let i = countOfNumbers; i > countOfNumbers - 3; i--){
        product1 *= sortedArray[i];
    }
    
    //Obtener segundo producto (multiplicar los top 2 de minimos con el maximo)
    product2 = sortedArray[0] * sortedArray[1] * sortedArray[countOfNumbers];
    //Retornar el mas alto
    if(product1 > product2) return product1;
    
    return product2;
}



//Venancio Portillo