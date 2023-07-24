function solve(currStock, deliveredStock){
    currStock = currStock.concat(deliveredStock)
    let obj = {}
    for (let i = 0; i < currStock.length - 1; i++) {
        if(i % 2 == 0){
            let product = currStock[i]
            let quantity = Number(currStock[i + 1])
            if(obj.hasOwnProperty(product)){
                obj[product] += quantity
            }else{
                obj[product] = quantity
            }
        }
    }
    console.log(obj)
}
 solve(
['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30'])