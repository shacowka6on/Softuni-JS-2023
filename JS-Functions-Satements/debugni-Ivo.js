function main(input) {
    let names = {}
   for (let iterator of input) {
       let name = iterator.split(", ")[0].split(" ")[0].split(":")[0]
       if(!names.hasOwnProperty(name)){
        names[name] = new Set()
    }
   }
   for (let iterator of input) {
       let name = iterator.split(", ")[0].split(" ")[0].split(":")[0]
       let numbers = iterator.split(", ")
       numbers[0] = numbers[0].split(": ")[1]
       numbers = numbers.map(x => String(x))
       if(names.hasOwnProperty(name)){
        numbers.forEach(element => {
            names[name].add(element)
        });
       }
   }

   for (let key in names) {
       let sum = 0
       names[key].forEach(x => {
          let xx = 1
          let a = 0;
          if(x[0] == 'J'){
            a = 11
          }
          else if(x[0] == 'Q'){
            a = 12
          }
          else if(x[0] == 'K'){
            a = 13
          }
          else if(x[0] == 'A'){
            a = 14
          }
          else{
            if(x[0] == 1 && x[1] == 0){
                a = 10
                xx = 2;
            }
            else{
                a = Number(x[0])
            }
          }

          if(x[xx] == 'S'){
            a *= 4
          }
          else if(x[xx] == 'H'){
            a *= 3
          }
          else if(x[xx] == 'D'){
            a *= 2
          }
          else if(x[xx] == 'C'){
            a *= 1
          }
          sum += a;
       })
       if(isNaN(sum)){
        sum = 0
       }
       console.log(`${key}: ${sum}`);
    }
}
main('Peter: 2C, 4H, 9H, AS, QS');