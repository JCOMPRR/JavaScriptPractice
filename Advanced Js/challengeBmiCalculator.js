function bmiCalculator(weight, height) {

  var bmiCalculator = weight / (height * height);


  if (bmiCalculator <= 18.5) {

    console.log("Your BMI is " + bmiCalculator + " , so you are underweight.");

  } else if (bmiCalculator > 18.5 >= 24.9) {

    console.log("Your BMI is " + bmiCalculator + " , so you have normal weight.");

  } else if (bmiCalculator > 24.9) {

    console.log("Your BMI is " + bmiCalculator + " , so you are overerweight.");

  }

  return bmiCalculator;

}

bmiCalculator(100, 1.8);