// Write a function that takes in a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// The factorial of 0 is 1.
// The factorial of 1 is 1.
// The factorial of 2 is 2 * 1 = 2.
// The factorial of 3 is 3 * 2 * 1 = 6.
// Recommended: use a while of for loop to solve the problem

// Sean Solution
// Note: This works correctly, but starting factorial at 1 (as in the Senior Dev solution)
// is more conventional, avoids the special-case check for 0, and makes the code easier
// to read and maintain.

// function findFactorial(n) {
//   let factorial = n;

//   if (n === 0) return 1;

//   while (n > 1) {
//     factorial = factorial * (n - 1);
//     n--;
//   }

//   return factorial;
// }

// Senior Dev Solution
// function findFactorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   let factorial = 1;
//   while (n > 0) {
//     factorial *= n;
//     n--;
//   }
//   return factorial;
// }

// Alternative Solution:
function findFactorial(n) {
  let factorial = 1;
  while (n > 0) {
    factorial *= n;
    n--;
  }
  return factorial;
}

module.exports = findFactorial;
