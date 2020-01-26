const quotes = [
{
    name:'Chuy',
    quote:'I still do not know what i am doing'
},{
    name:'Yo',
    quote:'Why it wont change color?'
},{
    name:'Myslef',
    quote:'I hope it works'
},{
    name:'Me',
    quote:'Those kids are noisey'
},{
    name:'I',
    quote:'I still dont know why only the first' 
},{
    name:'Yo again',
    quote:'Figured it out'
}
    
]

const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){
    
    let number = Math.floor(Math.random()*quotes.length);
    
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}





