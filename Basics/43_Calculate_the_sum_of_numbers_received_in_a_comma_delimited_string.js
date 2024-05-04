var s = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
var arr = s.split(",");
var arr1 = [];
for (i of arr) {
  arr1.push(Number(i.trim()));
}
var sum = 0;
for(let i = 0; i < arr1.length; i++){
    sum += arr1[i];
}
console.log(sum);