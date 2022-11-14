const read = require('readline-sync')
const fs = require('fs')
let ff = read.question('Flight fare: ');
let fff=parseInt(ff);
let bt=read.question('Booking time (24 hr format) : ');
if(bt>=6 && bt<9){
    fff=fff+((fff*10)/100)
console.log("Final amount(10%) = "+fff)
}
if(bt>=9 && bt<17){
    fff=fff+((fff*20)/100)
console.log("Final amount(20%) = "+fff)
}
if(bt>=17 && bt<23){
    fff=fff+((fff*7)/100)
console.log("Final amount(7%) = "+fff)
}
if(bt>=23 && bt<6){
    fff=fff+((fff*5)/100)
console.log("Final amount(5%) = "+fff)
}