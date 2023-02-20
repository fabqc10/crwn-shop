import { createContext, useEffect, useState } from "react";

import PRODRUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODRUCTS);
    const value = {
        products
    }
    return ( 
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};