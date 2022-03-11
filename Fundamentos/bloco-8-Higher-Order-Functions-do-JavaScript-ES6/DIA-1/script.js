const user = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_')

  const person = {
      FullName: nomeCompleto,
      Email: `${email}@trybe.com`
  }

  return person
}
// console.log(user('Thalys Rodrigues'))

const newEmployees = (user) => {
    const employees = {
      id1: user('Pedro Guerra'),
      id2: user('Luiza Drumond'),
      id3: user('Carla Paiva'),
    };
    return employees;
  };

// console.log(newEmployees(user))

