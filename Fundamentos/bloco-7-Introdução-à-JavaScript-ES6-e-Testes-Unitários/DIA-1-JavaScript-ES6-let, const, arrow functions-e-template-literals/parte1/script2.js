const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const compare = (a,b) => { 
    if(a>b) return 1; 
    if(a<b) return -1
}
oddsAndEvens.sort(compare)

console.log(oddsAndEvens); // será necessário alterar essa linha 😉