// Make a function  called withoutFirst that returns all the elements in the array Except for the first one 

function withoutFirst(array){
    array.shift()
    return array
}

console.log(withoutFirst([1,2,3,4]));