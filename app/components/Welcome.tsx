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
            Formando líderes com{" "}
            <span className="text-yellow-500">consistência e segurança</span>
          </h1>

          <p className="text-white/90 text-sm md:text-base lg:text-xl leading-relaxed font-light drop-shadow">
            Palestras para novos gestores recém-chegados à liderança e
            profissionais em preparação para cargos gerenciais. Desenvolva as
            competências necessárias para liderar pessoas de verdade.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
            <button className="bg-yellow-500 text-black px-6 py-4 rounded-4xl font-medium flex items-center justify-center gap-2">
              <a className="flex flex-row items-center gap-2" href="https://api.whatsapp.com/send/?phone=5541987624581&text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento.&type=phone_number&app_absent=0">
                Contratar Palestra <ArrowRightIcon className="h-4 w-4" />
              </a>
            </button>
            <button className="bg-gray-700 text-white px-6 py-4 rounded-4xl font-medium flex items-center justify-center gap-2">
              <a
                className="flex flex-row items-center gap-2"
                href="#depoimentos"
              >
                Ver depoimentos <PlayIcon className="text-yellow-500 h-4 w-4" />
              </a>
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center order-1 md:order-2 w-full min-w-0">
          <div className="w-full max-w-xs md:max-w-sm lg:max-w-md relative aspect-square flex items-end justify-center">
            <div className="text-center text-white/50 border border-white/20 border-dashed rounded-lg p-6 md:p-8 w-full h-full flex items-end justify-center backdrop-blur-sm bg-black/20 overflow-hidden">
              <Image
                loading="eager"
                src="/marcio-welcome.png"
                alt="Foto do Márcio Simioni"
                width={350}
                height={350}
                className="w-auto h-full max-h-full object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
