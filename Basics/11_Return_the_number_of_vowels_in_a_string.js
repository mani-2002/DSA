var s = 'manikanta';
var count = 0;
const vowels = ['a','e','i','o','u'];
for(i of s){
    if(vowels.includes(i)){
        count++;
    }
}
console.log(count)