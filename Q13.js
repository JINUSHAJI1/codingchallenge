const read = require('readline-sync')
const fs = require('fs')
let op="y"
let flight=[]
do{
    let fn = read.question('Fligth Number: ');
    flight.push(fn);
    op=read.question('Do you want to continue ')
    if(op=='y')
      continue;
}while(op!='n')
console.log(flight)