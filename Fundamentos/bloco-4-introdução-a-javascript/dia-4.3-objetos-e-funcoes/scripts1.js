let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente:true
  };

//     console.log("Boas vindas " + info.personagem)
//     console.log(info)

// for (let k in info){
//     console.log(k)
// }

// for (let k in info){
//     console.log(info[k])
// }

let info2 = {
    personagem:'Tio Patinhas',
    origem:"Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota:'O último MacPatinhas',
    recorrente: true
}

for(let k in info){
    for (let i in info2){
        if (info.recorrente === true && info2.recorrente === true){
            console.log("Ambos reccorentes")
        }
        
        console.log(info[i]+ " e " + info2[i] )
    } 
}