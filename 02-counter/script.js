const output = document.querySelector('.show-output')
const decrement = document.querySelector('.decrement')
const increment = document.querySelector('.increment')
const incrementBy = document.querySelector('.increment-value')
const reset = document.querySelector('.reset-btn')

console.log(incrementBy.value);

increment.addEventListener('click', () => {
    const countValue = parseInt(output.innerText)
    const changeByValue = parseInt(incrementBy.value)
    output.innerText = countValue + changeByValue
})

decrement.addEventListener('click', () => {
    const countValue = parseInt(output.innerText)
    const changeByValue = parseInt(incrementBy.value)

    output.innerText = countValue - changeByValue
})

reset.addEventListener('click', () => {
    output.innerText = 0;
    incrementBy.value = 1;
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