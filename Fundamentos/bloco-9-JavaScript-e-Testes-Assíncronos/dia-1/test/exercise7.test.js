
const uppercase = require('../exercise7')

it('Testa a função uppercase', (done) => {
    uppercase('Banana', (str) => {
        try{
            expect(str).toBe('BANANA'); done()
        } catch (error){
            done(error)
        }
    })
})