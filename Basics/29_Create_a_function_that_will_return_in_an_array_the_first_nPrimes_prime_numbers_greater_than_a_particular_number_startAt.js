const { start } = require("repl");

//helper function to check whether a number is prime or not
function checkPrime(n) {
  if (n === 0) {
    return false;
  } else if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    var count = 0;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        count++;
      }
    }
    if (count > 0) {
      return false;
    } else {
      return true;
    }
  }
}
function printNumbers(startAt, nPrimes) {
  var arr = [];
  i = startAt;
  while (arr.length < nPrimes) {
    if (checkPrime(i)) {
      arr.push(i);
    }
    i++;
  }
  return arr;
}
console.log(printNumbers(0, 3));
