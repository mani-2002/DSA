const arr = [1,2,-5,85,-54,87,-5,1,-81,5,5];
const arr1 = [];
for(i of arr){
    if(i >= 0){
        arr1.push(i);
    }
}
console.log(arr1);