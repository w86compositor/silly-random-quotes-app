$(document).ready(()=> {
    console.log("ready");
    let quotesArray = ["quote1", "quote2", "quote3", "quote4", "quote5", "quote6", "quote7", "quote8", "quote9", "quote10"];



    function randomQuote() {
        let randQuote = Math.floor(Math.random() * quotesArray.length);
         return $("p#quote").text(quotesArray[randQuote]);
    };
    
    
    $("a#quote-button").on("click", () => {
        return randomQuote();
    });
});

