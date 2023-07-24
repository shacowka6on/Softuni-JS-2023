function cat(array) {
    class Cat {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
      }
    }
    let cats = [];
    for(const token of array){
        let [catName, catAge] = token.split(' ')
        let cat = new Cat(catName, catAge);
        cats.push(cat);
    }
    cats.forEach((c) => c.meow());
  }
  cat(["Mellow 2", "Tom 5"]);