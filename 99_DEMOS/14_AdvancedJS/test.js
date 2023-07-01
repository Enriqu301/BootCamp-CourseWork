var a = { name: "University of Texas", city: "Austin" }
var b = { name: "Universit of Texas", city: "Austin" }

function test(a, b) {
    for (dog in a) {
        if (a[dog] !== b[dog]) {
            return false
        } else {
            return true
        }
    }
    // return JSON.stringify(a) === JSON.stringify(b)
}

console.log(test(a, b))