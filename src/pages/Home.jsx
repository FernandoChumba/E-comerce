import React, {useContext} from 'react'
//importo contexto del producto
import {ProductContext} from '../contexts/ProductContext';
//importo componentes

import Product from '../components/Product';

const Home = () => {
    //obtengo productos desde su contexto
    const {products} = useContext(ProductContext);
    //console.log(products)
    //obtengo solo ropa de hombre y mujer
    const filteredProducts = products.filter(item => {
        return(
            item.category === "men's clothing" || item.category === "women's clothing"
        );
    });
   // console.log(filteredProducts);
    return(
        <div>
        <section className='py-16'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                {filteredProducts.map((product) => {
                    return <Product key={product.id} product={product}/>
                })}

                </div>
            </div>
        </section>
    </div>
    );
};

export default Home;
