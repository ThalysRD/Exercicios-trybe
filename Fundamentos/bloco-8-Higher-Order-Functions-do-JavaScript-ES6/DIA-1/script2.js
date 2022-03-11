const attempt = (num) => num

const check = (attempt) => {
    const drafted = Math.random() * 6
    const int = Math.floor(drafted)
    if(attempt === int) {
        return `Parabéns, vc ganhou o resultado é ${attempt}`
    } else {
        return 'Tente novamente'
    }
    
} 

console.log(check(attempt(2)))


