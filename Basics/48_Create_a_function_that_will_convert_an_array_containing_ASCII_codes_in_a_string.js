var arr = [
  73, 32, 108, 105, 107, 101, 32, 74, 97, 118, 97, 83, 99, 114, 105, 112, 116,
];
var s = "";
for (let i = 0; i < arr.length; i++) {
  s += String.fromCharCode(arr[i]);
}
console.log(s);
