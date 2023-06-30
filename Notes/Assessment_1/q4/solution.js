function countSheeps(arrayOfSheep) 
{
    //this variable of 0 helps with the for loop
var num=0;
//for loop will loop through the array. lenght will give us the number of all elements in the array. It will then ask if its a true to count up 
    for(var i=0; i<arrayOfSheep.length; i++)
    {  
        //takes in the i++ and jumps through the array taking onlint true 
        if(arrayOfSheep[i]==true){ num++; }
    }
    return num;
}