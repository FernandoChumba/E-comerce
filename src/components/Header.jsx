import React, {useContext, useEffect, useState} from 'react'
//sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
//cart context
import { CartContex } from '../contexts/CartContext';
//import icons
import {BsBag} from 'react-icons/bs' //icono del bolso
import { PiCoatHangerBold } from "react-icons/pi";
//import link
import {Link} from 'react-router-dom'

import Logo from '../img/logo1.png'

const Header = () =>{
    //header state
    const [isActive, setIsActive] = useState(false);
    //use context
    const {isOpen, setIsOpen} = useContext(SidebarContext)
    const {itemAmount} = useContext(CartContex);
    //listar eventos
    useEffect (() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        })
    })
    return (
        <header className={`${isActive ? 'bg-white shadow-md': 'bg-none'} fixed w-full z-10 transition-all`}>
            <div className='container mx-auto flex items-center justify-between h-full px-3'>
            {/*Logo */}
            <Link to ={'/'}>
                <div>
                    <img className='w-[150px]' src={Logo} alt="" />
                </div>
            </Link>
          
            {/*carrito */}
            <div onClick={() => setIsOpen(!isOpen)}
             className='cursor-pointer flex relative'>
                <BsBag className='text-2xl'></BsBag>
                <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center '>{itemAmount}</div>
            </div>
            </div>
        </header>
    )
}

export default Header;