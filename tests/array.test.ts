describe('array', () => {
    it('should be readonly array', () => {

        const hobbies: ReadonlyArray<string> = ['game', 'football']

        console.info(hobbies)
        console.info(hobbies[0])
        console.info(hobbies[1])
        console.info(hobbies[2])

        // hobbies.push('koko')
    })

    it('should be tupple', () => {

        const person: readonly [string, string, number] = ['eko', 'khanedy', 45]

        console.info(person)
        console.info(person[0])
        console.info(person[1])
        console.info(person[2])
    })
})