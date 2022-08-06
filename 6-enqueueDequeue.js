/*
Q6: Implement enqueue and dequeue using only two stacks
Junior
*/


var inputStack = [];
var outputStack = [];

//Aquí ponemos los elementos en la cola de espera en el primer stack
//Here we insert the elements on the queue on the input stack
function enqueue(stackInput, value){
    return stackInput.push(value);
}
//Aquí lo que hacemos es pasar todos los elementos de espera al stack de salida
//Here what we do is to pass all the waiting elements to the output stack 

//Luego sacamos el último elemento del stack de salida que sería el primero del stack de entrada
//After that, we take the last element of the output stack that was the first element of the input stack 
function dequeue(stackInput, stackOutput){
    if(stackOutput.length <= 0){
        if(stackInput.length > 0){
            while(stackInput.length > 0){
                var outputElement = stackInput.pop();
                stackOutput.push(outputElement);
            }
        }
    }    

    return stackOutput.pop();
}

//Observación del ejercicio: Se podría haber utilizado el método shift() y se podría haber utilizado solo un stack
//Exercise observation: We could have used the shift() method, and we could use only one stack

//Funcion alternativa
//Alternative function
function dequeueAlternative(stackInput){
    return stackInput.shift();
}



//Venancio Portillo