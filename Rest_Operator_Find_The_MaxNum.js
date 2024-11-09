// Find Maximum Number in a Variable-Length Argument List:
// Write a function called findMax that takes any number
// of arguments and returns the maximum number.
// Use the rest operator to handle the arguments and
// the Math.max() method to find the maximum.

// findMax(3, 8, 12, 5); // Should return 12
function findMax(...numbers) {
  return Math.max(...numbers);
}
console.log(findMax(3, 8, 12, 5, 65));
