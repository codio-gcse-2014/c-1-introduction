Don't let the word scare you, but what we just  dealt with was our first *algorithm*.

An algorithm is a set of steps that solves a problem. In programming, this normally involves the following steps

1. Analyze the problem
1. Look for ways of breaking down that problem into small steps. Often, you will create a flowchart as a way of visualizing these steps.
1. Look at ways of making those steps as efficient as possible and having as few steps as possible. This is a really important steps as an efficient algorithm usually results in smaller, faster code.

![](.guides/img/var-bird-branch-3.png)

## Our algorithm
Replaying what we saw in the previous section, our algorithm looks like this

1. To get all 3 birds to sit on the branch, see that they all have the same Y coordinate.
1. We first figure out the coordinate of the first bird and get it sitting on the left of the branch. 
1. We set the `gap` variable to be the gap between the first and second birds.
1. We add this to our x value to position the second bird.
1. We now add `gap*2` to the x coordinate to position the 3rd bird.

You can see all of this coming together with the key line

```javascript
positionBirds(x, y, x+gap, y, x+gap*2, y);`
```