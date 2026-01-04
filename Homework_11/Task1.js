function justText(text, ms) {

    setTimeout(function(){
        console.log(`Print ${text}`)
    }, ms);
}
justText("Hello", 5000);