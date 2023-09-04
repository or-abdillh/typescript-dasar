describe('function', () => {

    it('Should support function', () => {

        function sayHello(name: string): string {
            return `Hello ${name}`
        }

        expect(sayHello('Eko')).toBe('Hello Eko')

        function printHello(name: string): void {
            console.info(`Hello ${name}`)
        }

        printHello('Eko')
    })

    it('Should support default value', () => {

        function sayHello(name: string = 'guest'): string {
            return `Hello ${name}`
        }

        expect(sayHello('Eko')).toBe('Hello Eko')
        expect(sayHello()).toBe('Hello guest')
    })

    it('Should support rest parameter', () => {

        function sum(...values: number[]): number {
            let total: number = 0

            for (const value of values) {
                total += value
            }

            return total
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15)
    })

    it('Should support optional parameter', () => {

        function sayHello(firstName: string, lastName?: string): string {

            if (lastName) {
                return `Hello ${firstName} ${lastName}`
            } else {
                return `Hello ${firstName}`
            }
        }

        expect(sayHello('Eko')).toBe('Hello Eko')
        expect(sayHello('Eko', 'Kurniawan')).toBe('Hello Eko Kurniawan')
    })

    it('Should support function overloading', () => {

        function callMe(value: number): number
        function callMe(value: string): string
        function callMe(value: any) {
            if (typeof value == 'string') return value.toUpperCase()
            else if (typeof value == "number") return value * 2
        }

        expect(callMe('Eko')).toBe('EKO')
        expect(callMe(10)).toBe(20)
    })

    it('Should support function as parameter', () => {

        function sayHello(name: string, filter: (name: string) => string) {
            return `Hello ${filter(name)}`
        }

        function toUpper(name: string): string {
            return name.toUpperCase()
        }

        expect(sayHello('Wahyu', toUpper)).toBe('Hello WAHYU')

        expect(sayHello('Eko', (name: string): string => name.toUpperCase())).toBe('Hello EKO')
    })
})