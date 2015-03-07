
function main() {

  var counter, randomX, randomY;
  
  counter = 0;
  while(counter<10) {
    randomX = Math.random()*300;
    randomY = Math.random()*300;
    createBird(randomX, randomY);
    counter++;
  }
  
}
