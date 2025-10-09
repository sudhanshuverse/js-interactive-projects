const button = document.querySelector('.generateBtn');
const loading = document.querySelector('.loading');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const URL = 'https://api.jsonbin.io/v3/b/68e7972e43b1c97be9600656';

async function GetData() {
    loading.style.display = 'block'; // show loading
    quote.style.display = 'none'; // hide quote while loading
    author.style.display = 'none'; // hide author while loading
    try {
        const response = await fetch(URL)
        const data = await response.json()

         const randomIndex = Math.floor(Math.random() * data.record.length); // safer than 299
        quote.innerText = data.record[randomIndex].quote;
        author.innerText = data.record[randomIndex].author;

        loading.style.display = 'none'; // hide loading
        quote.style.display = 'block'; // show quote
        author.style.display = 'block'; // show author
        
    }catch(error) {
        console.log("Unable to fetch the data: ", error);
        loading.style.display = 'none'; // hide loading even on error
    }
}


button.addEventListener('click', GetData);