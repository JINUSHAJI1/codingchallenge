const read = require('readline-sync')
const fs = require('fs')
var pass = [];

for (let i = 1; i <= 3; i++) {
    let input = read.question('Enter '+i+' th passenger name: ');
    pass.push(input);
}
console.log(pass);
//creating json file
var stringar = JSON.stringify(pass);
fs.writeFileSync('data.json', stringar);
console.log(stringar)
//ascending order
for (let i = 0; i < pass.length; i++) {

    for (let j = 0; j < pass.length - i - 1; j++) {

        if (pass[j] > pass[j + 1]) {

            var temp = pass[j]

            pass[j] = pass[j + 1]

            pass[j + 1] = temp

        }

    }
}
console.log("\n")
console.log("ascending order of array: \n");
console.log(pass);

// descending order of array
for (let i = 0; i < pass.length; i++) {

    for (let j = 0; j < pass.length - i - 1; j++) {

        if (pass[j] < pass[j + 1]) {

            var temp = pass[j]

            pass[j] = pass[j + 1]

            pass[j + 1] = temp

        }

    }
}
console.log("\n")
console.log("Decending order of array: \n");
console.log(pass);


//search 
let search = read.question('Enter  name for search: ');
// console.log(search)
let se = 0;
for (let i = 0; i < 3; i++) {
    if (pass[i] == search) {
        se = 1;
        break;
    }
    else {
        se = 0;


    }
}
if (se == 1) {
    console.log("Name"+search+" found");
}
else
    console.log("Name "+search+" not found");

    //length of each element
console.log("length of each name")
for(let i=0;i<3;i++){
    console.log(pass[i] +": "+pass[i].length);
}

//split in space 
let split=[];
for(let i=0;i<3;i++){
     split=pass[i].split(' ')
    split.push[i];
    console.log(split);
}


// console.log("e.Splitting names")
// pass.forEach((i)=> {
//     var newPass = i.split(' ')
//     newPass.forEach((item)=> {
//         process.stdout.write(`${item}, `)
//     })
// })
/// duplicate entries
console.log(" duplicates entries")
for (let i = 0; i < pass.length; i++) {

    for (let j = i+1; j < pass.length; j++) {

        if (pass[i] == pass[j]) {

            //names[j]=false

            console.log( pass[j])

        }

    }

}