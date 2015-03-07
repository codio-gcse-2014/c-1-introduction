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




