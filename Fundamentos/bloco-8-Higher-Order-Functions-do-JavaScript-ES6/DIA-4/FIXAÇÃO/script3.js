const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (current, number) => ((number % 2 === 0) ? current + number : current)

const sumNumbers = (array) => array.reduce(sumPair, 0)
console.log(sumNumbers(numbers))