
function main() {

  var counter, randomX, randomY;
  
  for(counter=0; counter<10; counter++) {
    randomX = Math.random()*300;
    randomY = Math.random()*200;
    createBird(randomX, randomY);
  }
  
}
