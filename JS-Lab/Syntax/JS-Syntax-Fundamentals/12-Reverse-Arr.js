function reverseArrNelements(n, arr) {
  let arrElements = new Array(n);
  for (let i = 0; i < n; i++) {
    arrElements[i] = arr[i];
  }
  let result = "";
  for (let el of arrElements.reverse()) {
    result += el + " ";
  }
  console.log(result);
}
reverseArrNelements(3, [10, 20, 30, 40, 50]);
reverseArrNelements(4, [-1, 20, 99, 5]);
reverseArrNelements(2, [66, 43, 75, 89, 47]);
