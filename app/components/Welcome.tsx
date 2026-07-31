"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ChevronRightIcon, PlayIcon } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Welcome() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay preventivo do navegador bloqueou:", error);
      });
    }
  }, []);

  return (
    <div className="flex-1 min-h-screen relative w-full text-white py-16 md:py-24 overflow-hidden flex items-center">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://marcio-simioni-site-nextjs.vercel.app/videofundo.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
        <div className="flex flex-col gap-6 max-w-xl order-2 md:order-1 text-center md:text-left items-center md:items-start min-w-0 w-full">
          <h1 className="uppercase text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-none text-white drop-shadow-md break-words">
           Desenvolva Líderes.
            <span className="text-yellow-500">Engaje Equipes.</span>
            <span className="text-yellow-500">Transforme Resultados.</span>
          </h1>

          <p className="text-white/90 text-sm md:text-base lg:text-xl leading-relaxed font-light drop-shadow">
          Palestras corporativas personalizadas para empresas que desejam fortalecer a liderança, desenvolver pessoas e gerar impacto real na cultura organizacional.

          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
            <a
              href="https://api.whatsapp.com/send/?phone=5541987624581&text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento.&type=phone_number&app_absent=0"
              className="bg-yellow-500 text-black px-6 py-3.5 rounded-xl font-medium inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Solicitar Proposta <ArrowRightIcon className="h-4 w-4 shrink-0" />
            </a>
            <a
              href="#depoimentos"
              className="bg-gray-700 text-white px-6 py-3.5 rounded-xl font-medium inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Conhecer Temas das Palestras{" "}
              <PlayIcon className="text-yellow-500 h-4 w-4 shrink-0" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
