let fruits = [3, 4, 10, 1, 12];

let baby = 0

for (let i = 0; i < fruits.length; i+=1){
    baby += fruits[i]
     
}

if (baby > 15){
    console.log(baby)
} else {
    console.log("Valor menor que 16")
}
