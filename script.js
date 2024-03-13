const quoteContainer =document.getElementById('quote-container');
const authorText =document.getElementById('author');
const quoteText =document.getElementById('quote');
const newQuoteBtn=document.getElementById('new-quote');
const twitterBtn=document.getElementById('twitter-button');
const loader=document.getElementById('loader');

function showLoadingSpinner(){
    loader.hidden=false;
    quoteContainer.hidden=true;

}

function completeLoading(){
    loader.hidden=true;
    quoteContainer.hidden=false;
}


let apiQuotes=[];
function newQuote(){
    showLoadingSpinner();
    const quote=apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    authorText.textContent =quote.author;
    quoteText.textContent= quote.text;
    completeLoading();
}
async function getQuotes(){
    showLoadingSpinner();
    const apiUrl="https://type.fit/api/quotes";
    try{
        const response=await fetch(apiUrl);
        apiQuotes=await response.json();
        newQuote()

    }
    catch(error){

    }

}
function tweetQuote() {
    const tweetUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(tweetUrl,"_blank");

}
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote)
getQuotes()