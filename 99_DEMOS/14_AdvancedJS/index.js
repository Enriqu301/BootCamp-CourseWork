function inner(){
    let i = 0;
    console.log('I am inside the INNER function now')
}

function outer(){
    console.log('I am inside the OUTER function now')
    inner();
}

outer();

