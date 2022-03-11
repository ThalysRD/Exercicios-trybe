const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (correct, verified) => {
    if(correct === verified){
        return 1
    } else if (verified === 'N.A') {
        return 0
    } else {
        return -0.5
    }
}




const gabarito = (correct, verified, func) => {
   let count = 0  
   for (let i =0; i < correct.length; i+=1){
       const cheking = check (correct[i],verified[i])
       count+= cheking
   }
   return `Nota: ${count} pontos`
}


console.log(gabarito(RIGHT_ANSWERS, STUDENT_ANSWERS,check ))