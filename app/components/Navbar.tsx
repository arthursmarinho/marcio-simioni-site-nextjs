import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white uppercase">
      <div className="max-w-375 mx-auto px-6 md:px-16 lg:px-24 h-20 flex items-center justify-between">
        <div className="flex flex-row items-center gap-4 text-4xl font-black tracking-wider cursor-pointer">
          <Image
            src="/marcio_simioni_logo.png"
            alt="Logo do Márcio Simioni"
            width={70}
            height={70}
          />
          <span>Márcio Simioni</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 font-semibold text-sm ">
          <li className="cursor-pointer">Início</li>
          <li className="cursor-pointer">Para Empresas</li>
          <li className="cursor-pointer">Para Você</li>
          <li className="cursor-pointer">Sobre</li>
          <li className="cursor-pointer">Contato</li>
        </ul>
      </div>
    </nav>
  );
}
