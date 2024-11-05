import React from "react";
import Image from "next/image";

export default function Footer() {

  return (
    <>
    <footer className="bg-gray-900 font-mulish mt-[200px]">
  <div className="container mx-auto p-0 md:p-8 xl:px-0 flex justify-center items-center">
    <div className="px-6 pb-10 pt-16 text-center">
      <div className="   justify-center mx-auto">
        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 justify-center mx-auto">
          <div className="md:grid md:grid-cols-2 md:gap-8 ">
            <div>
              <h3 className="text-md font-semibold leading-6 text-white text-center dark:text-gray-400">Inicio</h3>
              <ul role="list" className="mt-6 space-y-4 text-center">
                <li>
                  <a href="/Quienessomos" className="text-md leading-6 text-gray-300 hover:text-gray-50 dark:text-gray-400">
                    Quienes Somos
                  </a>
                </li>
                <li>
                  <a href="/Eventos" className="text-md leading-6 text-gray-300 hover:text-gray-50 dark:text-gray-400">
                    Eventos
                  </a>
                </li>
                <li>
                  <a href="/Ganadores" className="text-md leading-6 text-gray-300 hover:text-gray-50 dark:text-gray-400">
                    Ganadores
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-md font-semibold leading-6 text-white text-center dark:text-gray-400">Actividades</h3>
              <ul role="list" className="mt-6 space-y-4 text-center">
                <li>
                  <a href="/Torneos" className="text-md leading-6 text-gray-300 hover:text-gray-50 dark:text-gray-400">
                    Torneos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-md font-semibold leading-6 text-white text-center dark:text-gray-400">Canales</h3>
              <ul role="list" className="mt-6 space-y-4 text-center">
                <li>
                  <a href="https://www.youtube.com/@revolumax2132" className="text-md leading-6 text-gray-300 hover:text-gray-50 dark:text-gray-400">
                    Revolumax
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@botw7956" className="text-md leading-6 text-gray-300 hover:text-gray-50 dark:text-gray-400">
                    Botw
                  </a>
                </li>
                <li>
                  <a href="" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                    
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                  
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-md leading-6 text-gray-300 hover:text-gray-50">
      
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
             
              <ul role="list" className="mt-6 space-y-4 text-center">
                <li>
                  <a href="/aboutus" className="text-md leading-6 text-gray-300 hover:text-gray-50">
               
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-md leading-6 text-gray-300 hover:text-gray-50">
           
                  </a>
                </li>
                <li>
                  <a href="/contactus" className="text-md leading-6 text-gray-300 hover:text-gray-50">
           
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24 border-white">
        <div className="text-md text-center text-white">
          <a rel="noopener" href="/">Grupo de eventos 91games</a>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  );
}

