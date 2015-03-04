---
title: Variables
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 1-var-bird/main.js
    panel: 0
  - action: open
    path: "#preview: 1-var-bird/index.html"
    panel: 1
layout: 3-cell
step: 1-var-bird

---
We are going to start our introduction to programming, also known as *coding* by looking at something common to all programming languages - **variables**.

Rather than explain what a variable is, let's dive straight into some code and see them in action.

Right now, you should see two tabs open up on the left hand side.

1. The tab `main.js` in the upper panel contains our code.
1. The tab `index.html` is the *Preview* window, which shows our program running. You can refresh the Preview if you change code by hitting the 'Reload preview' at the top left of that window. It's the button with two circular arrows.

In the `index.html` preview window on the left, you should see a picture of a small bird sitting on a branch and a bigger bird above the branch.

>Move to the next page by clicking the **Next** button at the bottom right of this page and we'll start hacking around our first piece of code.

---
title: Sit the bird on the branch
files: []

---
Look at `main.js` on the left to view your code.

## Challenge
Can you see how to sit both birds on the branch by adjusting the coordinates in `main.js`? Press the refresh button in the Preview tab after editing the code.

![](.guides/img/var-bird-positioned.png)

We'll describe what's going on in the next section.

---
title: How a program runs
files: []

---
Well done if both birds are now roosting comfortably.

In all of our examples, you'll see this line. 

```javascript
function main() {
```

For now, don't worry what this means as we'll go into this later.

So, how does our code actually *run*? Take a look at the video below and we'll explain. 

<iframe src="//player.vimeo.com/video/121280241" width="500" height="240" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

---
title: Variable recap
files: []

---
So let's define what a variable actually is. Here's our simple code again

```javascript
  var xBird, yBird;
  
  xBird = 100;
  yBird = 50;
  
  positionBigBird(xBird, yBird);
```

## Variables
1. A variable is a place where you can store a value. 
1. You give your variable a name you choose that helps you identify its purpose (xBird is a variable that holds the X coordinate of a bird)
1. The variable name should only contain letters, characters and the '-' or '_' characters. It may also not have spaces.
1. Define your variables (`var xBird`) by using writing `var` followed by a space and then the name you want to give your variable
1. You can now assign the variable a value by adding `=` followed by the value you want to assign to your variable (`xBird=100`).

We'll move on to more interesting uses of variables in the next sections.




---
title: 3 birds on a branch
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 2-var-3birds/main.js
    panel: 0
  - action: open
    path: "#preview: 2-var-3birds/index.html"
    panel: 1
layout: ""
step: 2-var-3birds

---
Now take a look at the new code that's opened up on the left. Click on the `main.js` tab to see it. We've got 3 birds this time but they're not roosting nicely.

## Challenge
You should get all 3 birds to sit on the branch like this.

![](.guides/img/var-bird-branch-3.png)

After you have changed the code, be sure to press the refresh button in the Preview window.

It's not that exciting but you should note how it is a bit tedious setting 6 variables.

In the next section, we'll explain how to make this a lot more efficient. Once you've got them roosting, move to the next section.

---
title: 3 better birds on a branch
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 3-var-3birds/main.js
    panel: 0
    index: 0
    type: file
    arg: 3-var-3birds/main.js
  - action: open
    path: "#preview: 3-var-3birds/index.html"
    panel: 1
    index: 1
    type: preview
    arg: 3-var-3birds/index.html
layout: ""
step: 3-var-3birds

---
Now take a look at the new `main.js` code on the left. You'll see that we have much shorter code. 

What we did here was to analyze what is going on and break it down as follows.

1. To get all 3 birds to sit on the branch, see that they all have the same Y coordinate.
1. We can first figure out the coordinate of the first bird and get it sitting on the left of the branch.
1. Then we simply space the other birds out evenly across the branch.
1. To achieve this, we'll create a variable `gap` and use that to calculate the position of the second and third birds.

Look at the code and make sure you understand how it works. The above approach is an example of a very simple *algorithm*. However, it's not quite right as the birds are not sitting evenly spaced along the branch. 

## Challenge
![](.guides/img/var-bird-branch-3.png)

Set the variables so you have the 3 birds are roosting evenly on the branch as in the above image. After you have changed the code, be sure to press the refresh button in the Preview window.




