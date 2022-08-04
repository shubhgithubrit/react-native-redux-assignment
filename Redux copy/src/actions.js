export const LOAD_PRODUCTS= 'LOAD_PRODUCTS';


export function loadProduct(products,products1) { // show products
    return {
        type: LOAD_PRODUCTS,
        products: {
            ...products,
            
            
        }
    }
}

