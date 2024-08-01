import React ,{useContext} from 'react'

//import useParams
import {useParams} from 'react-router-dom'
//import cartContext
import {CartContex} from '../contexts/CartContext' 
//import productContext
import {ProductContext} from '../contexts/ProductContext'


const ProductsDetails = () =>{
    //tomo el id de los productos desde la url
    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContex);
    //tomo un producto basado en el id
    const product = products.find((item) =>{
        return item.id === parseInt(id);
    })
    //pantalla de carga al seleccionar ver un item
    if(!product){
        return <section className='h-screen flex justify-center items-center'> Loading........</section>
    }

    //desesctructurar producto
    const {title, price, description, image} = product;
    return <section className='pt-32 pb-12 lg:py-32 h-screen flex' >
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row items-center'>
            {/*imagen */}
              <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
                <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
              </div>
            {/*text*/}
            <div className='flex-1 text-center lg:text-left' >
                <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-0'>{title}</h1>
                <div className='text-xl text-red-500 font-medium mb-6'>
                    ${price}
                </div>
                <p className='mb-8'>{description}</p>
                <button onClick={()=> addToCart(product,product.id)} className='bg-slate-800 py-4 px-8 text-white'>Add to cart</button>
            </div>
          </div>
        </div>
    </section>

    return <div>Detalles de Producto</div>
}

export default ProductsDetails ;