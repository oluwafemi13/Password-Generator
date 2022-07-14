const randomFunc={
    lower: getRandomLowercase,
    upper: getRandomUppercase,
    Number: getRandomNumber,
    symbol: getRandomSymbol
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

 