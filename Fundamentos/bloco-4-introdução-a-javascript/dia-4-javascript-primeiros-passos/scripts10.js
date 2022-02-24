const produto = 10

const venda = 20
 
let valor = produto * 1.2

let lucro = venda - valor

if (produto <= 0|| venda <= 0|| valor<= 0 || lucro <= 0){
    console.log("ERROR")
}

console.log("O lucro é " + lucro + " R$")