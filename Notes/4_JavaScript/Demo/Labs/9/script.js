/*Make an arry and loop through it so that the output on the page 
looks the screenshot. Note: You will need to use some inline css to make this work 
*/
var food = ['burgers', 'fries', 'onion rings'];

food.forEach(function(element){
    document.write("<div style='color: green; font-size: 24px'><br>" + element + "</div>")
})