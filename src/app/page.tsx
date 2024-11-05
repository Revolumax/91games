import Grupo from "../../assets/grupo.jpg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import Universo from "../../assets/universo.png";
import ima1 from "../../assets/ima1.png";
import ima2 from "../../assets/ima2.png";
import ima3 from "../../assets/ima3.png";


export default function Home() {

  return (
    <>
      <div className="relative w-full">
        <Image
          src={Grupo}
          alt="Grupo de personas"
          className="w-full h-auto object-cover brightness-50"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-5xl font-bold">
          GRUPO DE EVENTOS 91 GAMES
        </h1>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="w-full pt-12 p-4">
        <div className="grid gap-14 md:grid-cols-3 md:gap-5">
          <div className="rounded-xl bg-white p-6 text-center border border-white">
            <div className="mx-auto flex h-16 w-16 transform items-center justify-center rounded-full dark:text-gray-600">
              <FaStar />
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 dark:text-white">
              Originalidad
            </h1>
            <p className="px-4 text-gray-500">
              Sumérgete en una experiencia única y totalmente innovadora con
              juegos diseñados específicamente para sorprenderte. Descubre
              nuevas mecánicas, dinámicas y aventuras que jamás has
              experimentado antes en el servidor de creativo, donde la
              originalidad es la clave.
            </p>
          </div>
          <div
            data-aos-delay="150"
            className="rounded-xl bg-white p-6 text-center border border-white"
          >
            <div className="mx-auto flex h-16 w-16 transform items-center justify-center rounded-full dark:text-white">
              <BsStars />
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 dark:text-white">
              Entretenimiento
            </h1>
            <p className="px-4 text-gray-500">
              Vive la emoción de una variedad inigualable de eventos
              especialmente diseñados para mantenerte entretenido. Desde
              competencias rápidas hasta desafíos a largo plazo, el
              servidor de creativo ofrece entretenimiento continuo que se adapta a
              todos los gustos y estilos de juego.
            </p>
          </div>
          <div
            data-aos-delay="300"
            className="rounded-xl bg-white p-6 text-center border border-white"
          >
            <div className="mx-auto flex h-16 w-16 transform items-center justify-center rounded-full dark:text-white">
              <GiBrain />
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 dark:text-white">
              Habilidad
            </h1>
            <p className="px-4 text-gray-500">
              Pon a prueba tus capacidades y demuestra tus habilidades en una
              amplia gama de desafíos que cubren diferentes áreas de destreza.
              Ya sea en eventos de estrategia, velocidad o creatividad, tendrás
              la oportunidad de brillar y mostrar todo tu potencial en cada reto
              único.
            </p>
          </div>
        </div>
      </div>

      

      <div></div>

      <br />
      <br />
      <br />
      <br />
      <div className="">
        <div className="p-8 bg-gray-900 text-white shadow-lg text-center w-full">
          <h1 className="text-4xl font-bold mb-4">
            Estamos ubicados en el servidor de creativo de Universocraft!!
          </h1>
          <p className="text-lg mb-8">Servidor de creativo Pandora</p>
          <a
            href="https://github.com/idugeni"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-neutral btn-wide"
          >
            Te esperamos!!
          </a>
          <br />
          <br />

          <Image
            src={Universo}
            alt="Grupo de personas"
            className="h-[115px] w-[115px] text-center mx-auto"
          />
          <a
            href="https://github.com/idugeni"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-neutral btn-wide"
          >
            mc.universocraft.net
          </a>
        </div>
      </div>

      <div className="ml-4 mt-6 md:ml-10 md:mt-8 lg:ml-40 lg:mt-10 xl:ml-80 xl:mt-16 mx-auto w-[100%]">
  <p className="text-sm font-medium text-gray-500 dark:text-white text-center md:text-left">
    ¡La mayoría de las personas nos prefieren!
  </p>
  
  <div className="flex flex-col md:flex-row items-center mt-4">
    <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
      5 Estrellas
    </a>
    <div className="w-full md:w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
      <div className="h-5 bg-yellow-300 rounded dark:bg-blue-200" style={{ width: "90%" }}></div>
    </div>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">90%</span>
  </div>

  <div className="flex flex-col md:flex-row items-center mt-4">
    <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
      4 Estrellas
    </a>
    <div className="w-full md:w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
      <div className="h-5 bg-yellow-300 rounded dark:bg-blue-200" style={{ width: "87%" }}></div>
    </div>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">87%</span>
  </div>

  <div className="flex flex-col md:flex-row items-center mt-4">
    <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
      3 Estrellas
    </a>
    <div className="w-full md:w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
      <div className="h-5 bg-yellow-300 rounded dark:bg-blue-200" style={{ width: "10%" }}></div>
    </div>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">10%</span>
  </div>

  <div className="flex flex-col md:flex-row items-center mt-4">
    <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
      2 Estrellas
    </a>
    <div className="w-full md:w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
      <div className="h-5 bg-yellow-300 rounded dark:bg-blue-200" style={{ width: "2%" }}></div>
    </div>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">2%</span>
  </div>

  <div className="flex flex-col md:flex-row items-center mt-4">
    <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
      1 Estrellas
    </a>
    <div className="w-full md:w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
      <div className="h-5 bg-yellow-300 rounded dark:bg-blue-200" style={{ width: "1%" }}></div>
    </div>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">1%</span>
  </div>
</div>

    </>
  );
}
