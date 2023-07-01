//Make a function that takes in one arguemnt (an array) and returns the last value of the array.

/*for example: 
let a = [1,2,3,4]
lastElement([1,2,3,4]) // 4 */

function lastElement(arr){
    if(arr.length > 0 && Array.isArray(arr)){
        return arr[arr.length - 1]
    }else {
        return "NO WRONG"
    }
}
    
    


console.log(lastElement([1,2,3,4]))
console.log(lastElement([1,3,4,5,]))
console.log(lastElement([3.65,6,7,3]))
