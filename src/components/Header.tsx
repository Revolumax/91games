"use client";
import logo from "../../assets/91gm.png";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
              className=" outline-none border-none mr-[10px]"
            >
              {isDarkMode ? (
                <FaSun className="h-6 w-6 text-gray-500" />
              ) : (
                <FaMoon className="h-6 w-6 text-gray-500" />
              )}
            </button>
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu-2"
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
        </div>
      </nav>

      {/* Menú de navegación en responsive */}
      <div
        className={`lg:hidden absolute z-50 w-full bg-gray-900 text-white ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col">
          <li>
            <Link href="/" onClick={closeMenu} className="py-2 pl-3 pr-4">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/Quienessomos" onClick={closeMenu} className="py-2 pl-3 pr-4">
              Quienes Somos
            </Link>
          </li>
          <li>
            <Link href="/Eventos" onClick={closeMenu} className="py-2 pl-3 pr-4">
              Eventos
            </Link>
          </li>
          <li>
            <Link href="/Ganadores" onClick={closeMenu} className="py-2 pl-3 pr-4">
              Ganadores
            </Link>
          </li>
          <li>
            <Link href="/Torneos" onClick={closeMenu} className="py-2 pl-3 pr-4">
              Torneos
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
