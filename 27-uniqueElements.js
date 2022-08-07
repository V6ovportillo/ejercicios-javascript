/*
Removing duplicates of an array and returning an array of only unique elements
*/


function uniqueElements(array){
    var hashMap = {}
    var result = []

    for(let i = 0; i < array.length; i++){
        if(!hashMap.hasOwnProperty(array[i])){
            hashMap[array[i]] = 1;
            result.push(array[i]);
        }
    }

    return result;
}



//Venancio Portillo