var x = new Array();
var y = new Array();
var numee2 = Math.floor((Math.random() * 4 ) + 1);
function genErate(){

console.log(numee2);



x[0] = "Government";
x.push("Computer");
x.push("People");
x.push("Family");
x.push("Person");

y[0] = "Taste";
y.push("Adorable");
y.push("Mushy");
y.push("Bewildered");
y.push("Calm");

if (numee2 == 0) {
  document.getElementById("DIV").innerHTML = y[0];
} else if (numee2 == 1) {
  document.getElementById("DIV").innerHTML = y[1];
}
else if (numee2 == 2) {
  document.getElementById("DIV").innerHTML = y[2];
}
else if ( numee2 == 3) {
  document.getElementById("DIV").innerHTML = y[3];
}
else if (numee2 == 4) {
  document.getElementById("DIV").innerHTML =y[4];
}
}
