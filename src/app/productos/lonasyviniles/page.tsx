'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider, { Settings } from "react-slick";

export default function LonasyViniles(){
    var settings: Settings  = {
        dots: true,
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
    <main className="h-fit bg-white lg:px-72 md:px-28 sm:px-10 xs:px-4 pt-48">
        <div className="relative w-full text-center mb-12">
        <Image className="absolute left-0 top-1/2 -translate-y-1/2 sm:flex xs:hidden" height={220} width={70} alt="i del logo idea" src={"/products/i-vertical.svg"} />
         <h1 className="text-4xl font-bold text-ideaRed mb-5">LONAS Y VINILES</h1>
         <p className="text-center">Transforma y promueve tu negocio, dejando a todos impresionados con tu<br/><span className="text-ideaRed font-normal"> IDEA </span>en una gran Imágen.</p>
         <p className="text-center mt-4">Nuestra tecnología Full Color ofrece impresiones de productos en gran<br/> formato de <span className="font-semibold ">alta calidad y mayor duración.</span></p>
        <Image className="absolute right-0 top-1/2 -translate-y-1/2 sm:flex xs:hidden" height={200} width={70} alt="i del logo idea" src={"/products/i-inverted.svg"} />
        </div>
        {/* Lonas slider */}
        <div className="mt-20 xxl:px-48 md:px-0">
            <h3 className="text-4xl font-bold text-ideaRed mb-5">LONAS</h3>
            <Slider key={"slider_1"} className="one mx-auto" {...settings}>
             <div>
              <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/lonasyviniles/lonas1.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/lonas2.png"} alt="imagen de lonas" />
             </div>
            </Slider>
        </div>
        {/* Lonas slider */}
        
        {/* Bastidores slider */}
        <div className="pt-12 xxl:px-48 md:px-0">
            <h3 className="text-4xl font-bold text-ideaRed mb-5">BASTIDORES</h3>
            <Slider key={"slider_2"} className="two mx-auto" {...settings}>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/bastidores1.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/bastidores2.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/bastidores3.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/bastidores4.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/bastidores5.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/bastidores6.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/bastidores7.png"} alt="imagen de lonas" />
             </div>
            </Slider>
        </div>
        {/* Bastidores slider */}

        {/* Viniles slider */}
        <div className="pt-20 xxl:px-48 md:px-0">
            <h3 className="text-4xl font-bold text-ideaRed mb-5">VINILES</h3>
            <Slider key={"slider_3"} className="three mx-auto " {...settings}>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/vinil1.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/vinil2.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/vinil3.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/vinil4.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/vinil5.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/vinil6.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/vinil7.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/vinil8.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/vinil9.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/vinil10.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/vinil11.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/vinil12.png"} alt="imagen de lonas" />
             </div>
             <div>
              <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/lonasyviniles/vinil13.png"} alt="imagen de lonas" />
             </div>
            </Slider>
        </div>
        {/* Viniles slider */}

        <div className="mt-16 text-center pb-20">
            <p>Lonas Full Color de alta resolución, resistentes, duraderas y diseños de<br/>impacto <span className="text-ideaRed">¡En todos los Tamaños!</span></p>
            <p className="mt-4 font-bold">¡Deja a tus clientes plasmados! Viniles para prácticamente cualquier<br/>superficie en tamaño o forma.</p>
            <p className="mt-4">Un gran negocio requiere la mejor presentación.<br/>Bastidores publicitarios que brindaran<br/>esa increíble Imagen.</p>
            <Link href={"/productos"}>
                <div className="grid items-center justify-center bg-ideaRed text-white font-bold py-3 px-6 rounded-full mt-8 text-xs w-60 mx-auto hover:scale-95 transition-all">
                COTIZA TU PROYECTO AQUÍ
                </div>
            </Link>
        </div>
    </main>)
}