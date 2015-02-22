

function positionSmallBird(x, y) {

  document.getElementById("bird1").style.position = "fixed";
  document.getElementById("bird1").style.top = y + "px";
  document.getElementById("bird1").style.left = x + "px";    
  
}

function positionBigBird(x, y) {

  document.getElementById("bird2").style.position = "fixed";
  document.getElementById("bird2").style.top = y + "px";
  document.getElementById("bird2").style.left = x + "px";    
  
}

