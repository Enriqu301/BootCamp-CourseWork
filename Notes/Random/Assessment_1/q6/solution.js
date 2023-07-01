function greet(name){
    //the original was reading the code from first to last. Moving it to the top reads that first then executes not caring for the return for a normal greeting.
    if(name === "Johnny") 
        return "Hello, my love!";
    return "Hello, " + name + "!";
}