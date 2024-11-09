// Destructuring with Rest:
// Destructure the following array so that the first element
// is assigned to a variable first and
// the rest of the elements are collected into a variable rest.

// const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
// first = 'red', rest = ['green', 'blue', 'yellow', 'purple']
const colors = ["red", "green", "blue", "yellow", "purple"];

const [first, ...rest] = colors;
console.log(first);
console.log(rest);
