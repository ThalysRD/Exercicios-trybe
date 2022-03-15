// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Laranja', 'Maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'Farinha Láctea'];

const fruitSalad = (fruit, additional) => {
  const igredientItems = [...fruit, ...additional]
  return igredientItems
};

console.log(fruitSalad(specialFruit, additionalItens));