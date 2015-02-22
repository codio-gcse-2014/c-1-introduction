
// Global Variables
var currentX=110;
var currentY=125;

function main() {

  var initialX, calcX, gap;
  var counter;
  
  // Here's the loop
  for(initialX=50, gap=60, counter=0; counter<20; counter++) {
    calcX = initialX + gap*counter;
    
    if(calcX < 450) {
      // the bird is on the branch
      createBird(calcX, 25);
    }
    else {
      // the bird is too far to the right            
      createBird(currentX, currentY);
      currentX = currentX + 60;
      if(currentX > 360) {
        currentY += 80;
        currentX = 110;
      }
    }    
    
  }
  
}
