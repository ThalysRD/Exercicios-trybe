let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = ""
let menor = ""

for (let i = 0; i < array.length; i +=1){
    if (array[i].length >= maior.length){
        maior = array[i]
    } else {
        menor = array[i]
    }
}

console.log(maior)
console.log(menor)

