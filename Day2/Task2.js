//declare the number of times
var numberTimes = 0;

const singleToStupor = (anyNumber) => {

    //converting the passed argument to string to enable splitting afterward
    anyNumber = anyNumber.toString();

    //using the while loop to check if the passed numbers length is greater than 1
    while (anyNumber.length > 1) {

        //the numberTimes increases by one after every check
        numberTimes++;

        //the number is split,map and reduced to two, afterwards its then multiplied
        anyNumber = anyNumber.split('').map(Number).reduce((first, second) => first * second).toString();
    }
    return numberTimes;
}