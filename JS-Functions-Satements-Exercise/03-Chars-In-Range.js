function charactersInRange(ch1, ch2){
    let start = Math.min(ch1.charCodeAt(0),ch2.charCodeAt(0));
    let end   = Math.max(ch1.charCodeAt(0),ch2.charCodeAt(0));
    let resultStr = ' ';
    for (let i = start + 1; i < end; i++) {
        resultStr += String.fromCharCode(i) + " ";
    }
    console.log(resultStr.trimEnd());
}
charactersInRange('a','d');
charactersInRange('#', ':');
charactersInRange('C', '#');