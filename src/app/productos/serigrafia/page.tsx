'use client';

import Image from "next/image"
import Link from "next/link";
import Slider, { Settings } from "react-slick";

export default function Serigrafia() {

    var settings: Settings  = {
        infinite: true,
        autoplay: true,
        speed: 500,
        pauseOnFocus: true,
        pauseOnHover: true,
        slidesToShow: 1,
        accessibility: false,
        slidesToScroll: 1,
        focusOnSelect: false,
        arrows: false,
        adaptiveHeight: true,
      };

    return (
    <main className="h-fit bg-white mt-28 pb-28">
        <div className="flex md:flex-row xs:flex-col gap-x-6 bg-ideaRed text-white h-fit items-center relative bg-opacity-80">
         <Image className="xxl:w-1/3 xl:w-1/3 lg:w-2/5 md:w-1/2 xs:w-full h-full object-cover" alt="imagen de letras 3D" src={"/products/serigrafia/hero.png"} width={10} height={10} />
         <div className="flex flex-col items-start md:py-0 xs:py-10 md:px-0 xs:px-3 lg:pl-20 xs:pl-3"> 
          <h1 className="font-bold text-4xl mb-4">SERÍGRAFÍA</h1>
          <p className="font-semibold text-sm">Con la técnica de Serigrafía, plasmamos prácticamente<br/>
            cualquier Idea en cientos o miles de repeticiones, sin perder resolución.
          </p>
           <p className="mt-2 text-sm">
           Impresiones sobre TELA, PAPEL Y MÁS<br/>
           ¡Mira nuestros Productos Promocionales!
          </p>
          <p className="mt-2 text-sm">
          Transferimos tu imagen a una gran variedad<br/> 
          de productos personalizados.<br/>
          <span className="font-semibold">¡Dale a todos una gran impresión!</span><br/>
          </p>
          <Link href={"/contacto"}>
            <div className="grid items-center justify-center bg-white text-ideaRed font-bold py-3 px-6 rounded-full mt-8 text-xs w-60 mx-auto hover:scale-95 transition-all">
            COTIZAR
            </div>
          </Link>
         </div>
        <Image className="absolute right-0 md:top-1/2 xs:bottom-20 md:-translate-y-1/2 z-10" src={"/images/idea-bg.png"} alt="logo de idea diseño" width={200} height={300} />
        </div>

        {/* Slider section */}
        <div className="lg:px-72 md:px-28 sm:px-10 xs:px-4 w-full">
         <Slider className="mt-20 xxl:px-48 md:px-0" {...settings}>
          <div>
           <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/serigrafia/serigrafia.png"} alt="imagen de corte y grabado láser" />
          </div>
          <div>
           <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/serigrafia/serigrafia1.png"} alt="imagen de corte y grabado láser" />
          </div>
          <div>
           <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/serigrafia/serigrafia2.png"} alt="imagen de corte y grabado láser" />
          </div>
          <div>
           <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/serigrafia/serigrafia3.png"} alt="imagen de corte y grabado láser" />
          </div>
          <div>
           <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/serigrafia/serigrafia4.png"} alt="imagen de corte y grabado láser" />
          </div>
          <div>
           <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/serigrafia/serigrafia5.png"} alt="imagen de corte y grabado láser" />
          </div>
         </Slider>
        </div>
        {/* Slider section */}
    </main>);
}