describe('Union', () => {

    it('should be union', () => {

        function process(value: string | number | boolean) {

            if (typeof value === 'string') {
                return value.toUpperCase()
            }

            if (typeof value === 'number') {
                return value * 2
            }

            if (typeof value === 'boolean') {
                return !value
            }
        }

        expect(process('eko')).toBe('EKO')
        expect(process(10)).toBe(20)
        expect(process(true)).toBe(false)
    })
})