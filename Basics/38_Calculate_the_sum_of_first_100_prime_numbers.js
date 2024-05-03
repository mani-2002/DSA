//helper function to check wheather number is prime or not
function checkPrime(n){
    if(n === 0){
        return false;
    }
    else if(n === 1){
        return false;
    }
    else if(n === 2){
        return true;
    }
    else{
        var count = 0; 
        for(let i = 2; i < n; i++){
            if(n % i === 0){
                count++;
            }
        }
        if(count > 0){
            return false;
        }
        else{
            return true;
        }
    }
}
var j = 0;
const arr = [];
while(arr.length < 100){
    if(checkPrime(j)){
        arr.push(j)
    }
    j++;
}
var sum = 0;
for(i of arr){
    sum += i;
}
console.log(sum);