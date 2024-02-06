'use client';

import Image from "next/image"
import Link from "next/link";

export default function OtrosServicios() {
  
    return (
    <main className="h-fit bg-white mt-28 pb-28 pt-28 xxl:px-72 xl:px-44 lg:px-28 md:px-10 sm:px-3 xs:px-4 w-full">

        <h1 className="font-bold text-4xl mb-4 text-ideaRed">OTROS SERVICIOS:</h1>

        <div className="flex flex-wrap w-full lg:h-otros1 md:h-otros xs:h-auto mb-28">
          <div className="w-full md:w-1/2 xs:w-full h-full flex items-center">
            <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/otros/logo.png"} alt="imagen de bordado textil" />
          </div>
          <div className="w-full md:w-1/2 xs:w-full h-full flex flex-col items-start justify-center md:p-12 xs:p-3 bg-ideaRed bg-opacity-80 text-white">
          <h3 className="font-bold text-3xl mb-4">DISEÑO DE LOGO</h3> 
          <p className="text-sm">
           Sabemos lo importante que es la imagen para tu marca,<br/> 
           te ofrecemos evolucionar y darle una nueva cara a<br/>
           tu negocio. En Idea diseño nos encargaremos de darle<br/>
           un nuevo impacto visual a tu empresa, con calidad y profesionalismos que te<br/>
           mereces.
          </p>
           <p className="mt-2 text-sm">
            Desarrollamos una imagen innovadora para marcas nuevas y<br/>
            proyectos a la medida. Te entregaremos todo lo necesario para<br/>
            que tu negocio llegue alto.<br/>
          </p>
          <p className="mt-2 text-sm">
             Te ayudamos a que tu marca realmente conecte con tu<br/>
             audiencia, más que hacer logos, creamos tu estilo.<br/> 
             ¡Estás con los expertos en Diseño!
          </p>
          <Link href={"/contacto"}>
            <div className="grid items-center justify-center bg-white text-ideaRed font-bold py-3 px-6 rounded-full mt-8 text-xs w-60 mx-auto hover:scale-95 transition-all">
            COTIZAR
            </div>
          </Link>
          </div>
        </div>

        <div className="flex flex-wrap w-full lg:h-otros1 md:h-otros xs:h-auto mb-28">
          <div className="w-full md:w-1/2 xs:w-full h-full flex items-center">
            <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/otros/lona.png"} alt="imagen de bordado textil" />
          </div>
          <div className="w-full md:w-1/2 xs:w-full h-full flex flex-col items-start justify-center md:p-12 xs:p-3 bg-ideaRed bg-opacity-80 text-white">
          <h3 className="font-bold text-3xl mb-4">DISPLAY<br/>PUBLICITARIOS</h3> 
          <p className="text-sm">
           Sabemos lo importante que es la imagen para tu marca,<br/> 
           te ofrecemos evolucionar y darle una nueva cara a<br/>
           tu negocio. En Idea diseño nos encargaremos de darle<br/>
           un nuevo impacto visual a tu empresa, con calidad y profesionalismos que te<br/>
           mereces.
          </p>
           <p className="mt-2 text-sm">
           Llama la atención de tus clientes potenciales, proyecta tu IDEA<br/>en una estructura resistente, ligera y fácil de armar.
          </p>
          <p className="mt-2 text-sm">
           Capta al público en tus exposiciones, exhibiciones, negocios y<br/>promociones, con un Display, Banner o Araña publicitaria<br/>¡Haz que todos te vean!
          </p>
          <p className="mt-2 text-sm">
          Levanta en lo alto tu negocio con una bandera publicitaria,<br/>nosotros te haremos notar.
          </p>
          <Link href={"/contacto"}>
            <div className="grid items-center justify-center bg-white text-ideaRed font-bold py-3 px-6 rounded-full mt-8 text-xs w-60 mx-auto hover:scale-95 transition-all">
            COTIZAR
            </div>
          </Link>
          </div>
        </div>

        <div className="flex flex-wrap w-full lg:h-otros1 md:h-otros xs:h-auto mb-28">
          <div className="w-full md:w-1/2 xs:w-full h-full flex items-center">
            <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/otros/sello.png"} alt="imagen de bordado textil" />
          </div>
          <div className="w-full md:w-1/2 xs:w-full h-full flex flex-col items-start justify-center md:p-12 xs:p-3 bg-ideaRed bg-opacity-80 text-white">
          <h3 className="font-bold text-3xl mb-4">SELLOS</h3> 
          <p className="text-sm">
          Deja tu huella. Combina el diseño compacto del tradicional<br/>sello de entintado automático, con el mayor elevado número<br/>de impresiones en cada aplicación. Su funcionamiento suave,<br/>casi silencioso, produce impresiones claras y nítidas.
          </p>
           <p className="mt-2 text-sm">
           Contamos con una diversidad de Sellos personalizados, Tamaños especiales y con la mejor calidad y profesionalismo. Para aplicaciones<br/> publicitarias en negrita o de líneas finas.
          </p>
          <p className="mt-2 text-sm">
          Elaboración de todo tipo de sellos y productos para los<br/>diferentes usos, ya sea Empresarial, Educativo, Oficinas,<br/>Gobierno, Sector privado.
          </p>
          <p className="mt-2 text-sm">
          Sellos personalizados, fechadores, numeradores foliadores y<br/> otros.
          </p>
          <Link href={"/contacto"}>
            <div className="grid items-center justify-center bg-white text-ideaRed font-bold py-3 px-6 rounded-full mt-8 text-xs w-60 mx-auto hover:scale-95 transition-all">
            COTIZAR
            </div>
          </Link>
          </div>
        </div>

        <div className="flex flex-wrap w-full lg:h-otros1 md:h-otros xs:h-auto mb-28">
          <div className="w-full md:w-1/2 xs:w-full h-full flex items-center">
            <Image className="h-full w-full object-fill " width={10} height={10} src={"/products/otros/tapete.png"} alt="imagen de bordado textil" />
          </div>
          <div className="w-full md:w-1/2 xs:w-full h-full flex flex-col items-start justify-center md:p-12 xs:p-3 bg-ideaRed bg-opacity-80 text-white">
          <h3 className="font-bold text-3xl mb-4">TAPETES</h3> 
          <p className="text-sm">
          En IDEA Diseño Sabemos que la primera impresión sí cuenta,<br/>por eso recibe a tus clientes con un Tapete personalizado<br/>con mejor calidad.
          </p>
           <p className="mt-2 text-sm">
           Tu marca hasta en la planta de los pies.<br/>Tapetes tipo o Tapetes tipo Rizo
          </p>
          <p className="mt-2 text-sm">
           Capta al público en tus exposiciones, exhibiciones, negocios y<br/>promociones, con un Display, Banner o Araña publicitaria<br/>¡Haz que todos te vean!
          </p>
          <p className="mt-2 text-sm">
          Elaboramos y Diseñamos tapetes con logotipo impreso de muy<br/>alta calidad de una excelente variedad de materiales y colores<br/>para encajar perfectamente con tus necesidades.
          </p>
          <Link href={"/contacto"}>
            <div className="grid items-center justify-center bg-white text-ideaRed font-bold py-3 px-6 rounded-full mt-8 text-xs w-60 mx-auto hover:scale-95 transition-all">
            COTIZAR
            </div>
          </Link>
          </div>
        </div>

    </main>);
}