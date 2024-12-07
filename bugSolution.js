function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (typeof x !== 'number') {
    throw new Error('Invalid input: x must be a number');
  }
  return x * 2; // Double the number
}

console.log(foo(5));  // Output: 10
console.log(foo(null)); // Output: 0
console.log(foo('abc')); // Throws an error