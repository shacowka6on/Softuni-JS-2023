function mathPow(base, pow){
    //console.log(Math.pow(base, pow));
    let result = 1;
    for (let i = 0; i < pow; i++) {
        result *= base;
    }
    console.log(result)
}
mathPow(2,8);
mathPow(3,4);