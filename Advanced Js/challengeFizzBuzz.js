/* Prints from 1-100, for multiples of 3 it´ll say "Fizz" not the number, and for multiple of 5 
it´ll say "Buzz", if the number is multilpe for both 3 and 5 it´ll say "FizzBuzz"*/

var output = [];
var count = 1;

function fizzBuzz () {

  if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
   output.push(count); 
  }
  
  count++;

  
  console.log(output);
}

fizzBuzz();