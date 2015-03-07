|||info
## Teacher Guidance
Analogy
|||

Functions are another of those things that are incredibly important in any programming language. There's no way around understanding this, so make sure you get it!

## Some code
Here is some code that we had in our loop in the previous section.

```javascript
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
```

A function lets you take a block of code, wrap it up and give it its own name. You can then *call* that function from anywhere else in your code.

So, the code above now looks like this.

```javascript
function checkBird(x) {
  
  if(x < 450) {
    // the bird is on the branch
    createBird(x, 25);
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

function main() {

  var initialX, calcX, gap;
  var counter;
  
  // Here's the loop
  for(initialX=50, gap=60, counter=0; counter<20; counter++) {
    calcX = initialX + gap*counter;
    checkBird(calcX);  
  }
  
}
```

Things to notice

- Look inside the `for` loop. What is now inside the function `checkBird()` at the top, used to be inside the `for` loop.
- Our `for` loop now looks much less cluttered and is easier to read.
- The new `checkBird()` function can be used by any code anywhere else in your program. If you did not use a function, you would have to repeat the same code everywhere esle you wanted to create a bird. Now you don't.

Move to the next section for a video and a few more details.

