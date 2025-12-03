# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1

The following block of code throws an error. Without running it:

Identify the kind of error it throws:

Explain why it is thrown.
Suggest a fix to avoid the error

```js
const react = (isReuben) => {
  if (isReuben) {
    currentStatus = "Everything is just fine";
  } else {
    currentStatus = "Time to panic.";
  }
  return currentStatus;
};

console.log(react(true));
```

### Question 2

The provided code will log **"Michael Jordan"**. This happens because when `let theGoat = bestPlayer` is defined, it doesn't create a new, different **object**. Instead, since the `=` operator was used, it assigned the variable `theGoat` to the variable `bestPlayer`, so now both variables are referencing the same object. So, since `bestPlayer` was assigned to something else, it also changes what `theGoat` is referencing as well.

### Question 3

At first look, it is easy to think that this will return a `SyntaxError` because the variable `theHustler` is being redeclared two times with `const`. Variables declared with `const` cannot be redeclared, but when taking **scope** into consideration, this code actually logs two different instances of `theHustler`. The reason for this is that one is defined in the **global scope**, and the other is defined within the `shoutOut()` function **block scope**. Therefore, they won’t know about each other because each variable belongs to a different scope.

### Question 4

### Question 5

### Question 6

### Question 7

### Question 8
