// Make a fucntion that takes width and height. If the width and height are the same return "square", else return the perimeter.

function square(w, h){
    if(w === h){
        return "square"
    }else{
        var perimeter = 2 * (w+h)
        return perimeter
    }

}

console.log(square(4,5))
console.log(square(4,4))