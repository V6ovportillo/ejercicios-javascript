/*
Q12: How would you use a closure to create a private counter?
*/

//Creamos una funcion counter y le agregamos metodos para interactuar con la variable privada de counter. Eso da más control sobre el contador

function counter(){
    _counter = 0;
    return {
        add : function(add){
            _counter += add;
        },
        retrieve : function(){
            return "Currenly the counter is: " + _counter;
        } 
    }
}

var c = counter();
c.add(5);
c.add(7);
c.retrieve(); // El contador debería ser 12



//Venancio Portillo