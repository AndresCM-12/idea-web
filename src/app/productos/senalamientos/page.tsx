'use client';

import Image from "next/image"
import Link from "next/link";
import Slider, { Settings } from "react-slick";

export default function Señalamientos() {

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
         <Image className="xxl:w-1/3 xl:w-1/3 lg:w-2/5 md:w-1/2 xs:w-full h-full object-cover" alt="imagen de letras 3D" src={"/products/senalamientos/hero.png"} width={10} height={10} />
         <div className="flex flex-col items-start md:py-0 xs:py-10 md:px-0 xs:px-3 lg:pl-20 xs:pl-3"> 
          <h1 className="font-bold text-4xl mb-4">SEÑALAMIENTO</h1>
          <p className="text-sm">
          En Idea Diseño la Calidad y la Seguridad van de la mano.<br/>
            Por ello contamos con una amplia gama de materiales para ofrecer la mejor señalización para interior y exterior.<br />
            Soluciones Visuales de Seguridad y de Indicación a Nivel Industrial, Comercial, Gubernamental y más<br/>
            ¡Seguramente todos te verán!
          </p>
           <p className="mt-2 text-sm">
           Señalamientos informativos, de protección civil, sanitarios,<br/>transportes, señales corporativas, entre otros.
          </p>
          <p className="mt-2 text-sm">
          En diferentes materiales como Trovicel,<br/>Coroplast, Lamina, Acrílico y más
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
           <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/senalamientos/senalamiento1.png"} alt="imagen de corte y grabado láser" />
          </div>
          <div>
           <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/senalamientos/senalamiento2.png"} alt="imagen de corte y grabado láser" />
          </div>
          <div>
           <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/senalamientos/senalamiento3.png"} alt="imagen de corte y grabado láser" />
          </div>
         </Slider>
        </div>
        {/* Slider section */}
    </main>);
}