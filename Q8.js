const read = require('readline-sync')
const fs = require('fs')
let flight=[]
let dest=[]
let m=3
for (let i = 0; i < m; i++) {
    let desti = read.question('Destination : ');
    dest.push(desti);
    let ff = read.question('Flight fare for '+dest[i] + ":");
    let fff=parseFloat(ff)
    flight.push(fff);
    
}
// console.log(flight)
// console.log(dest)
let input=read.question("Enter any number between 1 and" +m +":")
for(let i=0;i<m;i++){
    if(input==i)
    {
        console.log("selected place")
        console.log("Destination : "+dest[i])
        console.log("Fare : "+flight[i])
        
    }
}