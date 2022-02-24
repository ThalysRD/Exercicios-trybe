function INSS (salario){

if (salario <= 1556.94 ){
   var salario = salario * 0.92
//    console.log("Salário líquido é " + salario + " R$")
}
 else if ( salario > 1556.94 && salario <= 2594.92){
     var salario = salario * 0.91
    // console.log("Salário líquido é " + salario + " R$")
} else if (salario > 2594.92 && salario <= 5189.82){
    var salario =  salario * 0.89
    // console.log("Salário líquido é " + salario + " R$")
} else if (salario > 5189.82){
    var salario = salario - 570.88
    // console.log("Salário líquido é " + salario + " R$")
}

                        
    if(salario <= 1903.98){
     console.log("Isento de imposto de renda")
    } else if (salario > 1903.99 && salario <= 2826.65){
        salario = salario * 0.925
        console.log("Salário líquido é " + salario + " R$")
    } else if (salario > 2826.66 && salario <= 3751.05) {
        salario = salario * 0.85
        console.log("Salário líquido é " + salario + " R$")
    } else if (salario > 3751.06 && salario <= 4664.68){
        salario = salario * 0.875 
        console.log("Salário líquido é " + salario + " R$")
    } else if (salario > 4664.68){
    salario = salario * 0.825 
 console.log("Salário líquido é " + salario + " R$")}

}

INSS (3000)





