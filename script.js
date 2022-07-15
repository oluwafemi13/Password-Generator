const resultElement = document.getElementById('result')
const lengthElement = document.getElementById('length')
const uppercaseElenemt = document.getElementById('uppercase')
const lowercaseElement = document.getElementById('lowercase')
const numbersElement = document.getElementById('numbers')
const symbolsElenemt = document.getElementById('symbols')
const generateElement = document.getElementById('generate')
const clipboardElement = document.getElementById('clipboard')

const randomFunc={
    lower: getRandomLowercase,
    upper: getRandomUppercase,
    Number: getRandomNumber,
    symbol: getRandomSymbol
}

generateElement.addEventListener('click', ()=>{
    const length =+ lengthElement.vlaue
    const hasLower = lowercaseElement.checked
    const hasUpper = lowercaseElement.checked
})


function getRandomLowercase(){
    return String.fromCharcode(Math.floor(Math.random()*25)+97)
}

function getRandomUppercase(){
    return String.fromCharcode(Math.floor(Math.random()*25)+65)
}

function getRandomNumber(){
    return String.fromCharcode(Math.floor(Math.random()*10)+95)
}

function getRandomSymbol(){
    const symbol = '!@#$%^&*()_+-~<>/?\|[]{},.'
    return symbol[(Math.floor(Math.random() * symbol.length))]
    
}

 