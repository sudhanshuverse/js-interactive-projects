const dogImage = document.getElementById('dogImage');
const newDogBtn = document.getElementById('newDogBtn');

newDogBtn.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            dogImage.src = data.message;
            console.log('Fetched Dog Image:', data);
        })
});
