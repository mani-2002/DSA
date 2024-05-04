//helper function to check whether a number is prime or not 
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
var arr =[];
var i = 0;
while(arr.length < 100){
    if(checkPrime(i)){
        arr.push(i);
    }
    i++;
}
var distancesBetweenFirst100Primes = [];
for(let i = 0; i < 100; i++){
    distancesBetweenFirst100Primes.push(arr[i + 1] - arr[i]);
}
console.log(distancesBetweenFirst100Primes)