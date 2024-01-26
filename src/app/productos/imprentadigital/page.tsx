'use client';
import Image from "next/image";
import Link from "next/link";
import Slider, { Settings } from "react-slick";

export default function ImprentaDigital() {
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
        <main className="bg-white pt-20">
            {/* title section */}
            <div className="md:px-28 sm:px-10 xs:px-4 mb-8 text-center">
                <h1 className="text-4xl font-bold mt-24 mb-6 text-ideaRed">IMPRENTA DIGITAL</h1>
                <p>Presente en la mente de tus clientes Siempre. Con nuestra tecnología de impresión<br/>
                   Full Color <span className="text-ideaRed">¡Hacemos tus IDEAS realidad!</span> Promocionando tu negocio en la mejor<br/>
                   resolución.
                </p>
                <p className="mt-4">Productos personalizados con la mayor calidad en Impresión.</p>
            </div>
            {/* title section */}

            {/* slider section */}
            <div className="lg:px-72 md:px-28 sm:px-10 xs:px-4 w-full">
                <Slider key={"slider_1"} className="mt-20 xxl:px-48 md:px-0" {...settings}>
                 <div>
                  <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/imprentadigital/imprenta1.png"} alt="imagen de lonas" />
                 </div>
                 <div>
                  <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/imprentadigital/imprenta2.png"} alt="imagen de lonas" />
                 </div>
                 <div>
                  <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/imprentadigital/imprenta3.png"} alt="imagen de lonas" />
                 </div>
                 <div>
                  <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/imprentadigital/imprenta4.png"} alt="imagen de lonas" />
                 </div>
                 <div>
                  <Image className="h-full w-full object-contain object-center" width={10} height={10} src={"/products/imprentadigital/imprenta5.png"} alt="imagen de lonas" />
                 </div>
                </Slider>
            </div>
            {/* slider section */}

            {/* services section */}
            <div className="h-fit py-20 xxl:px-96 xl:px-60 md:px-28 sm:px-10 xs:px-4 flex flex-wrap gap-6 text-center font-semibold justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-y-3">
                <Image className="w-72 h-72 object-contain" width={10} height={10} src={"/products/imprentadigital/service1.png"} alt="Imagen de impresora xerox color c70" />
                <p>Anuncios, Carteles<br/> y Posters</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-3">
                <Image className="w-72 h-72 object-contain" width={10} height={10} src={"/products/imprentadigital/service2.png"} alt="Imagen de impresora xerox color c70" />
                <p>Calendarios, Menús</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-3">
                <Image className="w-72 h-72 object-contain" width={10} height={10} src={"/products/imprentadigital/service3.png"} alt="Imagen de impresora xerox color c70" />
                <p>Etiquetas</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-3">
                <Image className="w-72 h-72 object-contain" width={10} height={10} src={"/products/imprentadigital/service4.png"} alt="Imagen de impresora xerox color c70" />
                <p>Tarjetas de<br/> Presentación</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-3">
                <Image className="w-72 h-72 object-contain" width={10} height={10} src={"/products/imprentadigital/service5.png"} alt="Imagen de impresora xerox color c70" />
                <p>Volantes, Diopticos y<br/> Tripticos</p>
                </div>
            </div>
            {/* services section */}

            {/* hero1 section */}
            <div className="w-full flex flex-wrap-reverse md:px-28 sm:px-10 xs:px-4 items-center justify-center bg-footerBg py-4 gap-y-8">
                <Image className="w-96 h-96 object-contain" width={10} height={10} src={"/products/imprentadigital/impresora.png"} alt="Imagen de impresora xerox color c70" />
                <div className="text-center">
                    <h3 className="font-bold text-4xl">Xerox Color C70</h3>
                    <p className=" font-bold">Lo mejor en equipo de <span className="text-ideaRed">Tecnología</span></p>
                </div>
            </div>
            {/* hero1 section */}

            {/* hero2 section */}
            <div className="w-full h-96 py-96 flex items-center justify-center relative">
            <Image className="w-full h-full object-cover absolute top-0 left-0 z-0" width={10} height={10} src={"/products/imprentadigital/hero.png"} alt="Imagen de impresora xerox color c70" />
            <Link className="z-10 relative" href={"/contacto"}>
                <div className="grid items-center justify-center text-ideaRed bg-white font-bold py-3 px-6 rounded-full mt-20 mb-20 text-xs w-40 mx-auto hover:scale-95 transition-all">
                LONAS Y VINILES
                </div>
            </Link>
            </div>
            {/* hero2 section */}
        </main>
    )
}