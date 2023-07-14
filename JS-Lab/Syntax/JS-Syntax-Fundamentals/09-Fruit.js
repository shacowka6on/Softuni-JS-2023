function priceFruitCalc(fruitType, weightGrams, pricePerKG){
    let price = (weightGrams / 1000) * pricePerKG;
    console.log(`I need $${price.toFixed(2)} to buy ${(weightGrams / 1000).toFixed(2)} kilograms ${fruitType}.`);
}
priceFruitCalc('orange', 2500, 1.80);
priceFruitCalc('apple', 1563, 2.35);