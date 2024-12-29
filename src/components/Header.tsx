"use client";

import logo from "../../assets/91gm.png";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <nav className="border-gray-200 py-[20px] bg-gray-900 w-full text-white">
        <div className="mx-auto flex flex-wrap items-center justify-between px-4">
          <a href="#" className="flex items-center">
            <Image src={logo} alt="Logo" className="h-[45px] w-[165px]" />
          </a>

          {/* Botón para desplegar el menú en pantallas pequeñas */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleDarkMode}
              className="outline-none border-none mr-[10px]"
            >
              {isDarkMode ? (
                <FaSun className="h-6 w-6 text-gray-500" />
              ) : (
                <FaMoon className="h-6 w-6 text-gray-500" />
              )}
            </button>
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Menú de navegación */}
          <div
            className="hidden lg:flex flex-grow items-center justify-between ml-24"
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:flex-grow">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:p-0 lg:hover:text-purple-700 dark:text-gray-400 dark:hover:text-white"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/Quienessomos"
                  className="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Quienes Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/Eventos"
                  className="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/Ganadores"
                  className="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Ganadores
                </Link>
              </li>
              <li>
                <Link
                  href="/Torneos"
                  className="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Torneos
                </Link>
              </li>
            </ul>
            <div className="mt-4 lg:mt-0">
              <button
                onClick={toggleDarkMode}
                className="outline-none border-none mr-7"
              >
                {isDarkMode ? (
                  <FaSun className="h-6 w-6 text-gray-500" />
                ) : (
                  <FaMoon className="h-6 w-6 text-gray-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menú desplegable móvil */}
      <div
        className={`lg:hidden flex-grow items-center justify-between absolute z-50 w-full bg-gray-900 text-white mt-[85px] border-none ${isMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:mt-0 lg:flex-grow">
          <li>
            <Link
              href="/"
              className="block py-2 pl-3 pr-4 text-white hover:bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-gray-400"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/Quienessomos"
              className="block py-2 pl-3 pr-4 hover:bg-purple-700 text-white border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Quienes Somos
            </Link>
          </li>
          <li>
            <Link
              href="/Eventos"
              className="block py-2 pl-3 pr-4 text-white hover:bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:hover:bg-gray-700 dark:text-gray-400"
            >
              Eventos
            </Link>
          </li>
          <li>
            <Link
              href="/Ganadores"
              className="block py-2 pl-3 pr-4 text-white hover:bg-purple-700 border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Ganadores
            </Link>
          </li>
          <li>
            <Link
              href="/Torneos"
              className="block py-2 pl-3 pr-4 dark:text-gray-400 hover:bg-purple-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Torneos
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
