$(document).ready(() => {
    console.log('ready!');

    let endpoint = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';

    let getRandomQuote = () => {
        jQuery.getJSON(`${endpoint}`, (data, status) => {
            console.log(status);
            $("#quote").html(`<i class="fas fa-quote-left"></i> ${data.quoteText} <i class="fas fa-quote-right"></i>`);

            //Checking if the quote does not have an author
            if (data.quoteAuthor !== "") {
                $("#quote-author").html(`${data.quoteAuthor} at <a href="${data.quoteLink}" target="_blank" class="card-link">forismatic</a>`);
            } else {
                $("#quote-author").html(`Reference at: <a href="${data.quoteLink}" target="_blank" class="card-link">forismatic</a>`);
            }

        }).fail((error) => {
            $("#quote").html(`Ah snap...there's a technical error: ${error}`);
            $("#quote-author").html("");
        })
    };

    $("#quote-button").on("click", () => {
        getRandomQuote();
    });
})