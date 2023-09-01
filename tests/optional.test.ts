describe('Optional', () => {

    it('should be undefined or null', () => {

        const sayHello = (name?: string | null) => {

            if (name) console.log(`Hello ${name}`)
            else console.log('Hello')
        }

        sayHello('Eko')

        const name: string | undefined = undefined
        sayHello(name)
        sayHello(null)
    })
})