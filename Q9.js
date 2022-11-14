const read = require('readline-sync')
const fs = require('fs')
let m=parseInt(read.question("Enter number of passengers : "))
for(let i=1;i<=m;i++){
    let age=parseInt(read.question("Enter age of " +i +" th passenger : "))
           if(age<10){
            console.log("Kid")
        }
    if(age>=10 && age<30){
     console.log("Youth")

    }
    if(age>=30 && age<60){
            console.log("Adult")
        }
        if(age>=60 ){
                console.log("Older")
            }
}
    