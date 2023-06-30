function positiveSum(arr) {
    let sum = 0; 
    //for each grabs elemetns from array seperates them
    arr.forEach((element) => { 
        //the if statement is here to prevent no numbers from being inputed from the user.And avoids the negative numbers ready to be added in the next step
        if(element >= 0 ){
            //executes the main way of solving the problem. 
        sum = sum + element;
    }
    });
    return sum;    
}