const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const nigthTurn = (obj,key,value) => {
   obj[key] = value
  }


  nigthTurn(lesson2, 'turno', 'noite')


const listKeys = (obj) => {
    return Object.keys(obj)
}

listKeys(lesson1)

const tamanho = (obj) => {
    
   return Object.keys(obj).length
}

tamanho(lesson1)

const value = (obj) => {
    return Object.values(obj)
}

value(lesson1)


const allLessons = Object.assign({},{lesson1,lesson2,lesson3})



// const studants = (obj,obj2,obj3) => {
//     return obj.numeroEstudantes + obj2.numeroEstudantes + obj3.numeroEstudantes
// }

// console.log(studants(lesson1,lesson2,lesson3))

const studantsNums = (obj) => {
    let total = 0
    const objeto = Object.keys(obj)
    for(let i in objeto){
        total += obj[objeto[i]].numeroEstudantes
    }

    return total
}

studantsNums(allLessons)

const valueForNumber = (obj,number) => Object.values(obj)[number]
valueForNumber(lesson1,3)


const verify = (obj,key,value) => {
    const array = Object.entries(obj)
    let isEqual = false
    for(let i in array){
        if(array[i][0] === key && array[i][1] === value) {
            isEqual = true
        }
    }
    return isEqual
}

console.log(verify(lesson2,'professor', 'Carlos'))