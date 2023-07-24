function personInfo(firstName, lastName, age){
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    person = {
        sayHello: function(){
        console.log(`Hey guys, ${person.firstName} here!`);
        }
    }

    person.sayHello1 = () => console.log("Hey guys!");
    
}
personInfo('Peter', 'Avramov', 22);

function cityInfo(name, area, population, country, postcode ){
    let city = {};
    
    city.name = name;
    city.area = area;
    city.population = population;
    city.country = country;
    city.postcode = postcode;

    for(let [key, value] of Object.entries(city)){
        console.log(`${key} -> ${value}`)
    }
}
cityInfo("Sofia", 492, 1238438, "Bulgaria", 1000);

function personTest(name){
    let person = {
        firstName: 'John',
        lastName: 'Doe',
        age:  function(myAge){
            return `My age is ${myAge}!! :D`
        },
        fullName(){
            return this.firstName + ' ' + this.lastName;
        }
    }
    console.log(person.age(21));
    console.log(person.fullName())//John Doe
    
    const jonny = person.fullName();
    console.log(jonny);//John Doe

}

function cityTaxes(name, population, treasury){
    return  {
        name, population, treasury,
        taxRate: 10,
        collectTaxes(){
            this.treasury += this.population * this.taxRate
        },
        applyGrowth(percent){
            population += Math.floor(this.population * percent / 100)
        },
        applyRecession(percent){
            treasury -= Math.floor(this.treasury * percent / 100)
        },
    };
}
cityTaxes('Tortuga',7000,15000);

personTest('Ptr');