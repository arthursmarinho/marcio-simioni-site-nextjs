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
    <section className="flex-1 min-h-[92vh] relative w-full text-white py-20 md:py-32 overflow-hidden flex items-center justify-center">
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

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/90 z-10 pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center gap-8">
       

        <h1 className="uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02] text-white max-w-4xl">
          Desenvolva Líderes. <br />
          <span className="text-yellow-500">Transforme Resultados.</span>
        </h1>

        <p className="text-gray-300 text-base md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl">
          Palestras corporativas personalizadas para empresas que desejam fortalecer a liderança, desenvolver pessoas e gerar impacto real na cultura organizacional.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
          <a
            href="https://api.whatsapp.com/send/?phone=5541987624581&text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-9 py-4 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-3 shadow-lg shadow-yellow-500/10 active:scale-95 text-base"
          >
            Solicitar Proposta <ArrowRightIcon className="h-5 w-5 shrink-0" />
          </a>

          <a
            href="#depoimentos"
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-medium px-9 py-4 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 backdrop-blur-md active:scale-95 text-base"
          >
            Conhecer Temas <ChevronRightIcon className="h-5 w-5 text-yellow-500 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}