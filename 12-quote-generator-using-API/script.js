const button = document.querySelector('.generateBtn');
const loading = document.querySelector('.loading');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const URL = 'https://api.jsonbin.io/v3/b/68e7972e43b1c97be9600656';

async function GetData() {
    loading.style.display = 'block'; 
    quote.style.display = 'none'; 
    author.style.display = 'none'; 
    try {
        const response = await fetch(URL);
        const data = await response.json();

        if (!data.record || data.record.length === 0) {
            throw new Error("No quotes found in the response");
        }

        const randomIndex = Math.floor(Math.random() * data.record.length);
        const selectedQuote = data.record[randomIndex];

        if (!selectedQuote || !selectedQuote.quote || !selectedQuote.author) {
            throw new Error("Quote or author missing");
        }

        quote.innerText = selectedQuote.quote;
        author.innerText = selectedQuote.author;

        loading.style.display = 'none';
        quote.style.display = 'block';
        author.style.display = 'block';
        
    } catch (error) {
        console.log("Unable to fetch the data: ", error);
        loading.style.display = 'none';
        quote.innerText = "Oops! Something went wrong.";
        author.innerText = "";
        quote.style.display = 'block';
    }
}



button.addEventListener('click', GetData);