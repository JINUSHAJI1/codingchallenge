const read = require('readline-sync')
const fs = require('fs')
let passenger=[]
let dest=[]
let newarray=[]
let m=3
for (let i = 0; i < m; i++) {
    let ff = read.question("Passenger name : ")
    passenger.push(ff);
    let desti = read.question('Destination : ');
    dest.push(desti);
    
    
}
// console.log(flight)
// console.log(dest)
for (let i = 0; i < m; i++){
//     newarray.push(passenger +"," +dest)

// console.log("After merging  : "+newarray)
newarray[i]=passenger[i]+":"+dest[i]
}console.log(newarray)