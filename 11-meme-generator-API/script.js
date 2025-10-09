const button = document.querySelector('.generateBtn');
const loading = document.querySelector('.loading');
const image = document.querySelector('.image');
const title = document.querySelector('.title');
const author = document.querySelector('.author');

const URL = 'https://meme-api.com/gimme';


// METHOD 1 USING PROMISE
button.addEventListener('click', () => {
    loading.style.display = 'block';

    fetch(URL)
        .then((response) => {
            if (!response) {
                throw new Error("Network response was not OK")
            }
            return response.json();
        })
        .then(data => {
            const ErrorFreeImage = 'https://images.weserv.nl/?url=' + encodeURIComponent(data.url.replace(/^https?:\/\//, ''));
            image.style.display = 'none';
            title.innerText = data.title;
            author.innerText = data.author;

            image.onload = () => {
                loading.style.display = 'none';
                image.style.display = 'block'; // show image after fully loaded
            };

            image.src = ErrorFreeImage;
        })
        .catch(error => {
            alert("Failed to fetch a new meme. Showing default meme.");
            loading.style.display = 'none';
        })
})


// METHOD 2 USING ASYNC/ WAIT 
// async function getData() {
//     loading.style.display = 'block';
//     try {
//         const response = await fetch(URL);
//         const data = await response.json();

//         const ErrorFreeImage = 'https://images.weserv.nl/?url=' + encodeURIComponent(data.url.replace(/^https?:\/\//, ''));
//         image.style.display = 'none';
//         title.innerText = data.title;
//         author.innerText = data.author;

//         image.onload = () => {
//             loading.style.display = 'none';
//             image.style.display = 'block'; // show image after fully loaded
//         };

//         image.src = ErrorFreeImage;


//     } catch (error) {
//         alert("Failed to fetch a new meme. Showing default meme.");
//         loading.style.display = 'none';
//     }
// }

// button.addEventListener('click', getData)