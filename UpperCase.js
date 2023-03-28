//var name = "Jose";

//Este codigo hace que al ejecutarlo salga en mayusculas, pero, si escribimos el nombre de la variable (name) en la consola nos saldra normal
//name.toUpperCase();

//Esto hace que al ejecutarlo y escribir la variable en la consola ambas sean mayusculas, ya que la variable la estamos "cambiando" para que tambien sea mayuscula (name =) 
//name = name.toUpperCase();


//Challenge (Version larga para entender bien el proceso de todo, hay mas cortas)

var name = prompt("Agrega tu nombre: ");

// Creo una variable que para agarrar la primera letra de "name" y especifico que solo sea la primera letra(slice(0,1)) 
var firstChar = name.slice(0,1);

//Creo una variable para almacenar firstChar y volverla mayuscula solo la primera letra
var upperCaseFirstChar = firstChar.toUpperCase();

//Hago una variable que especifique el resto del nombre
var restOfName = name.slice(1,name.length);

//Hago una variable para que el resto del nombre sea en minusculas (Se pone por si por accidente ponen lo demas en mayusculas lo corrija y lo ponga en minuscula)
var restOfName = restOfName.toLocaleLowerCase();

//Aqui cocateno "upperCaseFirstChar" que es la primera letra en mayuscula y "restOfName" que es minusculas  
var capitalisedName = upperCaseFirstChar + restOfName;
    
alert("Hola " + capitalisedName);