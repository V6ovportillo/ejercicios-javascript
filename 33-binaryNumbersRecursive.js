/*
Write a recursive function that returns the binary string of a given decimal number Given 4 as the decimal input, the function should return 100
*/

function binaryNumbersRecursive(digit) {
    //Divide by 2 the digit. If the rest is 0, add 0 to the recursive result. If it more than 0, add 1.

    //If it is 0, then I finish the recursion function.
    if (digit >= 1) {
        //Here if digit % 2 is more than 0 it is true, if it is 0, the condition is false. 0 is falsy because non-boolean coercion.
        if (digit % 2) {
            //if it is divisible, then add 1 (because binary definition) and call the funtion again. 
            return binaryNumbersRecursive((digit - 1) / 2) + 1;
        } else {
            //If it is not, then add 0 and call the function again
            return binaryNumbersRecursive(digit / 2) + 0;
        }
    } else {
        return "";
    }
}