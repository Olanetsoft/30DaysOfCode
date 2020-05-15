
//As we know Pascal’s triangle is a triangular array of the binomial coefficients.
//so lets define a binomial function
function returnPascal(n) {
    // Iterate through every line 
    // then console log the entries
    for (let line = 0; line < n; line++) {
        // Every line has number of  
        // integers equal to line  
        // number 
        for (let i = 0; i <= line; i++) {
            console.log("%i ", binomial(line, i), "\n");
        }
    }
}

//binomial coefficients are a family of positive integers that occur as coefficients in the binomial theorem. 
//function declared below
function binomial(n, k) {
    var result = 1;
    if (k > n - k)
        k = n - k;
    for (let i = 0; i < k; ++i) {
        result *= (n - i);
        result /= (i + 1);
    }

    return result;
}
returnPascal(2)
