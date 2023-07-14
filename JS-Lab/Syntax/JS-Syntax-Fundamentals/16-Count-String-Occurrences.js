function countOccurrences(text, word){
    let splitText = text.split(' ');
    let result = splitText.filter(el => el == word).length;
    console.log(result);
}
countOccurrences("This is a word and it also is a sentence", "is");
countOccurrences('softuni is great place for learning newprogramming languages','softuni');