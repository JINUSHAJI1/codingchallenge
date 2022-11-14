const read = require('readline-sync')
const fs = require('fs')
let flight=[]
let even=[]
let odd=[]
let m=4
let ff,fff
for (let i = 0; i < m; i++) {
    ff = read.question('Flight fare : ');
    fff=parseFloat(ff)}
    for (let i = 0; i < m+m; i++) {
    if(i%2==0){
        flight.push(' ')
    }
    else{
        flight.push(fff)
    }
}
console.log(flight)

// for (let i = 0; i <4; i++) {
//     if(i%2==0){
//         even.push(flight[i]);
//     }
//     else{
//         odd.push(flight[i]);
//     }
    
// }console.log("odd index : ")
// console.log(even)
// console.log("even index : ")
// console.log(odd)