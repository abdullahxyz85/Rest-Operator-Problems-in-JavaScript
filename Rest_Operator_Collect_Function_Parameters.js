// Collect Function Parameters:
// Write a function called multiply that takes
// any number of arguments and returns their product.
// Use the rest operator to handle an unknown number of arguments.

// multiply(2, 3, 4); // Should return 24.
function multiply(...numbers) {
  return numbers.reduce((acc, curr) => acc * curr, 1);
}
console.log(multiply(2, 3, 4));
