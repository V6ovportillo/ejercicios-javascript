/*
Q10: FizzBuzz Challenge
Mid

Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
*/

for (let i = 1; i <= 100; i++) {
    var a = (i % 3 === 0);
    var b = (i % 5 === 0);
    a ? b ? console.log("FizzBuzz") : console.log("Fizz") :  b ? console.log("Buzz") : console.log(i);   
}



//Sin ternario

for (let i = 1; i <= 100; i++) {
    var a = i % 3 === 0;
    var b = i % 5 === 0;
    if(a && b){
        console.log("FizzBuzz")
    } else if (a){
        console.log("Fizz")
    } else if (b){ 
        console.log("Buzz")
    } else {
        console.log(i)
    }   
}


//Venancio Portillo