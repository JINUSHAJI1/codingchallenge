const read=require('readline-sync')
const fs=require('fs');
const today = '2022-11-14'
let todayyear=parseInt(today.substring(0,4))
let todaymonth=parseInt(today.substring(5,7))
let todayday=parseInt(today.substring(8,11))

let dob=read.question("Enter Date Of Birth(YYYY:MM:DD) : ")
let y=dob.substring(0,4)
let m=dob.substring(5,7)
let d=dob.substring(8,11)
let year=parseInt(y)
let yage=todayyear-year
let mage=(yage*12)+(todaymonth-m)
let wage=(mage*4)-(28/todayday)
let dage=(wage*7)
let hage=(dage*24)
// let mage=
 console.log("Age in Year : "+yage+" Years")
 console.log("Age in Month : "+mage +" Months")
 console.log("Age in Week : "+wage +" Weeks")
 console.log("Age in Days : "+dage +" Days")
 console.log("Age in Hours : "+hage +" Hours")
// console.log(dob)

// console.log("Age in Year : " )
if( y % 400 == 0)
            {
                console.log(y+" is a leap Year ");
            }
            else if( y % 100 != 0 && y % 400 ==0)
            {
                console.log(y+" is a leap Year ");

            }
            else
            {
                console.log(y+" is not a leap Year ");

            }
