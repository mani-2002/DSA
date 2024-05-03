function mergeTwoArraysButNotElements(arr1,arr2){
    var arr = [];
    for(i of arr1){
        if(!arr2.includes(i)){
            arr.push(i);
        }
    }
    for(i of arr2){
        if(!arr1.includes(i)){
            arr.push(i)
        }
    }
    return arr;
}
const arr1 = [1, 2, 3, 10, 5, 3, 14];
const arr2 = [1, 4, 5, 6, 14];
console.log(mergeTwoArraysButNotElements(arr1,arr2));