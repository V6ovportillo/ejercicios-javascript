/*
Q2: Given a string, reverse each word in the sentence
Junior

For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG
*/

var string = "Welcome to this Javascript Guide!";

function reverseString(string, separator){
    return string.split(separator).reverse().join(separator);
}

var reverseByLetter = reverseString(string, "");
var reverseByWords = reverseString(reverseByLetter, " ")

console.log(reverseByWords);


//Venancio Portillo