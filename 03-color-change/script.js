const body = document.querySelector('body')
const redCard = document.querySelector('.red')
const yellowCard = document.querySelector('.yellow')
const pinkCard = document.querySelector('.pink')
const blueCard = document.querySelector('.blue')
const tealCard = document.querySelector('.teal')
const springGreenCard = document.querySelector('.springgreen')
let bgColor;

body.style.backgroundColor = localStorage.getItem('bgColor')
body.style.color = localStorage.getItem('color')

redCard.addEventListener('click', () => {
    localStorage.setItem('bgColor','red')
    body.style.backgroundColor = localStorage.getItem('bgColor')
    localStorage.setItem('color','white')
    body.style.color = localStorage.getItem('color')
})

yellowCard.addEventListener('click', () => {
    localStorage.setItem('bgColor','yellow')
    body.style.backgroundColor = localStorage.getItem('bgColor')
    localStorage.setItem('color','black')
    body.style.color = localStorage.getItem('color')
})

pinkCard.addEventListener('click', () => {
    localStorage.setItem('bgColor','pink')
    body.style.backgroundColor = localStorage.getItem('bgColor')
    localStorage.setItem('color','white')
    body.style.color = localStorage.getItem('color')
})

blueCard.addEventListener('click', () => {
   localStorage.setItem('bgColor','blue')
    body.style.backgroundColor = localStorage.getItem('bgColor')
    localStorage.setItem('color','white')
    body.style.color = localStorage.getItem('color')
})

tealCard.addEventListener('click', () => {
    localStorage.setItem('bgColor','teal')
    body.style.backgroundColor = localStorage.getItem('bgColor')
    localStorage.setItem('color','white')
    body.style.color = localStorage.getItem('color')
})

springGreenCard.addEventListener('click', () => {
    localStorage.setItem('bgColor','springgreen')
    body.style.backgroundColor = localStorage.getItem('bgColor')
    localStorage.setItem('color','white')
    body.style.color = localStorage.getItem('color')
})



// ANIMATION 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
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