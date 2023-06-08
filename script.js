const quotes = [{
    quote: `“There is always light. If only we're brave enough to see it. If only we're brave enough to be it.”`,
    writer: `– Alexander the Great`
}, {
    quote: `“Keep your face always toward the sunshine, and shadows will fall behind you.”`,
    writer: `– Walt Whitman`
}, {
    quote: `“If life were predictable it would cease to be life, and be without flavor.”`,
    writer: `– Babe Ruth`
}, {
    quote: `“Keep a little fire burning; however small, however hidden.”`,
    writer: `– Cormac McCarthy`
}, {
    quote: `“Somewhere, something incredible is waiting to be known.”`,
    writer: `– Carl Sagan`
}, {
    quote: `“Education is the most powerful weapon which you can use to change the world.”`,
    writer: `– Pablo Picasso`
}, {
    quote: '“Take your victories, whatever they may be, cherish them, use them, but don’t settle for them.”',
    writer: `– Mia Hamm`
}, {
    quote: `“Experience is a hard teacher because she gives the test first, the lesson afterwards.”`,
    writer: `– Vernon Sanders Law`
}, {
    quote: `“Perfection is not attainable. But if we chase perfection we can catch excellence.”`,
    writer: `- Vince Lombardi`
}, {
    quote: `“You can never leave footprints that last if you are always walking on tiptoe.”`,
    writer: `– Emily Acker`
}, 
 {
    quote: `“As long as you’re alive, you always have the chance to start again.”`,
    writer: `– Leymah Gbowee`
}, 
{
    quote: `“You are never too old to start over. Every day is a chance to make changes to create the life we want.”`,
    writer: `– Karon Waddell`
}, ]





let btn = document.querySelector("#btn2");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".content");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

    
    writer.innerHTML = quotes[random].content;
})