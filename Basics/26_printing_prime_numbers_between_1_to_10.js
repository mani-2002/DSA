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
var arr = [];
for (let i = 0; i < 100; i++) {
  if (checkPrime(i)) {
    arr.push(i);
  }
}
console.log(arr);
