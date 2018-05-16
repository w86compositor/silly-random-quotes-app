$(document).ready(() => {
	console.log('ready!');

	$("i#tweet-icon").on("click", () => {
		let quote = $.trim($("#quote").text());
		window.open(`https://twitter.com/intent/tweet?text=${quote}`);
	});

	let endpoint = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';

	let getRandomQuote = () => {
		$.getJSON(`${endpoint}`, (data) => {
			$("#quote").html(`<i class="fas fa-quote-left"></i> ${data.quoteText} <i class="fas fa-quote-right"></i>`);

			//Checking if the quote does not have an author
			if (data.quoteAuthor !== "") {
				$("#quote-author").html(`${data.quoteAuthor} at <a href="${data.quoteLink}" target="_blank" class="card-link">forismatic</a>`);
			} else {
				$("#quote-author").html(`Unknown at: <a href="${data.quoteLink}" target="_blank" class="card-link">forismatic</a>`);
			}
		});
	
		//Create a tweet function
		function tweetQuote() {
			window.open(`https://twitter.com/intent/tweet?text=${data.quoteText}`);
		}
		$("#tweet-icon").on("click", tweetQuote);

	};//end of getRandomQuote

	$("#quote-button").on("click", getRandomQuote);

});// end of document.ready