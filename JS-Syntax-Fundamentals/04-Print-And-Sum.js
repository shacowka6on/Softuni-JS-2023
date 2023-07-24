function sumNumbers(start, end){
    let str = '';
    let sum = 0;
    for (let i = start; i <= end; i++) {
        str += i + " ";
        sum += i;
    }
    console.log(str + "\n" + `Sum: ${sum}`);
}
sumNumbers(5, 10);
sumNumbers(0, 26);
sumNumbers(50, 60);