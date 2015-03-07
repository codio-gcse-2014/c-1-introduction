Using a loop is a far more efficient way of dealing with the positioning of our 7 birds on the branch.

In an earlier section we figured out a simple algorithm to position the first bird before adding the `gap` to the x coordinate of each bird. 

```js
positionBirds(x, y, x+gap, y, x+gap*2, y);
```

Our new code on the left uses the same 'gap' based approach but uses a *while* loop instead.

## VIDEO
Looks at this video to help you visualise what's going on with our loop code.

<iframe src="//player.vimeo.com/video/121280245" width="500" height="240" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

In words, we do the following 

1. *Initialize* our variables, in other words we assign them their starting values.
1. We now put the bird creation function call `createBird` inside a *while* loop, which creates the new bird and places it at the specified coordinate. Study the formula for the X coordinate `initialX + gap*counter` and make sure you understand what it is doing. The first time it is in the loop, `counter` is 0. The second time through, it will be 1 and so on.
1. Next, we add 1 to our `counter` variable
1. At the end of the loop, we go back to the start of the loop. If `counter` is less than 7, it will run through the loop again. Once it finally reaches 7, it will exit the loop and execute any commands that come afterwards (there aren't any here).


|||definition
## The while loop
A *while* loop is defined as follows.

```js
  while(some condition) {
    some instuctions
  }
```

While `some condition` is true, execute `some instructions` within the opening `{` and the closing `}`. It will continue to loop forever or until `some condition` is false.
|||

In our example, `some condition` is `counter is less than 7`. If `counter` has any value between 0 and 6, the `counter<7` is true and so your code will continue to loop around.

As soon as `counter` reaches 7, the `counter<7` is false and so the loop stops executing.






