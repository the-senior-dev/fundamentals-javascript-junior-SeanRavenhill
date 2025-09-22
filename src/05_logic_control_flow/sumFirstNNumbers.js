/**
 * sumFirstNNumbers()
 * ------------------
 * Write a function called sumFirstNNumbers that takes a number n as an argument and returns the sum of the first n numbers.
 * For example, if n is 3, your function should return 6, because 1 + 2 + 3 = 6.
 * If n is 5, your function should return 15, because 1 + 2 + 3 + 4 + 5 = 15.
 * If n is 0, your function should return 0.
 * If n is negative, your function should return 0.
 **/

// Sean First Solution:
function sumFirstNNumbers(n) {
  if (n === 0 || n < 0) return 0;

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// GPT suggestions after sharing solution:
/*
// The condition if (n === 0 || n < 0) can be simplified to if (n <= 0). Reads a little cleaner.
function sumFirstNNumbers(n) {
  if (n <= 0) return 0;

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}
*/

/*
// Bonus: can also use the formula n * (n + 1) / 2 for O(1) efficiency.
function sumFirstNNumbers(n) {
  if (n <= 0) return 0;

  return (n * (n + 1)) / 2;
}
*/

module.exports = sumFirstNNumbers;
