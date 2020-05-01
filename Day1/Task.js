//Below is the scrabble function that was created
function scrabble(str1, str2) {
  
  //creating a instance of an array with code 256 and a variable i assigned to 0
    var array = new Array(256);
    var i = 0;
    
    //now lets loop and assign zero to index within the range 256 
    for (i = 0; i < 256; i++) {
      array[i] = 0;
    }
    
    //looping through the str1 passed as an argument to the function and adding one to every character code
    for (i = 0; i < str1.length; i++) {
      array[str1.charCodeAt(i)] += 1;
    }


    //now lets check the str2 passed as the second argument if its < 0 it returns false
    for (i = 0; i < str2.length; i++) {
      array[str2.charCodeAt(i)] -= 1;
      if (array[str2.charCodeAt(i)] < 0) {
        return false;
      }
    }

    //else it returns true
    return true;
}
