function checkSameNumbers(arr) {
  let str = arr.toString().split('');

  let result = str.every((el) => {
    if (el == str[0]) {
      return true;
    }
  });

  let sum = 0;
  for (let num of str) {
    sum += parseInt(num);
  }
  console.log(result);
  console.log(sum);
}
checkSameNumbers(2222222);
checkSameNumbers(1234);
