/*
Q20: What will be the output of the following code?
Senior
*/
var output = (function(x) {
    delete x;
    return x;
  })(0);
  
  console.log(output);

//El siguiente código retornará 0 porque la palabra delete elimina propiedades de objetos, en este caso la variable "x" no es un objeto, es una variable.  


/*
Q21: What will be the output of the following code?
Senior
*/
var Employee = {
    company: 'xyz'
  }
  var emp1 = Object.create(Employee);
  delete emp1.company
  console.log(emp1.company);

//En este segundo caso, la palabra reservada delete tampoco eliminará la propiedad. Se debe a que emp1 se creó desde el prototipo Employee, y delete no elimina propiedades
// de los prototipos
//Podriamos borrar la propiedad directo desde Employee o utilizar delete emp1.__proto__.company




//Venancio Portillo