import React, {useContext} from 'react';
//importo link
import { Link } from 'react-router-dom';
//importo iconos
import {BsPlus, BsEyeFill} from 'react-icons/bs';
//import cart context
import {CartContex} from '../contexts/CartContext'

const Product = ({ product }) => {
    //console.log(product);
    const {addToCart} = useContext(CartContex)
    //desestructuracion de product
    const {id, image,category, title, price } = product;
    return (
        <div>
             {/* */}
            <div className='border border-[#e4e4e4] h-[300px] mb-1 relative overflow-hidden group transition'>
            <div className='w-full h-full flex justify-center items-center'>
                {/*imagen*/}
                <div className='bg-white rounded-xl'>
                <div className='w-[250px] flex justify-center items-center'>
                    <img className='max-h-[200px] group-hover:scale-110 transition duration-500 rounded-xl' src={image} alt="" />
                </div>
                </div>
                {/*botones*/}

                <div className=' absolute bottom-0 bg-green-500 p-2 rounded-xl -right-12 group-hover:right-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>{/*tailwing de boton */}
                    <button onClick={()=> addToCart(product,id)}>
                        <div className='flex justify-center items-center text-white w-10 h-10'>
                            <BsPlus className='text-3xl' />
                        </div>
                    </button>
                </div>
                <div className='absolute -left-12 bottom-0 p-2 bg-stone-400 rounded-xl group-hover:left-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                        <Link to={`/product/${id}`} className='w-10 h-10  flex justify-center items-center text-primary drop-shadow-xl text-white'>
                        <BsEyeFill/>
                    </Link>
                </div>
            </div>
            </div>
             {/*categoria , titulo y precio */}
            <div>
                <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
                <Link to={`/product/${id}`}>
                    <h2 className='font-semibold mb-1'>{title}</h2>
                </Link>
                <div className='font-semibold'> ${price}</div>
            </div>
    </div>
    
    
    );
}

export default Product;