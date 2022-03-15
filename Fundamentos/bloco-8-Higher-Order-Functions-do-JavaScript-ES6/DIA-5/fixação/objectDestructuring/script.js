
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
const trappistEnterprise = {
    ...user,
    ...jobInfos
}
const {name, age ,nationality, profession, squad, squadInitials} = trappistEnterprise
const hablasComigo = (trappistEnterprise) => `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. Work as a ${profession} and my squad is ${squadInitials}-${squad}`
  console.log(trappistEnterprise)
  console.log(hablasComigo(trappistEnterprise))