
function main() {

  var initialX, calcX, gap;
  var counter;
  
  // Here's the loop
  for(initialX=50, gap=60, counter=0; counter<20; counter++) {
    calcX = initialX + gap*counter;
    if(calcX<450) {
      createBird(calcX, 25);
    }
    else {
      createBird(120, 130);
    }     
  }
  
}
