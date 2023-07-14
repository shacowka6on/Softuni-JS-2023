function calculateCircleArea(arg) {
  let inputType = typeof arg;
  if (inputType == "number") {
    let result = Math.PI * Math.pow(arg, 2);
    console.log(result.toFixed(2));
  } else {
    console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
  }
}
calculateCircleArea(5);
calculateCircleArea("faf");
calculateCircleArea(true);
calculateCircleArea(null);
