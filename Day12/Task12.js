//the pagrams function below
function thePangramsFunction(str) {
    //Declare the whole alphabets
    var alphabets = "abcdefghijklmnopqrstuvwxyz";

    //match all whitespace, not just the first.
    var theRegex = /\s/g;

    //convert all to lower case then replace theRegex with nothing 
    var lowercase = str.toLowerCase().replace(theRegex, "");

    //Declare an empty array 
    var result = [];

    //Iterate through the alphabets to check the index of lowercase
    for (var i = 0; i < alphabets.length; i++) {
        if (lowercase.indexOf(alphabets[i]) === -1) {

            //push each value to the array
            result.push(alphabets[i]);
        }
    }
    if (result.length > 0) {
        console.log("The remaining alphabets required to  make it a pangram")
        console.log(result);
    }
    else {
        return true
    }
}
thePangramsFunction("the quick brown fox jumps over the lazy dog");
