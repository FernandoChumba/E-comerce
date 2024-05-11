import React, { useContext } from 'react'

//importo link para redireccionar a otra ventana
import {Link} from 'react-router-dom'
//import icons
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'
//import components
import CartItem from './CartItem'
//import sideba context
import {SidebarContext} from '../contexts/SidebarContext'
//import cart context
import {CartContex} from '../contexts/CartContext'


const Sidebar = () =>{
    const {isOpen, handleClose}=useContext(SidebarContext);
   // console.log(useContext(CartContex))
   const { cart , clearCart} =  useContext(CartContex);
    {/*lo manda al sidebar a la derecha si este esta abierto  */}
    return <div className={`${
        isOpen ? 'right-0': '-right-full'
    } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>
            shoping bang {0}
        </div>
        <div onClick={handleClose} className='cursor-pointer text-2xl w-8 h-8 flex justify-center items-center'>
            <IoMdArrowForward className='text-2xl'></IoMdArrowForward>
        </div>
    </div>
    <div>{cart.map(item => {
        return <CartItem item={item} key={item.id}/>
    })}
    <div className='bg-green-300 flex flex-col gap-y-2 py-2 mt-4'>
        <div className='flex w-full justify-between items-center '>
            {/*total */}
            <div className='uppercase font-semibold'>
                <span className='mr-2'>Total:</span>$1000
            </div>
            {/*eliminar carrito */}
            <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
                <FiTrash2/></div>
        </div>
    </div>
       
    </div>
    </div>
}

export default Sidebar;