---
title: Our first Algorithm
files: []

---
Don't let the word scare you, but what we just  dealt with was our first *algorithm*.

An algorithm is a set of steps that solves a problem. In programming, this normally involves the following steps

1. Analyze the problem
1. Look for ways of breaking down that problem into small steps. Often, you will create a flowchart as a way of visualizing these steps.
1. Look at ways of making those steps as efficient as possible and having as few steps as possible. This is a really important steps as an efficient algorithm usually results in smaller, faster code.

## Our algorithm
Replaying what we saw in the previous section, our algorithm looks like this

1. To get all 3 birds to sit on the branch, see that they all have the same Y coordinate.
1. We can first figure out the coordinate of the first bird and get it sitting on the left of the branch.
1. Then we simply space the other birds out evenly across the branch.
1. To achieve this, we'll create a variable `gap` and use that to calculate the position of the second and third birds.

You can see all of this coming together with the key line : `positionBirds(x, y, x+gap, y, x+gap*2, y);`
---
title: Our first flowchart
files: []

---
A *flowchart* or *flow diagram* is an extremely useful way of visualizing an algorithm or process. Rather than seeing the process as list of steps, it breaks the steps into graphical blocks. 

When things get a bit more complex, this visualisation becomes even more helpful as we'll see in a later section.

## Flowcharting our simple algorithm

![](.guides/img/flow-3birds.png)
---
title: A new way of placing birds
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 4-preloops/main.js
    panel: 0
  - action: open
    path: "#preview: 4-preloops/index.html"
    panel: 1
layout: ""
step: 4-preloops

---
Now, we are going to look at an entirely different way to create and position our birds.

Take a look at the code and you can see that we've provided a new function `createBird()`. This function 

1. Creates a brand new bird.
1. Positions it at the specified coordinate.

You can also see that to position 7 birds, we call the same function 7 times but with different coordinates for each one. 

Imagine creating 200 birds in this way. We'd have to type  `createBird(x, y)` 200 times. We'd probably make several typing errors along the way.

In the next section we'll see a much shorter and more elegant way of doing the same thing.
---
title: While birds do loop
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 5-while/main.js
    panel: 0
  - action: open
    path: "#preview: 5-while/index.html"
    panel: 1
layout: ""
step: 5-while

---
A *Loop* is a far more efficient way of dealing with situations like this and we'll use a loop to position our 7 birds.

It is is a little jump in complexity, so brace yourself. However, you'll the hang of it and you *need* to get the hang of it as loops are an essential part of all programming.

You may remember from an earlier section that we figured out a simple algorithm to position the first bird before adding the `gap` to the x coordinate of each bird. 

```js
positionBirds(x, y, x+gap, y, x+gap*2, y);
```

Our new code on the left uses this same approach but instead it uses a *while* loop. 

## VIDEO
Looks at this video to help you visualise what's going on with our loop code.

<iframe src="//player.vimeo.com/video/121280245" width="500" height="240" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

In words, we do the following 

