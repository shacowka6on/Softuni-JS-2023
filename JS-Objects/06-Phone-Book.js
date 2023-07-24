function phoneBookFunction(phoneBook){
    let dictionary = {};
    for(let token of phoneBook){
        let [name, phone] = token.split(" ");
        dictionary[name] = phone;
    }

    const entries = Object.entries(dictionary);
    for(let [key, value] of entries){
        console.log(`${key} -> ${value}`)
    }
}
phoneBookFunction(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])