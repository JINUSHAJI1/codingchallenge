const read = require('readline-sync')
const fs = require('fs')
let pn = read.question('Passenger Name: ');
let mt=read.question('Total miles travelled: ');
var fp;
if(mt>=10000 && mt<20000){
   fp=10;
   console.log("passenger : "+pn )
   console.log("Flyer points : "+fp)
}
if(mt>=20000 && mt<50000){
    fp=20;
    console.log("passenger : "+pn )
    console.log("Flyer points : "+fp)
 }
 if(mt>=50000 && mt<100000){
    fp=30;
    console.log("passenger : "+pn )
    console.log("Flyer points : "+fp)
 }
 if(mt>=100000){
    fp=50;
    console.log("passenger : "+pn )
    console.log("Flyer points : "+fp)
 }
