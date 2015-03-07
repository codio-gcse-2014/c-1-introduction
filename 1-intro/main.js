
function main() {

  var counter, randomX, randomY;
  
  // 3 simple instructions
  createBird(10, 10);
  createBird(20, 10);
  createBird(30, 10);

  // A "Loop"
  for(counter=0; counter<10; counter++) {
    // Another 3 instructions
    randomX = Math.random()*300;
    randomY = Math.random()*300;
    createBird(randomX, randomY);
  }
  
}
