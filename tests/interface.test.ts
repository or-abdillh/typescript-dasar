import { Employee, Manager } from "../src/employee"
import { Person } from "../src/person"
import { Seller } from "../src/seller"

describe('Interface', () => {

    it('Should be interface', () => {

        const seller: Seller = {
            id: 1,
            name: 'Eko',
            nib: 'ew8989ew',
            npwp: 'hfdjhd88999'
        }

        console.info(seller)

        seller.name = 'Yaya'
        console.info(seller)

        // seller.npwp = 'dsdhisds'
    })

    it('Should support function interface', () => {

        interface AddFunction {
            (first: number, second: number): number
        }

        const add: AddFunction = (first, second): number => first + second

        expect(add(2, 2)).toBe(4)
    })

    it('Should support indexable array interface', () => {

        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ['Eko', 'Yaya', 'Zuzu']

        console.info(names[0])
        console.info(names[1])
        console.info(names[2])
    })

    it('Should support indexable object interface', () => {

        interface StringDictionary {
            [key: string]: string
        }

        const dictionary: StringDictionary = {
            'name': 'Eko',
            'country': 'indonesia'
        }

        expect(dictionary['name']).toBe('Eko')
        expect(dictionary['country']).toBe('indonesia')
    })

    it('Should support extending interface', () => {

        const employee: Employee = {
            id: 1,
            name: 'Eko',
            division: 'IT'
        }

        const manager: Manager = {
            id: 2,
            name: 'Yaya',
            division: 'IT',
            numberOfEmployess: 7
        }

        console.info(employee)
        console.info(manager)
    })

    it('Should support interface function', () => {

        const person: Person = {
            name: 'Eko',
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`
            }
        }

        console.info(person.sayHello('Budi'))
    })

    it('Support intersection types', () => {

        interface HasName {
            name: string
        }

        interface HasId {
            id: number
        }

        type Domain = HasId & HasName

        const domain: Domain = {
            name: 'Eko',
            id: 1
        }

        console.info(domain)
    })

    it('Should support type assertions', () => {

        const person: any = {
            name: 'Wahyu',
            age: 30
        }

        const person2: Person = person as Person

        console.log(person2)
    })
})