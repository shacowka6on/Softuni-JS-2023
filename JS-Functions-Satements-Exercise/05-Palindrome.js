function palindromeCheck(arr){
    const isPalindorme = (number, reversedNumber) => {
        reversedNumber = Number(String(number).split('').reverse().join(''))
        return reversedNumber == number;
    }
    for(let i = 0; i < arr.length; i++){
        console.log(isPalindorme(arr[i]));
    }
}
palindromeCheck([123,323,421,121])