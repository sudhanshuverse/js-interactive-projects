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
        const response = await fetch(URL)
        const data = await response.json()

         const randomIndex = Math.floor(Math.random() * data.record.length); // safer than 299
        quote.innerText = data.record[randomIndex].quote;
        author.innerText = data.record[randomIndex].author;

        loading.style.display = 'none'; 
        quote.style.display = 'block'; 
        author.style.display = 'block'; 
        
    }catch(error) {
        console.log("Unable to fetch the data: ", error);
        loading.style.display = 'none'; 
    }
}


button.addEventListener('click', GetData);