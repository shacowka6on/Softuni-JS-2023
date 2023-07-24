function oddEvenSum(number){
    let numToString = number.toString();
    let even = 0;
    let odd = 0;
    for (let i = 0; i < numToString.length; i++) {
        let currentNum = parseInt(numToString[i]);

        if(currentNum % 2 == 0){
            even += currentNum;
        }else{
            odd += currentNum;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}
oddEvenSum(1000435);
oddEvenSum(3495892137259234);