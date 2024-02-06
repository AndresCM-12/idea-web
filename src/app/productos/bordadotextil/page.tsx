'use client';

import Image from "next/image"
import Link from "next/link";
import Slider, { Settings } from "react-slick";

export default function BordadoTextil() {

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
        nextArrow: <p>next</p>,
        prevArrow: <p>prev</p>,
      };

    return (
    <main className="h-fit bg-white mt-28 pb-28">
        <div className="flex md:flex-row xs:flex-col gap-x-6 bg-ideaRed text-white h-fit items-center relative bg-opacity-80">
         <Image className="xxl:w-1/3 xl:w-1/3 lg:w-2/5 md:w-1/2 xs:w-full h-auto object-fill" alt="imagen de bordado textil" src={"/products/bordadotextil/hero.png"} width={10} height={10} />
         <div className="flex flex-col items-start md:py-0 xs:py-10 md:px-0 xs:px-3 lg:pl-20 xs:pl-3"> 
          <h1 className="font-bold text-4xl mb-4">BORDADO TEXTIL</h1>
          <p className="mb-2">Bordamos todo tipo de prendas textiles ¡Lleva tu IDEA<br/> a todas partes mientras vistes!</p>
          <p className="mb-2">Bordados personalizados con nombre, logo, marca.<br/>A nivel empresarial, deportivo, escolar y publicitario</p>
          <p className="">Contamos con la más alta calidad gracias a la excelente<br/>maquinaria y equipo de bordado.</p>
          <Link href={"/contacto"}>
            <div className="grid items-center justify-center bg-white text-ideaRed font-bold py-3 px-6 rounded-full mt-8 text-xs w-60 mx-auto hover:scale-95 transition-all">
            COTIZAR
            </div>
          </Link>
         </div>
        <Image className="absolute right-0 md:top-1/2 xs:bottom-20 md:-translate-y-1/2 z-10" src={"/images/idea-bg.png"} alt="logo de idea diseño" width={200} height={300} />
        </div>

        {/* mini slider section */}
        <div className="lg:px-72 md:px-28 sm:px-10 xs:px-4 flex sm:justify-between xs:justify-center items-center mt-20 sm:h-96 mx-auto gap-x-3 sm:flex-nowrap xs:flex-wrap">
          <Slider className="w-1/2 h-full" {...settings}>
          <div>
            <Image className="sm:h-96 w-full object-contain " width={10} height={10} src={"/products/bordadotextil/shirt1.png"} alt="imagen de bordado textil" />
          </div>
          <div>
            <Image className="sm:h-96 w-full object-contain " width={10} height={10} src={"/products/bordadotextil/shirt2.png"} alt="imagen de bordado textil" />
          </div>
          </Slider>
          <div className="w-1/2 h-full grid items-center justify-start sm:text-start xs:text-center">
            <p>Variedad de prendas y artículos textiles.<br/><span className="font-bold">Camisas, playeras, sudaderas,<br/>uniformes, gorras, parches.</span></p>
          </div>
        </div>
        {/* mini slider section */}

        {/* Slider section */}
        <div className="lg:px-72 md:px-28 sm:px-10 xs:px-4 w-full">
         <Slider className="mt-20 xxl:px-48 md:px-0" {...settings}>
          <div>
           <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/bordadotextil/bordadotextil1.png"} alt="imagen de bordado textil" />
          </div>
          <div>
           <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/bordadotextil/bordadotextil2.png"} alt="imagen de bordado textil" />
          </div>
          <div>
           <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/bordadotextil/bordadotextil3.png"} alt="imagen de bordado textil" />
          </div>
          <div>
           <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/bordadotextil/bordadotextil4.png"} alt="imagen de bordado textil" />
          </div>
         </Slider>
        </div>
        {/* Slider section */}

    </main>);
}