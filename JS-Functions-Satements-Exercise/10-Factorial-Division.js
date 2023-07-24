function solve(fac1, fac2){
    console.log((factorial(fac1) / factorial(fac2)).toFixed(2))
}
function factorial(n){
    if(n == 1 || n == 0){
        return 1;
    }

    return n * factorial(n - 1);
}
solve(5,2)
solve(6,2)