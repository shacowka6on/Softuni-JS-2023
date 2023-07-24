function addressBook(inputArray){
    let dictionary = {};
    for(let token of inputArray){
        let [name, address] = token.split(':');
        dictionary[name] = address;
    }

    for(let [key, value] of Object.entries(dictionary).sort()){
        console.log(`${key} -> ${value}`)
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);

addressBook([
'Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'
]);