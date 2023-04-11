// https://www.youtube.com/watch?v=GtOt7EBNEwQ&ab_channel=KhanAcademyLabs Difference between pseudorandom numbers
//The random number that gets generated is a 16 decimal places, from 0 - 0.9999999999999999 (Never reaches 1)

//This is a code for like a Dice (Pseudo Number Generator)
var n = Math.random();
n = n * 6; //We multiply it by the range that we need, for example here is 6 (dice)

//The Math.floor to round the number and the (n) + 1 adds so it can be from 1 - 6 and not 0 - 5
n = Math.floor(n) + 1;
console.log(n);