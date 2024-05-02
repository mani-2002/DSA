function findNthFibonacciNumber(n) {
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  return findNthFibonacciNumber(n - 1) + findNthFibonacciNumber(n - 2);
}
let n = findNthFibonacciNumber(7);
console.log(n);
