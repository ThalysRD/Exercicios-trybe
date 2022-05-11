let { randomMath, upperCase, firstLetter, concatString } = require('./service')


describe('Testa a função randomMath', () => {
    it('Testa a função randomMath', () => {
        const randomMath = jest.fn().mockReturnValue(10)

        expect(randomMath()).toBe(10)
    })
    it('Testa se a função é chamada', () => {
        const randomMath = jest.fn()
        randomMath()
        expect(randomMath).toHaveBeenCalled()
    })
    it('Testa quantas vezes a função foi chamada', () => {
        const randomMath = jest.fn()
        randomMath()
        randomMath()
        randomMath()
        expect(randomMath).toHaveBeenCalledTimes(3)
    })

    it('#Divisão',() => {
        const  randomMath = jest.fn().mockImplementation((a,b) => a / b)
         randomMath(1,2)
         expect(randomMath).toHaveBeenCalledTimes(1)
         expect(randomMath(4,2)).toBe(2)
        expect(randomMath).toHaveBeenCalled()
    } )

    it('#Multiplicação', () => {
         randomMath = jest.fn().mockImplementation((a,b,c) => a * b * c)
        randomMath(1,2,3)
        expect(randomMath).toHaveBeenCalledTimes(1)
        expect(randomMath(3,3,3)).toBe(27)
        expect(randomMath).toHaveBeenCalled()
        randomMath.mockReset()
         randomMath = jest.fn().mockImplementation((a) => a * 2)
        randomMath(2)
        expect(randomMath).toHaveBeenCalledTimes(1)
        expect(randomMath(2)).toBe(4)
        expect(randomMath).toHaveBeenCalled()
    })
})

describe('Testa a função upperCase, firstLetter e concatString', () => {
    it('#toLowerCase', () => {
        expect(upperCase("banana")).toBe("BANANA")
        
     upperCase = jest.fn().mockImplementation((string) => string.toLowerCase())
     expect(upperCase("BANANA")).toBe('banana')
     
    })

    it('#LastLetter', () => {
        firstLetter = jest.fn().mockImplementation((string) => string.slice(-1))
        expect(firstLetter("Carlos")).toBe('s')
        
    })
    it('#concat3' , () => {
        concatString = jest.fn().mockImplementation((string1,string2,string3) => `${string1} ${string2} ${string3}`)
        expect(concatString("Oi", "Meu", "Bom")).toBe("Oi Meu Bom")
       
    })
})