//Aqui hicimos cambio, estamos modificando la funcion para que haga mas que repetir mucho codigo
function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  //Math.floor es para redondear si es que da decimales, sin esto el resultado es 3.333
  var numOfBottles = Math.floor(money / 1.5);//1.5 es el precio de la botella
  
  console.log("I can buy " + numOfBottles + " bottles with " + money + " dlls"); 
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

//El 5 es el valor de money, o sea tenemos 5 dlls
getMilk(3);