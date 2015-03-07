Look at the code on the left and the preview. We'll now explain what is going on here.

## Video
Watch this video to see how the program executes.

<iframe src="//player.vimeo.com/video/121280244" width="500" height="230" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Function declarations
We *declare* our function as follows

```js
function createBird(x)
```

1. Start the line with `function`
1. Choose a meaningful name for our function
1. Inside the brackets, specify any 'parameters' (see below) that the function expects to receive.

Functions can have any number of parameters, so the following are all possible examples

```js
function createBird(x)
function createBird()
function createBird(x, y)
function createBird(x, y, birdName)
```

In Javascript, function names follow the same rules as variable names. They should not contain spaces and may only contain letters, numbers or the '-' or '_' characters.

## What are parameters?
You can think of a parameter as behaving rather like a variable. 

A variable is defined and initialised within the function. A parameter is defined as a part of the function definition. Code that calls your function can then pass values to those parameters. 

Think about `function createBird(x, y)`. 

- You can see the function `createBird()` expects to receive 2 parameters, `x`, and `y`.
- The code that calls the `createBird()` function should pass in values to those parameters, so something like `createBird(100, 200)`.

