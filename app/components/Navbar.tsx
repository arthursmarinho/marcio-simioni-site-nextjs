"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-sm text-white uppercase border-b border-white/10">
      <div className="max-w-375 mx-auto px-6 md:px-16 lg:px-24 h-20 flex items-center justify-between">
        <div className="flex flex-row items-center gap-4 text-2xl sm:text-3xl md:text-4xl font-black tracking-wider cursor-pointer">
          <span>Márcio Simioni</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 font-semibold text-sm">
          <li className="cursor-pointer hover:text-orange-500 transition-colors">
            <a href="#">Início</a>
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors">
            <a href="#empresas">Para Empresas</a>
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors">
            Sobre
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors">
            <a href="#contato">Contato</a>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:text-orange-500 transition-colors focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10 px-6 py-6 transition-all">
          <ul className="flex flex-col gap-6 font-semibold text-sm">
            <li
              className="cursor-pointer hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <a href="#" className="block w-full">
                Início
              </a>
            </li>
            <li
              className="cursor-pointer hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <a href="#empresas" className="block w-full">
                Para Empresas
              </a>
            </li>
            <li
              className="cursor-pointer hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="block w-full">Sobre</span>
            </li>
            <li
              className="cursor-pointer hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <a href="#contato" className="block w-full">
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
