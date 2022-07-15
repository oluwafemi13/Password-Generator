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
    const hasSymbol = symbolsElenemt.checked
    const hasNumber = numbersElement.checked

    resultElement.innerText = generatePassword(hasLower, hasNumber, hasSymbol, hasUpper, length)
})

function generatePassword(lower, number,symbol, upper, length){
    let generatedPassword = ''
    const typesCount = lower + upper+ number+ symbol
    const typesArr = [{lower}, {number}, {symbol}, {upper}].filter(item =>Object.values(item)[0])

    if(typesCount ===0){
        return ''
    }
    for(let i=0; i<length; i += typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })

    }
    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

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

 