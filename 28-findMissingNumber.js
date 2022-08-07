/*
Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time
*/

var array = [2, 5, 1, 4, 9, 6, 3, 7];
var max = 9;
var min = 1;

function findMissingNumber(array, max, min) { 
    var hashMap = {};
    var allNumbers = [];
    var result = [];

    for(let i = min; i <= max; i++){
        allNumbers.push(i);
    }

    array.forEach(function(element){
        hashMap[element] = 1
    });

    for(let i = 0; i < allNumbers.length; i++){
        if(!hashMap.hasOwnProperty(allNumbers[i])){
            result.push(allNumbers[i]);
        }
    }

    return result;
}



function findMissingNumberBestWay(array, max, min) {
    var sumOfIntegers = 0;
    var sumMaxLimit = 0;
    var sumMinLimit = 0;
    var theoreticalSum = 0;

    for(let i = 0; i < array.length; i++){
        sumOfIntegers += array[i];
    }

    
  // Find theoretical sum of the consecutive numbers using a variation of Gauss Sum.
  // Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
  // N is the upper bound and M is the lower bound

    sumMaxLimit = (max * (max + 1)) / 2;
    sumMinLimit = (min * (min - 1)) / 2;
    theoreticalSum  = sumMaxLimit - sumMinLimit;

    return theoreticalSum - sumOfIntegers;
 }



 //Venancio Portillo