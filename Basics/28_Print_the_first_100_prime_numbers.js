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
i = 0;
j = 0;
while(i < 100){
    if(checkPrime(j)){
        arr.push(j);
        i++;
    }
    j++;
}
console.log(arr);