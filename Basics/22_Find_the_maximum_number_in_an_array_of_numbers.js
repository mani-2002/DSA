const arr = [8,15,18,14,71,5,72,59];
var x = arr[0];
for(let i = 0; i < arr.length; i++){
    if(x < arr[i]){
        x = arr[i];
    }
}
console.log(x);