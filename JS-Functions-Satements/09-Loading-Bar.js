function printLoadingBar(percentageLoaded){
    let bar = '';
    for (let i = 0; i < 100; i += 10) {
        if(i < percentageLoaded){
            bar += '%';
        }else{
            bar += '.';
        }
    }
    if(percentageLoaded == 100){
        console.log(`${percentageLoaded}% Complete!\n[${bar}]`);
    }else{
        console.log(`${percentageLoaded}% [${bar}]\nStill loading...`);
    }
}
printLoadingBar(30);
printLoadingBar(50);
printLoadingBar(100);
