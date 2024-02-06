import Image from "next/image"

export default function Contacto() {
    return (
        <main className="min-h-screen items-center justify-between bg-white">
            <div className="w-full h-full relative">
             <Image className="w-full h-4/6 object-cover" src={"/contact/hero.png"} width={10} height={10} alt="Imagen de demostración"/>
             <div className="bg-white h-96 w-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 md:max-w-4xl sm:max-w-md xs:max-w-80 w-full">
                <form action="https://formsubmit.co/clientes@idea-diseno.com" method="POST" className="bg-ideaRed flex flex-col lg:pl-48 md:px-20 xs:px-5 py-16 gap-4 w-full relative">
                    <h3 className="text-white font-bold text-2xl">CONTÁCTANOS:</h3>
                    <input className="p-2" type="text" name="Nombre" placeholder="Tu nombre:" />
                    <input className="p-2" type="text" name="Correo" placeholder="Correo:" />
                    <input className="p-2" type="text" name="Teléfono" placeholder="Teléfono de contacto:" />
                    <textarea className="p-2" name="Mensaje" placeholder="Mensaje:" />
                    <button className="bg-black text-white w-36 py-2 rounded-full text-xs hover:scale-95 transition-all" type="submit">Enviar</button>
                    <Image className="absolute bottom-0 left-0 -translate-x-1/2 -translate-y-1/3 lg:flex xs:hidden" width={300} height={300} src={"/contact/map.png"} alt="mapa con ubicacion de IDEA"/>
                </form>
            </div>
            </div>
        </main>
    );
}