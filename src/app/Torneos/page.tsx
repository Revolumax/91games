import React from "react"
import ReactCountryFlag from "react-country-flag"


export default function Torneos() {
    return (
      <>
        <h5 className="text-black font-black text-[70px] text-center mt-[100px] dark:text-white">Actualmente no hay torneos disponibles </h5>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[50px] mx-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
                <th scope="col" className="p-4"></th>
                <th scope="col" className="px-6 py-3">País</th>
                <th scope="col" className="px-6 py-3">Hora</th>
                <th scope="col" className="px-6 py-3">Fecha</th>
                <th scope="col" className="px-6 py-3">Evento</th>
                <th scope="col" className="px-6 py-3">Premio</th>
                <th scope="col" className="px-6 py-3">Moderador</th>            
            </tr>
        </thead>
        <tbody>
            {/* México */}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4"></td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <ReactCountryFlag countryCode="MX" style={{ fontSize: '4em', lineHeight: '4em' }} svg />
                </th>
                <td className="px-6 py-4">5:00 p.m.</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
            </tr>

            {/* Argentina */}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4"></td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <ReactCountryFlag countryCode="AR" style={{ fontSize: '4em', lineHeight: '4em' }} svg />
                </th>
                <td className="px-6 py-4">8:00 p.m.</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
            </tr>

            {/* Chile */}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4"></td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <ReactCountryFlag countryCode="CL" style={{ fontSize: '4em', lineHeight: '4em' }} svg />
                </th>
                <td className="px-6 py-4">8:00 p.m.</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
            </tr>

            {/* Colombia */}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4"></td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <ReactCountryFlag countryCode="CO" style={{ fontSize: '4em', lineHeight: '4em' }} svg />
                </th>
                <td className="px-6 py-4">6:00 p.m.</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
            </tr>

            {/* Perú */}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4"></td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <ReactCountryFlag countryCode="PE" style={{ fontSize: '4em', lineHeight: '4em' }} svg />
                </th>
                <td className="px-6 py-4">6:00 p.m.</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
            </tr>

            {/* Venezuela */}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4"></td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <ReactCountryFlag countryCode="VE" style={{ fontSize: '4em', lineHeight: '4em' }} svg />
                </th>
                <td className="px-6 py-4">7:00 p.m.</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
            </tr>

            {/* Guatemala */}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4"></td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <ReactCountryFlag countryCode="GT" style={{ fontSize: '4em', lineHeight: '4em' }} svg />
                </th>
                <td className="px-6 py-4">5:00 p.m.</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
            </tr>

            {/* República Dominicana */}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4"></td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <ReactCountryFlag countryCode="DO" style={{ fontSize: '4em', lineHeight: '4em' }} svg />
                </th>
                <td className="px-6 py-4">7:00 p.m.</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
                <td className="px-6 py-4">No disponible</td>
            </tr>
        </tbody>
    </table>
</div>



      </> 
    );
  }
  