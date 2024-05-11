import React, {useContext} from 'react'
//sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
//import icons
import {BsBag} from 'react-icons/bs' //icono del bolso

const Header = () =>{
    const {isOpen, setIsOpen} = useContext(SidebarContext)
    return (
        <header className='bg-yellow-100'>
            <div>Header</div>
            <div onClick={() => setIsOpen(!isOpen)}
             className='cursor-pointer flex'>
                <BsBag className='text-2xl'></BsBag>
            </div>
        </header>
    )
}

export default Header;