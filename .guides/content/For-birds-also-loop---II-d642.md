We will now use a `for` loop to do the same thing we did with the `while` loop.


## Video
Let's have a look at a video that helps you visualise what's going on with our loop.

<iframe src="//player.vimeo.com/video/119145833" width="500" height="330" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Description
If you take a look at the `main.js` code, you can see how this statement

```js
for(initialX=50, gap=60, counter=0; counter<7; counter++)
```

1. Initialises the variables you specify in the first part of the statement, before the first `;` so in our code `initialX=50, gap=60, counter=0`.
1. After the first `;` comes the condition for the loop to continue executing, which is `counter<7`
1. After the second `;` you specify what should happen at the end of the loop. In our case, it *increments* (increases the value of) the `counter` variable by 1. `counter++` is Javascript shorthand for `counter=counter+1`.


## While or For?
For loops can result in shorter (terser) code as they do more in a single line. Most Javascript programmers prefer the *for* loop to the *while* loop.




