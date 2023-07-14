function sumDigits(arr) {
  let result = 0;
  for (let num of arr.toString().split("")) {
    result += parseInt(num);
  }
  console.log(result);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);
