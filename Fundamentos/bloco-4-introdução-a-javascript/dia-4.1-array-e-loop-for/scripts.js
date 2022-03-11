// 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers)

// 2
let soma = 0

for(let indice = 0; indice < numbers.length; indice+=1) {
    soma += numbers[indice];
}
console.log(soma);

// 3

let resultado = soma / numbers.length
console.log(resultado)

//4

if (resultado > 20) {
    console.log("Resultado é maior que 20")
} else if (resultado <= 20) {
    console.log("Resultado é menor ou igual a 20")
} 

// 5
 let max = 0
 for (let i = 0; i < numbers.length; i+=1) {
     if(numbers[i] > max){
      max = numbers[i]
     }
 }
 console.log(max)

//6

let impar = 0
for (let i = 0; i < numbers.length;i+=1){ 
    if (numbers[i]% 2 !== 0){
        impar = impar + 1

    } 
    
}

console.log(impar)


let min = numbers[0]
 for (let i = 0; i < numbers.length; i+=1) {
     if(numbers[i] < min ){
      min = numbers[i]
     }
 }
 console.log(min)



 function highestCount(nums) {
    let numMax = 0
    let count = 0
    
   for (let i = 0 ; i < nums.length ; i+=1){
     if (nums[i] >= numMax){
       numMax = nums[i] 
       if(numMax = nums[i]){
         count = count + 1
       }
     } 
      
     if(nums == [9, 1, 2, 3, 9, 5, 7]){
       return count
     } else if (nums == [0, 4, 4, 4, 9, 2, 1]){
       return count
     } else if (nums == [0, 0, 0]){
       return count
     }
     
   } return console.log(count)
  }
  highestCount()