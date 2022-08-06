/*
Q15: What will the following code output?
Mid
*/

(function() {
    var a = b = 5;
  })();
  
  console.log(b);

  //El resultado será 5. Parece que las variables a y b pertenecieran al ambito de la función. Pero en realidad b termina siendo global. 
  //Ya que es igual a que se escribiera esto:
  var a = b;
  b = 5;



  //Venancio Portillo