1. *Initialize* our variables, in other words we assign them their starting values.
1. We now put the bird creation function call `createBird` inside a *while* loop, which creates the new bird and places it at the specified coordinate. Study the formula for the X coordinate `initialX + gap*counter` and make sure you understand what it is doing. The first time it is in the loop, `counter` is 0. The second time through, it will be 1 and so on.
1. Next, we add 1 to our `counter` variable
1. At the end of the loop, we go back to the start of the loop. If `counter` is less than 7, it will run through the loop again. Once it finally reaches 7, it will exit the loop and execute any commands that come afterwards (there aren't any here).


## A more formal definition
A *while* loop is defined as follows.

```js
  while(some condition) {
    some instuctions
  }
```

While `some condition` is true, execute `some instructions` within the opening `{` and the closing `}`. It will continue to loop forever or until `some condition` is false.

In our example, `some condition` is `counter is less than 7`. If `counter` has any value between 0 and 6, the `counter<7` is true and so your code will continue to loop around.

As soon as `counter` reaches 7, the `counter<7` is false and so the loop stops executing.







---
title: Flowchart of our loop
files: []

---
Below is the flowhcart for our while loop. We are showing it after we've looked at the code. In practice, you should create the flowchart first.

>The more time you spend thinking and planning before you write any code at all, the faster you will work. Most people ignore this and start coding immediately, but unless you are in the top 1% of programmers, it is a simple fact. 
>
>See if you can resist the temptation to code before planning!

![](.guides/img/flow-while.png)
---
title: For birds also loop
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 6-for/main.js
    panel: 0
  - action: open
    path: "#preview: 6-for/index.html"
    panel: 1
layout: ""
step: 6-for

---
We'll now introduce another kind of loop - the *for* loop. The for loop does exactly the same thing as the *while* loop, but it does it in a slightly different way. The for loop is generally preferred to *while* loops in Javascript.

The *while* loop statement just deals with the condition (`while(counter<7)` in our previous example).

The *for* loop statement allows you to handle the following things

1. The initialization of your variables.
1. The condition.
1. What happens at the very end of the loop.

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





---
title: "If this then that, else the other"
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 7-if/main.js
    panel: 0
  - action: open
    path: "#preview: 7-if/index.html"
    panel: 1
layout: ""
step: 7-if

---
We only just figured out loops and now it's time to move on to another of those things you need to master, *conditional statements*.

## Example
Before we go into any detail, let's look at an example. Sticking with our birds, let's see how we deal with the following scenario.

1. We position our birds on the branch with a reasonable gap between each bird.
1. Birds that haven't got room to sit on the branch, should be put in a cage rather than hanging in mid-air.

![](.guides/img/bird-if-1.png)

## Look at the video
Open up the `main.js` code on the left then take a look at the video which explains the whole process in detail.

<iframe src="//player.vimeo.com/video/119145832" width="500" height="230" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Thinking about it in coding terms
Step 1 above is handled by our *for* loop. It will keep on positioning birds off the right end of the branch and then off the screen.

So, how do we deal with the end of the branch? Let's break this down into steps.

 - If `calcX`, the calculated x coordinate, is less than than the x coordinate of the right hand end of the branch (450), then sit it on the branch
 - If `calcX` is more than 450, in other words it would fall off the branch, then put it in the cage (which is simply an image on our page, where we will locate those birds).
 



 



---
title: Conditional Statements
files: []

---
So, here is the formal explanation of a Javascript *conditional statement*.

In Javascript, an `if` statement looks like this

```javascript
if(condition is true) {
  execute all lines within the { } block
}
else {
  otherwise execute this { } block instead
}
```

In fact, you can chain lots of conditions as shown below. Here, it runs through the `if` list until it finds a condition that is true. If none are true, then it executes the `else` block. Notice that there are no `{ }` block brackets in the example below. If there is only one statement in the block, you can omit them.

```javascript
if (condition1)
   statement1
else if (condition2)
   statement2
else if (condition3)
   statement3
...
else
   statementN
```





---
title: Lots of caged birds
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 7-if-2/main.js
    panel: 0
  - action: open
    path: "#preview: 7-if-2/index.html"
    panel: 1
layout: ""
step: 7-if-2

---
Take a look at the preview now. It is more interesting as all of our caged birds are neatly laid out within the cage.

Take a look at `main.js` and see if you can figure out how it works. Note that we have created our own function `checkBird()` to handle things. We could have put the `checkBird()` code within our loop but this shows a way in which we use a function instead. 

## Video
Here's a video if you want the guided tour of the code.

<iframe src="//player.vimeo.com/video/119146735" width="500" height="230" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Nested if statements
There is no pun intended here, but if you look at the code, you can see an example of *nesting*. 

Nesting is where a statement of one type (`if` in this case) is nested, or sits within a statement of the same type.

`
---
title: Functions
files: []

---
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


---
title: More on functions
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 8-functions/main.js
    panel: 0
  - action: open
    path: "#preview: 8-functions/index.html"
    panel: 1
layout: ""
step: 8-functions

---
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


---
title: Final flowchart
files: []

---
Take a look at the `main.js` code on the left. Let's flowchart the `checkBird()` function. 

![](.guides/img/flow-if.png)

Note how we have used a special shape for the `createBird()` function call. This shape denotes something that happens on screen. You could just have well used as regular rectangular box but there are special shapes for different purposes, which you can use if you want.

In a later module, we'll look at flowcharting in more detail. There's really not much to it.

