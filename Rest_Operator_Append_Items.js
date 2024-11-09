// Add New Items to Array and Keep Original Items:
// Write a function appendItems that takes an array
// and any number of additional elements, then
// returns a new array with the original elements
// and the additional elements.

// appendItems([1, 2, 3], 4, 5, 6); // Should return [1, 2, 3, 4, 5, 6]
function apppendItems(array, ...rest) {
  return [...array, ...rest];
}
console.log(apppendItems([1, 2, 3], 4, 5, 6));
