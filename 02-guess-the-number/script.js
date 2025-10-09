const range = document.querySelector('.range')
const guess = document.querySelector('.guess')
const submit = document.querySelector('.submit')
const output = document.querySelector('.output')
const bothChoice = document.querySelector('.both-choice')


submit.addEventListener('click', ()=> {
    const rangeValue = range.value;
    const randomNumber = parseInt(Math.random() * rangeValue + 1);
    if(randomNumber == guess.value){
        output.innerText = "Correct Guess 😎"
    }else{
        output.innerText = "Wrong Guess 🤦‍♀️"
    }
    
    bothChoice.innerText = "Computer Choose: " + randomNumber + " , You Choose: " + guess.value

})


// ANIMATION 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry.target);
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
}, {})


const cardContainer = document.querySelectorAll('.card-container');
const heading = document.querySelectorAll('h1');

cardContainer.forEach(el => observer.observe(el));
heading.forEach(el => observer.observe(el));