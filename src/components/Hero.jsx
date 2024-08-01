import React from 'react';

//imagenes
import fondo from '../img/fondo2.png'

import {Link} from 'react-router-dom'


const Hero = () => {
    return <section className=' h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
        <div className='container mx-auto flex justify-around h-full'>
            {/*titulo*/}
            <div className='flex flex-col justify-center'>
                {/*subtitulo */}
                <div className='font-semibold flex items-center uppercase'>
                    <div className='w-10 h-[2px] bg-red-500 mr-3'></div>new trend
                </div>
                <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
                    AUTUMN SALE STYLISH <br /> <span className='font-semibold'>
                    WOMENS
                </span>
                </h1>
                <Link 
                to={'/'} 
                className='self-start uppercase font-semibold border-b-2 border-black'>
                    Discover More
                </Link>
                
            </div>
            {/*img*/}
            <div className='hidden lg:block'>
                <img className='max-h-full' src={fondo} alt="" />
            </div>
        </div>
    </section>
}

export default Hero;