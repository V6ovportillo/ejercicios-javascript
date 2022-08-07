/*
Check if a given string is a palindrome "racecar" is a palindrome. "race car" should also be considered a palindrome. Case sensitivity should be taken into account
*/

function isPalindrome(string){
    //Quitar los espacios
    var onlyLetters = string.replace(/\s/g,"");
    //Retornar la comparación de las letras solas con su reverso
    return onlyLetters === onlyLetters.split("").reverse().join("");
}