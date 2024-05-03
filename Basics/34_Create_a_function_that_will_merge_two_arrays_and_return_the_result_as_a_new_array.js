function mergeTwoArrays(arr1, arr2) {
  const arr = [...arr1, ...arr2];
  return arr;
}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeTwoArrays(arr1, arr2));
