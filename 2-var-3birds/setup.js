

function positionBirds(x1, y1, x2, y2, x3, y3) {

  document.getElementById("bird1").style.position = "fixed";
  document.getElementById("bird1").style.top = y1 + "px";
  document.getElementById("bird1").style.left = x1 + "px";  

  document.getElementById("bird2").style.position = "fixed";
  document.getElementById("bird2").style.top = y2 + "px";
  document.getElementById("bird2").style.left = x2 + "px";  
  
  document.getElementById("bird3").style.position = "fixed";
  document.getElementById("bird3").style.top = y3 + "px";
  document.getElementById("bird3").style.left = x3 + "px";  
  
  
}
