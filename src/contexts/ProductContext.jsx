import React , {createContext, useState, useEffect}from 'react';

//creando contexto
export const ProductContext = createContext();

const ProductProvider = ({children}) =>{
    //estado del producto
    const [products, setProducts] = useState([]);
    //buscar producto
    useEffect(()=>{
        //llamo a API
        const fetchProducts = async () => {
            //promesa
            const response = await fetch('https://fakestoreapi.com/products');
            //obtengo datos de la API y los guardo en un json
            const data = await response.json();
            setProducts(data);
           // console.log(data);

        };
        //muestra los productos de la API
        fetchProducts();
    },[]);

    return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
}

export default ProductProvider;