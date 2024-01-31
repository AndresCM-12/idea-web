import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MainHeader = () => {
    return (
        <header className="z-50 fixed top-0 w-full shadow h-28">
         <div className='h-full flex items-center justify-between md:px-16 sm:px-8 xs:px-4 py-8 bg-white text-black relative'>
            <Image className='md:w-10 md:h-10 sm:w-5 sm:h-5 xs:w-5 xs:h-5 object-contain z-10' width={40} height={80} src={"/contact/logo_red.png"} alt='logo' />
            <nav>
                <ul className='flex items-center justify-between font-semibold md:gap-10 sm:gap-8 xs:gap-2 resize-x'>
                 <li className='cursor-default'><Link href="/">Inicio</Link></li>
                 <li className='cursor-default'><Link href="/productos">Productos</Link></li>
                 <li className='cursor-default'><Link href="/contacto">Contacto</Link></li>
                 <li className='cursor-default'><Link href="/nosotros">Nosotros</Link></li>
                </ul>
            </nav>
            <div className='md:flex items-center md:gap-3 sm:gap-2 xs:gap-1 md:visible xs:hidden'>
                <Image className='md:w-5 md:h-5' width={40} height={40} src={"/instagram_logo.svg"} alt='instagram logo' />
                <Image className='md:w-5 md:h-5' width={40} height={40} src={"/facebook_logo.svg"} alt='facebook logo' />
                <Image className='md:w-5 md:h-5' width={40} height={40} src={"/whatsapp_logo.svg"} alt='whatsapp logo' />
            </div>
         </div>
        </header>
    );
};

export default MainHeader;
