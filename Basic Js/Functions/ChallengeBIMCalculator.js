//Create your function below this line.
function calcBmi(weight, height){
  
  var bmi = weight / (height *  height);
  return Math.round(bmi);

}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); (peso, altura)

bmi should equal 20 when it's rounded to the nearest whole number.

*/

var bmi = calcBmi(85, 1.8);
console.log(+ bmi );