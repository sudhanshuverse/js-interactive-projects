const userInput = document.querySelector('.user-input')
const lowercaseOutput = document.querySelector('.lowercase')
const upperCaseOutput = document.querySelector('.uppercase')
const camelCaseOutput = document.querySelector('.camelcase')
const pascalCaseOutput = document.querySelector('.pascalcase')
const snakeCaseOutput = document.querySelector('.snakecase')
const kababCaseOutput = document.querySelector('.kababcase')
const trimOutput = document.querySelector('.trim')


function capitalizeString(str) { 
    if(!str) return str
    return str[0].toUpperCase() + str.slice(1, str.length)
}

function toCamelCase(str) {
    const lowerCaseString = str.toLowerCase()
    const wordsArray = lowerCaseString.split(' ')
    const finalArray = wordsArray.map((word, i) => {
        if (i === 0) return word
        return capitalizeString(word)
    })
    return finalArray.join('')
}

function pascalCase(str) {
    const lowerCaseString = str.toLowerCase()
    const wordsArray = lowerCaseString.split(' ')
    const finalArray = wordsArray.map((word, i) => {
        return capitalizeString(word)
    })
    return finalArray.join('')
}

function snakeCase(str) {
    return str.replaceAll(' ', '_')
}

function kababCase(str) {
    return str.replaceAll(' ', '-')
}
function trimCase(str) {
    return str.replaceAll(' ', ' ')
}



function updateValue() {
    lowercaseOutput.innerText = userInput.value.trim().toLowerCase();
    upperCaseOutput.innerText = userInput.value.trim().toUpperCase();
    camelCaseOutput.innerText = toCamelCase(userInput.value.trim());
    pascalCaseOutput.innerText = pascalCase(userInput.value.trim())
    snakeCaseOutput.innerText = snakeCase(userInput.value.trim())
    kababCaseOutput.innerText = kababCase(userInput.value.trim()) 
    trimOutput.innerText = trimCase(userInput.value.trim()) 
}

updateValue() 

userInput.addEventListener('input', (e) => {
    updateValue()
})