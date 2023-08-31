import { Category, Product } from "../src/typeAlias"

describe('Type Alias', () => {

    it('shoulg be Type alias', () => {

        const category: Category = {
            id: '2',
            name: 'Handphone'
        }

        const product: Product = {
            id: 1,
            name: 'samsung S12',
            price: 1_000_000,
            category
        }

        // product.address = 'Java'

        console.info(product)
    })
})