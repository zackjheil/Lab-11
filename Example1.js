var num ="";
var simon = new Array();

function begin(){
  var random = Math.floor(Math.random()*4);
  num = random;
if (random == 0){
  document.getElementById("output").innerHTML = "RED";
}
else if (random == 1){
  document.getElementById("output").innerHTML = "GREEN";
}
else if (random == 2){
  document.getElementById("output").innerHTML = "BLUE";
}
else if (random == 3){
  document.getElementById("output").innerHTML = "YELLOW"
}

setTimeout(function(){
  document.getElementById("output").innerHTML = "";
}, 250);
return num;
}

function Red() {
  if (num == 0){
    simon.push("RED");
    return begin();
  }
  else{
    if (num < 4){
      document.getElementById("output").innerHTML = "Game Over! You got:" + simon;
      num = 5;
    }
}
}
