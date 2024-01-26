import Image from "next/image";
import Link from "next/link";

export default function Productos() {
    return (
    <main className="md:px-28 sm:px-10 xs:px-4 bg-white pt-20 pb-20">
     <h2 className="text-4xl font-bold mt-24 mb-16">SERVICIOS / PRODUCTOS</h2>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 row-span-full gap-x-8 gap-y-14 w-full text-center text-ideaRed font-bold text-2xl">
      <Link href={"productos/lonasyviniles"}>      
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/lonas.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">LONAS Y VINILES</h3>
      </div>
      </Link>
      <Link href={"productos/imprentadigital"}>      
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/imprenta.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">IMPRENTA DIGITAL</h3>
      </div>
      </Link>
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/letras.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">LETRAS 3D</h3>
      </div>
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/anuncios.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">ANUNCIOS<br/>LUMINOSOS</h3>
      </div>
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/corte.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">CORTE Y GRABADO<br/>LÁSER</h3>
      </div>
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/serigrafia.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">SERIGRAFÍA</h3>
      </div>
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/sublimacion.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">SUBLIMACIÓN</h3>
      </div>
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/rotulacion.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">ROTULACIÓN</h3>
      </div>
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/bordado.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">BORDADO TEXTIL</h3>
      </div>
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/señalamiento.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">SEÑALAMIENTOS</h3>
      </div>
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/articulos.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">ARTÍCULOS<br/>PROMOCIONALES</h3>
      </div>
      <div className="h-full max-h-48">
        <Image className="w-full h-3/5 object-contain hover:scale-95 transition-all" width={10} height={10} src={"/home/otros.svg"} alt="idea diseño imagen" />
        <h3 className="mt-4">OTROS</h3>
      </div>
     </div>
    </main>
    );
}