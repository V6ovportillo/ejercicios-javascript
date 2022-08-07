/*
Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique!
*/

var arrayTestOne = [2, 3, 4, 4]
var arrayTestTwo = [4, 2, 7, -2]

function arrayIntersection(firstArray, secondArray) {
    var hashMap = {};
    var result = [];

    firstArray.forEach(function (element) {
        hashMap[element] = 1;
    });

    secondArray.forEach(function (element) {
        if (hashMap[element] === 1) {
            result.push(element);
            hashMap[element]++;
        }
    });

    return result;
}



//Venancio Portillo