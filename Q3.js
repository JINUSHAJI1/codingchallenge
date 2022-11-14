const read = require('readline-sync')
const fs = require('fs')
let flight=[]
for (let i = 0; i < 3; i++) {
    let ff = read.question('Flight fare : ');
    let fff=parseFloat(ff)
    flight.push(fff);
}
console.log(flight);
console.log("\n")
//ascending order
let asc=[];
for(let i=0;i<3;i++)
{
    for(let j=0;j<3-i-1;j++)
    {
        if(flight[j]>flight[j+1])
        {
            temp=flight[j+1];
            flight[j+1]=flight[j];
            flight[j]=temp;
        }
    }
}
for(let i= 0; i< 3; i++) 
{
 asc.push(flight[i])
   
}
console.log("Ascending order")
console.log(asc);

//Descending order
let dsc=[];
for(let i=0;i<3;i++)
{
    for(let j=0;j<3-i-1;j++)
    {
        if(flight[j]<flight[j+1])
        {
            temp=flight[j+1];
            flight[j+1]=flight[j];
            flight[j]=temp;
        }
    }
}
for(let i= 0; i< 3; i++) 
{
 dsc.push(flight[i])
   
}
console.log("Descending order")
console.log(dsc);
//search
let search = read.question('Enter fare for search: ');
// console.log(search)
let se = 0;
for (let i = 0; i < 3; i++) {
    if (flight[i] == search) {
        se = 1;
        break;
    }
    else {
        se = 0;


    }
}
if (se == 1) {

    console.log(search + " found");
}
else
    console.log(search + " not found");


// min and max fares
for(let i=0;i<3;i++){
    for(j=0;j<2;j++){
        // var max=flight[i];
        if(flight[j]>flight[i]){
          max=flight[j];
        }
        else{
            max=flight[i]
        }
}

}console.log("maximum fare is : "+max)

for(let i=0;i<3;i++){
    for(j=1;j<3;j++){
        var min=flight[i];
        if(flight[i]>flight[j]){
          min=flight[j];
        }
        
    
}

}console.log("Minimum fare is : "+min)

console.log(" duplicates elements : ")
for (let i = 0; i < 3; i++) {

    for (let j = i+1; j < 3; j++) {

        if (flight[i] == flight[j]) {

            //names[j]=false

            console.log( flight[j])

        }

    }

}