
const longestWord = word =>{
    let wordStr = word.split(' ')
    let count = 0
    let resultStr = ''

    for (const text of wordStr){
        if (text.length > count){
            count = text.length
            resultStr = text
        }
    }
    return resultStr
}


console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))





// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'