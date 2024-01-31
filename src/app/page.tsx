"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const chart = useRef<HTMLDivElement>(null);
  useEffect(() => {
    //After 3 seconds remove the fourth child of the chart div
    setTimeout(() => {
      if (chart.current != null && chart.current.children.length > 3) {
        chart.current.removeChild(chart.current.children[3]);
      }
    }, 3000);
  }, []);

  return (
    <main className="pt-48 items-center bg-white">
      {/* Main section */}
      <div className="flex flex-wrap-reverse gap-4 justify-between w-full md:px-28 sm:px-10 xs:px-4">
        <div className="flex flex-col justify-center items-start">
        <h2 className="text-4xl text-ideaRed font-bold mb-8">BIENVENIDO</h2>
        <p className="max-w-sm">Sabemos que todo gran sueño comienza con una gran Idea.
          En Idea Diseño estamos comprometidos en ofrecerte Soluciones Integrales de Publicidad, haciéndote destacar, impulsando al máximo tu negocio para impactar a tus clientes. 
          Prepárate para que todos te conozcan.
        </p>
        <p className="font-semibold italic">¡Tu Idea ahora en manos de los expertos en Publicidad!</p>
        <Link href="/productos">
         <div className="bg-ideaRed text-white font-bold py-3 px-6 rounded-full mt-8 text-xs hover:scale-95 transition-all">
           Productos y Servicios
         </div>
        </Link>
        </div>
        <Image className="max-w-7xl md:w-1/2 sm:w-2/3 xs:w-full" width={10} height={10} src={"/images/idea.png"} alt="idea diseño imagen" />
      </div>
     {/* Main section */}

     {/* Servicios section */}
     <h2 className="text-4xl font-bold mt-24 mb-16 md:px-28 sm:px-10 xs:px-4">SERVICIOS / PRODUCTOS</h2>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 row-span-full gap-x-8 gap-y-14 w-full text-center text-ideaRed font-bold text-2xl md:px-28 sm:px-10 xs:px-4">
      <Link href={"/productos/lonasyviniles"}> 
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/lonas.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">LONAS Y VINILES</h3>
      </div>
      </Link>
      <Link href={"/productos/imprentadigital"}> 
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/imprenta.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">IMPRENTA DIGITAL</h3>
      </div>
      </Link>
      <Link href={"productos/letras3d"}>      
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/letras.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">LETRAS 3D</h3>
      </div>
      </Link>
      <Link href={"productos/anunciosluminosos"}>      
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/anuncios.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">ANUNCIOS<br/>LUMINOSOS</h3>
      </div>
      </Link>
      <Link href={"productos/corteygrabado"}>
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/corte.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">CORTE Y GRABADO<br/>LÁSER</h3>
      </div>
      </Link>
      <Link href={"productos/serigrafia"}>
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/serigrafia.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">SERIGRAFÍA</h3>
      </div>
      </Link>
     </div>
     <Link href={"/productos"}>
      <div className="grid items-center justify-center bg-ideaRed text-white font-bold py-3 px-6 rounded-full mt-20 mb-20 text-xs w-40 mx-auto hover:scale-95 transition-all">
          Ver más
       </div>
     </Link>
     {/* Servicios section */}

     {/* About us section */}
     <div className="text-white relative w-full grid items-center justify-center text-center py-64 md:px-28 sm:px-10 xs:px-4">
      <p className="relative z-10 max-w-screen-sm">Sabemos que todo gran sueño comienza con una gran Idea. Es por eso que en Idea Diseño estamos comprometidos en ofrecerte soluciones integrales de publicidad, haciendo destacar, impulsando al máximo tu negocio para impactar tus clientes. Y prepárate para que todos te conozcan.</p>
      <p className="relative font-bold z-10 mt-4">¡Tu Idea ahora en manos de los expertos en publicidad!</p>
      <Link href={"/nosotros"} >
      <div className="relative z-10 grid items-center justify-center bg-ideaRed text-white font-bold py-3 px-6 rounded-full mt-4 text-xs w-40 mx-auto hover:scale-95 transition-all">
          Conócenos
       </div>
       </Link>
       <Image className="absolute top-0 right-0 w-full h-full object-cover z-0" width={10} height={10} src={"/images/hero_home.png"} alt="idea diseño imagen" />
     </div>
     {/* About us section */}
     <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
     <div ref={chart} className="elfsight-app-1c967fb0-458c-47fe-bf54-1c616072a33e py-20 md:px-28 sm:px-10 xs:px-4" data-elfsight-app-lazy >Cargando</div>
    </main>
  );
}
