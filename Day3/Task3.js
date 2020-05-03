//The function is created below
function everythingIsPackaging(insertTheNumber, theWidth) {

    //convert the second argument to string and then minus the length from the first argument
    insertTheNumber -= theWidth.toString().length;


    //check if the number is greater than zero i.e a positive number
    if (insertTheNumber > 0) {

        //Return a new array using Array.prototype with the first argument and test result of the second argument
        return new Array(insertTheNumber + (/\./.test(theWidth) ? 2 : 1)).join('0') + theWidth;
    }

    // This will always return a string
    return theWidth + ""; 
}
everythingIsPackaging(5, 22);