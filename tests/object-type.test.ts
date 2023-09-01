describe('Object', () => {

    it('Should be Object Type', () => {

        const person: { name: string, age: number, address?: string } = {
            name: 'Eko',
            age: 67
        }

        console.info(person)

        // person.address = 'Java'
    })
})