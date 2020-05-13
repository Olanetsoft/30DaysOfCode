//the function below convert number to English words
function convertNumberToEnglish(n, joinCharacter) {

    //declare a variable to whole the whole word containing the string
    var wholeWord = n.toString(),units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;

    //declare a variable to store the join character
    var and = joinCharacter || 'and';

    //check if number is zero
    if (parseInt(wholeWord) === 0) {

      //return zero in words
        return 'zero';
    }

    //Declare an Array of units containing words from one to nineteen 
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];


    //Declare an Array of tens containing words from twenty to ninety
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    //Declare an Array of scales containing words in thousand, million, billion
    scales = ['', 'thousand', 'million', 'billion'];


    //Split user argument into 3 digit chunks from right to left 
    start = wholeWord.length;
    chunks = [];

    //iterate while the start variable is not empty
    while (start > 0) {
        end = start;
        chunks.push(wholeWord.slice((start = Math.max(0, start - 3)), end));
    }


    //Now lets Check if function has enough scale words to be able to stringify the user argument
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
      //if true return empty
        return '';
    }


    //Stringify each integer in each chunk 
    results = [];
    for (i = 0; i < chunksLen; i++) {

        chunk = parseInt(chunks[i]);

        if (chunk) {

            // Spliting the chunk into array of individual integers 
            allTheInts = chunks[i].split('').reverse().map(parseFloat);

            //Check If tens integer is 1, i.e. 10, then add 10 to units integer 
            if (allTheInts[1] === 1) {
                allTheInts[0] += 10;
            }

            //Add scale word if chunk is not zero and array of item exists
            if ((word = scales[i])) {
                results.push(word);
            }

            //Add unit word if array of item exists 
            if ((word = units[allTheInts[0]])) {
                results.push(word);
            }

            // Add tens word if array item exists 
            if ((word = tens[allTheInts[1]])) {
                results.push(word);
            }

            //Add 'and' string after units or tens integer ints[0] || ints[1] exits
            if (allTheInts[0] || allTheInts[1]) {

                //Check if Chunk has a hundreds integer or chunk is the first of multiple chunks 
                if (allTheInts[2] || !i && chunksLen) {
                    results.push(and);
                }

            }

            //Add hundreds word if array item exists */
            if ((word = units[allTheInts[2]])) {
                results.push(word + ' hundred');
            }

        }

    }

    //return the result array, reverse and join with ' '
    return results.reverse().join(' ');

}

convertNumberToEnglish(1234567890);