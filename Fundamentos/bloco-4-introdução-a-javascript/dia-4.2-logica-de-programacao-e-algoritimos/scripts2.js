
let word = 'tryber';
let trybeinv = ""

for(let i = word.length; i >= 0; i-=1){
   trybeinv = trybeinv + word.charAt(i)
}
console.log(trybeinv);