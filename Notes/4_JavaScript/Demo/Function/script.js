//Function for old enough to drink 

// function oldEnough (age) {
//     if (age>=21){
//         return "Yes"
//     } else {
//         return "No"
//     }
// }
// function oldEnough(age){}
//     if(age > 21){
//         return "Yes"
//     }
//         return "No"
// }

//SIMPLE VERSION OF PREVEIOS TOP OPTIONS
function oldEnough (age){
    return age > 21 ? "yes" 
    : age === 21
        ? "Barely"
        : "NO"
}

var result1 = oldEnough(21)
console.log(result1)