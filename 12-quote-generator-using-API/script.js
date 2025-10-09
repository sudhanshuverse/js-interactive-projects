const button = document.querySelector('.generateBtn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const URL = 'https://api.jsonbin.io/v3/b/68e7972e43b1c97be9600656';

async function GetData() {
    try {
        const response = await fetch(URL)
        const data = await response.json()

        const randomIndex = Math.floor(Math.random() * 299);
        quote.innerText = data.record[randomIndex].quote;
        author.innerText = data.record[randomIndex].author;
        
    }catch(error) {
        console.log("Unable to fetch the data: ", error);
    }
}


button.addEventListener('click', GetData);