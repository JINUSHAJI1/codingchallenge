const read = require('readline-sync')
const fs = require('fs')
let flight=[]
let even=[]
let odd=[]
for (let i = 0; i < 4; i++) {
    let ff = read.question('Flight fare : ');
    let fff=parseFloat(ff)
    flight.push(fff);
}
for (let i = 0; i <4; i++) {
    if(i%2==0){
        even.push(flight[i]);
    }
    else{
        odd.push(flight[i]);
    }
    
}console.log("odd index : ")
console.log(even)
console.log("even index : ")
console.log(odd)