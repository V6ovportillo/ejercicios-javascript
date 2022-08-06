/*
Q11: Given two strings, return true if they are anagrams of one another
Mid

For example: Mary is an anagram of Army
*/

function isAnagram(firstWord, secondWord){
    var a = firstWord.toLowerCase();
    var b = secondWord.toLowerCase();

    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a===b;
}

isAnagram("Mary", "army"); // True
isAnagram("Mary", "armys"); // False



//Venancio Portillo