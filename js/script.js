// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote);

window.setInterval(printQuote, 30000);




//this it the main function that brances out to run other functions
function printQuote () {
    randomColour();
    var quote = getRandomQuote()

    
       
    //checks to see if quote exists in displayed array, and either grabs a new quote, displays the quote. once it hits the array length of the quote bank (25 currently) then it'll reset the displayed array and allow for previous quotes to be put up again
     if (displayed.indexOf(quote) !== -1) {
      printQuote();   
         if (displayed.length === quotes.length) {
          displayed = [];   
             
         }
     } else if (displayed.indexOf(quote) === -1) { 
         displayed.push(quote);
           document.getElementById("quote").innerHTML = quote.quote;
           document.getElementById("source").innerHTML = quote.source;
         if (quote.citation !== undefined) {
         document.getElementById("source").getElementsByClassName("citation")[0] = quote.citation;
         }
         //console.log(displayed.length); to check whether loops after all (25) quotes have been displayed, removed if required
                              
        }
     };


//this changes the background to a new colour which is randomly selected. 
function randomColour () {
    var colourNum ;
    var RGB = [];
    //comes up with a random number between 1-140 and pushes it into an array, loops 3 times total.
        for (i = 0; i < 3; i++) {
    colourNum = Math.floor(Math.random() * 140) + 1;
            RGB.push(colourNum)
        }
    //changes the css of the body background colour and assigns a RGB value
    document.body.style.backgroundColor = 'rgb(' + RGB + ')';
};

//var i;
var displayed = [];   

//this function selects the quote from the var quotes array

    //loops through quotes array and assigns to designated variables, also allows any undefined values to be displayed as nothing rather than undefined
     function getRandomQuote() { 
    var i = Math.floor(Math.random() * quotes.length) ;
            return quotes[i];
    };




//this is the bank of quotes to be used
var quotes = [
    {
        quote: "Don\'t cry because it\'s over, smile because it happened",
        source: "Dr. Seuss"
    },
    {
        quote: "Be yourself, everyone else is already taken", 
        source:"Oscar Wilde"
    }, 
    {
        quote: "So many books, so little time", 
        source: "Frank Zappa"
    },
    {
        quote: "Be the change you want to see in the world", 
        source: "Mahatma Ghandi"
    },
    {
        quote: "If you have to tell the truth, you don\'t have to remember anything", 
        source: "Mark Twain"},
    {
        quote: "Without music life would be a mistake", 
        source: "Friedrich Nietzsche", 
        citation: "Twilight of the Idols"
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not", 
        source: "André Gide", 
        citation: " Autumn Leaves"
    },
    {
        quote: "Life is what happens to us while we are making other plans",
        source: "Allen Saunders"
    },
    {
        quote: "The fool doth think he is wise, but the wise man knows himself to be a fool", 
        source: "William Shakespeare", 
        citation: " As you like it"
    },
    {
        quote: "If you can\'t explain it to a six year old, you don\'t understand it yourself",
        source: "Albert Einstein"
    },
    {
        quote: "We read to know we\'re not alone",
        source: "William Nicholson",
        citation: " Shadowlands"
    },
    {
        quote: "Everything you can imagine is real",
        source: "Pablo Picasso"
    },
    {   
        quote: "Life isn\'t about finding yourself. Life is about creating yourself", 
        source: "George Bernard Shaw"
    },
    {
        quote: "Things change. And friends leave. Life doesn\'t stop for anybody",
        source: "Stephen Chbosky",
        citation: "The Perks of Being A Wallflower"
    },
    { 
        quote: "I am free of all prejudice. I hate everyone equally",
        source: "W.C. Fields"
    },
    {
        quote: "You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us. And the world will live as one",
        source: "John Lennon"
    },
    {
        quote: "I\'m the one that\'s got to die when it\'s time for me to die, so let me live my life the way I want to",
        source: "Jimi Hendrix",
        citation: " Axis: Bold as Love"
    },
    {
        quote: "It\’s no use going back to yesterday, because I was a different person then",
        source: "Lewis Carroll",
        citation: " Alice in Wonderland"
    },
    {
        quote: "The only true wisdom is in knowing you know nothing",
        source: "Socrates"
    },
    {
        quote: "Everyone thinks of changing the world, but no one thinks of changing himself", 
        source: " Leo Tolstoy"
    },
    {
        quote: "Perhaps one did not want to be loved so much as to be understood", 
        source: "George Orwell",
        citation: " 1984"
    },
    {
        quote: "There is only one thing that makes a dream impossible to achieve, the fear of failure",
        source: "Paulo Coelho", 
        citation: " The Alchemist"
    },
    {
        quote: "Those who believe in telekinetics, raise my hand ", 
        source: "Karl Vonnegut"
    },
    {
        quote: "I love sleep. My life has the tendency to fall apart when I\'m awake, you know?",
        source: "Ernest Hemingway"
    },
    {   
        quote: "Get busy living or get busy dying", 
        source: "Stephen King",
        citation: " Different Seasons"
    }
];




