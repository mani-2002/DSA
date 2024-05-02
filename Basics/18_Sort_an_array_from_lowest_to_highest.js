function sortAnArray(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr;
}
const arr = [8, 8, 15, 7, 8, 1, 7, 518, 4, 185];
console.log(sortAnArray(arr));
