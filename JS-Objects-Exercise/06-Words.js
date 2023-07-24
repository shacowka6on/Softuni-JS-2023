function solve(input){
    let wantedWords = input.shift().split(' ')
    let obj = {}
    Array.from(wantedWords).forEach((x) => {
        obj[x] = 0
    })
    Array.from(input).forEach((x) => {
        if(obj.hasOwnProperty(x)){
            obj[x]++;
        }
    })
    for (const item of Object.entries(obj).sort((a, b) => b[1] - a[1])) {
        console.log(item[0] + " - " + item[1])
    }
}
solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ])
solve([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']
    )