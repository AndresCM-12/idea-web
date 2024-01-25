import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MainFooter = () => {
    return (
<footer className='flex items-center justify-between relative py-10 lg:px-48 md:px-48 sm:px-20 xs:px-8 z-10 flex-wrap gap-5 bg-footerBg'>
  <Image className='w-96 h-18 z-10 object-contain' width={50} height={50} src={"/images/logo_footer.png"} alt='IDEA logo para el footer' />
  <ul className='z-10 text-xs font-bold text-ideaRed'>
   <li>
    <Link href={"/"}>Inicio</Link>
   </li>
   <li>
    <Link href={"/productos"}>Productos</Link>
   </li>
   <li>
    <Link href={"/contacto"}>Contacto</Link>
   </li>
   <li>
    <Link href={"/nosotros"}>Nosotros</Link>
   </li>
  </ul>
  <div className='lg:flex flex-col z-10 font-semibold text-sm gap-1 xs:hidden'>
   <p className='flex gap-1'><Image width={20} height={14} src={"/mail.svg"} alt='mail logo'/>clientes@idea-diseno.com</p>
   <p className='flex gap-1'><Image width={16} height={16} src={"/phone.svg"} alt='mail logo'/>(627) 522 26 11- (627) 522 27 32</p>
   <p className='flex gap-1'><Image width={19} height={19} src={"/whatsapp.svg"} alt='mail logo'/>(627) 104 42 48 - (627) 111 80 28</p>
   <p className='flex items-start gap-1'><Image width={17} height={22} src={"/location.svg"} alt='mail logo'/>Blvd. Ortiz Mena y <br/>Calle Eugenio Cintrón #65 <br/>Col. Centro, 33800 <br/>Parral, Chih, México</p>
  </div>
<Image className='w-auto h-full absolute top-0 left-0 z-1 sm:flex xs:hidden' width={50} height={50} src={"/footer_background.svg"} alt='footer background'/>
</footer>
    );
};

export default MainFooter;
