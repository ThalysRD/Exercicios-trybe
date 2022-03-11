let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId) // Number (Número)
console.log(typeof isEnrolled) // Boolean (Boleano (true or false // 1 or 0))
console.log(typeof patientInfo) // Object (Objeto)
console.log(typeof patientEmail) // String (texto)
console.log(typeof patientAge) // Undefined (Não definido)

patientId = '50' // O JavaScript interpreta como string tudo o que estiver entre aspas.
console.log(typeof patientId) // O number virou string



