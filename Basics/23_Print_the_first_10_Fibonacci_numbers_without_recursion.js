var a = 0; 
var b = 1;
var c;
console.log(a);
console.log(b);
for(let i = 2; i < 10; i++){
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}
