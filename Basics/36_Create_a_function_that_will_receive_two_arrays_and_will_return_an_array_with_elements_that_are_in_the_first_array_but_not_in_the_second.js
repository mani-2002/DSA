function elementsInFirstArray(arr1,arr2){
    const arr = [];
    for(i of arr1){
        if(!arr2.includes(i)){
            arr.push(i);
        }
    }
    return arr;
}
const arr1 = [1, 2, 3, 10, 5, 3, 14];
const arr2 = [-1, 4, 5, 6, 14];
console.log(elementsInFirstArray(arr1,arr2));