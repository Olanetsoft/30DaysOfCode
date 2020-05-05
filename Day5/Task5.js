//The function is created below
function noSeven(num) {

    //declaring variables
    var arr = [];
    var start = 0;
    var end = "";

    // Find the position within the str range 
    for (let i = 0; i < num.length; i++) {
        if (num[i] == '7') {
            num[i] = '5';
            end += '2';
            start = 1;
        }
        else if (start) {
            end += '0';
        }
    }
    //store the result
    var result = num - end;
    //convert to sting before pushing
    theStringValue = result.toString();
    arr.push(theStringValue);
    arr.push(end);
    return arr;
}

noSeven('70');