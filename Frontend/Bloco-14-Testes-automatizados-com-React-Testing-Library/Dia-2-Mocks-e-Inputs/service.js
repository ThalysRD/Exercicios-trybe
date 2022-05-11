const randomMath = () => {
    const num = Math.random() * (100 - 0) + 0;
    return parseInt(num)
      
}



const upperCase = (string) => {
   return string.toUpperCase()
}

const firstLetter = (string) => {
    return string.slice(0,1)
}

const concatString = (string, string2) => {
    return `${string} ${string2}`
}

const apiDog = async () => {
    const url = await fetch('https://dog.ceo/api/breeds/image/random')
    const response = await url.json()

    return response
}



module.exports = {randomMath, upperCase, firstLetter, concatString, apiDog}