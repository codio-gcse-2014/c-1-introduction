Now take a look at the new `main.js` code on the left. You'll see that we have much shorter code. 

What used to be this 

```javascript
  var x1, y1, x2, y2, x3, y3;
  
  x1 = 0;
  y1 = 0;
  x2 = 100;
  y2 = 0;
  x3 = 200
  y3 = 0; 
  
  positionBirds(x1, y1, x2, y2, x3, y3);
```
has now become this.

```javascript
  var x, y, gap;  
  
  x = 100;
  y = 0;
  gap = 40;
  positionBirds(x, y, x+gap, y, x+gap*2, y);
```

Shorter code is usually better code. Programmers spend a lot of time shortening their code to make it more concise and readable. 

- When you talk, it's much easier to get a message across if it is short and pithy rather than long and waffly. Same with code.
- Shorter and well thought our code usually runs faster than waffly code
- The bigger and more complicated your applications become, the more important it is to put effort into making your code concise and well laid out.

## So what did we do?
We analyzed what was going on and broke it down as follows.

||| info
1. To get all 3 birds to sit on the branch, see that they all have the same Y coordinate.
1. We can first figure out the coordinate of the first bird and get it sitting on the left of the branch.
1. Then we simply space the other birds out evenly across the branch.
1. To achieve this, we'll create a variable `gap` and use that to calculate the position of the second and third birds.

|||

Look at the code and make sure you understand how it works. The above approach is an example of a very simple *algorithm*. However, it's not quite right as the birds are not sitting evenly spaced along the branch. 

|||challenge
## Challenge
![](.guides/img/var-bird-branch-3.png)

Set the variables so the 3 birds are roosting evenly on the branch as in the above image. After you have changed the code, be sure to press the reload button in the Preview window.
|||


