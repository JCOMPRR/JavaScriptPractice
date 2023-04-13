//Notas:

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

//console.log(1 | 2); // Bitwise OR 
//console.log(1 & 2); // Bitwise AND

//Example
//Read = 00000100
//Write = 00000110
//Execute = 00000111

//Quitar los comentarios para que funcione
// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;

// let myPermission = 0;
// myPermission = myPermission | readPermission | writePermission;
// console.log(myPermission);

// let message = (myPermission & readPermission) ? 'Yes': 'No';

// console.log(message);


//Codigo de Calculadora de 2 numeros para bitwise
var num1;
var num2;

function bitwiseAND(num1, num2){
  const resAND = num1 & num2;

  return resAND;
}

function bitwiseOR(num1, num2){
  const resOR = num1 | num2;

  return resOR;
}

function bitwiseXOR(num1, num2){
  const resXOR = num1 ^ num2;

  return resXOR;
}

console.log(bitwiseAND(7, 12), bitwiseOR(7, 12), bitwiseXOR(7, 12));