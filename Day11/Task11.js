//initialize the number from 1 to 9
var numbers = [1,2,3,4,5,6,7,8,9];

//initialize the proposed target number
var targetNumber = 100;

//initialize the possible combinations using the pow
var combinations = Math.pow(3,numbers.length-1);

//initialize the result array
var results = [];

// declare the possible operands with key and value
var possibleOperands = { 0 : "", 1 : "-", 2 : "+" };

//Now lets iterate through the possible combinations

for(let i = 0; i <= combinations; i++)
{
    // set the translator to translates the index in base 3
    var translator = i.toString(3);    

    // now we pad the resulting string with zeros, split and convert back to numbers using map
    var paddedValue = ("00000000" + translator)
    .substr(-8,8)
    .split("")
    .map((v) => parseInt(v));


    //declare a variable that translate each array number with the translator between 1 to 9
    var res = "1"+possibleOperands[paddedValue[0]]
    +"2"+possibleOperands[paddedValue[1]]
    +"3"+possibleOperands[paddedValue[2]]
    +"4"+possibleOperands[paddedValue[3]]
    +"5"+possibleOperands[paddedValue[4]]
    +"6"+possibleOperands[paddedValue[5]]
    +"7"+possibleOperands[paddedValue[6]]
    +"8"+possibleOperands[paddedValue[7]]
    +"9";

	if(eval(res) === targetNumber)
	{
        results.push(res);
    }
    
}
console.log(results)