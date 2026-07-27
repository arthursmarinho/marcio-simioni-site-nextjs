"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-sm text-white uppercase border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 md:space-x-4 h-20 flex items-center justify-between">
        <div className="flex flex-row items-center gap-4 text-xl sm:text-2xl md:text-3xl font-black tracking-wider cursor-pointer whitespace-nowrap">
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
            <a href="#temas">Temas</a>
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors">
            <a href="#sobre">Sobre</a>
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors">
            <a href="#depoimentos">Depoimentos</a>
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors">
            <a href="#contatos">Contato</a>
          </li>
        </ul>

        <div className="hidden md:block text-xl sm:text-2xl md:text-3xl">
          <button className="bg-yellow-500 text-black px-5 py-2.5 rounded-full font-medium text-sm hover:bg-yellow-400 transition-colors">
            <a href="https://api.whatsapp.com/send/?phone=5541987624581&text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento.&type=phone_number&app_absent=0">Contratar Palestra</a>
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:text-orange-500 transition-colors focus:outline-none"
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10 px-6 py-6 transition-all duration-300">
          <ul className="flex flex-col gap-6 font-semibold text-sm mb-6">
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
              <a href="#temas" className="block w-full">
                Temas
              </a>
            </li>
            <li
              className="cursor-pointer hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <a href="#sobre" className="block w-full">
                Sobre
              </a>
            </li>
            <li
              className="cursor-pointer hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <a href="#depoimentos" className="block w-full">
                Depoimentos
              </a>
            </li>
            <li
              className="cursor-pointer hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <a href="#contatos" className="block w-full">
                Contato
              </a>
            </li>
          </ul>

          <div className="pt-4 border-t border-white/10">
            <a
              onClick={() => setIsOpen(false)}
              className="block text-center bg-yellow-500 text-black px-4 py-3 rounded-full font-semibold text-sm hover:bg-yellow-400 transition-colors"
              href="#empresas"
            >
              Contratar Palestra
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
