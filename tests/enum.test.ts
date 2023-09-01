import { Customer, CustomerType } from "../src/enum-type"

describe('enum', () => {

    it('should be Enum', () => {

        const customer: Customer = {
            id: 1,
            name: 'Watch',
            type: CustomerType.GOLD
        }

        console.info(customer)
    })
})