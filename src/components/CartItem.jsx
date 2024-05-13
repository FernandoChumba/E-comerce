import React, { useContext } from 'react'
import {Link} from 'react-router-dom'

import {IoMdAdd, IoMdClose, IoMdRemove} from 'react-icons/io'

import {CartContex} from '../contexts/CartContext'

const CartItem = ({item}) => {
    const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContex)
    //desestructuracion de item
    const {id, title, image, price, amount} = item;
    return (
        <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500' >
            <div className='w-full min-h-[150px] flex items-center gap-x-4'>
                {/*Imagen*/}
                <Link to={`/product/${id}`}>
                    <img className='max-w-[80px]' src={image} alt="" />
                </Link>
                <div className='w-full flex flex-col'>
                    {/*titulo del producto*/}
                    <div className='flex justify-between mb-1'>
                        <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{title}</Link>
                        {/*Eliminar iconos (imagenes) */}
                        <div onClick={()=> removeFromCart(id)} className='text-xl cursor-pointer'>
                            <IoMdClose className='text-gray-500 hover:text-white hover:bg-red-500 transition'/>
                        </div>
                    </div>
                    <div className=' flex gap-x-4 h-[36px] text-sm'>
                        {/*cantidad de productos */}
                        <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
                            {/*eliminar pruducto */}
                            <div onClick={()=> decreaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'> <IoMdRemove/></div>
                            {/*cantidad*/}
                            <div className='h-full flex justify-center items-center px-2'>{amount}</div>
                            {/*agregar producto */}
                            <div onClick={()=> increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'><IoMdAdd/></div>
                        </div>
                        {/*precio */}
                        <div className=' flex-1 flex justify-around items-center'>${price}</div>
                        {/*precio final */}
                        <div className='flex-1 flex justify-end items-center text-primary font-medium'
                        > {`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default CartItem;