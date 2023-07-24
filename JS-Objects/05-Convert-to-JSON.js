function convertToJson(name, lastName, hairColor){
    const obj = {name, lastName, hairColor};
    console.log(JSON.stringify(obj));
}
convertToJson('George', 'Jones','Brown');