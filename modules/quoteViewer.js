//variable is used to avoid showQuote() running multiple times at once
let imageViewerDebounce = false

function showQuote() {
    //debounce control
    if (imageViewerDebounce) {return}
    else {imageViewerDebounce = true}

    //makes the quoteViewer fade away
    document.querySelector("#quoteViewer").style.opacity = 0

    //uses Quotable API to get the quote and author
    promiseQuote = fetch("https://api.quotable.io/random")
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            return [data.content, data.author]
        })
    //uses Picsum to get a random black and white image
    promisePicsum = fetch("https://picsum.photos/200/300?grayscale")
        .then(function(res) {
            return res.url
        })

    //wait until Quotable and Picsum deliver on promise
    Promise.all([
        promiseQuote,
        promisePicsum
    ])
        .then(function(res) {
            //define variables as information from API data
            let quoteQuote = res[0][0]
            let quoteAuthor = res[0][1]
            let quoteImage = res[1]

            //Put data in quote viewer
            document.querySelector(".quoteViewerImage").onload = function() {
                if (quoteQuote.length < 200) {
                    document.querySelector(".quoteContent").textContent = `\"${quoteQuote}\"`
                    document.querySelector(".quoteAuthor").textContent = `- ${quoteAuthor}`
                } else {
                    //will use this quote instead if the quote is too long
                    document.querySelector(".quoteContent").textContent = "\"Hello.\""
                    document.querySelector(".quoteAuthor").textContent = "- John Zheng"
                }
                //fade back in viewer and reset debounce
                document.querySelector("#quoteViewer").style.opacity = 1
                imageViewerDebounce = false
            }
            document.querySelector(".quoteViewerImage").src = quoteImage
        })
}  
//show quote and image first time on page
showQuote()