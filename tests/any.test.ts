describe('any', () => {
    it('should be support typescript', () => {

        const person: any = {
            name: 'Eko',
            age: 67
        }

        person.address = 'Java'
    })
})