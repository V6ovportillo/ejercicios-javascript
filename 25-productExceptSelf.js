/*
Given an array of integers, return an output array such that output[i] is equal to 
the product of all the elements in the array other than itself. (Solve this in O(n) without division)
*/

var arrayTestOne = [2,3,2,5]; //[30,20,30,12]
var arrayTestTwo = [5,0,2,3];//[0,30,0,0]
var arrayTestThree = [0,3,0,0];//[0,0,0,0]
var arrayTestFour = [-2,-3,-5,-4];//[-60,-40,-24,-30]


function productExceptSelf(array){
    let producto = 1;
    let result = []

    for(let i = 0; i < array.length; i++){
        result.push(producto);
        producto *= array[i];
    }

    producto = 1;

    for(let i = array.length - 1; i > -1; i--){
        result[i] *= producto;
        producto *= array[i];
    }

    return result;
}



productExceptSelf(arrayTestOne);
productExceptSelf(arrayTestTwo);
productExceptSelf(arrayTestThree);
productExceptSelf(arrayTestFour);

//Lógica
[2,3,3,5]//[30,20,30,12]

//3*3*5 +
//2*3*5 +
//2*3*5 +
//2*3*3 +

1
1*2
1*2*3
1*2*3*3

1 * 1*2*3*3
1*5 * 1*2*3
1*5*3 * 1*2
1*5*3*3 * 1



//Venancio Portillo