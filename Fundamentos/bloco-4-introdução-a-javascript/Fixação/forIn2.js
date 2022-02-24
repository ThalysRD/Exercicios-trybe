let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };


  for (let k in car){
      console.log("O modelo é " + car['model']+ ", " + "produzido pela " + car['manufacturer']+", " + "no ano de " + car['year'])
      
  }