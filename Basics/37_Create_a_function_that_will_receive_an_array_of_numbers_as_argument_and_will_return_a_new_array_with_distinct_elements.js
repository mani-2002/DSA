const arr = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100];
const s = new Set([...arr]);
const arr1 = [...s];
console.log(arr1);