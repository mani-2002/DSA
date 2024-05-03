const arr = [1,2,3,4,5,6];
var no_of_rotations = 2;
var arr_left = arr.slice(0,2);
var arr_right = arr.slice(2);
console.log(arr_right.concat(arr_left));