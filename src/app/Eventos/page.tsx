import Image from "next/image";
import concurso from "../../../assets/concurso.png"
import geografia from "../../../assets/geografia.png"
import carrera from "../../../assets/carrera.png"
import simon from "../../../assets/simon.png"
import cultura from "../../../assets/cultura.png"
import parlamento from "../../../assets/parlamento.png"
import botes from "../../../assets/botes.png"
import dice from "../../../assets/dice.png"

export default function Eventos() {
  return (
    <>
      <div className="text-center mt-[80px]">
        <h5 className="text-black font-black text-[70px] dark:text-white">Eventos</h5>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
      <div className="relative rounded overflow-hidden">
        <Image
          src={concurso}
          alt="Hanging Planters"
          className="w-full"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium transition">
          Concurso de skins calificativo
        </p>
      </div>
      <div className="relative rounded overflow-hidden">
        <Image
          src={geografia}
          alt="Planter Stand with Pots"
          className="w-full"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium transition">
          Concurso de geografía
        </p>
      </div>
      <div className="relative rounded overflow-hidden">
        <Image
          src={carrera}
          alt="Watering Cans"
          className="w-full"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium transition">
          Carrera de preguntas selectivas 
        </p>
      </div>
      <div className="relative rounded overflow-hidden">
        <Image
          src={simon}
          alt="Metal Planters"
          className="w-full"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium transition">
          Simón dice sobre geografía mundial 
        </p>
      </div>
      <div className="relative rounded overflow-hidden">
        <Image
          src={cultura}
          alt="Table Top Planters"
          className="w-full"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium transition">
          Competencia de preguntas de cultura general 
        </p>
      </div>
      <div className="relative rounded overflow-hidden">
        <Image
          src={parlamento}
          alt="Wall Mounted Stands"
          className="w-full"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium transition">
          Concurso de geografía(El parlamento)
        </p>
      </div>
      <div className="relative rounded overflow-hidden">
        <Image
          src={botes}
          alt="Wall Mounted Stands"
          className="w-full"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium transition">
          Carrera de botes
        </p>
      </div>
      <div className="relative rounded overflow-hidden">
        <Image
          src={dice}
          alt="Wall Mounted Stands"
          className="w-full"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium transition">
          Simón dice sobre geografía 
        </p>
      </div>
    </div>
      </div>
    </>
  );
}
