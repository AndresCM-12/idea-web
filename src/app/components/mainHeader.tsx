"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MainHeader = () => {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    return (
        <>
        <header className="z-50 fixed top-0 w-full shadow h-28">
         <div className='h-full flex items-center justify-between md:px-16 sm:px-8 xs:px-4 py-8 bg-white text-black relative'>
            <Image className='md:w-10 md:h-10  xs:w-10 xs:h-10 object-contain z-10' width={40} height={80} src={"/contact/logo_red.png"} alt='logo' />
            <nav>
                <ul className='items-center justify-between font-semibold md:gap-10 sm:gap-8 xs:gap-2 resize-x md:flex xs:hidden'>
                 <li className='cursor-default'><Link href="/">Inicio</Link></li>
                 <li className='cursor-default'><Link href="/productos">Productos</Link></li>
                 <li className='cursor-default'><Link href="/contacto">Contacto</Link></li>
                 <li className='cursor-default'><Link href="/nosotros">Nosotros</Link></li>
                </ul>
            </nav>
            <div className='md:flex items-center md:gap-3 sm:gap-2 xs:gap-1 xs:hidden'>
                <Image className='md:w-5 md:h-5' width={40} height={40} src={"/instagram_logo.svg"} alt='instagram logo' />
                <Image className='md:w-5 md:h-5' width={40} height={40} src={"/facebook_logo.svg"} alt='facebook logo' />
                <Image className='md:w-5 md:h-5' width={40} height={40} src={"/whatsapp_logo.svg"} alt='whatsapp logo' />
            </div>
            <div className='md:hidden xs: flex'>
             <button onClick={()=>setMenuIsOpen(true)} className="relative group">
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-ideaRed ring-0 ring-gray-300 hover:ring-8        group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
               <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>
                <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                 <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                 <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                </div>
                </div>
               </div>
             </button>
            </div>
         </div>
        </header>
        <div onClick={()=> setMenuIsOpen(false)} className='fixed z-20 h-full w-full bg-black bg-opacity-30' style={{
            opacity: menuIsOpen ? '100%' : '0%', display: menuIsOpen ? "flex" : "none"}}>
         <div className='flex flex-col justify-center items-center gap-y-3 fixed right-0 top-0 h-full w-2/3 z-30 bg-white text-black font-bold text-2xl transition-all duration-500' style={{
            transform: menuIsOpen ? 'translateX(0)' : 'translateX(100%)', 
            display: menuIsOpen ? "flex" : "flex"
         }}>
          <p className='cursor-default'><Link href="/">Inicio</Link></p>
          <p className='cursor-default'><Link href="/productos">Productos</Link></p>
          <p className='cursor-default'><Link href="/contacto">Contacto</Link></p>
          <p className='cursor-default'><Link href="/nosotros">Nosotros</Link></p>
         </div>
        </div>
        </>
    );
};

export default MainHeader;
