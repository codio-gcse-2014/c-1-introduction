
function main() {

  var initialX, calcX, gap;
  var counter;
  
  // Initialize our variables
  initialX = 50;
  gap = 60;
  counter = 0;

  // Here's the loop
  while(counter<7) {
    calcX = initialX + gap*counter;
    createBird(calcX, 120);  
    counter = counter + 1;
  }
  return;
  
}
