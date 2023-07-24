function meetings(inputArr){
    let dictionary = {};
    for(let token of inputArr){
        let [day, name] = token.split(" ");
        if(!dictionary.hasOwnProperty(day)){
            dictionary[day] = name;
            console.log(`Scheduled for ${day}`)
        }else{
            console.log(`Conflict on ${day}!`)
        }
    }
    for(let [key, value] of Object.entries(dictionary)){
        console.log(key + " -> " + value)
    }
}
meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);