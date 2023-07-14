let numbers = [1,2,3,4,5];
console.log(numbers.pop());
for(let num of numbers){
    console.log(num);
}
const users = ["John", "Alex", "Kim", "Funiq"];
const greetingsUsers = users.map(function(user){
    return `Hi ${user}!`;
})
for(let greet of greetingsUsers){
    console.log(greet);
} 
const domains = ["example.com", "softuni.com"];

for(let domain of domains){
    let newDomains = domain.replace(".com", ".bg");
    console.log(newDomains)
}
const domainWithBGSuffix = domains.map(function(domain){
    return domain.replace(".com", ".bg");
})
console.log(domainWithBGSuffix);
//ctrl + F2 == ctrl + r + r
//cl(tab) == console.log
