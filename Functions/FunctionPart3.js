//Es la mas dificil, aprender bien esta
function getMilk(money, costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
    
  console.log("I can buy " + calcBottles(money, costPerBottle) + " bottles"); 

    
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(money, costPerBottle); 
}

function calcBottles(startingMoney, costPerBottle ) {
    
    var numOfBottles = Math.floor(startingMoney / costPerBottle);//1.5 es el precio de la botella

    return numOfBottles;
}

function calcChange(startingAmmount, costPerBottle) {
    var change = startingAmmount % costPerBottle; 
    return change;
}

console.log("Hello Master, here is your " + getMilk(10, 3) + " change");