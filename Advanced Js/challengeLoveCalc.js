var name1 = prompt("Your name: ");
var name2 = prompt("Your soulmate name: ");

var percent = Math.random();
percent = percent * 100;

percent = Math.floor(percent) + 1;

if (percent > 70) {
  alert(" Hay un " + percent + "% de compatibilidad entre " + name1 + " y " + name2 + " Makako ");

} else {
  alert(" Hay un " + percent + "% de compatibilidad entre " + name1 + " y " + name2 + " Sopa ");

}