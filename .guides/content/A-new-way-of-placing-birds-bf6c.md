Now, we are going to look at an entirely different way to create and position our birds.

Take a look at the code and you can see that we've provided a new function `createBird()`. This function 

1. Creates a brand new bird.
1. Positions it at the specified coordinate.

You can also see that to position 7 birds, we call the same function 7 times but with different coordinates for each one. 

Imagine creating 200 birds in this way. We'd have to type  `createBird(x, y)` 200 times. We'd probably make several typing errors along the way.

In the next section we'll see a much shorter and more elegant way of doing the same thing.