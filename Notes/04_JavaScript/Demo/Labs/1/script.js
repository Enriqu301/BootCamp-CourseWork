function printDay(num){
    var daysWeek = ["monday", "tuesday", "wendsay", "thursday", "friday", "saturday", "Sunday"]

    if(num < 0 || num >7){
        return "Invalid Number"
    } 

    return daysWeek [num]
    
}

document.write(printDay(3));
console.log(printDay(4))
