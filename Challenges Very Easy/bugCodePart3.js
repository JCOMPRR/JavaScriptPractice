/* Fix this code, it should concatenate

function nameString(name){
	var b == "Edabit"
	var result == name + b
  	return result
}

*/

//Code Fixed
function nameString(name){
  var b = "Edabit"
  let result = name.concat(b);
  
  return result;
}

nameString("Matt");