"use client";

import { ArrowRightIcon, ChevronRightIcon, Award } from "lucide-react";
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
    <section className="flex-1 min-h-[92vh] relative w-full text-white py-20 md:py-32 overflow-hidden flex items-center">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-105"
      >
        <source src="https://marcio-simioni-site-nextjs.vercel.app/videofundo.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60 z-10 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col items-start text-left gap-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs md:text-sm font-semibold tracking-wider uppercase backdrop-blur-sm whitespace-nowrap">
          <Award className="w-4 h-4 text-yellow-500 shrink-0" />
          Palestras & Treinamentos Corporativos
        </div>

        <div className="flex flex-col gap-2 w-full">
          <h1 className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none text-white whitespace-nowrap">
            Desenvolva Líderes.
          </h1>
          <h1 className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none text-yellow-500 whitespace-nowrap">
            Transforme Resultados.
          </h1>
        </div>

        <p className="text-gray-300 text-xs sm:text-base md:text-lg lg:text-xl font-light max-w-full whitespace-nowrap overflow-hidden text-ellipsis">
          Palestras corporativas personalizadas para empresas que desejam fortalecer a liderança, desenvolver pessoas e gerar impacto real.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center">
          <a
            href="https://api.whatsapp.com/send/?phone=5541987624581&text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-9 py-4 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-3 shadow-lg shadow-yellow-500/10 active:scale-95 text-base whitespace-nowrap"
          >
            Solicitar Proposta <ArrowRightIcon className="h-5 w-5 shrink-0" />
          </a>

          <a
            href="#depoimentos"
            className="bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-medium px-9 py-4 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 backdrop-blur-md active:scale-95 text-base whitespace-nowrap"
          >
            Conhecer Temas <ChevronRightIcon className="h-5 w-5 text-yellow-500 shrink-0" />
          </a>
        </div>

        <div className="w-full max-w-4xl pt-10 mt-4 border-t border-white/15 grid grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <span className="text-lg sm:text-2xl font-bold text-white whitespace-nowrap">Conteúdo</span>
            <span className="text-xs sm:text-sm text-yellow-500/90 font-medium uppercase tracking-wider mt-0.5 whitespace-nowrap">100% Personalizado</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-lg sm:text-2xl font-bold text-white whitespace-nowrap">Foco Em</span>
            <span className="text-xs sm:text-sm text-yellow-500/90 font-medium uppercase tracking-wider mt-0.5 whitespace-nowrap">Cultura & Liderança</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-lg sm:text-2xl font-bold text-white whitespace-nowrap">Atendimento</span>
            <span className="text-xs sm:text-sm text-yellow-500/90 font-medium uppercase tracking-wider mt-0.5 whitespace-nowrap">Em Todo o Brasil</span>
          </div>
        </div>
      </div>
    </section>
  );
}