import Image from "next/image";

export default function Nosotros() {
    return (
        <main className="min-h-screen bg-white pb-36">
            <div className="w-full bg-ideaRed h-full flex items-center justify-start md:px-28 sm:px-10 xs:px-4 py-52 mt-24">
                <div className=" text-white font-bold">
                    <h3 className="text-4xl">N O S O T R O S</h3>
                    <p className="max-w-96 mt-4 font-normal">Sabemos que todo gran sueño comienza con una gran Idea.  
                        En Idea Diseño estamos comprometidos en ofrecerte Soluciones
                        Integrales de Publicidad, haciéndote destacar, impulsando al 
                        máximo tu negocio para impactar a tus clientes. Prepárate para 
                        que todos te conozcan.
                      </p>
                      <p className="font-bold mt-4">
                       ¡Tu Idea ahora en manos de los expertos en Publicidad!
                      </p>
                </div>
            </div>
            <h3 className="text-4xl mt-40 mb-14 text-center font-bold">NUESTRAS INSTALACIONES</h3>
            <div className="w-2/3 h-96 bg-ideaRed m-auto"></div>
            <h3 className="text-4xl mt-40 mb-14 text-center font-bold text-ideaRed">G A L E R Í A</h3>
            <div className="w-full relative h-fit lg:px-64 md:px-28 sm:px-10 xs:px-4">
                <Image className="w-full" width={10} height={10} src={"/contact/galleria.svg"} alt="galeria de diseño idea" />
                {/* <div className="absolute lg:left-44 md:left-28 sm:left-10 xs:left-4 lg:bottom-32">
                    <p className="font-bold text-lg">HORARIO DE ATENCIÓN<br/>A CLIENTES:</p>
                        <p className="font-bold mt-2">
                        Lunes a Viernes: <br />
                        8:30 a.m - 1:30 p.m<br />
                        3:00 p.m - 6:30 p.m<br />
                        </p>
                        <p className="font-bold mt-2">
                        Sábado:<br /> 
                        9:00 a.m - 2:00 p.m
                    </p>
                </div> */}
            </div>
        </main>
    );
}