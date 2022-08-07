/*
Q24: Write a recursive function that performs a binary search
Senior
*/

//Teniendo un array ordenado de menor a mayor, la lógica que sigue el binary search es tomar el valor medio del array y preguntar si ese es el valor
//Si no lo es, preguntar si es mayor o menor
//Luego, hacer una nueva búsqueda con el valor medio como posición derecha o izquierda (dependiendo si es mayor o menor respectivamente)
//Continuar recursivamente hasta que el valor medio sea el valor buscado
//Devolver el valor del indice

function binarySearch(array, value, leftPosition, rightPosition){
    if(leftPosition > rightPosition) return -1;
    
    var middlePosition = Math.floor((leftPosition + rightPosition)/2);
    
    if(array[middlePosition] === value ){
        console.log({leftPosition},{rightPosition},{middlePosition});
        return middlePosition;
    } else if (array[middlePosition] < value) {
        binarySearch(array, value, middlePosition + 1, rightPosition);
    } else {
        binarySearch(array, value, leftPosition, middlePosition - 1);
    }    
}



//Venancio Portillo