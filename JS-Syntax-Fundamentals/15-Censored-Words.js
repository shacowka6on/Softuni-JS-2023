function censoreWordsFunction(text, word){
    while(text.includes(word)){
        let censoredText = text.replace(word, "*".repeat(word.length));
        text = censoredText;
    }
    console.log(text)
}
censoreWordsFunction("A small sentence with some words small small", "small");
censoreWordsFunction("Find the hidden word hidden", "hidden");