/*
Check if a given string is a isomorphic

For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character
to get string B. The order of the characters must be preserved. There must be one-to-one mapping for ever char of
string A to every char of string B.

`paper` and `title` would return true.
`egg` and `sad` would return false.
`dgg` and `add` would return true.

*/

function isIsomorphic(firstString, secondString){
    //Recibo dos string
    if(firstString.length != secondString.length) return false;
    
    //Debo asegurarme que cada letra de la primer palabra solo corresponda a una letra de la segunda palabra en cantidad y en orden
    var letterMap = {}

    for(let i = 0; i < firstString.length; i ++){
        var letterA = firstString[i];
        var letterB = secondString[i];

        if(letterMap[letterA] === undefined ){

            if(secondString.indexOf(letterB) < i){
                return false;
            } else {
                letterMap[letterA] = letterB;
            }

        } else if(letterMap[letterA] != letterB) {
            return false;
        }
    }

    return true;
}