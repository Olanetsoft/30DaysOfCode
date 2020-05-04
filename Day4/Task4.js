//function created below
function primeTime(passAnyNumber) {

    //This produce an array containing all number of to and including num
    let numArray = [];

    //This loop through the passed parameter and pushes it into an array
    for (let i = 2; i <= passAnyNumber; i++) {
        numArray.push(i);
    }

    //Then to remove non-prime numbers from the array     
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });

    return numArray;

}

primeTime(11);

