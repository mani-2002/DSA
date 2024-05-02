const arr = [1, -8, -9, 7, 52, 81, -9, 68, -2, -3];
function filterOutNegatives(arr) {
  return arr.filter((num) => num >= 0);
}
console.log(filterOutNegatives(arr));
