const wakeUp = () => { return `Acordando!!` }

const breakFast = () => { return `Bora tomar café!!` }

const goSleep = () => { return `Partiu dormir!!` }

const doingThings = (func) => {return console.log(func())}


doingThings(breakFast)