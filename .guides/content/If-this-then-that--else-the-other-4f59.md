|||info
## Teacher Guidance
Analogy
|||


We only just figured out loops and now it's time to move on to another of those things you need to master, *conditional statements*.

## Example
Before we go into any detail, let's look at an example. Sticking with our birds, let's see how we deal with the following scenario.

1. We position our birds on the branch with a reasonable gap between each bird.
1. Birds that haven't got room to sit on the branch (the `x` coordinate is greater than or equal to `450`), should be put in a cage rather than hanging in mid-air beyond the right end of the branch.

![](.guides/img/bird-if-1.png)

## Look at the video
Open up the `main.js` code on the left then take a look at the video which explains the whole process in detail.

<iframe src="//player.vimeo.com/video/119145832" width="500" height="230" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Thinking about it in coding terms
Step 1 above is handled by our *for* loop. It will keep on positioning birds off the right end of the branch and then off the screen.

So, how do we deal with the end of the branch? Let's break this down into steps.

 - If `calcX`, the calculated x coordinate, is less than than the x coordinate of the right hand end of the branch (450), then sit it on the branch
 - If `calcX` is more than 450, in other words it would fall off the branch, then put it in the cage (which is simply an image on our page, where we will locate those birds).
 



 


