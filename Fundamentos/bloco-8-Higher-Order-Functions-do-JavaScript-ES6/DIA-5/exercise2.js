// escreva sum abaixo

const sum = (...number) => {return number.reduce((acc,curr) => acc + curr)}

console.log(sum(1,2,3,4,5))