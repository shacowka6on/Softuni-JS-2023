function ticketPriceCalculator(day, age) {
  let ticketPrice;
  if (day == "Weekday") {
    if (age >= 0 && age <= 18) {
      ticketPrice = 15;
    } else if (age > 18 && age <= 64) {
      ticketPrice = 18;
    } else if (age > 64 && age <= 122) {
      ticketPrice = 12;
    } else {
      console.log("Error!");
      return;
    }
  }else if(day =="Weekend"){
    if (age >= 0 && age <= 18) {
      ticketPrice = 15;
    } else if (age > 18 && age <= 64) {
      ticketPrice = 20;
    } else if (age > 64 && age <= 122) {
      ticketPrice = 15;
    } else {
      console.log("Error!");
      return;
    }
  }else{
    if (age >= 0 && age <= 18) {
        ticketPrice = 5;
    } else if (age > 18 && age <= 64) {
        ticketPrice = 12;
    } else if (age > 64 && age <= 122) {
        ticketPrice = 10;
    } else {
      console.log("Error!");
      return;
    }
  }
  console.log(ticketPrice + '$');
}
ticketPriceCalculator('Weekday',42);
ticketPriceCalculator("Holiday", -12);
ticketPriceCalculator("Holiday", 15);