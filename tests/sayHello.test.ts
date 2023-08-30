import { sayHello } from "../src/sayHello"

describe('sayHello', () => {
    it('should be return hello', () => {
        expect(sayHello('Eko')).toBe('Hello Eko')
    })
})